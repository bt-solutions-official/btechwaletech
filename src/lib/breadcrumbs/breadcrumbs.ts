import type { BreadcrumbItem } from "@app-types/seo";

export function createBreadcrumbs(items: BreadcrumbItem[]): BreadcrumbItem[] {
  return [{ label: "Home", href: "/" }, ...items];
}
