export const NAV_LINKS = [
  { label: "เราคือ", href: "/" },
  { label: "บริการ", href: "/product" },
  { label: "ประกันสุขภาพ AIA", href: "/health-insurance-aia" },
  { label: "รางวัล", href: "/portfolio" },
  { label: "สมัครตัวแทนขายประกัน AIA", href: "/agent" },
  { label: "ติดต่อเรา", href: "/contact" },
] as const;

export const STATS = [
  { value: "1298", label: "จำนวนผู้ถือกรมธรรม์" },
  { value: "716", label: "จำนวนครอบครัวที่ดูแล" },
  { value: "1789", label: "จำนวนเงินเอาประกันภัยรวมสูงถึง (ล้านบาท)" },
] as const;

export type ProductItem = {
  title: string;
  href: string;
  icon: string;
};

export type ProductGroup = {
  id: string;
  title: string;
  subtitle: string;
  products: ProductItem[];
};

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    id: "health",
    title: "สุขภาพ",
    subtitle: "คุ้มครองค่ารักษา โรคร้ายแรง และอุบัติเหตุ",
    products: [
      {
        title: "ประกันสุขภาพ",
        href: "/health-insurance-aia",
        icon: "https://aiaplanner.com/wp-content/uploads/2018/08/hospital.png",
      },
      {
        title: "ประกันสุขภาพเด็ก",
        href: "/kids-insurance",
        icon: "https://aiaplanner.com/wp-content/uploads/2018/08/baby.png",
      },
      {
        title: "ประกันโรคร้ายแรง",
        href: "/ci",
        icon: "https://aiaplanner.com/wp-content/uploads/2018/10/lungs.png",
      },
      {
        title: "ประกันอุบัติเหตุ",
        href: "/pa",
        icon: "https://aiaplanner.com/wp-content/uploads/2018/08/wounded.png",
      },
    ],
  },
  {
    id: "life",
    title: "ชีวิต",
    subtitle: "สร้างความมั่นคงและวงเงินคุ้มครองครอบครัว",
    products: [
      {
        title: "ประกันชีวิต",
        href: "/life-insurance",
        icon: "https://aiaplanner.com/wp-content/uploads/2018/08/insurance.png",
      },
      {
        title: "AIA PRESTIGE",
        href: "/aia-prestige",
        icon: "https://aiaplanner.com/wp-content/uploads/2021/05/rich-people-300x300.png",
      },
      {
        title: "ประกันกลุ่ม",
        href: "/group",
        icon: "https://aiaplanner.com/wp-content/uploads/2020/10/group.png",
      },
    ],
  },
  {
    id: "savings",
    title: "ออม-เกษียณ",
    subtitle: "วางแผนออม เกษียณ และลงทุนระยะยาว",
    products: [
      {
        title: "ประกันออมทรัพย์",
        href: "/saving",
        icon: "https://aiaplanner.com/wp-content/uploads/2018/08/deposit.png",
      },
      {
        title: "ประกันบำนาญ",
        href: "/annuity",
        icon: "https://aiaplanner.com/wp-content/uploads/2018/08/elderly.png",
      },
      {
        title: "UNIT LINKED",
        href: "/unit-linked",
        icon: "https://aiaplanner.com/wp-content/uploads/2018/10/statistics.png",
      },
    ],
  },
];

export const PRODUCTS: ProductItem[] = PRODUCT_GROUPS.flatMap(
  (group) => group.products,
);

export const MAIN_CONTACT = {
  name: "คุณ ศศิวิมล อนันทชาติวงศ์",
  license: "—",
  investmentId: "—",
  phone: "—",
  line: "เพิ่มเพื่อน LINE",
} as const;

/** @deprecated ใช้ MAIN_CONTACT แทน */
export const CONTACTS = [MAIN_CONTACT] as const;

export const FOOTER_PRODUCTS = [
  { label: "ประกันสุขภาพเด็ก AIA HEALTH STARTER", href: "/health-starter-children" },
  { label: "ประกันสุขภาพเหมาจ่าย AIA HEALTH HAPPY", href: "/aia-health-happy" },
  { label: "AIA ANNUITY SURE", href: "/annuity-sure" },
  { label: "AIA CI SUPERCARE", href: "/ci-supercare" },
] as const;

export const LINE_URL = "https://lin.ee/y5QiKTq";
