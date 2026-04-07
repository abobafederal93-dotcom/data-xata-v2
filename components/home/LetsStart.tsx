export default function LetsStart() {
  return (
    <div>
      <div className="title">
        <div className="title-text">Как оформить заказ?</div>
        Начитались? Айда выбирать!
      </div>
      <div className="row flex-block flex-wrap vertical-center">
        <div className="col-sm-6">
          <div className="h2">Как оформить заказ?</div>
          <p>Чтобы подобрать сервер нужной вам конфигурации - воспользуйтесь нашим поиском. Мы подготовили обучающее видео для вас. Если вы не знаете какой сервер вам подойдет - спросите нас в чате.</p>
          <div className="buttons-group">
            <a className="btn btn-warning" href="/search">Искать сейчас</a>
            <button type="button" className="btn btn-primary">Спросить в чате</button>
          </div>
        </div>
        <div className="col-sm-6 order-image">
          <img src="/img/order-screen.png" alt="" className="img-responsive pull-right-md" />
        </div>
      </div>
    </div>
  );
}
