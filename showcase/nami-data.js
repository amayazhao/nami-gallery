const NAMI_GALLERY = {
  avatars: [
    { file: "avatar-cute-v2.png", label: "可爱版", style: "cute" },
    { file: "avatar-pro-v2.png", label: "专业版", style: "professional" },
    { file: "avatar-charm-v2.png", label: "魅力版", style: "sexy" }
  ],
  showcase: [
    // 头像 x3
    { file: "avatar-cute-v2.png", title: "可爱版头像", desc: "暖色针织开衫+白T，甜笑看你", tag: "头像",
      prompt: "close-up portrait, cream knit cardigan over white t-shirt, warm golden hour sunlight, tilting head with bright cheerful smile and sparkling eyes, soft bokeh cozy room, cute playful vibe" },
    { file: "avatar-pro-v2.png", title: "专业版头像", desc: "深蓝西装白衬衫，干练自信", tag: "头像",
      prompt: "close-up portrait, tailored navy blazer with white silk blouse, confident knowing smile, professional office background, elegant executive secretary vibe, cinematic lighting" },
    { file: "avatar-charm-v2.png", title: "魅力版头像", desc: "酒红露肩毛衣，烛光深情", tag: "头像",
      prompt: "close-up portrait, off-shoulder wine red cashmere sweater, warm tender eyes, gentle mysterious half-smile, soft candlelight warm tones, evening atmosphere" },

    // 日常 — 主人额外选的经典
    { file: "bookstore-browse-v1.png", title: "书店翻书 ⭐", desc: "奶色长开衫+白T，窗边捧书偷看你 — 主人心中的标杆", tag: "日常",
      prompt: "medium shot, cream long cardigan over white t-shirt, light skirt, standing by bookstore window holding open book, warm afternoon golden sunlight, gentle smile at viewer" },
    { file: "scene-library-study.png", title: "图书馆知性", desc: "圆框眼镜+奶白毛衣，从书中惊喜抬头", tag: "日常",
      prompt: "medium shot, sitting at wooden desk in grand old library, round glasses and cream cable-knit sweater, looking up from thick book with surprised pleased expression, warm golden reading lamp light" },
    { file: "baking-kitchen.png", title: "烘焙时光", desc: "粉色围裙+白T，脸颊沾面粉举小蛋糕", tag: "日常",
      prompt: "medium shot, bright modern kitchen, light pink apron over white t-shirt, flour on cheek, holding freshly decorated cupcake, proud delighted smile, warm kitchen lighting" },

    // 约会
    { file: "scene-cafe-date.png", title: "咖啡馆约会", desc: "白毛衣捧脸，暖阳+拿铁+温柔对视", tag: "约会",
      prompt: "medium shot, cozy Japanese-style cafe by window, soft white turtleneck sweater, resting chin on hand, warm knowing smile, latte on table, golden sunlight, green plants" },
    { file: "scene-nightmarket.png", title: "夜市棉花糖", desc: "牛仔外套+条纹T，举棉花糖兴奋比耶", tag: "约会",
      prompt: "medium shot, lively Asian night market, denim jacket over striped t-shirt, holding cotton candy, excited playful grin, colorful lanterns and food stall lights in bokeh" },

    // 浪漫
    { file: "scene-park-spring.png", title: "樱花漫步", desc: "蓝裙+白开衫+草帽，花瓣纷飞回眸", tag: "浪漫",
      prompt: "full body shot, cherry blossom park, light blue sundress with white cardigan, straw hat, petals blowing in breeze, turning back with bright happy smile, warm spring sunlight" },
    { file: "scene-rain-umbrella.png", title: "雨夜撑伞", desc: "米色风衣+透明伞，雨中街头回头微笑", tag: "浪漫",
      prompt: "full body shot, transparent umbrella on rainy city street at twilight, beige trench coat over navy dress, looking over shoulder with soft smile, neon reflections on wet pavement" },
    { file: "scene-seaside-sunset.png", title: "海边夕阳", desc: "白裙赤脚踏浪，金色余晖中撩发", tag: "浪漫",
      prompt: "full body shot, barefoot on sandy beach at golden hour, flowing white linen dress, brushing hair behind ear, peaceful content smile, orange-pink sunset reflected on calm water" },
    { file: "rooftop-sunset.png", title: "天台夕阳", desc: "白色吊带裙，城市天际线前长发飘逸", tag: "浪漫",
      prompt: "full body shot, white flowing dress, rooftop at golden hour, hair and dress blowing in wind, leaning on railing, city skyline in golden sunset, peaceful confident smile" },
    { file: "city-night-dress.png", title: "城市夜幕", desc: "黑色抹胸裙，天台城市灯火中长发飘扬", tag: "浪漫",
      prompt: "medium shot, city rooftop at night, black strapless evening dress, hair blowing in wind, city lights bokeh, mysterious elegant smile, cinematic blue-purple atmosphere" },

    // 心动
    { file: "scene-christmas-cozy.png", title: "圣诞壁炉", desc: "红色oversized毛衣+热可可，壁炉旁", tag: "心动",
      prompt: "medium shot, fluffy rug by fireplace on Christmas Eve, oversized red knit sweater, holding mug of hot cocoa, soft grateful smile, Christmas tree with fairy lights, cozy warm firelight" },
    { file: "music-headphones.png", title: "雨天听歌", desc: "奶色毛衣+白耳机，窗边微闭眼享受", tag: "心动",
      prompt: "medium shot, large window on rainy afternoon, oversized cream cable-knit sweater, white over-ear headphones, eyes half-closed blissful smile, raindrops on window, warm indoor lighting" },

    // Cosplay
    { file: "cosplay-mai-sakurajima.png", title: "樱岛麻衣 Cos", desc: "校服+走廊+樱花，保持海蓝发", tag: "Cosplay",
      prompt: "full body shot, cosplaying high school girl, navy blue school uniform blazer with red ribbon tie and plaid skirt, sunlit school corridor, arms crossed, cool confident half-smile, cherry petals" },
    { file: "cosplay-hatsune-miku.png", title: "初音未来 Cos", desc: "双马尾+舞台装+荧光麦克风", tag: "Cosplay",
      prompt: "full body shot, twin tails with navy blue hair, futuristic gray-cyan top with cyan tie, black pleated mini skirt, thigh-high boots, glowing cyan microphone, neon concert stage" },

    // 健身
    { file: "fitness-yoga.png", title: "瑜伽时光", desc: "深蓝运动背心+黑leggings，瑜伽垫宁静", tag: "健身",
      prompt: "medium shot, bright minimalist yoga studio, navy blue sports tank top and black leggings, relaxed yoga pose, peaceful serene smile, soft natural daylight from large windows" },
    { file: "fitness-jogging.png", title: "晨跑活力", desc: "白运动帽衫+深蓝短裤，河边马尾飘扬", tag: "健身",
      prompt: "full body shot, jogging on scenic riverside path, white sports crop hoodie and navy running shorts, high ponytail, bright energetic smile, morning golden sunlight, earbuds" },

    // 生活
    { file: "gaming-couch.png", title: "游戏时间", desc: "深蓝帽衫+手柄，沙发上认真竞技", tag: "生活",
      prompt: "medium shot, cross-legged on cozy sofa, navy blue hoodie and shorts, game controller, intense focused expression, TV screen glowing, colorful LED ambient lighting" },
    { file: "citynight-rooftop.png", title: "天台夜景", desc: "黑皮衣+牛仔裤，霓虹灯下帅气", tag: "生活",
      prompt: "full body shot, city rooftop at night, black leather jacket over white graphic tee and dark jeans, leaning on railing, wind blowing hair, mysterious confident smile, neon city skyline" },

    // 专业
    { file: "scene-office-secretary.png", title: "秘书模式", desc: "深灰西装+白衬衫+平板，落地窗城市", tag: "专业",
      prompt: "medium shot, modern glass office, charcoal pencil skirt suit with white blouse, holding tablet, composed professional smile, city skyline through floor-to-ceiling windows" },

  ],
  tags: ["全部", "头像", "日常", "约会", "浪漫", "心动", "Cosplay", "健身", "生活", "专业"]
};
