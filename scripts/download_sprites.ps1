$rootUrl = "https://oldschool.runescape.wiki"
$outFolder = "C:/dev/NotNotGroup/web/public"
[System.Collections.ArrayList]$toDownload = "Attack",
"Hitpoints",
"Mining",
"Strength",
"Agility",
"Smithing",
"Defence",
"Herblore",
"Fishing",
"Ranged",
"Thieving",
"Cooking",
"Prayer",
"Crafting",
"Firemaking",
"Magic",
"Fletching",
"Woodcutting",
"Runecraft",
"Slayer",
"Farming",
"Construction",
"Hunter";

Write-Host "Downloading images to $outFolder"

if (!(test-Path -PathType Container "$outFolder/images")) {
    New-Item -Path "$outFolder/images" -ItemType Directory
}

$resp = Invoke-WebRequest $rootUrl/w/Skills

$output = @{ label = "output"; expression = { "$outFolder$($_.src.split("?")[0])" -replace "thumb/.*/(21px-|20px-|17px-)", "" } }
$url = @{ label = "url"; expression = { "$rootUrl$($_.src)" } }

$resp.Images `
| Where-Object { $_.src -match "/images/(thumb/)?([A-Za-z]+)_icon.png" } `
| Select-Object -Property src, alt, $output, $url `
| Where-Object { $toDownload -contains $_.alt } `
| ForEach-Object {
    Write-Output "Downloading $($_.src) to $($_.output)"
    Invoke-WebRequest -OutFile $_.output $_.url | Out-Null
    $toDownload.Remove($_.alt)
}

Write-Output "Downloading overall to folder"
Invoke-WebRequest -OutFile "$outFolder/images/Overall_icon.png" "https://oldschool.runescape.wiki/images/thumb/Stats_icon.png/21px-Stats_icon.png?1b467"
