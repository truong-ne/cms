export function converCurrency(price: any) {
  return Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(Number(price));
}
