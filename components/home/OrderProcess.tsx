export default function OrderProcess() {
  return (
    <div>
      <div className="title">
        <div className="title-text">Как оформить заказ?</div>
        Начитались? Айда выбирать!
      </div>
      <div className="wrap-scroll-row">
        <div className="row scroll-row">
          <div className="col-xs-3">
            <div className="process-order-item">
              <div className="h3">Приходи <br />и выбирай</div>
              <div className="icons i-arrow" />
              <p>Мы собрали все самое лучшее и сделали удобный поиск по выделенным серверам. Приходите, сравните, проконсультируйтесь с нами, если не уверены, какой выделенный сервер выбрать.</p>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="process-order-item">
              <div className="h3">Настрой <br />под себя</div>
              <div className="icons i-arrow" />
              <p>Количество памяти, конфигурацию жестких дисков, версию операционной системы, сетевое подключение, срок оплаты и многие другие опции сервера можно изменить, если значения по умолчанию вас не устраивают.</p>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="process-order-item">
              <div className="h3">Оставь e-mail <br />и оплати счёт</div>
              <div className="icons i-arrow" />
              <p>Мы не требуем заполнять огромные формы с контактными данными, — нам нужны лишь оплата и е-мейл, на который будут отправлены данные для доступа к арендованному серверу.</p>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="process-order-item">
              <div className="h3">Пользуйся <br />сервисом</div>
              <div className="icons i-arrow">
                <span className="circle-icon icons i-check" />
              </div>
              <p>В личном кабинете есть все для комфортной работы с выделенным сервером: перезагрузка, IP-KVM, переустановка операционной системы, тех. поддержка в онлайн-чате и, конечно же, оплата счетов десятком удобных способов.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
