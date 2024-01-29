import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: '<h1>app-shop</h1>',
  standalone: true,
  imports: [ProductListComponent],
  template: ` <app-product-list
      title="Отдельный навык"
      subtitle="Изучайте востребованые технологии, чтобы расширить свой стек и добавить заветную галочку в резюме"
      [products]="products.byGroup['skill']"
    />
    <app-product-list
      title="Интенсивы"
      subtitle="Экспресс-программы, где за короткий период вы получите максимум пользы"
      [products]="products.byGroup['intensive']"
    />
    <app-product-list
      title="Бесплатные курсы"
      subtitle="Необходимые навыки и проекты в портфолио за ваши старания"
      [products]="products.byGroup['course']"
    />`,
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.BackButton.hide();
    // this.telegram.MainButton.show();
    // console.log(this.products.byGroup);
  }
}
