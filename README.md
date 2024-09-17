# BlockchainVoting
Blok Zincir Teknolojisi ile Güvenli Oylama Sistemi

Bu proje, blok zincir teknolojisini kullanarak güvenli ve şeffaf bir oylama sistemi oluşturmayı amaçlamaktadır. Geleneksel oylama sistemlerinde karşılaşılan manipülasyon, sahtecilik ve güven sorunlarını ortadan kaldırmak için blok zincirin değiştirilemez ve şeffaf yapısından faydalanır.

## Özellikler

*   **Oy Verme:** Kullanıcıların güvenli bir şekilde oy kullanmalarını sağlar.
*   **Oy Doğrulama:** Her oyun blok zincir üzerinde kaydedilerek doğrulanmasını ve sayılmasını garanti eder.
*   **Sonuçların Şeffaflığı:** Oylama sonuçları herkese açık ve doğrulanabilir şekilde blok zincir üzerinde görüntülenir.
*   **Manipülasyon Engelleme:** Blok zincir teknolojisi sayesinde oylama sonuçlarının değiştirilmesi veya manipüle edilmesi neredeyse imkansızdır.

## Başlarken

1.  **Gereksinimler:** Node.js ve npm'in bilgisayarınızda yüklü olduğundan emin olun.
2.  **Kurulum:** Projeyi kopyalayın ve gerekli paketleri yükleyin.

```bash
git clone [https://github.com/hudakocabiyik/BlockchainVoting.git](https://github.com/hudakocabiyik/BlockchainVoting.git)
cd BlockchainVoting
npm install
```
3.Uygulamayı Çalıştırma: Blok zincir düğümünü ve eşler arası sunucuyu başlatın.
```bash
npm start
```
## API Uç Noktaları
*   **/blocks:** Mevcut blok zincirini alır.
*   **/mine:** Verilen verilerle blok zincirine yeni bir blok ekler.
*   **/mine-transactions:** Bekleyen işlemlerle yeni bir blok eklemek için madencilik sürecini tetikler.
*   **/transactions:** İşlem havuzundaki işlemleri görüntüler.
*   **/transact:** Yeni bir işlem oluşturur.
*   **/public-key:** Cüzdanın genel anahtarını alır.
## Önemli Notlar
Bu proje, blok zincir teknolojisinin oylama sistemlerinde nasıl kullanılabileceğini göstermek amacıyla oluşturulmuştur.
Basitleştirilmiş bir uygulama olup, gerçek dünya senaryolarında kullanılmadan önce daha gelişmiş güvenlik ve ölçeklenebilirlik önlemleri alınmalıdır.
## Katkıda Bulunma
Katkılarınız bekleriz! Herhangi bir sorunla karşılaşırsanız veya iyileştirme önerileriniz varsa lütfen proje sayfasında bize bildirin.
