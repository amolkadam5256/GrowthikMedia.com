# Repair-PSReadLine.ps1
# Needs to run in a new Administrator PowerShell window for best results.

Write-Host "Starting PSReadLine repair process..." -ForegroundColor Cyan

# 1. Clear PSReadLine history
$historyPath = (Get-PSReadLineOption).HistorySavePath
if (Test-Path $historyPath) {
    Remove-Item -Path $historyPath -Force -ErrorAction SilentlyContinue
    Write-Host "Cleared corrupted PSReadLine history." -ForegroundColor Green
} else {
    Write-Host "No PSReadLine history file found." -ForegroundColor Yellow
}

# 2. Install the latest stable version of PSReadLine
Write-Host "Installing the latest stable PSReadLine module..." -ForegroundColor Cyan
# Set NuGet/PowerShellGet to work correctly if on older versions
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force -ErrorAction SilentlyContinue | Out-Null
Install-Module -Name PSReadLine -Force -SkipPublisherCheck -AllowClobber -Scope CurrentUser
Write-Host "Update installed successfully." -ForegroundColor Green

# 3. Apply safer PSReadLine config settings
Write-Host "Applying fail-safe PSReadLine configuration..." -ForegroundColor Cyan
Set-PSReadLineOption -HistorySaveStyle SaveIncrementally
Set-PSReadLineOption -MaximumHistoryCount 3000
Set-PSReadLineOption -HistoryNoDuplicates

Write-Host "Repair complete. Please completely close this terminal and VS Code, then open a new one." -ForegroundColor Green
