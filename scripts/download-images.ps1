$base = "d:\AIAPROJECTS\aiaplanner-web\public\images"
$icons = "$base\icons"
New-Item -ItemType Directory -Force -Path $base, $icons | Out-Null

$files = @{
  "logo.png" = "https://aiaplanner.com/wp-content/uploads/2023/05/Logo-1.png"
  "aia-logo.png" = "https://aiaplanner.com/wp-content/uploads/2023/08/aia-logo.png"
  "favicon.png" = "https://aiaplanner.com/wp-content/uploads/2023/05/Logo-Fav-150x150.png"
  "profile.png" = "https://aiaplanner.com/wp-content/uploads/2023/06/Profile-Pic2.png"
  "hero-desktop.jpg" = "https://aiaplanner.com/wp-content/uploads/2022/09/AIAplanner-desktop.jpg"
  "hero-mobile.jpg" = "https://aiaplanner.com/wp-content/uploads/2022/09/AIAplanner-mobile.jpg"
  "award.jpg" = "https://aiaplanner.com/wp-content/uploads/2020/05/Award2-1001x1500.jpg"
  "health-banner.jpg" = "https://aiaplanner.com/wp-content/uploads/2023/04/health-insurance-banner-1024x574.jpg"
  "tax-rate.jpg" = "https://aiaplanner.com/wp-content/uploads/2021/08/individual-tax-rate-1024x538.jpg"
  "annuity-fix.jpg" = "https://aiaplanner.com/wp-content/uploads/2024/09/AIA-Annuity-Fix.jpg"
  "life-insurance.png" = "https://aiaplanner.com/wp-content/uploads/2023/02/life-insurance-aia-1024x538.png"
  "joey.jpg" = "https://aiaplanner.com/wp-content/uploads/2022/08/joey-aiaplanner.jpg"
  "leew.jpg" = "https://aiaplanner.com/wp-content/uploads/2022/08/leew-aiaplanner.jpg"
  "health-starter-main.jpg" = "https://aiaplanner.com/wp-content/uploads/2026/01/AIA-Health-Starter-children.jpg"
  "health-starter-benefit.jpg" = "https://aiaplanner.com/wp-content/uploads/2026/01/health-starter-benefit.jpg"
  "health-starter-features.jpg" = "https://aiaplanner.com/wp-content/uploads/2026/01/health-starter-features.jpg"
  "health-starter-premium.jpg" = "https://aiaplanner.com/wp-content/uploads/2026/01/health-starter-premium.jpg"
  "health-starter-2500.jpg" = "https://aiaplanner.com/wp-content/uploads/2026/01/health-starter-2500.jpg"
  "health-starter-review.jpg" = "https://aiaplanner.com/wp-content/uploads/2026/01/health-starter-review.jpg"
  "copayment.jpg" = "https://aiaplanner.com/wp-content/uploads/2026/01/copayment-sum.jpg"
  "article-health-list.jpg" = "https://aiaplanner.com/wp-content/uploads/2020/02/health-insurance-aia-1.jpg"
  "article-kids.jpg" = "https://aiaplanner.com/wp-content/uploads/2026/01/health-starter-children.jpg"
  "article-planning.jpg" = "https://aiaplanner.com/wp-content/uploads/2024/10/Planning-Health-Insurance.jpg"
  "article-lumpsum.jpg" = "https://aiaplanner.com/wp-content/uploads/2024/12/LumpSum-HealthInsurance-AIA.jpg"
  "article-tax.jpg" = "https://aiaplanner.com/wp-content/uploads/2023/02/Tax-deduction-insurance.jpg"
  "article-brand.jpg" = "https://aiaplanner.com/wp-content/uploads/2026/01/AIA-FA-4.jpg"
}

$iconFiles = @{
  "hospital.png" = "https://aiaplanner.com/wp-content/uploads/2018/08/hospital.png"
  "prestige.png" = "https://aiaplanner.com/wp-content/uploads/2021/05/rich-people-300x300.png"
  "lungs.png" = "https://aiaplanner.com/wp-content/uploads/2018/10/lungs.png"
  "insurance.png" = "https://aiaplanner.com/wp-content/uploads/2018/08/insurance.png"
  "deposit.png" = "https://aiaplanner.com/wp-content/uploads/2018/08/deposit.png"
  "baby.png" = "https://aiaplanner.com/wp-content/uploads/2018/08/baby.png"
  "wounded.png" = "https://aiaplanner.com/wp-content/uploads/2018/08/wounded.png"
  "group.png" = "https://aiaplanner.com/wp-content/uploads/2020/10/group.png"
  "elderly.png" = "https://aiaplanner.com/wp-content/uploads/2018/08/elderly.png"
  "statistics.png" = "https://aiaplanner.com/wp-content/uploads/2018/10/statistics.png"
}

foreach ($entry in $files.GetEnumerator()) {
  $out = Join-Path $base $entry.Key
  Write-Host "Downloading $($entry.Key)..."
  Invoke-WebRequest -Uri $entry.Value -OutFile $out -UseBasicParsing
}

foreach ($entry in $iconFiles.GetEnumerator()) {
  $out = Join-Path $icons $entry.Key
  Write-Host "Downloading icon $($entry.Key)..."
  Invoke-WebRequest -Uri $entry.Value -OutFile $out -UseBasicParsing
}

Write-Host "Done."
