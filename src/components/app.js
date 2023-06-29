

export function Hello() {
  var Data = [
    {
      imgSrc:
        "http://gonewiththetwins.com/new/wp-content/uploads/2014/01/avatar.jpg",
      title: "AVATAR",
      text: "NETFLIX MOVIE",
    },
    {
      imgSrc:
        "https://bollytrendz.com/wp-content/uploads/2021/07/IMG_20210702_150749-1.jpg",
      title: "TOMORROW WAR",
      text: "NETFLIX MOVIE",
    },
    {
      imgSrc:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg",
      title: "AVENGERS",
      text: "AMAZON PRIME",
    },

  ]
  return (
    Data.map(data =>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div>
              <div className="card" style={{ width: "18rem" }}>
                <img src={data.imgSrc} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.text}</p>
                  <a href="#" className="btn btn-primary">
                    Buy Tickets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )


  );
}