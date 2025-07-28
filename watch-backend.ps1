# PowerShell Script to Watch Java File Changes and Trigger mvn compile in Docker
Write-Host "🚀 Watching for Java file changes in backend/..."

$prevTimestamps = @{}

while ($true) {
    $changed = $false
    Get-ChildItem -Path "./backend/src" -Recurse -Filter *.java | ForEach-Object {
        $path = $_.FullName
        $lastWrite = $_.LastWriteTimeUtc

        if (-not $prevTimestamps.ContainsKey($path) -or $prevTimestamps[$path] -ne $lastWrite) {
            $prevTimestamps[$path] = $lastWrite
            $changed = $true
        }
    }

    if ($changed) {
        Write-Host "`n🛠 Change detected. Compiling..."
        docker compose exec backend mvn compile
        Write-Host "✅ Done."
    }

    Start-Sleep -Milliseconds 1500
}
