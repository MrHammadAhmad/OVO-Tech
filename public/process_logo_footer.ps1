Add-Type -AssemblyName System.Drawing
$srcPath = "C:\Users\Hammad Ahmad\Desktop\OVO\public\logo.png"
$img = [System.Drawing.Image]::FromFile("C:\Users\Hammad Ahmad\.gemini\antigravity-ide\brain\e9670dcf-d863-47ca-9bda-452ca2ffd346\media__1786832442742.png")
$bmp = New-Object System.Drawing.Bitmap($img)

# Create a new bitmap for the processed image
$crop = 3
$newWidth = $bmp.Width - ($crop * 2)
$newHeight = $bmp.Height - ($crop * 2)
$newBmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)

# Get background color of the top-left pixel
$bgColor = $bmp.GetPixel($crop, $crop)

# Copy pixels, make background transparent, and convert dark text to white
for ($x = 0; $x -lt $newWidth; $x++) {
    for ($y = 0; $y -lt $newHeight; $y++) {
        $p = $bmp.GetPixel($x + $crop, $y + $crop)
        
        # Calculate color difference from background color
        $diffR = [Math]::Abs($p.R - $bgColor.R)
        $diffG = [Math]::Abs($p.G - $bgColor.G)
        $diffB = [Math]::Abs($p.B - $bgColor.B)
        
        if ($diffR -lt 15 -and $diffG -lt 15 -and $diffB -lt 15) {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        } else {
            # Convert dark navy text to white, but keep the bright cyan eyes/elements if they are colored!
            # The cyan color is #02ACEA (R: 2, G: 172, B: 234). So R is very low, G and B are very high.
            # Navy is R: 16, G: 32, B: 57.
            if ($p.B -gt 150 -and $p.G -gt 100 -and $p.R -lt 50) {
                # Keep the cyan eyes/antenna light blue!
                $newBmp.SetPixel($x, $y, $p)
            } else {
                # Convert the dark navy text and robot body to white
                $newBmp.SetPixel($x, $y, [System.Drawing.Color]::White)
            }
        }
    }
}

# Dispose source images
$img.Dispose()
$bmp.Dispose()

# Save the white version for the dark footer
$destPath = "c:\Users\Hammad Ahmad\Desktop\OVO\public\logo-footer.png"
$newBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$newBmp.Dispose()

Write-Output "Successfully processed logo-footer.png"
