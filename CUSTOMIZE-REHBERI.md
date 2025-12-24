# 🎨 cult-ui Sitenizi Özelleştirme Rehberi

## 📋 İçindekiler
1. [Site Bilgilerini Değiştirme](#1-site-bilgilerini-değiştirme)
2. [Renkler ve Tema](#2-renkler-ve-tema)
3. [Logo ve Favicon](#3-logo-ve-favicon)
4. [Ana Sayfa İçeriği](#4-ana-sayfa-içeriği)
5. [Dokümantasyon Ekleme/Düzenleme](#5-dokümantasyon-eklemedüzenleme)
6. [Componentler](#6-componentler)
7. [Navigation (Menü)](#7-navigation-menü)

---

## 1. Site Bilgilerini Değiştirme

### Dosya: `apps/www/config/site.ts`

Bu dosyada sitenin temel bilgileri var:

```typescript
export const siteConfig = {
  name: "cult/ui",           // Site adı
  url: "https://cult-ui.com", // Site URL'i
  ogImage: "https://cult-ui.com/og.png", // Sosyal medya paylaşım görseli
  description: "Accessible and customizable components...", // Site açıklaması
  links: {
    twitter: "https://twitter.com/...",
    github: "https://github.com/...",
  },
}
```

**Nasıl Değiştiririm?**

1. GitHub'da `apps/www/config/site.ts` dosyasına gidin
2. ✏️ (Edit) butonuna tıklayın
3. Değerleri kendinize göre düzenleyin:
   ```typescript
   export const siteConfig = {
     name: "Benim UI Kütüphanem",
     url: "https://cult-ui.pages.dev",
     description: "Kendi component kütüphanem",
     links: {
       twitter: "https://twitter.com/sizin-hesabiniz",
       github: "https://github.com/spacechild-dev/cult-ui",
     },
   }
   ```
4. **Commit changes** → Site otomatik güncellenecek!

---

## 2. Renkler ve Tema

### Dosya: `apps/www/app/globals.css`

Sitenin renk teması buradan değiştirilir.

**Ana Renkler:**

```css
:root {
  --background: 0 0% 100%;        /* Arka plan rengi */
  --foreground: 222.2 84% 4.9%;   /* Yazı rengi */
  --primary: 222.2 47.4% 11.2%;   /* Ana renk (butonlar vs.) */
  --accent: 210 40% 96.1%;        /* Vurgu rengi */
  /* ... daha fazla */
}
```

**Kolay Özelleştirme:**

1. https://ui.shadcn.com/themes adresine gidin
2. İstediğiniz temayı seçin
3. **Copy code** → CSS kodunu kopyalayın
4. `apps/www/app/globals.css` dosyasına yapıştırın

---

## 3. Logo ve Favicon

### Logo
**Dosya:** `apps/www/components/layout/site-header.tsx`

```tsx
<Link href="/" className="flex items-center space-x-2">
  <Icons.logo className="h-6 w-6" />  {/* Logo ikonu */}
  <span className="font-bold">{siteConfig.name}</span>
</Link>
```

**Logo İkonunu Değiştirmek:**
1. `apps/www/components/icons.tsx` dosyasına gidin
2. `logo` ikonunu kendi SVG'nizle değiştirin

### Favicon
**Dosya:** `apps/www/app/favicon.ico`

1. Kendi favicon'unuzu oluşturun (32x32 veya 16x16 px)
2. `apps/www/app/favicon.ico` dosyasını değiştirin

---

## 4. Ana Sayfa İçeriği

### Dosya: `apps/www/app/page.tsx`

Ana sayfa buradan yönetilir.

**Örnek Değişiklik:**

```tsx
// Başlık değiştirme
<h1 className="text-4xl font-bold">
  Hoş Geldiniz {/* Burası değiştirilebilir */}
</h1>

// Açıklama değiştirme
<p className="text-muted-foreground">
  Kendi açıklamanız buraya {/* Burası değiştirilebilir */}
</p>
```

**Nasıl Yapılır?**

1. GitHub'da `apps/www/app/page.tsx` dosyasını açın
2. ✏️ Edit → Metinleri değiştirin
3. Commit → Otomatik deploy!

---

## 5. Dokümantasyon Ekleme/Düzenleme

### Klasör: `apps/www/content/docs/`

Tüm dokümantasyon MDX formatında burada.

**Yeni Sayfa Eklemek:**

1. `apps/www/content/docs/` klasöründe yeni dosya oluşturun
   - Örnek: `baslangic.mdx`

2. Dosya içeriği:
   ```mdx
   ---
   title: Başlangıç
   description: Projeye nasıl başlanır
   ---

   # Başlangıç

   Bu sayfada projeye nasıl başlanacağını öğreneceksiniz.

   ## Adım 1
   İlk adımınız...

   ## Adım 2
   İkinci adımınız...
   ```

3. Commit → Sayfa otomatik eklenir!

**Mevcut Sayfayı Düzenlemek:**

1. İlgili `.mdx` dosyasını açın
2. İçeriği Markdown formatında düzenleyin
3. Commit!

**MDX Formatı:**
- `#` → Başlık (H1)
- `##` → Alt başlık (H2)
- `**bold**` → **Kalın**
- `[link](url)` → Link
- ` ```tsx ` → Kod bloğu

---

## 6. Componentler

### Klasör: `apps/www/registry/`

Tüm UI componentleri burada.

**Component Eklemek/Düzenlemek:**

Her component bir klasörde:
```
registry/
  default/
    ui/
      button/
        button.tsx       ← Component kodu
        button.json      ← Metadata
```

**Yeni Component:**

1. Yeni klasör oluşturun: `registry/default/ui/my-component/`
2. `my-component.tsx` dosyası oluşturun
3. Component kodunuzu yazın
4. `my-component.json` metadata dosyası oluşturun

**Örnek Component:**

```tsx
// my-component.tsx
export function MyComponent() {
  return (
    <div className="p-4 bg-blue-500">
      Merhaba Dünya!
    </div>
  )
}
```

---

## 7. Navigation (Menü)

### Dosya: `apps/www/config/docs.ts`

Dokümantasyon menüsü buradan yönetilir.

```typescript
export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",  // Menü başlığı
      href: "/docs",           // Link
    },
    {
      title: "Components",
      href: "/docs/components",
    },
  ],
  sidebarNav: [
    {
      title: "Başlangıç",      // Sidebar başlığı
      items: [
        {
          title: "Giriş",       // Alt menü
          href: "/docs",
        },
        {
          title: "Kurulum",
          href: "/docs/installation",
        },
      ],
    },
  ],
}
```

**Yeni Menü Öğesi Eklemek:**

1. `apps/www/config/docs.ts` dosyasını açın
2. `items` dizisine yeni öğe ekleyin:
   ```typescript
   {
     title: "Yeni Sayfa",
     href: "/docs/yeni-sayfa",
   }
   ```
3. Commit!

---

## 🎨 Hızlı Özelleştirme Checklist

İlk özelleştirmeler için bu adımları izleyin:

- [ ] **Site adını değiştirin** → `apps/www/config/site.ts`
- [ ] **Site URL'ini güncelleyin** → `apps/www/config/site.ts`
- [ ] **Ana sayfa başlığını değiştirin** → `apps/www/app/page.tsx`
- [ ] **Renk temasını seçin** → `apps/www/app/globals.css`
- [ ] **Sosyal medya linklerini ekleyin** → `apps/www/config/site.ts`
- [ ] **Favicon'u değiştirin** → `apps/www/app/favicon.ico`
- [ ] **İlk dokümantasyon sayfanızı yazın** → `apps/www/content/docs/`

---

## 📂 Önemli Dosya Konumları

| Ne Değiştirmek İsterseniz | Dosya Konumu |
|---------------------------|--------------|
| Site adı, URL, açıklama | `apps/www/config/site.ts` |
| Renkler ve tema | `apps/www/app/globals.css` |
| Ana sayfa içeriği | `apps/www/app/page.tsx` |
| Logo | `apps/www/components/icons.tsx` |
| Menü yapısı | `apps/www/config/docs.ts` |
| Dokümantasyon | `apps/www/content/docs/` |
| Componentler | `apps/www/registry/` |
| Favicon | `apps/www/app/favicon.ico` |

---

## 🚀 Değişiklikleri Yayınlama

Her değişiklikten sonra:

1. **GitHub'da düzenleme yapın** (Web üzerinden veya Desktop)
2. **Commit changes** butonuna basın
3. **Cloudflare Pages otomatik deploy eder** (2-3 dakika)
4. **Sitenizi kontrol edin:** https://cult-ui.pages.dev

---

## 💡 İpuçları

1. **Küçük değişiklikler yapın:** Her seferinde tek bir şeyi değiştirin
2. **Önce test edin:** Yerel ortamda `pnpm dev` ile test edebilirsiniz
3. **Backup alın:** Önemli değişiklikler öncesi dosyaları yedekleyin
4. **Dokümantasyon okuyun:**
   - Next.js: https://nextjs.org/docs
   - Tailwind CSS: https://tailwindcss.com/docs
   - shadcn/ui: https://ui.shadcn.com

---

## 🆘 Yaygın Sorunlar

### Değişiklik Sitede Görünmüyor
1. Cloudflare Pages deployment'i kontrol edin
2. Tarayıcı cache'ini temizleyin (Ctrl+Shift+R)
3. 2-3 dakika bekleyin

### Build Hatası
1. Deployment logs'a bakın
2. Syntax hatası var mı kontrol edin
3. Değişikliği geri alın (revert commit)

### Menü Çalışmıyor
1. `apps/www/config/docs.ts` dosyasını kontrol edin
2. `href` linkleri doğru mu?
3. İlgili `.mdx` dosyası var mı?

---

## 📚 Daha Fazla Öğrenme

- **Markdown Rehberi:** https://www.markdownguide.org
- **Tailwind CSS Playground:** https://play.tailwindcss.com
- **React Basics:** https://react.dev/learn
- **Git & GitHub:** https://docs.github.com/en/get-started

---

**Kolay gelsin! 🎉**

Sorularınız için: https://github.com/spacechild-dev/cult-ui/issues
