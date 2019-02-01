provider "netlify" {
  token = "${var.netlify_token}"
}

resource "netlify_site" netlify_site {
  name = "${var.app_name}"
  custom_domain = "${var.site_name}"
  repo {
    provider = "github"
    command = "yarn build-lib && yarn ng build --prod"
    dir = "dist"
    repo_path = "ajcrites/rxjs-visualize"
    repo_branch = "master"
  }
}

terraform {
  backend "s3" {}
}
