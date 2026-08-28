export const translations = {
    en: {
        navBar: {
            allProducts: "All Products",
            categories: "Categories",
            deals: "Deals",
            aboutUs: "About Us",
            search: "Search products...",
            account: "Account",
        },
        homeBanner: {
            title1: "Everything you need.",
            title2: "All in one place.",
            subtitle1: "Quality products. Great prices.",
            subtitle2: "Fast delivery. Easy Returns.",
            button: "Shop Now",
        },
        filters: {
            filters: "Filters",
            reset: "Reset",
            categories: "Categories",
            allProducts: "All Products",
            mensClothing: "Men's Clothing",
            womensClothing: "Women's Clothing",
            jewelery: "Jewelery",
            electronics: "Electronics",
            priceRange: "Price Range",
            sortBy: "Sort By",
            featured: "Featured",
            priceLowest: "Price: lowest to highest",
            priceHighest: "Price: highest to lowest",
        },
        productSection: {
            productListings: "Product Listings",
            products: " Products",
            loading: "Loading...",
            errorMsg: "Failed to load products.",
            noProducts: "No products found"
        },
        cart: {
            myCart: "My Cart",
            items: "Items",
            subTotal: "Subtotal",
            tax: "Tax",            
            total: "Total",
            checkout: "Proceed to Checkout",
            addOne: "Add +",
            removeOne: "Remove -",
        },
        footer: {
            miMart: "MiMart",
            caption: "Your one-stop shop for everyday products.",
            shop: "Shop",
            allProducts: "All Products",
            mensClothing: "Men's Clothing",
            womensClothing: "Women's Clothing",
            electronics: "Electronics",
            about: "About",
            aboutUs: "About Us",
            contact: "Contact",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            copyright: "© 2026 MiMart. All rights reserved."
        }
        
    },

    ja: {
        navBar: { 
            allProducts: "すべての商品", 
            categories: "カテゴリー", 
            deals: "お買い得商品", 
            aboutUs: "私たちについて", 
            search: "商品を検索...", 
            account: "アカウント", 
        }, 
        homeBanner: { 
            title1: "必要なものをすべて。", 
            title2: "ひとつの場所で。", 
            subtitle1: "高品質な商品。お手頃な価格。", 
            subtitle2: "迅速な配送。簡単な返品。", 
            button: "今すぐ購入", 
        }, 
        filters: { 
            filters: "絞り込み", 
            reset: "リセット", 
            categories: "カテゴリー", 
            allProducts: "すべての商品", 
            mensClothing: "メンズウェア", 
            womensClothing: "レディースウェア", 
            jewelery: "ジュエリー", 
            electronics: "電化製品", 
            priceRange: "価格帯", 
            sortBy: "並び替え", 
            featured: "おすすめ", 
            priceLowest: "価格の安い順", 
            priceHighest: "価格の高い順", 
        }, 
        productSection: { 
            productListings: "商品一覧", 
            products: "商品", 
            loading: "読み込み中...", 
            errorMsg: "商品の読み込みに失敗しました。", 
            noProducts: "商品が見つかりません", },
        cart: { 
            myCart: "カート", 
            items: "商品", 
            subTotal: "小計", 
            tax: "税金", 
            total: "合計", 
            checkout: "レジに進む", 
            addOne: "追加 +", 
            removeOne: "削除 -", 
        },
        footer: {
            miMart: "MiMart",
            caption: "日常に必要な商品が揃う、あなたの身近なショップ。",
            shop: "ショップ",
            allProducts: "すべての商品",
            mensClothing: "メンズウェア",
            womensClothing: "レディースウェア",
            electronics: "電化製品",
            about: "会社情報",
            aboutUs: "私たちについて",
            contact: "お問い合わせ",
            privacy: "プライバシーポリシー",
            terms: "利用規約",
            copyright: "© 2026 MiMart. All rights reserved."
        }
    }
};

export const productTranslations: Record<number, {
    name: string,
    price: number
}> = {
    1: {
        name: "フェールラーベン バックパック",
        price: 16800,
    },
    2: {
        name: "スリムフィット Tシャツ",
        price: 3200,
    },
    3: {
        name: "コットンジャケット",
        price: 8800,
    },
    4: {
        name: "カジュアル フィットシャツ",
        price: 4500,
    },
    5: {
        name: "ジョン・ハーディ 14Kゴールドピアス",
        price: 98000,
    },
    6: {
        name: "ソリッドゴールド ピアス",
        price: 42000,
    },
    7: {
        name: "ホワイトゴールド プリンセスカット ダイヤモンド",
        price: 15000,
    },
    8: {
        name: "オーシャンハート レディース腕時計",
        price: 6800,
    },
    9: {
        name: "WD 2TB 外付けハードドライブ",
        price: 12800,
    },
    10: {
        name: "SanDisk SSD PLUS 1TB",
        price: 9800,
    },
    11: {
        name: "シリコンパワー 256GB SSD",
        price: 5200,
    },
    12: {
        name: "WD 4TB ゲーミング用ハードドライブ",
        price: 16800,
    },
    13: {
        name: "Acer 21.5インチ フルHDモニター",
        price: 14800,
    },
    14: {
        name: "Samsung 49インチ ゲーミングモニター",
        price: 128000,
    },
    15: {
        name: "BIYLACLESEN レディース フード付きジャケット",
        price: 7200,
    },
    16: {
        name: "Lock and Love レディース レインジャケット",
        price: 6500,
    },
    17: {
        name: "MBJ レディース ボートネック Tシャツ",
        price: 2800,
    },
    18: {
        name: "Opna レディース 半袖Tシャツ",
        price: 2200,
    },
    19: {
        name: "DANVOUY レディース カジュアル コットンTシャツ",
        price: 2500,
    },
    20: {
        name: "レディース ステンレススチール ブレスレット",
        price: 3800,
    },
};