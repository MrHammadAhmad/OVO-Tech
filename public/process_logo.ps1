Add-Type -AssemblyName System.Drawing
$srcPath = "c:\Users\Hammad Ahmad\Desktop\OVO\public\logo.png"
$img = [System.Drawing.Image]::FromFile($srcPath)
$bmp = New-Object System.Drawing.Bitmap($img)

# Create a new bitmap for the processed image (cropping 2 pixels on all sides)
$crop = 3
$newWidth = $bmp.Width - ($crop * 2)
$newHeight = $bmp.Height - ($crop * 2)
$newBmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)

# Get the background color of the top-left pixel (after crop offset)
$bgColor = $bmp.GetPixel($crop, $crop)

# Copy pixels and make background transparent
for ($x = 0; $x -lt $newWidth; $x++) {
    for ($y = 0; $y -lt $newHeight; $y++) {
        $p = $bmp.GetPixel($x + $crop, $y + $crop)
        
        # Calculate color difference from background color
        $diffR = [Math]::Abs($p.R - $bgColor.R)
        $diffG = [Math]::Abs($p.G - $bgColor.G)
        $diffB = [Math]::Abs($p.B - $bgColor.B)
        
        # If pixel is very close to the background color, make it transparent
        if ($diffR -lt 15 -and $diffG -lt 15 -and $diffB -lt 15) {
            $newBmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        } else {
            # If the pixel is dark text but we want it to be white on dark footers,
            # we can keep this version for the light navbar, and generate a white version for the footer!
            $newBmp.SetPixel($x, $y, $p)
        }
    }
}

# Dispose source images so we can overwrite
$img.Dispose()
$bmp.Dispose()

# Save the transparent version for the light navbar
$newBmp.Save($srcPath, [System.Drawing.Imaging.ImageFormat]::Png)
$newBmp.Dispose()

Write-Output "Successfully processed logo.png"
