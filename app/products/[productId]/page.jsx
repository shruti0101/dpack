import { categories } from "@/Data";
import ProductPageClient from "./ProductPageClient";

// ✅ This must be a server component — no "use client" here
export async function generateMetadata({ params }) {
  const { productId } = params;
  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.name,
    openGraph: {
      title: product.metaTitle || product.name,
      description: product.metaDescription || product.name,
      images: [product.image],
    },
  };
}

export default function Page({ params }) {
  return <ProductPageClient params={params} />;
}
