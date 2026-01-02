# run it as: .\deploy-gh-pages.ps1 "Deploy Doks site"

param (
    [Parameter(Mandatory = $true)]
    [string]$CommitMessage
)

# Stop on first error
$ErrorActionPreference = "Stop"

Write-Host "▶ Building Hugo site..."
hugo -D --minify --baseURL "https://historical-time.github.io/caa-chrono-sig/"

Write-Host "▶ Entering public/ (gh-pages worktree)..."
Push-Location .\public\

Write-Host "▶ Git status:"
git status

Write-Host "▶ Committing and pushing to gh-pages..."
git add .
git commit -m $CommitMessage
git push -u origin gh-pages

Pop-Location
Write-Host "✅ Deployment to gh-pages completed successfully."
