/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
    {
      demo_link: 'https://lancech.github.io/bootstrap-demo/',
      img_link: '',
      code_link: 'https://github.com/LanceCH/bootstrap-demo/tree/master',
      title: '响应式页面',
      core_tech: 'HTML BootStrap',
      description: '使用BootStrap仿照知乎做了一个响应式布局的页面。'
    },{
      demo_link: 'https://lancech.github.io/css3/slideshow/',
      img_link: '',
      code_link: 'https://lancech.github.io/css3/slideshow/tree/master',
      title: '3d轮播',
      core_tech: 'CSS3',
      description: '使用css3实现一个3d效果的轮播图。'
    },{
      demo_link: 'https://lancech.github.io/css3/animation/',
      img_link: '',
      code_link: 'https://lancech.github.io/css3/animation/tree/master',
      title: '一个摆球',
      core_tech: 'CSS3',
      description: '使用css3中的animation属性实现一个摆球'
    },{
      demo_link: 'https://lancech.github.io/css3/triangle/',
      img_link: '',
      code_link: 'https://lancech.github.io/css3/triangle/tree/master',
      title: 'css三角形',
      core_tech: 'CSS3',
      description: '使用css3的border的透明属性实现一个三角形'
    },{
      demo_link: 'https://lancech.github.io/exercise/canvas/',
      img_link: '',
      code_link: 'https://lancech.github.io/exercise/canvas/tree/master',
      title: 'canvas',
      core_tech: 'HTML5',
      description: '使用canvas绘制一个时钟'
    },{
      demo_link: 'https://lancech.github.io/exercise/eChart/',
      img_link: '',
      code_link: 'https://lancech.github.io/exercise/eChart/tree/master',
      title: 'eChart',
      core_tech: 'jq-plugin',
      description: '使用eChart实现表格'
    },{
      demo_link: 'https://lancech.github.io/exercise/storage/',
      img_link: '',
      code_link: 'https://lancech.github.io/exercise/storage/tree/master',
      title: 'storage',
      core_tech: 'HTML5',
      description: '使用storage的例子'
    },{
      demo_link: 'https://lancech.github.io/exercise/sassDemo/',
      img_link: '',
      code_link: 'https://lancech.github.io/exercise/sassDemo/tree/master',
      title: 'sassDemo',
      core_tech: 'Sass',
      description: '使用Sass的例子'
    },{
      demo_link: 'https://lancech.github.io/exercise/vue-demo/',
      img_link: '',
      code_link: 'https://lancech.github.io/exercise/vue-demo/tree/master',
      title: 'vue购物车',
      core_tech: 'vue',
      description: '使用Vue.js仿照饿了么实现的购物车例子'
    }

  ];

  contentInit(demoContent) //内容初始化
  //waitImgsLoad() //等待图片加载，并执行布局初始化
  initGrid();//布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
