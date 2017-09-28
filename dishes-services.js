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
              step: '把糖、老抽、生抽放在小碗中备用。这里特别讲下他们的用量 食用油、老抽、生抽、糖比例是2:1:1:0.5的,（如根据油的量来定，200ml的油、老抽就是100ml、生抽100ml、糖50ml'
            }, {
              step: '小葱洗净，切掉葱白部分不要，绿叶部分切成长段'
            }, {
              step: '热锅温油放入葱段'
            }, {
              step: '用小火慢慢的熬成焦黄'
            }, {
              step: '葱油熬好之后，转小火在锅中放入生抽、老抽、白糖稍微搅拌均匀，转中火烧至锅中起泡（具体请看图，泡沫需要冒得比较高），马上端锅离火，用铲子不停的搅拌锅中的葱油，直至葱油完全变成液体，再放在锅上用小火稍微熬30秒即可，这里要不停的搅拌'
            }, {
              step: '搅拌即食啦。'
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
              step: '将两只鸡蛋打入蒸碗中'
            }, {
              step: '加入1/2茶匙盐、少许酱油、油打发均匀。'
            }, {
              step: '用勺子把浮在表面的泡泡舀走'
            }, {
              step: '开盖撒上少许葱花再盖上盖子利用余温焗一焗。'
            }, {
              step: '取出，用勺子在表面淋上少许酱油'
            }]
          }
        ]
      },
      {
        _id: 2,
        category: 'appetizer',
        name: '油条',
        image: 'http://s2.cdn.xiachufang.com/dbfc8b9a8bab11e6a9a10242ac110002_3648w_5472h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '传统的早餐，再配上一碗热腾腾的豆浆，满满的都是儿时的味道',
        detailitem: [{
          ingredients: [{
              ingredientName: '普通面粉',
              ingredientWeight: '300g'
            },
            {
              ingredientName: '清水',
              ingredientWeight: '170g~180g'
            },
            {
              ingredientName: '酵母粉',
              ingredientWeight: '5g'
            }, {
              ingredientName: '小苏打',
              ingredientWeight: '2g'
            }, {
              ingredientName: '食用油',
              ingredientWeight: '15g'
            }, {
              ingredientName: '盐',
              ingredientWeight: '3g'
            }
          ]
        }, {
          steps: [{
              step: '将面粉放入盆中，放入酵母粉、小苏打和盐拌匀'
            }, {
              step: '倒入清水搅成小面絮，然后揉成光滑的面团'
            }, {
              step: '再放入15克食用油, 将油揉进面团中'
            },
            {
              step: '将揉好的面团放入盆中盖上饧(静置）10分钟后，再揉一揉就可以盖上发酵了'
            },
            {
              step: '然后用擀面杖擀成0.5厘米厚的大片(不要太薄，不然炸出来里面不柔软），然后用刀切成10厘米长3厘米宽的长条'
            },
            {
              step: '将揉好的面团放入盆中盖上饧(静置）10分钟后，再揉一揉就可以盖上发酵了'
            },
            {
              step: '拎着面片的两头抻长一点，再两手反方向拧一下'
            }, {
              step: '直接放入烧到7、8成热的油锅中'
            }, {
              step: '油条生坯放进油锅中立刻就会浮上来，要用筷子拨弄着翻转，中大火炸制'
            }
          ]
        }]
      }, {
        _id: 3,
        category: 'appetizer',
        name: '凉拌黄瓜',
        image: 'http://s1.cdn.xiachufang.com/d11bded687cf11e6b87c0242ac110003_800w_600h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',
        description: '看见早餐没胃口？还没有从梦中清醒过来，来试试它吧，开胃提神醒脑的不二选择',
        detailitem: [{
          ingredients: [{
              ingredientName: '黄瓜',
              ingredientWeight: '2根'
            },
            {
              ingredientName: '炸花生米，蒜',
              ingredientWeight: '若干'
            },
            {
              ingredientName: '老干妈',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '酱油',
              ingredientWeight: '2勺'
            }, {
              ingredientName: '陈醋',
              ingredientWeight: '6勺'
            }, {
              ingredientName: '糖，香油',
              ingredientWeight: '适量'
            }
          ]
        }, {
          steps: [{
            step: '拍好黄瓜，切成小段'
          }, {
            step: '炸花生米去皮，拍碎'
          }, {
            step: '蒜切碎，少量油爆香'
          }, {
            step: '加入爆香的蒜（油也一起盛出来），一大勺老干妈'
          }, {
            step: '2大勺酱油'
          }, {
            step: '6大勺陈醋'
          }, {
            step: '加入炸花生碎，适量糖'
          }, {
            step: '加入拍好的黄瓜，盖上盖子，使劲儿摇~'
          }, {
            step: '加入适量的香油，拌一下'
          }]
        }]
      }, {
        _id: 4,
        category: 'appetizer',
        name: '豆腐脑',
        image: 'http://s2.cdn.xiachufang.com/52cd4e3a89db11e6b87c0242ac110003_600w_400h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '丝滑的豆腐，配上浓浓的汤汁，在寒冷的冬天里，给你一丝温暖',
        detailitem: [{
          ingredients: [{
            ingredientName: '八角（大料）',
            ingredientWeight: '1颗'
          }, {
            ingredientName: '干香菇，干木耳',
            ingredientWeight: '各1个'
          }, {
            ingredientName: '干花菜',
            ingredientWeight: '3，4根'
          }, {
            ingredientName: '鸡蛋',
            ingredientWeight: '1个'
          }, {
            ingredientName: '水淀粉',
            ingredientWeight: '15g'
          }, {
            ingredientName: '老抽，生抽，糖，盐，芝麻酱',
            ingredientWeight: '适量'
          }, {
            ingredientName: '蒜',
            ingredientWeight: '1个'
          }, {
            ingredientName: '豆腐',
            ingredientWeight: '1盒'
          }, {
            ingredientName: '五香粉',
            ingredientWeight: '2勺'
          }]
        }, {
          steps: [{
            step: '将干香菇，干花菜，干木耳，用开水泡发。然后改刀，切碎丁。与八角，五香粉一同放入水中。开大火。烧开，煮出香气。'
          }, {
            step: '在烧开的锅里，倒入适量的生抽和老抽。提鲜，增色。'
          }, {
            step: '烧开的锅里，放入适量的糖和盐。并倒入打好的鸡蛋液。开大火，烧开'
          }, {
            step: '锅里的汤汁烧开后，分批次倒入水淀粉。如果觉得卤子浓稠了，可以停止继续倒入水淀粉。不够浓稠，可以继续添加水淀粉。'
          }, {
            step: '大火烧开。准备倒入碗中。'
          }, {
            step: '碗里放入提前用勺子挖取的内脂豆腐。然后倒入做好的卤子。淋上芝麻酱和蒜泥水'
          }]
        }]
      }, {
        _id: 5,
        category: 'noodles',
        name: '西红柿鸡蛋面',
        image: 'http://s2.cdn.xiachufang.com/77c72fd687cd11e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '中国名菜，简单，美味，营养',
        detailitem: [{
          ingredients: [{
            ingredientName: '番茄',
            ingredientWeight: '1个'
          }, {
            ingredientName: '鸡蛋',
            ingredientWeight: '2个'
          }, {
            ingredientName: '青菜，小葱',
            ingredientWeight: '适量'
          }, {
            ingredientName: '鸡精',
            ingredientWeight: '少量'
          }, {
            ingredientName: '食用油',
            ingredientWeight: '若干'
          }, {
            ingredientName: '盐',
            ingredientWeight: '少量'
          }]
        }, {
          steps: [{
            step: '青菜择洗干净，番茄切块。'
          }, {
            step: '鸡蛋加少许盐，筷子打散'
          }, {
            step: '锅里加少许油，鸡蛋开炒！'
          }, {
            step: '鸡蛋稍微成型下西红柿，加茄汁面酱，加开水，煮面，最后下青菜，放适量盐和鸡精。'
          }, {
            step: '撒上小葱花装碗里'
          }]
        }]
      }, {
        _id: 6,
        category: 'appetizer',
        name: '煎饼果子',
        image: 'http://s2.cdn.xiachufang.com/6e61ff4a89b511e6a9a10242ac110002_800w_533h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '面粉，鸡蛋，火腿的完美搭配，千百年来，是这个味道传承了中华美食的精髓',
        detailitem: [{
          ingredients: [{
            ingredientName: '绿豆面',
            ingredientWeight: '60g'
          }, {
            ingredientName: '白面',
            ingredientWeight: '40g'
          }, {
            ingredientName: '水',
            ingredientWeight: '180g'
          }, {
            ingredientName: '五香粉',
            ingredientWeight: '2g'
          }, {
            ingredientName: '甜面酱，豆腐乳',
            ingredientWeight: '适量'
          }, {
            ingredientName: '葱花',
            ingredientWeight: '适量'
          }, {
            ingredientName: '果子',
            ingredientWeight: '1个'
          }]
        }, {
          steps: [{
              step: '绿豆60g洗净晾干，用料理机（我用的多可必）研磨成粉末，加白面40g，用凉白开180g和匀。'
            }, {
              step: '葱花切末'
            }, {
              step: '酱豆腐一块，加适量腐乳汁搅碎拌匀。'
            },
            {
              step: '不粘锅或电饼铛加热，用厨房用纸粘少许食用油擦拭锅底，锅稍热歇舀一勺面糊进去，用宽板转圈刮匀；打个鸡蛋在上面，然后撒葱花、白芝麻'
            },
            {
              step: '然后撒葱花、白芝麻；待煎饼能整张起锅时翻面儿，涂抹面酱，蒜蓉辣酱，酱豆腐；放入果子。'
            },
            {
              step: '卷起，开吃。'
            }
          ]
        }]
      }, {
        _id: 7,
        category: 'noodles',
        name: '湖南米粉',
        image: 'http://s2.cdn.xiachufang.com/42166e7e86f611e6b87c0242ac110003_500w_750h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '冬日里，随手撒上一把辣椒面，那味道，会让你念念不忘',
        detailitem: [{
          ingredients: [{
              ingredientName: '米粉',
              ingredientWeight: '2两'
            },
            {
              ingredientName: '肉末',
              ingredientWeight: '适量'
            },
            {
              ingredientName: '香葱',
              ingredientWeight: '1颗'
            }
          ]
        }, {
          steps: [{
              step: '首先，要熬制肉燥。热锅里加入少许油，下肉末炒制变色，加入生抽酱油盐调味，加入干辣椒，最后再加入热水煮开。小火慢熬10-15分钟。即可'
            }, {
              step: '取一只大碗，在碗内放入少许盐，酱油，猪油，待用。'
            }, {
              step: '另取一锅加水煮开，放入米粉。水煮开后，取少许水放入调料碗中冲开。米粉汆烫大约1分钟左右捞出放入配好调料的碗中。'
            },
            {
              step: '在米粉碗中放入熬制好的肉燥，少许肉燥汤，撒上葱花即可。'
            }
          ]
        }]
      }, {
        _id: 8,
        category: 'maindish',
        name: '皮蛋瘦肉粥',
        image: 'http://s2.cdn.xiachufang.com/4ea69a32874211e6b87c0242ac110003_384w_512h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '清新素雅的早餐，怎么会少了粥来温暖你的胃？',
        detailitem: [{
          ingredients: [{
              ingredientName: '猪里脊',
              ingredientWeight: '100g'
            },
            {
              ingredientName: '大米',
              ingredientWeight: '90g'
            },
            {
              ingredientName: '葱，姜',
              ingredientWeight: '适量'
            }, {
              ingredientName: '松花蛋',
              ingredientWeight: '2个'
            }, {
              ingredientName: '食用油',
              ingredientWeight: '2勺'
            }, {
              ingredientName: '白胡椒',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '盐',
              ingredientWeight: '适量'
            }
            , {
              ingredientName: '淀粉',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '水',
              ingredientWeight: '1.5升'
            }
          ]
        }, {
          steps: [{
              step: '大米洗净，提前用水浸泡30分钟，浸泡时加入植物油。姜切丝，葱切末，肉切丝，松花蛋切小块备用。'
            }, {
              step: '切好的肉丝放在碗里，加入盐和淀粉搅拌均匀，如果太干可以适量加一点水。'
            }, {
              step: '将泡好的大米加入汤锅内，再倒入水，用大火煮开后转小火煮20分钟。'
            },
            {
              step: '20分钟后米粥会变的非常软烂香糯，将一条条的肉丝放入米粥里，再加入姜丝、白胡椒、盐和皮蛋搅拌均匀后继续煮5-6分钟。'
            },
            {
              step: '加入葱搅拌均匀再煮1分钟即可。'
            }
          ]
        }]
      }, {
        _id: 9,
        category: 'maindish',
        name: '蛋炒饭',
        image: 'http://s2.cdn.xiachufang.com/2c62512688e311e6b87c0242ac110003_640w_640h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '米饭',
              ingredientWeight: '1碗'
            },
            {
              ingredientName: '鸡蛋',
              ingredientWeight: '2个'
            },
            {
              ingredientName: '午餐肉',
              ingredientWeight: '70g'
            }, {
              ingredientName: '青豆',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '胡萝卜粒，玉米粒',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '盐',
              ingredientWeight: '3g'
            }
          ]
        }, {
          steps: [{
              step: '将青豆仁、胡萝卜粒和玉米粒分别焯水备用；如果用刚煮好的米饭，先盛出来摊凉；鸡蛋打散，加入少许料酒和盐，入油锅炒到凝结盛出；'
            }, {
              step: '炒锅不用再加油，将米饭倒入炒散，调入适量盐，倒入所有配菜翻炒均匀即可；这样炒出来的蛋炒饭不会吸收很多油份，口感柔软入味，且更容易消化。'
            }
          ]
        }]
      }, {
        _id: 10,
        category: 'dish',
        name: '蒜香炒花甲',
        image: 'http://s2.cdn.xiachufang.com/773882a8883711e6a9a10242ac110002_393w_286h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '花甲',
              ingredientWeight: '1kg'
            },
            {
              ingredientName: '耗油',
              ingredientWeight: '1勺'
            },
            {
              ingredientName: '蒜蓉辣酱',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '蒜蓉',
              ingredientWeight: '若干'
            }, {
              ingredientName: '食用油',
              ingredientWeight: '15g'
            }, {
              ingredientName: '葱',
              ingredientWeight: '若干'
            }
          ]
        }, {
          steps: [{
              step: '锅里放冷水盖过花甲，盖锅盖，烧水直至花甲开口，花甲一开口翻几下，一熟马上捞起一边沥干水分待用。'
            }, {
              step: '锅里热油下蒜蓉炒5秒，紧接着下 蚝油+辣椒酱+葱跟蒜蓉搅拌一下后马上把花甲倒进去翻炒均匀即可上碟'
            }
          ]
        }]
      }, {
        _id: 11,
        category: 'dish',
        name: '红烧肉沫茄子',
        image: 'http://s2.cdn.xiachufang.com/12612b0288ad11e6b87c0242ac110003_1239w_1209h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '茄子',
              ingredientWeight: '2根'
            },
            {
              ingredientName: '猪肉',
              ingredientWeight: '1小块'
            },
            {
              ingredientName: '小米椒',
              ingredientWeight: '4个'
            }, {
              ingredientName: '葱，姜，蒜',
              ingredientWeight: '适量'
            }, {
              ingredientName: '生抽，老抽，料酒',
              ingredientWeight: '适量'
            }, {
              ingredientName: '盐，生粉',
              ingredientWeight: '适量'
            }, {
              ingredientName: '郫县豆瓣酱',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '糖',
              ingredientWeight: '1勺'
            }
          ]
        }, {
          steps: [{
              step: '茄子切条装在容器里面加一勺盐进去。'
            }, {
              step: '用手抓匀腌制十几分钟。这一步很重要，因为这样处理了茄子不氧化变色'
            }, {
              step: '腌制茄子的同时把一小块肉剁成肉馅'
            },
            {
              step: '肉馅里面加入白胡椒粉适量，生抽适量。料酒适量，生粉适量抓匀腌制十分钟'
            },
            {
              step: '同时取一个小碗装半碗水，里面加生粉适量，醋少许，盐少许，白糖一小勺子，生抽适量，老抽少许搅拌成一碗汁备用'
            },
            {
              step: '姜蒜辣椒葱切好备用'
            },
            {
              step: '锅里放油稍微多一点准备炸茄子, 把腌制好的茄子用手挤掉多余水分，油温升高以后下茄子炸, 炸软的茄子捞起来备用。'
            }, {
              step: '锅里留油下姜蒜炒香，并加入适量郫县豆瓣酱。'
            }, {
              step: '豆瓣酱炒香以后下肉沫翻炒, 肉沫变白以后茄子回锅翻炒一下, 锅里倒入事先调好的汁翻拌均匀'
            }, {
              step: '汁冒泡粘稠了撒葱花起锅'
            }
          ]
        }]
      }, {
        _id: 12,
        category: 'dish',
        name: '酸辣土豆丝',
        image: 'http://s2.cdn.xiachufang.com/cd3d58e0889111e6b87c0242ac110003_620w_411h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '土豆',
              ingredientWeight: '1个'
            },
            {
              ingredientName: '青椒',
              ingredientWeight: '1个'
            },
            {
              ingredientName: '红椒',
              ingredientWeight: '2个'
            }, {
              ingredientName: '葱姜蒜',
              ingredientWeight: '适量'
            }, {
              ingredientName: '食用油',
              ingredientWeight: '3勺'
            }, {
              ingredientName: '盐',
              ingredientWeight: '1小勺'
            }, {
              ingredientName: '醋',
              ingredientWeight: '3小勺'
            }, {
              ingredientName: '花椒',
              ingredientWeight: '适量'
            }
          ]
        }, {
          steps: [{
              step: '土豆洗净用刮皮刀刮去外皮，青辣椒切丝，小红椒切几下，蒜切碎'
            }, {
              step: '切丝，就比较容易切好了。切好的土豆丝放入凉水中浸泡。土豆丝放入凉水中要多换几次水，把淀粉都洗掉，这样炒出的土豆丝才脆，清爽不粘'
            }, {
              step: '锅里倒油，放入花椒小火炸香，把花椒捞出不要。然后放入葱姜小红椒爆香，倒入沥干水的土豆丝翻炒均匀后，立刻加入醋继续翻炒约1分钟，加入青辣椒和盐，翻炒均匀，加入蒜，和辣椒油，拌匀关火即可'
            }
          ]
        }]
      }, {
        _id: 13,
        category: 'dish',
        name: '红烧豆腐',
        image: 'http://s2.cdn.xiachufang.com/195d38a2880211e6a9a10242ac110002_600w_400h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '豆腐',
              ingredientWeight: '1盒'
            },
            {
              ingredientName: '葱姜蒜',
              ingredientWeight: '适量'
            },
            {
              ingredientName: '生抽',
              ingredientWeight: '适量'
            }, {
              ingredientName: '耗油',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '淀粉',
              ingredientWeight: '适量'
            }, {
              ingredientName: '盐',
              ingredientWeight: '3g'
            }
          ]
        }, {
          steps: [{
              step: '豆腐切块，用开水焯半分钟左右'
            }, {
              step: '准备好葱姜蒜'
            }, {
              step: '草菇老抽，鸡精，盐，蚝油，花椒面，清水调汁'
            },
            {
              step: '葱姜蒜炝锅，炒出香味'
            },
            {
              step: '倒入豆腐，翻炒几下'
            },
            {
              step: '加入酱汁，略炖一下后，勾芡出锅'
            },
            {
              step: '我上边撒的是香菜，也可以撒些葱花'
            }
          ]
        }]
      }, {
        _id: 14,
        category: 'dish',
        name: '红烧排骨',
        image: 'http://s2.cdn.xiachufang.com/91fabc6886ee11e6b87c0242ac110003_441w_308h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '排骨',
              ingredientWeight: '400g'
            },
            {
              ingredientName: '清水',
              ingredientWeight: '400ml'
            },
            {
              ingredientName: '冰糖',
              ingredientWeight: '15g'
            }, {
              ingredientName: '葱姜',
              ingredientWeight: '适量'
            }, {
              ingredientName: '食用油',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '盐',
              ingredientWeight: '1/2小勺'
            }, {
              ingredientName: '桂皮，八角',
              ingredientWeight: '2个'
            }, {
              ingredientName: '生抽',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '花雕酒',
              ingredientWeight: '1勺'
            }
          ]
        }, {
          steps: [{
              step: '锅内烧开水，放入斩件排骨氽烫至出血水，捞起洗净，沥净水备用'
            }, {
              step: '锅内放1大匙油，冰糖小火煮至深褐的糖色'
            }, {
              step: '加入排骨，炒至均匀上色'
            },
            {
              step: '锅内注入清水400ml（水量刚没过排骨）加入所有调味料'
            },
            {
              step: '大火煮开后，将排骨连汤汁转到深小锅内，加盖小火焖煮60分钟'
            },
            {
              step: '煮至水剩约1/3时，将桂皮，姜片，香葱，八角捞出'
            },
            {
              step: '继续煮至排骨可轻松用筷子插入的程度'
            }, {
              step: '转大火，将汤汁煮至浅浅锅底的位置即可'
            }
          ]
        }]
      }, {
        _id: 15,
        category: 'dish',
        name: '秘制红烧鸡爪',
        image: 'http://s2.cdn.xiachufang.com/bb44c5aa873411e6a9a10242ac110002_426w_640h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '鸡爪',
              ingredientWeight: '750g'
            },
            {
              ingredientName: '花椒，八角',
              ingredientWeight: '少许'
            },
            {
              ingredientName: '桂皮，香叶，姜',
              ingredientWeight: '两小片'
            }, {
              ingredientName: '冰糖',
              ingredientWeight: '10g'
            }, {
              ingredientName: '料酒',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '生抽，老抽',
              ingredientWeight: '适量'
            }, {
              ingredientName: '十三香',
              ingredientWeight: '适量'
            }
          ]
        }, {
          steps: [{
              step: '锅里放半锅清水，倒入鸡爪，大火煮开后继续煮三分钟'
            }, {
              step: '把鸡爪捞出用流动的水冲洗干净，沥干'
            }, {
              step: '鸡爪倒入锅中，放清水大致盖过鸡爪'
            },
            {
              step: '煮开后，加一汤匙料酒，加入两片姜'
            },
            {
              step: '加入三汤匙老抽和两汤匙生抽'
            },
            {
              step: '把花椒、八角、桂皮、香叶全部装入茶包袋，放入锅中'
            },
            {
              step: '放入冰糖，加入半茶匙十三香'
            }, {
              step: '再次煮开后转小火大约80分钟，至鸡爪酥烂入味，转大火收浓锅中汤汁即可'
            }
          ]
        }]
      },
      {
        _id: 16,
        category: 'noodles',
        name: '油泼面',
        image: 'http://s2.cdn.xiachufang.com/09ce43e088b111e6a9a10242ac110002_640w_618h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '面条',
              ingredientWeight: '200g'
            },
            {
              ingredientName: '辣椒面',
              ingredientWeight: '适量'
            },
            {
              ingredientName: '葱',
              ingredientWeight: '适量'
            }, {
              ingredientName: '小苏打',
              ingredientWeight: '2g'
            }, {
              ingredientName: '香醋',
              ingredientWeight: '1大勺'
            }, {
              ingredientName: '盐',
              ingredientWeight: '3g'
            }, {
              ingredientName: '酱油',
              ingredientWeight: '适量'
            }, {
              ingredientName: '油',
              ingredientWeight: '2勺'
            }
          ]
        }, {
          steps: [{
              step: '葱（姜蒜）切末备用，盐、醋、酱油等调味都放在触手可及的地方'
            }, {
              step: '水烧开，焯豆芽，断生后捞出过冷水，控干水分铺在碗底'
            }, {
              step: '刚才的水继续烫一小把青菜，捞出后放一边备用'
            },
            {
              step: '煮面，面条煮的稍微软一些（更好的吸收料汁），但也不要过软，捞出控干水分码在铺好的豆芽上'
            },
            {
              step: '烧油，至7成左右即可'
            },
            {
              step: '在面上码盐、葱姜末、辣椒末'
            },
            {
              step: '泼完油，立刻（注意这个立刻！）倒醋'
            }, {
              step: '最后码上烫熟的青菜，拌匀就可以开吃了'
            }
          ]
        }]
      },
      {
        _id: 17,
        category: 'noodles',
        name: '麻辣小面',
        image: 'http://s2.cdn.xiachufang.com/ce8df6f0877911e6b87c0242ac110003_640w_427h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '鲜面',
              ingredientWeight: '3两'
            },
            {
              ingredientName: '时令蔬菜',
              ingredientWeight: '适量'
            },
            {
              ingredientName: '油辣子',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '花椒面',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '葱姜蒜',
              ingredientWeight: '适量'
            }, {
              ingredientName: '盐',
              ingredientWeight: '3g'
            }, {
              ingredientName: '酱油',
              ingredientWeight: '1勺'
            }
          ]
        }, {
          steps: [{
              step: '将盐，味精，酱油，姜蒜水，花椒面，油辣子，猪油（熟菜油）放在大碗备用'
            }, {
              step: '在上述料中加骨汤（开水也可以）'
            }, {
              step: '锅中水烧开煮面，根据口感定煮的时间，好后挑入碗中即可'
            }
          ]
        }]
      },
      {
        _id: 18,
        category: 'noodles',
        name: '家常肉末面',
        image: 'http://s1.cdn.xiachufang.com/4b0241e0881611e6b87c0242ac110003_640w_480h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '挂面',
              ingredientWeight: '1把'
            },
            {
              ingredientName: '猪肉末',
              ingredientWeight: '200g'
            },
            {
              ingredientName: '番茄',
              ingredientWeight: '1个'
            }, {
              ingredientName: '葱姜蒜',
              ingredientWeight: '适量'
            }, {
              ingredientName: '生抽，老抽',
              ingredientWeight: '适量'
            }, {
              ingredientName: '盐',
              ingredientWeight: '3g'
            }, {
              ingredientName: '豆瓣酱，糖，料酒',
              ingredientWeight: '1勺'
            }, {
              ingredientName: '青菜',
              ingredientWeight: '随意'
            }
          ]
        }, {
          steps: [{
              step: '准备两个锅 一个烧开水 一个待用'
            }, {
              step: '把姜切丝/末，葱切小段，蒜切末（不喜欢吃蒜的就切片方便扔掉），番茄切小块，肉末不需要腌放一边待用'
            }, {
              step: '水烧开放挂面. 另一边锅烧热放油烧到八成热，放姜丝蒜末炒香，下猪肉末炒至还有一点点粉色，先下料酒, 再老抽豆瓣酱生抽和糖炒至肉末出油'
            },
            {
              step: '面差不多煮好的时候放青菜进去一起煮，加少许油. 【肉末炒好后下番茄，炒至番茄变成泥，待两者融为一体'
            },
            {
              step: '准备一只大碗，把面和青菜捞出来，倒些面汤，然后把炒好的肉酱铺到面上，撒上葱花，开吃！！！'
            }
          ]
        }]
      },
      {
        _id: 19,
        category: 'dessert',
        name: '棉花蛋糕',
        image: 'http://s2.cdn.xiachufang.com/bb22f46c89fe11e6a9a10242ac110002_529w_705h.jpg?imageView2/2/w/660/interlace/1/q/90',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '普通面粉',
              ingredientWeight: '50g'
            },
            {
              ingredientName: '鸡蛋',
              ingredientWeight: '4个'
            },
            {
              ingredientName: '牛奶',
              ingredientWeight: '50g'
            }, {
              ingredientName: '玉米油',
              ingredientWeight: '40g'
            }, {
              ingredientName: '砂糖',
              ingredientWeight: '40g'
            }, {
              ingredientName: '盐',
              ingredientWeight: '1g'
            }, {
              ingredientName: '白醋',
              ingredientWeight: '2滴'
            }
          ]
        }, {
          steps: [{
              step: '3个鸡蛋的蛋黄蛋清分离，将3个蛋黄与1个全蛋混合。'
            }, {
              step: '搅打成蛋黄液。'
            }, {
              step: '加入牛奶，用筷子搅拌均匀。'
            },
            {
              step: '将玉米油倒入锅中，加热至微沸，即出现纹路时，立刻加入过筛的低筋面粉并离火，快速搅拌成烫面团后，继续搅拌至出现顺滑的状态，放凉备用。'
            },
            {
              step: '待烫面团稍稍冷却后，加入盐，分多次倒入蛋黄液，并用刮刀拌匀，注意每次要拌匀后再倒入下一次，用打蛋器搅拌成可流动的稀糊状蛋黄面糊。'
            },
            {
              step: '蛋白中加入2滴白醋，用电动打蛋器低速打发至鱼眼泡状。'
            },
            {
              step: '将1/3细砂糖加入到蛋白中。'
            }, {
              step: '打发至蛋白糊气泡变得细腻，再将剩余的2/3细砂糖加入到蛋白中。'
            }, {
              step: '打发至湿性发泡,把打发好的蛋白，取1/3到蛋黄面糊里。'
            }, {
              step: '用刮刀从底部往上翻拌均匀，注意不要转圈搅拌，否则容易导致打发好的蛋白消泡。。'
            }, {
              step: '将拌好的蛋黄糊重新倒回蛋白糊里，用同样的手法翻拌均匀至蛋白和蛋黄糊充分混合，成为蛋糕糊。'
            }, {
              step: '把拌好的蛋糕糊倒入铺了油纸的模具中，轻震几下，震掉大泡。将模具放在盛有热水的烤盘上，放入上下火170℃预热好的烤箱，下层烤制10分钟后，转上下火150℃继续烤制40分钟。'
            }

          ]
        }]
      }, {
        _id: 20,
        category: 'dessert',
        name: '椰蓉奶棒面包',
        image: 'http://s1.cdn.xiachufang.com/5488e620890f11e6b87c0242ac110003_650w_650h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '高筋面粉',
              ingredientWeight: '210g'
            },
            {
              ingredientName: '清水',
              ingredientWeight: '100g'
            },
            {
              ingredientName: '鸡蛋液',
              ingredientWeight: '25g'
            }, {
              ingredientName: '酵母',
              ingredientWeight: '3g'
            }, {
              ingredientName: '食用油',
              ingredientWeight: '18g'
            }, {
              ingredientName: '盐',
              ingredientWeight: '2g'
            }, {
              ingredientName: '砂糖',
              ingredientWeight: '20g'
            }, {
              ingredientName: '椰蓉',
              ingredientWeight: '50g'
            }, {
              ingredientName: '牛奶',
              ingredientWeight: '10g'
            }
          ]
        }, {
          steps: [{
              step: '除了黄油外，所有面团材料包入面团里开始和面，可用机器也可手揉，揉到15分钟至20分钟后加入软化好的黄油，继续揉至成面团处于完全阶段'
            }, {
              step: '软化好的黄油，加入细砂糖搅拌均匀至糖化，接着加入牛奶搅拌均匀，再分次少量加入鸡蛋液'
            }, {
              step: '面团发至1.5至2倍大小，手指沾面粉插孔不回缩，即发酵完毕；大概一小时'
            },
            {
              step: '取出面团，挤压排气，擀成大一些的长方形'
            },
            {
              step: '将椰蓉馅料把面皮三分之二都涂抹均匀，留三分之一空白；'
            },
            {
              step: '慢慢擀开呈大一点的长方形，用锋利的刀切成均匀的细条状'
            },
            {
              step: '取一个长条，捏住两头扭转两到三圈，放在烤盘上,隔开点距离（为之后面包发酵烤膨留点位置)，用手适当压实些这些扭好的面棒团；'
            }, {
              step: '放烤箱发酵，底下放一盆热水，发到1.5至2倍大，取出刷上鸡蛋液；'
            }, {
              step: '刷好后放烤箱中层，170度，烤制13分钟，上色觉得可以了就好；'
            }
          ]
        }]
      }, {
        _id: 21,
        category: 'dessert',
        name: '蔓越莓饼干',
        image: 'http://s1.cdn.xiachufang.com/d0a696849b4911e69ae90242ac110002_1080w_1440h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '普通面粉',
              ingredientWeight: '115g'
            },
            {
              ingredientName: '蔓越莓干',
              ingredientWeight: '35g'
            },
            {
              ingredientName: '全蛋液',
              ingredientWeight: '15ml'
            }, {
              ingredientName: '糖粉',
              ingredientWeight: '60g'
            }, {
              ingredientName: '食用油',
              ingredientWeight: '75g'
            }
          ]
        }, {
          steps: [{
              step: '黄油软化后，加入糖粉，搅拌均匀。不需要打发'
            }, {
              step: '加入全蛋液，搅拌均匀'
            }, {
              step: '倒入蔓越莓干。蔓越莓干先切碎(不要切太碎)'
            },
            {
              step: '倒入低粉,搅拌均匀，成为面团'
            },
            {
              step: '用手把面团整形成长方体，放入冰箱冷冻至硬(约需要1个小时，是冷冻不是冷藏哦)'
            },
            {
              step: '冻硬的长方形面团用刀切成厚片。切好后放入烤盘'
            },
            {
              step: '烤箱预热160度，中层，20分钟即可'
            }
          ]
        }]
      }, {
        _id: 22,
        category: 'dessert',
        name: '咖啡豆豆饼干',
        image: 'http://s1.cdn.xiachufang.com/a7d26886888511e6b87c0242ac110003_640w_480h.jpg@2o_50sh_1pr_1l_660w_90q_1wh',
        description: '大米饭+鸡蛋，随便炒炒就行了，因为文案实在编不下去了......',
        detailitem: [{
          ingredients: [{
              ingredientName: '普通面粉',
              ingredientWeight: '100g'
            },
            {
              ingredientName: '糖粉',
              ingredientWeight: '30g'
            },
            {
              ingredientName: '奶油',
              ingredientWeight: '10g'
            }, {
              ingredientName: '速溶咖啡粉',
              ingredientWeight: '12g'
            }, {
              ingredientName: '黄油',
              ingredientWeight: '45g'
            }, {
              ingredientName: '可可粉',
              ingredientWeight: '3g'
            }
          ]
        }, {
          steps: [{
              step: '室温软化黄油后，加入糖粉搅拌至无颗粒'
            }, {
              step: '加入雀巢既溶咖啡粉和可可粉，奶油。继续搅拌均匀'
            }, {
              step: '加入过筛面粉，继续搅拌均匀，搅拌时千万别太过了'
            },
            {
              step: '每个5g，搓成枣型，用刮板划上一刀，咖啡豆型状出来了'
            },
            {
              step: '烤箱170度，烤20分，当当当，咖啡豆豆饼干现世了'
            }
          ]
        }]
      }

    ];

    this.getDishes = function() {
      return breakfastitems;
    }
    this.getDish = function(index) {
      return breakfastitems[index];
    }
  });
