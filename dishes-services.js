'use strict';

angular.module('myApp')
  .service('menuFactory', function() {

    var breakfastitems = [{
        _id: 0,
        category: 'noodles',
        name: '葱油拌面',
        image: 'http://s2.cdn.xiachufang.com/e391c41c890111e6a9a10242ac110002_1000w_663h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '劲道的面条，与葱香的完美结合，让你的味蕾瞬间绽开，沁人心脾',
        detailitem: [{
            ingredients: [{
                ingredientName: '酱油',
                ingredientWeight: '10勺'
              },
              {
                ingredientName: '葱',
                ingredientWeight: '适量'
              }, {
                ingredientName: '生抽',
                ingredientWeight: '2勺'
              }, {
                ingredientName: '老抽',
                ingredientWeight: '1勺'
              }, {
                ingredientName: '糖',
                ingredientWeight: '2勺'
              }
            ]
          },
          {
            steps: [{
              step: '把糖、老抽、生抽放在小碗中备用。这里特别讲下他们的用量 食用油、老抽、生抽、糖比例是2:1:1:0.5的,（如根据油的量来定，200ml的油、老抽就是100ml、生抽100ml、糖50ml',
              stepImg: 'congyoumian-1.jpg'
            }, {
              step: '小葱洗净，切掉葱白部分不要，绿叶部分切成长段',
              stepImg: 'congyoumian-2.jpg'
            }, {
              step: '热锅温油放入葱段',
              stepImg: 'congyoumian-3.jpg'
            }, {
              step: '用小火慢慢的熬成焦黄',
              stepImg: 'congyoumian-4.jpg'
            }, {
              step: '葱油熬好之后，转小火在锅中放入生抽、老抽、白糖稍微搅拌均匀，转中火烧至锅中起泡（具体请看图，泡沫需要冒得比较高），马上端锅离火，用铲子不停的搅拌锅中的葱油，直至葱油完全变成液体，再放在锅上用小火稍微熬30秒即可，这里要不停的搅拌',
              stepImg: 'congyoumian-5.jpg'
            }, {
              step: '搅拌即食啦。',
              stepImg: 'congyoumian-6.jpg'
            }]
          }
        ]
      }, {
        _id: 1,
        category: 'appetizer',
        name: '蒸蛋',
        image: 'http://s2.cdn.xiachufang.com/cf575a7a876211e6a9a10242ac110002_700w_525h.jpg?imageView2/1/w/640/h/520/interlace/1/q/90',
        description: '柔软，丝滑，又不失营养与健康，美丽的清晨就从这里开始吧！',
        detailitem: [{
            ingredients: [{
                ingredientName: '鸡蛋',
                ingredientWeight: '2个'
              },
              {
                ingredientName: '盐',
                ingredientWeight: '1/2茶匙'
              }, {
                ingredientName: '酱油',
                ingredientWeight: '少许'
              }, {
                ingredientName: '油',
                ingredientWeight: '3滴'
              }, {
                ingredientName: '温水',
                ingredientWeight: '约280毫升'
              }, {
                ingredientName: '葱花',
                ingredientWeight: '少许'
              }
            ]
          },
          {
            steps: [{
              step: '将两只鸡蛋打入蒸碗中',
              stepImg: 'zhengdan-1.jpg'
            }, {
              step: '加入1/2茶匙盐、少许酱油、油打发均匀。',
              stepImg: 'zhengdan-2.jpg'
            }, {
              step: '用勺子把浮在表面的泡泡舀走',
              stepImg: 'zhengdan-3.jpg'
            }, {
              step: '开盖撒上少许葱花再盖上盖子利用余温焗一焗。',
              stepImg: 'zhengdan-4.jpg'
            }, {
              step: '取出，用勺子在表面淋上少许酱油',
              stepImg: 'zhengdan-5.jpg'
            }]
          }
        ]
      },
      {
        _id: 2,
        category: 'appetizer',
        name: '油条',
        image: 'http://s2.cdn.xiachufang.com/dbfc8b9a8bab11e6a9a10242ac110002_3648w_5472h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '传统的早餐，再配上一碗热腾腾的豆浆，满满的都是儿时的味道'
      }, {
        _id: 3,
        category: 'appetizer',
        name: '凉拌黄瓜',
        image: 'http://s1.cdn.xiachufang.com/d11bded687cf11e6b87c0242ac110003_800w_600h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',
        description: '看见早餐没胃口？还没有从梦中清醒过来，来试试它吧，开胃提神醒脑的不二选择'
      }, {
        _id: 4,
        category: 'appetizer',
        name: '豆腐脑',
        image: 'http://s2.cdn.xiachufang.com/52cd4e3a89db11e6b87c0242ac110003_600w_400h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '丝滑的豆腐，配上浓浓的汤汁，在寒冷的冬天里，给你一丝温暖'
      }, {
        _id: 5,
        category: 'noodles',
        name: '西红柿鸡蛋面',
        image: 'http://s2.cdn.xiachufang.com/77c72fd687cd11e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '中国名菜，简单，美味，营养'
      }, {
        _id: 6,
        category: 'appetizer',
        name: '煎饼果子',
        image: 'http://s2.cdn.xiachufang.com/6e61ff4a89b511e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '面粉，鸡蛋，火腿的完美搭配，千百年来，是这个味道传承了中华美食的精髓'
      }, {
        _id: 7,
        category: 'noodles',
        name: '湖南米粉',
        image: 'http://s2.cdn.xiachufang.com/42166e7e86f611e6b87c0242ac110003_500w_750h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '冬日里，随手撒上一把辣椒面，那味道，会让你念念不忘'
      }, {
        _id: 8,
        category: 'maindish',
        name: '皮蛋瘦肉粥',
        image: 'http://s2.cdn.xiachufang.com/4ea69a32874211e6b87c0242ac110003_384w_512h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '清新素雅的早餐，怎么会少了粥来温暖你的胃？'
      }, {
        _id: 9,
        category: 'maindish',
        name: '蛋炒饭',
        image: 'http://s2.cdn.xiachufang.com/2c62512688e311e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      }, {
        _id: 10,
        category: 'dish',
        name: '蒜香炒花甲',
        image: 'http://s2.cdn.xiachufang.com/773882a8883711e6a9a10242ac110002_393w_286h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      }, {
        _id: 11,
        category: 'dish',
        name: '红烧肉沫茄子',
        image: 'http://s2.cdn.xiachufang.com/12612b0288ad11e6b87c0242ac110003_1239w_1209h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      }, {
        _id: 12,
        category: 'dish',
        name: '酸辣土豆丝',
        image: 'http://s2.cdn.xiachufang.com/cd3d58e0889111e6b87c0242ac110003_620w_411h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      }, {
        _id: 13,
        category: 'dish',
        name: '红烧豆腐',
        image: 'http://s2.cdn.xiachufang.com/195d38a2880211e6a9a10242ac110002_600w_400h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      }, {
        _id: 14,
        category: 'dish',
        name: '红烧排骨',
        image: 'http://s2.cdn.xiachufang.com/91fabc6886ee11e6b87c0242ac110003_441w_308h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      }, {
        _id: 15,
        category: 'dish',
        name: '秘制红烧鸡爪',
        image: 'http://s2.cdn.xiachufang.com/bb44c5aa873411e6a9a10242ac110002_426w_640h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      },
      {
        _id: 16,
        category: 'noodles',
        name: '油泼面',
        image: 'http://s2.cdn.xiachufang.com/09ce43e088b111e6a9a10242ac110002_640w_618h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      },
      {
        _id: 17,
        category: 'noodles',
        name: '麻辣小面',
        image: 'http://s2.cdn.xiachufang.com/ce8df6f0877911e6b87c0242ac110003_640w_427h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      },
      {
        _id: 18,
        category: 'noodles',
        name: '家常肉末面',
        image: 'http://s1.cdn.xiachufang.com/4b0241e0881611e6b87c0242ac110003_640w_480h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      },
      {
        _id: 19,
        category: 'dessert',
        name: '棉花蛋糕',
        image: 'http://s2.cdn.xiachufang.com/bb22f46c89fe11e6a9a10242ac110002_529w_705h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      }, {
        _id: 20,
        category: 'dessert',
        name: '椰蓉奶棒面包',
        image: 'http://s1.cdn.xiachufang.com/5488e620890f11e6b87c0242ac110003_650w_650h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      }, {
        _id: 21,
        category: 'dessert',
        name: '蔓越莓饼干',
        image: 'http://s1.cdn.xiachufang.com/d0a696849b4911e69ae90242ac110002_1080w_1440h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      }, {
        _id: 22,
        category: 'dessert',
        name: '咖啡豆豆饼干',
        image: 'http://s1.cdn.xiachufang.com/a7d26886888511e6b87c0242ac110003_640w_480h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......'
      }

    ];

    this.getDishes = function() {
      return breakfastitems;
    }
    this.getDish = function(index) {
      return breakfastitems[index];
    }



  });
