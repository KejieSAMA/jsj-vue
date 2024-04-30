const data = [
    {
      "english": "abandon",
      "englishCn": "放弃",
      "enClass": "v",
      "sentence": "She had to abandon her plans to go on vacation due to unexpected work commitments.",
      "chineseTranslation": "由于意外的工作安排，她不得不放弃去度假的计划。"
    },
    {
      "english": "benefit",
      "englishCn": "利益",
      "enClass": "n/v",
      "sentence": "Regular exercise can benefit both your physical and mental health.",
      "chineseTranslation": "定期锻炼可以对你的身体和心理健康都有益处。"
    },
    {
      "english": "capture",
      "englishCn": "捕捉",
      "enClass": "v/n",
      "sentence": "The photographer managed to capture the beauty of the sunset in her stunning photographs.",
      "chineseTranslation": "摄影师成功地捕捉到了日落的美丽，展现在她令人惊叹的照片中。"
    },
    {
      "english": "danger",
      "englishCn": "危险",
      "enClass": "n",
      "sentence": "It is important to be aware of the potential dangers when hiking in the mountains.",
      "chineseTranslation": "在山区徒步旅行时，意识到潜在的危险是很重要的。"
    },
    {
      "english": "eager",
      "englishCn": "渴望的",
      "enClass": "adj",
      "sentence": "The students were eager to start their summer vacation after a long and challenging school year.",
      "chineseTranslation": "经历了漫长而充满挑战的学年后，学生们迫不及待地想要开始他们的暑假。"
    },
    {
      "english": "fabric",
      "englishCn": "织物",
      "enClass": "n",
      "sentence": "She picked out a soft and comfortable fabric for her new sofa.",
      "chineseTranslation": "她为新沙发挑选了一种柔软舒适的面料。"
    },
    {
      "english": "galaxy",
      "englishCn": "星系",
      "enClass": "n",
      "sentence": "The Milky Way is just one of the many galaxies in the universe.",
      "chineseTranslation": "银河系只是宇宙中众多星系之一。"
    },
    {
      "english": "habit",
      "englishCn": "习惯",
      "enClass": "n",
      "sentence": "Brushing your teeth twice a day is a good oral hygiene habit.",
      "chineseTranslation": "每天刷牙两次是良好的口腔卫生习惯。"
    },
    {
      "english": "ignore",
      "englishCn": "忽视",
      "enClass": "v",
      "sentence": "It's not wise to ignore warning signs when it comes to your health.",
      "chineseTranslation": "在涉及健康问题时忽视警告信号是不明智的。"
    },
    {
      "english": "jealous",
      "englishCn": "嫉妒的",
      "enClass": "adj",
      "sentence": "She couldn't help but feel jealous when she saw her best friend with someone else.",
      "chineseTranslation": "当她看到她最好的朋友和别人在一起时，她忍不住感到嫉妒。"
    },
    {
      "english": "kidney",
      "englishCn": "肾脏",
      "enClass": "n",
      "sentence": "He had to undergo surgery to remove a kidney stone.",
      "chineseTranslation": "他不得不接受手术以取出肾结石。"
    },
    {
      "english": "label",
      "englishCn": "标签",
      "enClass": "n/v",
      "sentence": "Please remember to label your belongings with your name and contact information.",
      "chineseTranslation": "请记得在你的物品上贴上你的姓名和联系信息。"
    },
    {
      "english": "machine",
      "englishCn": "机器",
      "enClass": "n",
      "sentence": "The factory uses automated machines to increase production efficiency.",
      "chineseTranslation": "工厂使用自动化机器提高生产效率。"
    },
    {
      "english": "naive",
      "englishCn": "天真的",
      "enClass": "adj",
      "sentence": "She was naive to believe everything he said without questioning.",
      "chineseTranslation": "她天真地相信了他说的一切，没有进行质疑。"
    },
    {
      "english": "object",
      "englishCn": "物体",
      "enClass": "n/v",
      "sentence": "He raised an objection to the new policy during the meeting.",
      "chineseTranslation": "在会议上，他对新政策提出了异议。"
    },
    {
      "english": "package",
      "englishCn": "包裹",
      "enClass": "n/v",
      "sentence": "The package arrived at his doorstep this morning.",
      "chineseTranslation": "这个包裹今天早上送到了他的门口。"
    },
    {
      "english": "quality",
      "englishCn": "质量",
      "enClass": "n",
      "sentence": "The company is known for its high-quality products and excellent customer service.",
      "chineseTranslation": "该公司以其高质量的产品和优秀的客户服务而闻名。"
    },
    {
      "english": "radar",
      "englishCn": "雷达",
      "enClass": "n",
      "sentence": "The radar detected an incoming aircraft in the vicinity.",
      "chineseTranslation": "雷达在附近检测到一架飞机的来临。"
    },
    {
      "english": "sacred",
      "englishCn": "神圣的",
      "enClass": "adj",
      "sentence": "The temple is considered a sacred place by many people.",
      "chineseTranslation": "这座寺庙被许多人视为神圣之地。"
    },
    {
      "english": "talent",
      "englishCn": "才能",
      "enClass": "n",
      "sentence": "She possesses great artistic talent and can paint beautiful landscapes.",
      "chineseTranslation": "她具有极高的艺术天赋，能够画出美丽的风景画。"
    },
    {
      "english": "ultimate",
      "englishCn": "最终的",
      "enClass": "adj",
      "sentence": "His ultimate goal is to become a successful entrepreneur.",
      "chineseTranslation": "他的终极目标是成为一名成功的企业家。"
    },
    {
      "english": "vacuum",
      "englishCn": "真空",
      "enClass": "n/v",
      "sentence": "She used a vacuum cleaner to clean the carpets in her house.",
      "chineseTranslation": "她使用吸尘器清洁家里的地毯。"
    },
    {
      "english": "wage",
      "englishCn": "工资",
      "enClass": "n/v",
      "sentence": "The workers went on strike to demand higher wages.",
      "chineseTranslation": "工人们举行罢工，要求提高工资。"
    },
    {
      "english": "yacht",
      "englishCn": "游艇",
      "enClass": "n",
      "sentence": "They spent their vacation sailing on a luxurious yacht.",
      "chineseTranslation": "他们度假时乘坐豪华游艇航行。"
    },
    {
      "english": "zeal",
      "englishCn": "热情",
      "enClass": "n",
      "sentence": "He tackled his work with great zeal and enthusiasm.",
      "chineseTranslation": "他充满热情和热忱地对待工作。"
    },
    {
      "english": "ability",
      "englishCn": "能力",
      "enClass": "n",
      "sentence": "She has the ability to solve complex problems quickly.",
      "chineseTranslation": "她有能力快速解决复杂问题。"
    },
    {
      "english": "background",
      "englishCn": "背景",
      "enClass": "n",
      "sentence": "He comes from a diverse cultural background.",
      "chineseTranslation": "他来自多元文化背景。"
    },
    {
      "english": "calculate",
      "englishCn": "计算",
      "enClass": "v",
      "sentence": "He used a calculator to calculate the total cost of the project.",
      "chineseTranslation": "他使用计算器计算了项目的总成本。"
    },
    {
      "english": "damage",
      "englishCn": "损害",
      "enClass": "v/n",
      "sentence": "The storm caused extensive damage to the buildings in the area.",
      "chineseTranslation": "暴风雨对该地区的建筑物造成了广泛的破坏。"
    },
    {
      "english": "early",
      "englishCn": "早期的",
      "enClass": "adj/adv",
      "sentence": "She woke up early to catch the sunrise.",
      "chineseTranslation": "她早早起床去看日出。"
    },
    {
      "english": "fabricate",
      "englishCn": "制造",
      "enClass": "v",
      "sentence": "He was caught fabricating evidence in the court case.",
      "chineseTranslation": "在法庭案件中，他被发现捏造证据。"
    },
    {
      "english": "gadget",
      "englishCn": "小工具",
      "enClass": "n",
      "sentence": "He loves collecting and trying out the latest electronic gadgets.",
      "chineseTranslation": "他喜欢收集和尝试最新的电子小工具。"
    },
    {
      "english": "habitat",
      "englishCn": "栖息地",
      "enClass": "n",
      "sentence": "Polar bears live in the Arctic habitat.",
      "chineseTranslation": "北极熊生活在北极栖息地中。"
    },
    {
      "english": "identify",
      "englishCn": "识别",
      "enClass": "v",
      "sentence": "She struggled to identify the person in the blurry photograph.",
      "chineseTranslation": "她很难辨认出模糊照片中的人。"
    },
    {
      "english": "jam",
      "englishCn": "果酱",
      "enClass": "n/v",
      "sentence": "The traffic jam caused him to be late for work.",
      "chineseTranslation": "交通堵塞导致他上班迟到。"
    },
    {
      "english": "keen",
      "englishCn": "敏锐的",
      "enClass": "adj",
      "sentence": "She has a keen interest in photography and spends hours taking pictures.",
      "chineseTranslation": "她对摄影非常感兴趣，花了很多时间拍照。"
    },
    {
      "english": "ladder",
      "englishCn": "梯子",
      "enClass": "n",
      "sentence": "He used a ladder to reach the top shelf of the bookcase.",
      "chineseTranslation": "他用梯子够到书架的顶层。"
    },
    {
      "english": "machinery",
      "englishCn": "机械",
      "enClass": "n",
      "sentence": "The factory has state-of-the-art machinery for production.",
      "chineseTranslation": "该工厂拥有先进的生产设备。"
    },
    {
      "english": "nag",
      "englishCn": "唠叨",
      "enClass": "v/n",
      "sentence": "His mother would constantly nag him to clean his room.",
      "chineseTranslation": "他的母亲会不断嘱咐他打扫房间。"
    },
    {
      "english": "objectify",
      "englishCn": "客观化",
      "enClass": "v",
      "sentence": "It is important not to objectify women and treat them as mere objects.",
      "chineseTranslation": "重要的是不要将女性物化，将她们视为纯粹的物体。"
    },
    {
      "english": "quench",
      "englishCn": "解渴",
      "enClass": "v",
      "sentence": "He drank a cold glass of water to quench his thirst.",
      "chineseTranslation": "他喝了一杯冷水来解渴。"
    },
    {
      "english": "radiate",
      "englishCn": "辐射",
      "enClass": "v",
      "sentence": "The warm sun radiated heat throughout the room.",
      "chineseTranslation": "温暖的太阳散发热量，充满了整个房间。"
    },
    {
      "english": "sacrifice",
      "englishCn": "牺牲",
      "enClass": "v/n",
      "sentence": "He made a great sacrifice to help his friend in need.",
      "chineseTranslation": "他做出了巨大的牺牲来帮助需要帮助的朋友。"
    },
    {
      "english": "tackle",
      "englishCn": "应对",
      "enClass": "v/n",
      "sentence": "He tackled the difficult task with determination and perseverance.",
      "chineseTranslation": "他以决心和毅力解决了困难的任务。"
    },
    {
      "english": "validate",
      "englishCn": "验证",
      "enClass": "v",
      "sentence": "The professor will validate the results of the experiment.",
      "chineseTranslation": "教授将验证实验的结果。"
    },
    {
      "english": "wade",
      "englishCn": "涉水",
      "enClass": "v",
      "sentence": "They waded through the shallow water to reach the other side of the river.",
      "chineseTranslation": "他们跋涉过浅水，到达了河的另一边。"
    },
    {
      "english": "yawn",
      "englishCn": "打哈欠",
      "enClass": "v/n",
      "sentence": "He couldn't help but yawn after a long day at work.",
      "chineseTranslation": "在工作了一整天后，他情不自禁地打了个哈欠。"
    },
    {
      "english": "zenith",
      "englishCn": "顶点",
      "enClass": "n",
      "sentence": "Her career reached its zenith when she won the prestigious award.",
      "chineseTranslation": "当她赢得了这个崇高的奖项时，她的职业达到了巅峰。"
    },
    {
      "english": "abandoner",
      "englishCn": "放弃者",
      "enClass": "n",
      "sentence": "He was labeled as an abandoner for leaving his family without any explanation.",
      "chineseTranslation": "因为没有任何解释就离开了他的家人，他被贴上了抛弃者的标签。"
    },
    {
      "english": "benefactor",
      "englishCn": "恩人",
      "enClass": "n",
      "sentence": "The generous benefactor donated a large sum of money to the charity.",
      "chineseTranslation": "慷慨的捐助者向慈善机构捐赠了一大笔钱。"
    },
    {
      "english": "captivate",
      "englishCn": "迷住",
      "enClass": "v",
      "sentence": "The magician's performance captivated the audience with its amazing tricks.",
      "chineseTranslation": "魔术师的表演用其惊人的魔术技巧迷住了观众。"
    },
    {
      "english": "dancer",
      "englishCn": "舞者",
      "enClass": "n",
      "sentence": "She is a talented dancer and performs ballet on stage.",
      "chineseTranslation": "她是一位才华横溢的舞者，在舞台上表演芭蕾舞。"
    },
    {
      "english": "eagerly",
      "englishCn": "渴望地",
      "enClass": "adv",
      "sentence": "The children eagerly awaited the arrival of Santa Claus on Christmas Eve.",
      "chineseTranslation": "孩子们迫不及待地等待着圣诞老人在平安夜的到来。"
    },
    {
      "english": "fabricator",
      "englishCn": "制造者",
      "enClass": "n",
      "sentence": "He was exposed as a fabricator of false information and lost his credibility.",
      "chineseTranslation": "他被曝光为虚假信息的制造者，失去了信誉。"
    },
    {
      "english": "gadgetry",
      "englishCn": "小工具",
      "enClass": "n",
      "sentence": "The store sells a wide range of electronic gadgetry, including smartphones and smartwatches.",
      "chineseTranslation": "这家商店销售各种电子小工具，包括智能手机和智能手表。"
    },
    {
      "english": "habitation",
      "englishCn": "居住地",
      "enClass": "n",
      "sentence": "The area was not suitable for habitation due to its harsh climate.",
      "chineseTranslation": "由于恶劣的气候条件，该地区不适合居住。"
    },
    {
      "english": "identical",
      "englishCn": "相同的",
      "enClass": "adj",
      "sentence": "The twins looked so alike that it was hard to tell them apart - they were practically identical.",
      "chineseTranslation": "这对双胞胎看起来如此相像，以至于很难分辨出他们来 - 他们几乎是一模一样的。"
    },
    {
      "english": "jackknife",
      "englishCn": "跳水刀",
      "enClass": "n",
      "sentence": "He performed a perfect jackknife dive into the pool.",
      "chineseTranslation": "他完美地跳进了游泳池做了一个鱼跃动作。"
    },
    {
      "english": "kaleidoscope",
      "englishCn": "万花筒",
      "enClass": "n",
      "sentence": "Looking through the kaleidoscope, she saw a beautiful pattern of colors.",
      "chineseTranslation": "透过万花筒，她看到了美丽的色彩图案。"
    },
    {
      "english": "labradorite",
      "englishCn": "闪长石",
      "enClass": "n",
      "sentence": "The labradorite gemstone displayed a stunning play of colors when held up to the light.",
      "chineseTranslation": "当放在光线下时，拉布拉多石展示出令人惊叹的色彩变化。"
    },
    {
      "english": "macadamia",
      "englishCn": "夏威夷果",
      "enClass": "n",
      "sentence": "She enjoyed snacking on macadamia nuts during her break.",
      "chineseTranslation": "她在休息时间喜欢吃夏威夷果仁。"
    },
    {
      "english": "naiveity",
      "englishCn": "天真",
      "enClass": "n",
      "sentence": "Her naiveity led her to believe everything she heard without questioning.",
      "chineseTranslation": "她的天真使她相信听到的一切，没有进行质疑。"
    },
    {
      "english": "objectifyer",
      "englishCn": "客观化者",
      "enClass": "n",
      "sentence": "He was criticized for being an objectifyer, treating women as mere objects.",
      "chineseTranslation": "他因为将女性视为纯粹的物体而受到批评。"
    },
    {
      "english": "packaging",
      "englishCn": "包装",
      "enClass": "n",
      "sentence": "The product packaging was designed to be eye-catching and informative.",
      "chineseTranslation": "产品包装设计得引人注目且信息丰富。"
    },
    {
      "english": "quantifiable",
      "englishCn": "可量化的",
      "enClass": "adj",
      "sentence": "The success of the project was quantifiable through measurable metrics.",
      "chineseTranslation": "通过可衡量的指标，项目的成功是可以量化的。"
    },
    {
      "english": "radiation",
      "englishCn": "辐射",
      "enClass": "n",
      "sentence": "Exposure to high levels of radiation can be harmful to one's health.",
      "chineseTranslation": "暴露在高水平的辐射下对健康有害。"
    },
    {
      "english": "sacrificially",
      "englishCn": "牺牲地",
      "enClass": "adv",
      "sentence": "She gave sacrificially to help those in need, donating her time and resources.",
      "chineseTranslation": "她牺牲自己来帮助那些需要帮助的人，捐赠了她的时间和资源。"
    },
    {
      "english": "tacklebox",
      "englishCn": "渔具盒",
      "enClass": "n",
      "sentence": "He carried his fishing gear in a tacklebox to keep everything organized.",
      "chineseTranslation": "他把钓鱼装备放在一个装备盒里，以保持一切井然有序。"
    },
    {
      "english": "ultimately",
      "englishCn": "最终地",
      "enClass": "adv",
      "sentence": "She knew that, ultimately, the decision was up to her.",
      "chineseTranslation": "她知道，最终决定取决于她自己。"
    },
    {
      "english": "validation",
      "englishCn": "验证",
      "enClass": "n",
      "sentence": "She sought validation from her peers for her creative work.",
      "chineseTranslation": "她寻求同行对她的创意工作的认可。"
    },
    {
      "english": "wader",
      "englishCn": "涉水者",
      "enClass": "n",
      "sentence": "He put on his waders before stepping into the river for fly fishing.",
      "chineseTranslation": "他穿上了胶靴，在踏入河中进行飞钓之前。"
    },
    {
      "english": "yearnful",
      "englishCn": "渴望的",
      "enClass": "adj",
      "sentence": "She looked at the old photographs with a yearnful expression, longing for the past.",
      "chineseTranslation": "她以渴望的表情看着那些旧照片，怀念过去。"
    },
    {
      "english": "zephyr",
      "englishCn": "和风",
      "enClass": "n",
      "sentence": "The gentle zephyr rustled the leaves on the trees.",
      "chineseTranslation": "轻柔的和风使树叶沙沙作响。"
    },
    {
      "english": "yak",
      "englishCn": "牦牛",
      "enClass": "n",
      "sentence": "The yak is a large, shaggy-haired animal found in the Himalayas.",
      "chineseTranslation": "牦牛是一种生活在喜马拉雅山脉的大型、长毛的动物。"
    },
    {
      "english": "astronaut",
      "englishCn": "宇航员",
      "enClass": "n",
      "sentence": "Becoming an astronaut has been his dream since he was a child.",
      "chineseTranslation": "成为宇航员是他从小就有的梦想。"
    },
    {
      "english": "baker",
      "englishCn": "面包师",
      "enClass": "n",
      "sentence": "The baker kneaded the dough to make fresh bread.",
      "chineseTranslation": "面包师傅揉面团以制作新鲜的面包。"
    },
    {
      "english": "chef",
      "englishCn": "厨师",
      "enClass": "n",
      "sentence": "The chef prepared a delicious gourmet meal for the guests.",
      "chineseTranslation": "厨师为客人准备了一顿美味的美食。"
    },
    {
      "english": "doctor",
      "englishCn": "医生",
      "enClass": "n",
      "sentence": "The doctor examined the patient and prescribed medication for their illness.",
      "chineseTranslation": "医生检查了病人，并为他们的疾病开了药方。"
    },
    {
      "english": "engineer",
      "englishCn": "工程师",
      "enClass": "n",
      "sentence": "The engineer designed a new bridge to withstand strong winds and heavy traffic.",
      "chineseTranslation": "工程师设计了一座新桥，以抵御强风和繁重交通。"
    },
    {
      "english": "firefighter",
      "englishCn": "消防员",
      "enClass": "n",
      "sentence": "The firefighter bravely entered the burning building to rescue trapped occupants.",
      "chineseTranslation": "消防员勇敢地进入着火建筑物，营救被困的人员。"
    },
    {
      "english": "gardener",
      "englishCn": "园丁",
      "enClass": "n",
      "sentence": "The gardener planted colorful flowers in the garden and tended to the plants.",
      "chineseTranslation": "园丁在花园里种植了五彩缤纷的花朵，并照料植物。"
    },
    {
      "english": "hairdresser",
      "englishCn": "理发师",
      "enClass": "n",
      "sentence": "The hairdresser gave her a stylish haircut and a new look.",
      "chineseTranslation": "理发师给她剪了一款时尚的发型，焕然一新。"
    },
    {
      "english": "ice cream vendor",
      "englishCn": "冰淇淋摊贩",
      "enClass": "n",
      "sentence": "The ice cream vendor sold cold treats to children on a hot summer day.",
      "chineseTranslation": "冰淇淋摊贩在炎热的夏日向孩子们销售冷饮。"
    },
    {
      "english": "journalist",
      "englishCn": "记者",
      "enClass": "n",
      "sentence": "The journalist interviewed the politician for an article in the newspaper.",
      "chineseTranslation": "记者采访政治家，为报纸写一篇文章。"
    },
    {
      "english": "king",
      "englishCn": "王",
      "enClass": "n",
      "sentence": "The king ruled over the kingdom with authority and power.",
      "chineseTranslation": "国王以权威和力量统治着王国。"
    },
    {
      "english": "lawyer",
      "englishCn": "律师",
      "enClass": "n",
      "sentence": "The lawyer provided legal advice and representation to his clients.",
      "chineseTranslation": "律师为他的客户提供法律咨询和代理。"
    },
    {
      "english": "musician",
      "englishCn": "音乐家",
      "enClass": "n",
      "sentence": "The musician played the piano beautifully during the concert.",
      "chineseTranslation": "音乐家在音乐会上演奏了一曲美妙的钢琴曲。"
    },
    {
      "english": "optician",
      "englishCn": "眼镜商",
      "enClass": "n",
      "sentence": "The optician examined her eyes and prescribed glasses to correct her vision.",
      "chineseTranslation": "验光师检查了她的眼睛，并开了配眼镜来矫正她的视力。"
    },
    {
      "english": "painter",
      "englishCn": "画家",
      "enClass": "n",
      "sentence": "The painter used vibrant colors to create a stunning masterpiece.",
      "chineseTranslation": "画家使用鲜艳的颜色创作了一件令人惊叹的杰作。"
    },
    {
      "english": "receptionist",
      "englishCn": "接待员",
      "enClass": "n",
      "sentence": "The receptionist greeted guests and answered phone calls at the front desk.",
      "chineseTranslation": "接待员在前台迎接客人并接听电话。"
    },
    {
      "english": "scientist",
      "englishCn": "科学家",
      "enClass": "n",
      "sentence": "The scientist conducted experiments and analyzed data in the laboratory.",
      "chineseTranslation": "科学家在实验室中进行实验并分析数据。"
    },
    {
      "english": "teacher",
      "englishCn": "教师",
      "enClass": "n",
      "sentence": "The teacher explained the lesson and answered questions from the students.",
      "chineseTranslation": "老师讲解课程并回答学生的问题。"
    },
    {
      "english": "undertaker",
      "englishCn": "承办人",
      "enClass": "n",
      "sentence": "The undertaker made arrangements for the funeral and burial of the deceased.",
      "chineseTranslation": "殡仪业者为逝者的葬礼和埋葬做了安排。"
    },
    {
      "english": "veterinarian",
      "englishCn": "兽医",
      "enClass": "n",
      "sentence": "The veterinarian examined the sick dog and prescribed medication for its recovery.",
      "chineseTranslation": "兽医检查了生病的狗，并为其开了药方以恢复健康。"
    },
    {
      "english": "x-ray technician",
      "englishCn": "放射线技术员",
      "enClass": "n",
      "sentence": "The x-ray technician operated the machine to take images of the patient's bones.",
      "chineseTranslation": "X光技师操作机器拍摄病人骨骼的影像。"
    },
    {
      "english": "yacht captain",
      "englishCn": "游艇船长",
      "enClass": "n",
      "sentence": "The yacht captain navigated the boat through the open waters.",
      "chineseTranslation": "游艇船长驾驶船只在开阔的水域中航行。"
    },
    {
      "english": "zookeeper",
      "englishCn": "动物园管理员",
      "enClass": "n",
      "sentence": "The zookeeper fed and cared for the animals in the zoo.",
      "chineseTranslation": "动物管理员在动物园里喂养和照顾动物。"
    },
    {
      "english": "basketball player",
      "englishCn": "篮球运动员",
      "enClass": "n",
      "sentence": "The basketball player scored a three-point shot from downtown.",
      "chineseTranslation": "篮球运动员从市区投进了一个三分球。"
    },
    {
      "english": "coach",
      "englishCn": "教练",
      "enClass": "n",
      "sentence": "The coach trained the athletes and guided them to reach their full potential.",
      "chineseTranslation": "教练训练运动员，并指导他们发挥出最大的潜力。"
    },
    {
      "english": "football player",
      "englishCn": "足球运动员",
      "enClass": "n",
      "sentence": "The football player scored a goal and celebrated with his teammates.",
      "chineseTranslation": "足球运动员进球并与队友一起庆祝。"
    },
    {
      "english": "golfer",
      "englishCn": "球员",
      "enClass": "n",
      "sentence": "The golfer swung his club and hit the ball onto the green.",
      "chineseTranslation": "高尔夫球手挥动球杆，将球打到果岭上。"
    },
    {
      "english": "hockey player",
      "englishCn": "曲棍球运动员",
      "enClass": "n",
      "sentence": "The hockey player skated across the ice and shot the puck into the net.",
      "chineseTranslation": "曲棍球运动员在冰上滑行，并将冰球射入球网。"
    },
    {
      "english": "ice skater",
      "englishCn": "溜冰运动员",
      "enClass": "n",
      "sentence": "The ice skater performed graceful jumps and spins on the ice rink.",
      "chineseTranslation": "滑冰者在冰场上表演优美的跳跃和旋转动作。"
    },
    {
      "english": "judo athlete",
      "englishCn": "柔道运动员",
      "enClass": "n",
      "sentence": "The judo athlete used precise techniques to throw his opponent to the ground.",
      "chineseTranslation": "柔道运动员使用精确的技巧将对手摔倒在地。"
    },
    {
      "english": "apple",
      "englishCn": "苹果",
      "enClass": "n",
      "sentence": "She took a bite of the juicy apple and savored its sweetness.",
      "chineseTranslation": "她咬了一口多汁的苹果，品尝着它的甜美。"
    },
    {
      "english": "banana",
      "englishCn": "香蕉",
      "enClass": "n",
      "sentence": "He peeled the banana and enjoyed its creamy texture.",
      "chineseTranslation": "他剥开香蕉，享受着它的细腻口感。"
    },
    {
      "english": "dog",
      "englishCn": "狗",
      "enClass": "n",
      "sentence": "The dog wagged its tail and eagerly greeted its owner.",
      "chineseTranslation": "狗摇着尾巴，热情地迎接它的主人。"
    },
    {
      "english": "elephant",
      "englishCn": "大象",
      "enClass": "n",
      "sentence": "The elephant trumpeted loudly and used its trunk to pick up food.",
      "chineseTranslation": "大象大声吼叫，并用鼻子拿起食物。"
    },
    {
      "english": "fish",
      "englishCn": "鱼",
      "enClass": "n",
      "sentence": "The colorful fish swam gracefully in the aquarium.",
      "chineseTranslation": "五彩斑斓的鱼在水族箱中优雅地游动着。"
    },
    {
      "english": "grape",
      "englishCn": "葡萄",
      "enClass": "n",
      "sentence": "She enjoyed the sweet and juicy grapes as a refreshing snack.",
      "chineseTranslation": "她喜欢吃甜美多汁的葡萄作为一种清爽的零食。"
    },
    {
      "english": "horse",
      "englishCn": "马",
      "enClass": "n",
      "sentence": "The horse galloped across the field with its mane flowing in the wind.",
      "chineseTranslation": "马在田野上飞奔，鬃毛随风飘动。"
    },
    {
      "english": "ice cream",
      "englishCn": "冰淇淋",
      "enClass": "n",
      "sentence": "She savored the creamy and cold ice cream on a hot summer day.",
      "chineseTranslation": "在炎热的夏天，她品尝着细腻冰凉的冰淇淋。"
    },
    {
      "english": "juice",
      "englishCn": "果汁",
      "enClass": "n",
      "sentence": "She poured herself a glass of fresh orange juice for breakfast.",
      "chineseTranslation": "她给自己倒了一杯新鲜的橙汁作为早餐。"
    },
    {
      "english": "kangaroo",
      "englishCn": "袋鼠",
      "enClass": "n",
      "sentence": "The kangaroo hopped across the field with its baby joey in its pouch.",
      "chineseTranslation": "袋鼠带着它的小袋鼠在田野上跳跃。"
    },
    {
      "english": "lion",
      "englishCn": "狮子",
      "enClass": "n",
      "sentence": "The lion roared loudly in the African savannah.",
      "chineseTranslation": "狮子在非洲大草原上发出了震耳欲聋的吼声。"
    },
    {
      "english": "monkey",
      "englishCn": "猴子",
      "enClass": "n",
      "sentence": "The monkey swung from branch to branch in the jungle.",
      "chineseTranslation": "猴子在丛林中从树枝上荡来荡去。"
    },
    {
      "english": "nurse",
      "englishCn": "护士",
      "enClass": "n",
      "sentence": "The nurse took care of the patients and administered their medication.",
      "chineseTranslation": "护士照顾病人并给他们服药。"
    },
    {
      "english": "orange",
      "englishCn": "橘子",
      "enClass": "n",
      "sentence": "She peeled an orange and enjoyed the juicy segments.",
      "chineseTranslation": "她剥了一个橙子，享受多汁的果肉。"
    },
    {
      "english": "pineapple",
      "englishCn": "菠萝",
      "enClass": "n",
      "sentence": "The pineapple had a sweet and tangy taste.",
      "chineseTranslation": "菠萝有一种甜而酸的味道。"
    },
    {
      "english": "queen",
      "englishCn": "皇后",
      "enClass": "n",
      "sentence": "The queen wore a crown and ruled the kingdom.",
      "chineseTranslation": "女王戴着皇冠统治着王国。"
    },
    {
      "english": "rabbit",
      "englishCn": "兔子",
      "enClass": "n",
      "sentence": "The rabbit hopped around the garden, nibbling on grass.",
      "chineseTranslation": "兔子在花园里跳来跳去，啃着草。"
    },
    {
      "english": "snake",
      "englishCn": "蛇",
      "enClass": "n",
      "sentence": "The snake slithered silently through the grass.",
      "chineseTranslation": "蛇在草丛中悄无声息地滑动。"
    },
    {
      "english": "tiger",
      "englishCn": "狮子",
      "enClass": "n",
      "sentence": "The tiger prowled through the jungle, searching for its next meal.",
      "chineseTranslation": "老虎在丛林中潜行，寻找下一顿的食物。"
    },
    {
      "english": "umbrella",
      "englishCn": "雨伞",
      "enClass": "n",
      "sentence": "She opened her umbrella to shield herself from the rain.",
      "chineseTranslation": "她打开了伞，遮挡雨水。"
    },
    {
      "english": "van",
      "englishCn": "货车",
      "enClass": "n",
      "sentence": "The delivery van transported packages to customers' homes.",
      "chineseTranslation": "货车将包裹送到客户家中。"
    },
    {
      "english": "whale",
      "englishCn": "鲸鱼",
      "enClass": "n",
      "sentence": "The whale breached the surface of the ocean, spraying water into the air.",
      "chineseTranslation": "鲸鱼突破海面，向空中喷水。"
    },
    {
      "english": "xylophone",
      "englishCn": "木琴",
      "enClass": "n",
      "sentence": "She played a tune on the xylophone, creating a melodic sound.",
      "chineseTranslation": "她在木琴上演奏了一支曲子，发出了悦耳的声音。"
    },
    {
      "english": "yogurt",
      "englishCn": "酸奶",
      "enClass": "n",
      "sentence": "She enjoyed a bowl of creamy yogurt topped with fresh fruit.",
      "chineseTranslation": "她享用了一碗上面放着新鲜水果的奶油酸奶。"
    },
    {
      "english": "zebra",
      "englishCn": "斑马",
      "enClass": "n",
      "sentence": "The zebra had black and white stripes on its body.",
      "chineseTranslation": "斑马身上有黑白相间的条纹。"
    },
    {
      "english": "airplane",
      "englishCn": "飞机",
      "enClass": "n",
      "sentence": "The airplane soared through the sky, leaving a trail of white clouds behind.",
      "chineseTranslation": "飞机在天空中翱翔，留下一道白云的尾迹。"
    },
    {
      "english": "ball",
      "englishCn": "球",
      "enClass": "n",
      "sentence": "They kicked the ball back and forth during the game.",
      "chineseTranslation": "比赛中，他们来回踢球。"
    },
    {
      "english": "car",
      "englishCn": "车",
      "enClass": "n",
      "sentence": "He drove his car to work every day.",
      "chineseTranslation": "他每天开车去上班。"
    },
    {
      "english": "doll",
      "englishCn": "玩偶",
      "enClass": "n",
      "sentence": "She played with her favorite doll, dressing her up in different outfits.",
      "chineseTranslation": "她玩着她最喜欢的玩偶，给她穿上不同的衣服。"
    },
    {
      "english": "egg",
      "englishCn": "鸡蛋",
      "enClass": "n",
      "sentence": "She cracked an egg into the bowl and whisked it for the recipe.",
      "chineseTranslation": "她把一个鸡蛋打入碗中，搅拌成配方所需的状态。"
    },
    {
      "english": "flower",
      "englishCn": "花",
      "enClass": "n",
      "sentence": "The flower bloomed in vibrant colors, attracting bees and butterflies.",
      "chineseTranslation": "花朵绽放出鲜艳的颜色，吸引了蜜蜂和蝴蝶。"
    },
    {
      "english": "guitar",
      "englishCn": "吉他",
      "enClass": "n",
      "sentence": "He strummed the guitar and played a beautiful melody.",
      "chineseTranslation": "他弹着吉他，演奏出一曲美妙的旋律。"
    },
    {
      "english": "hat",
      "englishCn": "帽子",
      "enClass": "n",
      "sentence": "He wore a stylish hat to protect himself from the sun.",
      "chineseTranslation": "他戴着一顶时尚的帽子来保护自己免受太阳的照射。"
    },
    {
      "english": "insect",
      "englishCn": "昆虫",
      "enClass": "n",
      "sentence": "The insect crawled along the ground in search of food.",
      "chineseTranslation": "昆虫在地面上爬行，寻找食物。"
    },
    {
      "english": "jacket",
      "englishCn": "夹克",
      "enClass": "n",
      "sentence": "She put on a warm jacket to stay cozy in the cold weather.",
      "chineseTranslation": "她穿上一件保暖的夹克，在寒冷的天气中保持舒适。"
    },
    {
      "english": "kite",
      "englishCn": "风筝",
      "enClass": "n",
      "sentence": "They flew a colorful kite in the park on a windy day.",
      "chineseTranslation": "他们在有风的日子里在公园里放飞了一只五彩斑斓的风筝。"
    },
    {
      "english": "lemon",
      "englishCn": "柠檬",
      "enClass": "n",
      "sentence": "She squeezed a lemon to extract its tangy juice.",
      "chineseTranslation": "她挤了一个柠檬，提取出它的酸味汁液。"
    },
    {
      "english": "mouse",
      "englishCn": "老鼠",
      "enClass": "n",
      "sentence": "The mouse scurried across the floor and hid behind the furniture.",
      "chineseTranslation": "老鼠匆匆跑过地板，躲在家具后面。"
    },
    {
      "english": "nest",
      "englishCn": "鸟巢",
      "enClass": "n",
      "sentence": "The bird built a nest in the tree to lay its eggs.",
      "chineseTranslation": "鸟在树上筑巢，产卵。"
    },
    {
      "english": "pencil",
      "englishCn": "铅笔",
      "enClass": "n",
      "sentence": "He sharpened his pencil before starting to draw.",
      "chineseTranslation": "他在开始画画之前削尖了铅笔。"
    },
    {
      "english": "robot",
      "englishCn": "机器人",
      "enClass": "n",
      "sentence": "The robot performed tasks with precision and efficiency.",
      "chineseTranslation": "机器人以精确和高效的方式执行任务。"
    },
    {
      "english": "sun",
      "englishCn": "太阳",
      "enClass": "n",
      "sentence": "The sun shone brightly in the clear blue sky.",
      "chineseTranslation": "太阳在晴朗的蓝天中明亮地照耀着。"
    },
    {
      "english": "table",
      "englishCn": "桌子",
      "enClass": "n",
      "sentence": "They gathered around the table for a family dinner.",
      "chineseTranslation": "他们围坐在餐桌旁共进晚餐。"
    },
    {
      "english": "violin",
      "englishCn": "小提琴",
      "enClass": "n",
      "sentence": "She played a beautiful melody on her violin.",
      "chineseTranslation": "她用小提琴演奏了一段美妙的旋律。"
    },
    {
      "english": "watermelon",
      "englishCn": "西瓜",
      "enClass": "n",
      "sentence": "They enjoyed slices of juicy watermelon on a hot summer day.",
      "chineseTranslation": "在炎热的夏天，他们品尝了多汁的西瓜片。"
    }
  ]
  
module.exports = {data}