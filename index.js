// Об'єкт bankAccount
const bankAccount = {
  ownerName: "Іван Петренко",
  accountNumber: "UA1234567890",
  balance: 1000, // Початковий баланс

  deposit: function() {
    const amountStr = prompt("Введіть суму для поповнення:");
    const amount = parseFloat(amountStr);

    if (!isNaN(amount) && amount > 0) {
      const confirmed = confirm(`Ви впевнені, що хочете поповнити рахунок на ${amount} грн?`);
      if (confirmed) {
        this.balance += amount;
        console.log(`Рахунок поповнено на ${amount} грн.`);
        console.log(`Поточний баланс: ${this.balance} грн.`);
      } else {
        console.log("Поповнення скасовано.");
      }
    } else {
      console.log("Введено некоректну суму.");
    }
  },

  withdraw: function() {
    const amountStr = prompt("Введіть суму для зняття:");
    const amount = parseFloat(amountStr);

    if (!isNaN(amount) && amount > 0) {
      if (amount <= this.balance) {
        const confirmed = confirm(`Ви впевнені, що хочете зняти ${amount} грн?`);
        if (confirmed) {
          this.balance -= amount;
          console.log(`Знято ${amount} грн.`);
          console.log(`Поточний баланс: ${this.balance} грн.`);
        } else {
          console.log("Зняття скасовано.");
        }
      } else {
        console.log("Недостатньо коштів на рахунку.");
        console.log(`Поточний баланс: ${this.balance} грн.`);
      }
    } else {
      console.log("Введено некоректну суму.");
    }
  }
};

// Приклад використання bankAccount (можна розкоментувати для тестування в браузері)
// bankAccount.deposit();
// bankAccount.withdraw();


// Об'єкт weather
const weather = {
  temperature: 0, // Початкове значення
  humidity: 60,
  windSpeed: 15,

  isBelowFreezing: function() {
    const tempStr = prompt("Введіть поточну температуру в градусах Цельсія:");
    this.temperature = parseFloat(tempStr);

    if (!isNaN(this.temperature)) {
      const result = this.temperature < 0;
      if (result) {
        console.log("Температура нижче 0 градусів Цельсія");
      } else {
        console.log("Температура вище або дорівнює 0 градусів Цельсія");
      }
      return result;
    } else {
      console.log("Введено некоректне значення температури.");
      return null; // Або інше значення для позначення помилки
    }
  }
};

// Приклад використання weather (можна розкоментувати для тестування в браузері)
// weather.isBelowFreezing();


// Об'єкт user
const user = {
  name: "Користувач",
  email: "test@example.com",
  password: "securepassword123",

  login: function(email, password) {
    if (this.email === email && this.password === password) {
      console.log(`Ласкаво просимо, ${this.name}! Вхід успішний.`);
      return true;
    } else {
      console.log("Невірний email або пароль.");
      return false;
    }
  }
};

// Приклад використання user
// user.login("test@example.com", "securepassword123"); // Успішний вхід
// user.login("wrong@example.com", "password"); // Невдалий вхід


// Об'єкт movie
const movie = {
  title: "Початок",
  director: "Крістофер Нолан",
  year: 2010,
  rating: 8.8, // Рейтинг за IMDb

  isRatingAboveEight: function() {
    return this.rating > 8;
  }
};

// Виведення властивостей movie в консоль
console.log("Інформація про фільм:");
console.log(`Назва: ${movie.title}`);
console.log(`Режисер: ${movie.director}`);
console.log(`Рік випуску: ${movie.year}`);
console.log(`Рейтинг: ${movie.rating}`);

// Виведення результату методу isRatingAboveEight
if (movie.isRatingAboveEight()) {
  console.log("Рейтинг фільму вище 8.");
} else {
  console.log("Рейтинг фільму 8 або нижче.");
}
