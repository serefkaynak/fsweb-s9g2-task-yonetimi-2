# Görev takip uygulaması - 2

Bugün, dün başladığımız görev takip uygulaması üzerinde çalışmaya devam edeceğiz.
Lütfen bu repoyu forklayarak çalışın. (Daha sonra eğer isterseniz buradan öğrendiklerinizle dünkü projenizi geliştirmeye devam edebilirsiniz.)

### Bu projede tamamlanması gereken 3 ana görev var:

- Her bir taskta yer alan `deadline` değerini, `date-fns` kütüphanesi kullanarak [ekran görüntüsündeki gibi](./s9g2-ornek.png) kullanıcı dostu bir yapıya kavuşturmak
- Eğer deadline bitimine 3 ve daha az gün varsa deadline bilgisi verilen kısmın arkaplan rengini `#ffd9d4` yapmak
- Projede yer alan componentların stillerini tailwindcss kullanarak yeniden yazmak

## Pratik yapılacak yetenekler

- React kütüphanelerini tanımak, nasıl kullanılacağını öğrenme ve var olan koda adapte etmek
- Date objesini tanımak ve `date-fns` kütüphanesi ile çalışmak, CSS içerisindeki yardımcı class mantığını `tailwindcss` ile deneyimlemek

## Giriş

Dün çalıştığımız projedeki görevlere `son teslim tarihi (deadline)` ekleyeceğiz. Bunun için `data.js` içerisindeki başlangıç görevlerine deadline değerleri ekledik. Yeni eklenecek görevlerde ise bu değeri seçebilmek için formumuza bir `date input`u ekledik. (Date inputları, type değerleri date olan özel input değerleridir ve tarih seçmek için bir takvim modu içerirler.)

- `TaskHookForm.js`içerisinde yer alan date inputunu ve submit edildiğinde çıktı olarak nasıl bir değer verdiğini inceleyin.
- [MDN sayfasında](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#examples) `Date` objesinin yapısına ve örneklerine göz atın.
- `date-fns` kütüphanesinin dokümantasyon sayfasını ve özellikle `formatDistanceToNow` ve `differenceInDays` fonksiyonlarını inceleyin.
- [date-fns](https://date-fns.org/docs/Getting-Started#installation) kütüphanesini projeye ekleyin.
- Task componentı içerisinde kullanılan görev objeleri içerisindeki deadline değerlerini formatDistanceToNow ve differenceInDays fonksiyonları ile kullanmaya çalışın.
- Deadline değerini istediğiniz formata getirdikten app.css içerisinde bu kısım için hazırlanmış classları bulun ve kullanın.

- [tailwindcss](https://tailwindcss.com/) frameworkünün anasayfasını inceleyin ve projenize nasıl ekleyebileceğinizi bulun.
- [tailwindcss dokümantasyonunda](https://tailwindcss.com/docs/utility-first) yer alan örnek kullanımları inceleyin.
- tailwindcss'i projeye ekleyin, kullanacağınız yerlerde gerekli eklemeleri ve düzenlemeleri yapın.

## Talimatlar

### Görev 1: Proje Kurulumu

- Forklayın, klonlayın, ve `npm install` komutunu çalıştırın.
- Projeyi çalıştırmak için `npm start` komutunu kullanın.
- `http://localhost:3000` adresinden uygulamana ulaşabilirsin.

### Görev 2: Proje Gereksinimleri

- Deadline değerleri, örnek görseldeki gibi kullanıcı dostu formata getirilmeli.
- Eğer deadline bitimine 3 ve daha az gün varsa deadline bilgisi verilen kısmın arkaplan rengi `#ffd9d4` olmalı.
- `Task` componentı tailwindcss kullanılarak tekrar yazılmalı.

### İnceleyin

- date-fns dokümantasyonu içerisinden ilginizi çeken fonksiyonların bir listesini oluşturun.
- Tailwindcss gibi yardımcı class yaklaşımına sahip bir framework kullanmanın zorlukları neler olabilir, fikir yürütün.
