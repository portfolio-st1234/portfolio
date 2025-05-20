  // スライダーsplideの設定
  const target = ".splide";
  const options = {
    pauseOnFocus: false,
    arrows: true, //アローの表示設定
    autoplay: true,
    interval: 5000,
    speed: 1000,
    type:'loop',
    // フェードとループの併用は以下の設定
    // type:'fade',
    // rewind: true,  


    //メディアクエリーの設定 min-width、max-widthのどちらを使うかを指定
    mediaQuery: "min",

    //通常時（ビューポート600px未満）
    perPage: 1,
    gap: 24,

    //ビューポート600px以上
    breakpoints: {
      600: {
        perPage: 2,
        gap: 16,
      },
      //ビューポート768px以上
      768: {
        perPage: 3,
        gap: 16,
      },
    },
  };
  const mySplide = new Splide(target, options);
  mySplide.mount();
  //   new Splide(".splide").mount();