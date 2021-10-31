$rootUrl = "https://oldschool.runescape.wiki"
$outFolder = "C:/dev/NotNotGroup/web/public"

Write-Host "Downloading images to $outFolder"

if (!(test-Path -PathType Container "$outFolder/images"))
{
    New-Item -Path "$outFolder/images" -ItemType Directory
}

$resp = Invoke-WebRequest $rootUrl/w/Skill_training_guides

$output = @{ label="output"; expression={ "$outFolder$($_.src.split("?")[0])" } }
$url = @{ label="url"; expression={ "$rootUrl$($_.src)" }}

$resp.Images `
    | Where-Object { $_.src -match "/images/([A-Za-z]+)_icon.png" } `
    | Select-Object -Property src,$output,$url `
    | ForEach-Object {
        Invoke-WebRequest -OutFile $_.output $_.url
    }
