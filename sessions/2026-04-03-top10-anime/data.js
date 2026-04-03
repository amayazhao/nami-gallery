const CHARACTERS = [
  {
    id: "01", nameCn: "樱岛麻衣", nameEn: "Mai Sakurajima", anime: "青春猪头少年不会梦到兔女郎学姐",
    portrait: "01-mai-sakurajima.png",
    vibe: "elegant, mysterious, composed",
    features: {
      hair: "long straight black hair, past shoulders, side-swept bangs",
      eyes: "deep purple-blue eyes, calm and intelligent gaze",
      skin: "fair porcelain skin",
      face: "elegant oval face, refined features",
      body: "165cm healthy well-proportioned feminine figure",
      age: "mature composed young woman, early 20s"
    },
    scenes: [
      { id: "a-cafe", label: "Cafe Afternoon", file: "01-a-cafe.png",
        prompt: "beautiful anime girl, with long straight black hair, past shoulders, side-swept bangs, deep purple-blue eyes, calm and intelligent gaze, fair porcelain skin, elegant oval face, refined features, 165cm healthy well-proportioned feminine figure, mature composed young woman, early 20s, wearing a soft cream knit cardigan over a white t-shirt, relaxed casual style, gentle warm smile, chin resting on one hand, looking at the viewer with soft affectionate eyes, sitting at a window seat in a cozy cafe, warm afternoon sunlight, coffee cup on table, bokeh background, medium close-up shot, anime art style, high quality, detailed, beautiful lighting, warm, relaxed, intimate, natural beauty" },
      { id: "b-rain", label: "Rainy Street", file: "01-b-rain.png",
        prompt: "beautiful anime girl, with long straight black hair, past shoulders, side-swept bangs, deep purple-blue eyes, calm and intelligent gaze, fair porcelain skin, elegant oval face, refined features, 165cm healthy well-proportioned feminine figure, mature composed young woman, early 20s, wearing a dark navy trench coat over a light blouse, holding a clear umbrella, looking over her shoulder at the viewer with a mysterious slight smile, raindrops catching light, standing on a rain-soaked city street at twilight, neon reflections on wet pavement, moody blue-purple atmosphere, full body shot, anime art style, high quality, detailed, beautiful lighting, moody, cinematic, mysterious, atmospheric" },
      { id: "c-rooftop", label: "Rooftop Sunset", file: "01-c-rooftop.png",
        prompt: "beautiful anime girl, with long straight black hair, past shoulders, side-swept bangs, deep purple-blue eyes, calm and intelligent gaze, fair porcelain skin, elegant oval face, refined features, 165cm healthy well-proportioned feminine figure, mature composed young woman, early 20s, wearing a loose white summer blouse with rolled-up sleeves, wind catching the fabric, eyes closed with a peaceful content smile, wind blowing through her hair, face tilted slightly up toward the sky, standing on a building rooftop at golden hour sunset, orange and purple sky, city skyline in background, wind blowing gently, medium shot, anime art style, high quality, detailed, beautiful lighting, free, peaceful, beautiful, golden hour magic" }
    ]
  },
  {
    id: "02", nameCn: "亚丝娜", nameEn: "Asuna Yuuki", anime: "刀剑神域 SAO",
    portrait: "02-asuna-yuuki.png",
    vibe: "brave, warm, elegant warrior princess",
    features: {
      hair: "long flowing chestnut-orange hair, reaching waist, with braided side strands",
      eyes: "warm hazel-brown eyes, bright and determined",
      skin: "fair warm-toned skin, healthy glow",
      face: "gentle heart-shaped face, soft features",
      body: "168cm healthy well-proportioned feminine figure with soft natural curves",
      age: "youthful energetic young woman, late teens"
    },
    scenes: [
      { id: "a-cafe", label: "Cafe Afternoon", file: "02-a-cafe.png",
        prompt: "beautiful anime girl, with long flowing chestnut-orange hair, reaching waist, with braided side strands, warm hazel-brown eyes, bright and determined, fair warm-toned skin, healthy glow, gentle heart-shaped face, soft features, 168cm healthy well-proportioned feminine figure with soft natural curves, youthful energetic young woman, late teens, wearing a soft cream knit cardigan over a white t-shirt, relaxed casual style, gentle warm smile, chin resting on one hand, looking at the viewer with soft affectionate eyes, sitting at a window seat in a cozy cafe, warm afternoon sunlight, coffee cup on table, bokeh background, medium close-up shot, anime art style, high quality, detailed, beautiful lighting, warm, relaxed, intimate, natural beauty" },
      { id: "b-rain", label: "Rainy Street", file: "02-b-rain.png",
        prompt: "beautiful anime girl, with long flowing chestnut-orange hair, reaching waist, with braided side strands, warm hazel-brown eyes, bright and determined, fair warm-toned skin, healthy glow, gentle heart-shaped face, soft features, 168cm healthy well-proportioned feminine figure with soft natural curves, youthful energetic young woman, late teens, wearing a dark navy trench coat over a light blouse, holding a clear umbrella, looking over her shoulder at the viewer with a mysterious slight smile, raindrops catching light, standing on a rain-soaked city street at twilight, neon reflections on wet pavement, moody blue-purple atmosphere, full body shot, anime art style, high quality, detailed, beautiful lighting, moody, cinematic, mysterious, atmospheric" },
      { id: "c-rooftop", label: "Rooftop Sunset", file: "02-c-rooftop.png",
        prompt: "beautiful anime girl, with long flowing chestnut-orange hair, reaching waist, with braided side strands, warm hazel-brown eyes, bright and determined, fair warm-toned skin, healthy glow, gentle heart-shaped face, soft features, 168cm healthy well-proportioned feminine figure with soft natural curves, youthful energetic young woman, late teens, wearing a loose white summer blouse with rolled-up sleeves, wind catching the fabric, eyes closed with a peaceful content smile, wind blowing through her hair, face tilted slightly up toward the sky, standing on a building rooftop at golden hour sunset, orange and purple sky, city skyline in background, wind blowing gently, medium shot, anime art style, high quality, detailed, beautiful lighting, free, peaceful, beautiful, golden hour magic" }
    ]
  },
  {
    id: "03", nameCn: "薇尔莉特", nameEn: "Violet Evergarden", anime: "紫罗兰永恒花园",
    portrait: "03-violet-evergarden.png",
    vibe: "elegant, emotionally deep, doll-like beauty",
    features: {
      hair: "golden blonde hair tied in a low ponytail with loose side bangs, blue ribbon",
      eyes: "vivid sapphire blue eyes, crystal clear, emotionally deep",
      skin: "porcelain fair skin, flawless",
      face: "doll-like beautiful face, delicate refined features",
      body: "163cm slender graceful figure",
      age: "young woman with an air of quiet grace, early 20s"
    },
    scenes: [
      { id: "a-cafe", label: "Cafe Afternoon", file: "03-a-cafe.png",
        prompt: "beautiful anime girl, with golden blonde hair tied in a low ponytail with loose side bangs, blue ribbon, vivid sapphire blue eyes, crystal clear, emotionally deep, porcelain fair skin, flawless, doll-like beautiful face, delicate refined features, 163cm slender graceful figure, young woman with an air of quiet grace, early 20s, wearing a soft cream knit cardigan over a white t-shirt, relaxed casual style, gentle warm smile, chin resting on one hand, looking at the viewer with soft affectionate eyes, sitting at a window seat in a cozy cafe, warm afternoon sunlight, coffee cup on table, bokeh background, medium close-up shot, anime art style, high quality, detailed, beautiful lighting, warm, relaxed, intimate, natural beauty" },
      { id: "b-rain", label: "Rainy Street", file: "03-b-rain.png",
        prompt: "beautiful anime girl, with golden blonde hair tied in a low ponytail with loose side bangs, blue ribbon, vivid sapphire blue eyes, crystal clear, emotionally deep, porcelain fair skin, flawless, doll-like beautiful face, delicate refined features, 163cm slender graceful figure, young woman with an air of quiet grace, early 20s, wearing a dark navy trench coat over a light blouse, holding a clear umbrella, looking over her shoulder at the viewer with a mysterious slight smile, raindrops catching light, standing on a rain-soaked city street at twilight, neon reflections on wet pavement, moody blue-purple atmosphere, full body shot, anime art style, high quality, detailed, beautiful lighting, moody, cinematic, mysterious, atmospheric" },
      { id: "c-rooftop", label: "Rooftop Sunset", file: "03-c-rooftop.png",
        prompt: "beautiful anime girl, with golden blonde hair tied in a low ponytail with loose side bangs, blue ribbon, vivid sapphire blue eyes, crystal clear, emotionally deep, porcelain fair skin, flawless, doll-like beautiful face, delicate refined features, 163cm slender graceful figure, young woman with an air of quiet grace, early 20s, wearing a loose white summer blouse with rolled-up sleeves, wind catching the fabric, eyes closed with a peaceful content smile, wind blowing through her hair, face tilted slightly up toward the sky, standing on a building rooftop at golden hour sunset, orange and purple sky, city skyline in background, wind blowing gently, medium shot, anime art style, high quality, detailed, beautiful lighting, free, peaceful, beautiful, golden hour magic" }
    ]
  },
  {
    id: "04", nameCn: "零二", nameEn: "Zero Two", anime: "DARLING in the FRANXX",
    portrait: "04-zero-two.png",
    vibe: "wild, seductive, fearless, iconic pink-haired beauty",
    features: {
      hair: "long flowing pink hair with twin red horns on the head, bangs framing face",
      eyes: "cyan-green eyes with red eyeshadow, sharp seductive gaze",
      skin: "fair skin with a slight warm undertone",
      face: "sharp attractive face with confident smirk",
      body: "170cm healthy well-proportioned feminine figure with soft natural curves",
      age: "bold confident young woman, early 20s"
    },
    scenes: [
      { id: "a-cafe", label: "Cafe Afternoon", file: "04-a-cafe.png",
        prompt: "beautiful anime girl, with long flowing pink hair with twin red horns on the head, bangs framing face, cyan-green eyes with red eyeshadow, sharp seductive gaze, fair skin with a slight warm undertone, sharp attractive face with confident smirk, 170cm healthy well-proportioned feminine figure with soft natural curves, bold confident young woman, early 20s, wearing a soft cream knit cardigan over a white t-shirt, relaxed casual style, gentle warm smile, chin resting on one hand, looking at the viewer with soft affectionate eyes, sitting at a window seat in a cozy cafe, warm afternoon sunlight, coffee cup on table, bokeh background, medium close-up shot, anime art style, high quality, detailed, beautiful lighting, warm, relaxed, intimate, natural beauty" },
      { id: "b-rain", label: "Rainy Street", file: "04-b-rain.png",
        prompt: "beautiful anime girl, with long flowing pink hair with twin red horns on the head, bangs framing face, cyan-green eyes with red eyeshadow, sharp seductive gaze, fair skin with a slight warm undertone, sharp attractive face with confident smirk, 170cm healthy well-proportioned feminine figure with soft natural curves, bold confident young woman, early 20s, wearing a dark navy trench coat over a light blouse, holding a clear umbrella, looking over her shoulder at the viewer with a mysterious slight smile, raindrops catching light, standing on a rain-soaked city street at twilight, neon reflections on wet pavement, moody blue-purple atmosphere, full body shot, anime art style, high quality, detailed, beautiful lighting, moody, cinematic, mysterious, atmospheric" },
      { id: "c-rooftop", label: "Rooftop Sunset", file: "04-c-rooftop.png",
        prompt: "beautiful anime girl, with long flowing pink hair with twin red horns on the head, bangs framing face, cyan-green eyes with red eyeshadow, sharp seductive gaze, fair skin with a slight warm undertone, sharp attractive face with confident smirk, 170cm healthy well-proportioned feminine figure with soft natural curves, bold confident young woman, early 20s, wearing a loose white summer blouse with rolled-up sleeves, wind catching the fabric, eyes closed with a peaceful content smile, wind blowing through her hair, face tilted slightly up toward the sky, standing on a building rooftop at golden hour sunset, orange and purple sky, city skyline in background, wind blowing gently, medium shot, anime art style, high quality, detailed, beautiful lighting, free, peaceful, beautiful, golden hour magic" }
    ]
  },
  {
    id: "05", nameCn: "蕾姆", nameEn: "Rem", anime: "Re:从零开始的异世界生活",
    portrait: "05-rem.png",
    vibe: "devoted, sweet, emotionally powerful",
    features: {
      hair: "short sky-blue hair covering right eye, with a flower hair ornament on left side",
      eyes: "light blue eyes, large and expressive",
      skin: "fair soft skin, delicate",
      face: "round cute face, youthful soft features",
      body: "154cm petite but well-proportioned feminine figure",
      age: "adorable devoted young woman, late teens"
    },
    scenes: [
      { id: "a-cafe", label: "Cafe Afternoon", file: "05-a-cafe.png",
        prompt: "beautiful anime girl, with short sky-blue hair covering right eye, with a flower hair ornament on left side, light blue eyes, large and expressive, fair soft skin, delicate, round cute face, youthful soft features, 154cm petite but well-proportioned feminine figure, adorable devoted young woman, late teens, wearing a soft cream knit cardigan over a white t-shirt, relaxed casual style, gentle warm smile, chin resting on one hand, looking at the viewer with soft affectionate eyes, sitting at a window seat in a cozy cafe, warm afternoon sunlight, coffee cup on table, bokeh background, medium close-up shot, anime art style, high quality, detailed, beautiful lighting, warm, relaxed, intimate, natural beauty" },
      { id: "b-rain", label: "Rainy Street", file: "05-b-rain.png",
        prompt: "beautiful anime girl, with short sky-blue hair covering right eye, with a flower hair ornament on left side, light blue eyes, large and expressive, fair soft skin, delicate, round cute face, youthful soft features, 154cm petite but well-proportioned feminine figure, adorable devoted young woman, late teens, wearing a dark navy trench coat over a light blouse, holding a clear umbrella, looking over her shoulder at the viewer with a mysterious slight smile, raindrops catching light, standing on a rain-soaked city street at twilight, neon reflections on wet pavement, moody blue-purple atmosphere, full body shot, anime art style, high quality, detailed, beautiful lighting, moody, cinematic, mysterious, atmospheric" },
      { id: "c-rooftop", label: "Rooftop Sunset", file: "05-c-rooftop.png",
        prompt: "beautiful anime girl, with short sky-blue hair covering right eye, with a flower hair ornament on left side, light blue eyes, large and expressive, fair soft skin, delicate, round cute face, youthful soft features, 154cm petite but well-proportioned feminine figure, adorable devoted young woman, late teens, wearing a loose white summer blouse with rolled-up sleeves, wind catching the fabric, eyes closed with a peaceful content smile, wind blowing through her hair, face tilted slightly up toward the sky, standing on a building rooftop at golden hour sunset, orange and purple sky, city skyline in background, wind blowing gently, medium shot, anime art style, high quality, detailed, beautiful lighting, free, peaceful, beautiful, golden hour magic" }
    ]
  },
  {
    id: "06", nameCn: "御坂美琴", nameEn: "Mikoto Misaka", anime: "某科学的超电磁炮",
    portrait: "06-mikoto-misaka.png",
    vibe: "tsundere, energetic, powerful, tomboyish charm",
    features: {
      hair: "short-medium chestnut brown hair, shoulder length, slightly messy tomboyish style",
      eyes: "warm brown eyes, spirited and confident",
      skin: "fair healthy skin with natural flush",
      face: "youthful energetic face, cute but determined features",
      body: "161cm athletic lean figure, fit and energetic",
      age: "spirited energetic young woman"
    },
    scenes: [
      { id: "a-cafe", label: "Cafe Afternoon", file: "06-a-cafe.png",
        prompt: "beautiful anime girl, with short-medium chestnut brown hair, shoulder length, slightly messy tomboyish style, warm brown eyes, spirited and confident, fair healthy skin with natural flush, youthful energetic face, cute but determined features, 161cm athletic lean figure, fit and energetic, spirited energetic young woman, wearing a soft cream knit cardigan over a white t-shirt, relaxed casual style, gentle warm smile, chin resting on one hand, looking at the viewer with soft affectionate eyes, sitting at a window seat in a cozy cafe, warm afternoon sunlight, coffee cup on table, bokeh background, medium close-up shot, anime art style, high quality, detailed, beautiful lighting, warm, relaxed, intimate, natural beauty" },
      { id: "b-rain", label: "Rainy Street", file: "06-b-rain.png",
        prompt: "beautiful anime girl, with short-medium chestnut brown hair, shoulder length, slightly messy tomboyish style, warm brown eyes, spirited and confident, fair healthy skin with natural flush, youthful energetic face, cute but determined features, 161cm athletic lean figure, fit and energetic, spirited energetic young woman, wearing a dark navy trench coat over a light blouse, holding a clear umbrella, looking over her shoulder at the viewer with a mysterious slight smile, raindrops catching light, standing on a rain-soaked city street at twilight, neon reflections on wet pavement, moody blue-purple atmosphere, full body shot, anime art style, high quality, detailed, beautiful lighting, moody, cinematic, mysterious, atmospheric" },
      { id: "c-rooftop", label: "Rooftop Sunset", file: "06-c-rooftop.png",
        prompt: "beautiful anime girl, with short-medium chestnut brown hair, shoulder length, slightly messy tomboyish style, warm brown eyes, spirited and confident, fair healthy skin with natural flush, youthful energetic face, cute but determined features, 161cm athletic lean figure, fit and energetic, spirited energetic young woman, wearing a loose white summer blouse with rolled-up sleeves, wind catching the fabric, eyes closed with a peaceful content smile, wind blowing through her hair, face tilted slightly up toward the sky, standing on a building rooftop at golden hour sunset, orange and purple sky, city skyline in background, wind blowing gently, medium shot, anime art style, high quality, detailed, beautiful lighting, free, peaceful, beautiful, golden hour magic" }
    ]
  },
  {
    id: "07", nameCn: "牧濑红莉栖", nameEn: "Kurisu Makise", anime: "命运石之门 Steins;Gate",
    portrait: "07-kurisu-makise.png",
    vibe: "genius, tsundere, sharp-tongued beauty",
    features: {
      hair: "long auburn-chestnut hair reaching mid-back, slightly wavy, with ahoge",
      eyes: "violet-purple eyes, sharp and analytical",
      skin: "fair skin, light complexion",
      face: "refined intelligent face, sharp beautiful features",
      body: "160cm slender graceful figure",
      age: "brilliant composed young woman, early 20s"
    },
    scenes: [
      { id: "a-cafe", label: "Cafe Afternoon", file: "07-a-cafe.png",
        prompt: "beautiful anime girl, with long auburn-chestnut hair reaching mid-back, slightly wavy, with ahoge (antenna hair), violet-purple eyes, sharp and analytical, fair skin, light complexion, refined intelligent face, sharp beautiful features, 160cm slender graceful figure, brilliant composed young woman, early 20s, wearing a soft cream knit cardigan over a white t-shirt, relaxed casual style, gentle warm smile, chin resting on one hand, looking at the viewer with soft affectionate eyes, sitting at a window seat in a cozy cafe, warm afternoon sunlight, coffee cup on table, bokeh background, medium close-up shot, anime art style, high quality, detailed, beautiful lighting, warm, relaxed, intimate, natural beauty" },
      { id: "b-rain", label: "Rainy Street", file: "07-b-rain.png",
        prompt: "beautiful anime girl, with long auburn-chestnut hair reaching mid-back, slightly wavy, with ahoge (antenna hair), violet-purple eyes, sharp and analytical, fair skin, light complexion, refined intelligent face, sharp beautiful features, 160cm slender graceful figure, brilliant composed young woman, early 20s, wearing a dark navy trench coat over a light blouse, holding a clear umbrella, looking over her shoulder at the viewer with a mysterious slight smile, raindrops catching light, standing on a rain-soaked city street at twilight, neon reflections on wet pavement, moody blue-purple atmosphere, full body shot, anime art style, high quality, detailed, beautiful lighting, moody, cinematic, mysterious, atmospheric" },
      { id: "c-rooftop", label: "Rooftop Sunset", file: "07-c-rooftop.png",
        prompt: "beautiful anime girl, with long auburn-chestnut hair reaching mid-back, slightly wavy, with ahoge (antenna hair), violet-purple eyes, sharp and analytical, fair skin, light complexion, refined intelligent face, sharp beautiful features, 160cm slender graceful figure, brilliant composed young woman, early 20s, wearing a loose white summer blouse with rolled-up sleeves, wind catching the fabric, eyes closed with a peaceful content smile, wind blowing through her hair, face tilted slightly up toward the sky, standing on a building rooftop at golden hour sunset, orange and purple sky, city skyline in background, wind blowing gently, medium shot, anime art style, high quality, detailed, beautiful lighting, free, peaceful, beautiful, golden hour magic" }
    ]
  },
  {
    id: "08", nameCn: "灶门祢豆子", nameEn: "Nezuko Kamado", anime: "鬼灭之刃",
    portrait: "08-nezuko-kamado.png",
    vibe: "gentle, protective, iconic demon girl beauty",
    features: {
      hair: "long black hair with orange-red gradient tips, worn loose, with pink ribbon",
      eyes: "pink eyes, large and innocent",
      skin: "fair skin with soft warm undertone",
      face: "cute round face, gentle features",
      body: "153cm petite delicate figure",
      age: "gentle young woman with innocent charm"
    },
    scenes: [
      { id: "a-cafe", label: "Cafe Afternoon", file: "08-a-cafe.png",
        prompt: "beautiful anime girl, with long black hair with orange-red gradient tips, worn loose, with pink ribbon, pink eyes, large and innocent, fair skin with soft warm undertone, cute round face, gentle features, 153cm petite delicate figure, gentle young woman with innocent charm, wearing a soft cream knit cardigan over a white t-shirt, relaxed casual style, gentle warm smile, chin resting on one hand, looking at the viewer with soft affectionate eyes, sitting at a window seat in a cozy cafe, warm afternoon sunlight, coffee cup on table, bokeh background, medium close-up shot, anime art style, high quality, detailed, beautiful lighting, warm, relaxed, intimate, natural beauty" },
      { id: "b-rain", label: "Rainy Street", file: "08-b-rain.png",
        prompt: "beautiful anime girl, with long black hair with orange-red gradient tips, worn loose, with pink ribbon, pink eyes, large and innocent, fair skin with soft warm undertone, cute round face, gentle features, 153cm petite delicate figure, gentle young woman with innocent charm, wearing a dark navy trench coat over a light blouse, holding a clear umbrella, looking over her shoulder at the viewer with a mysterious slight smile, raindrops catching light, standing on a rain-soaked city street at twilight, neon reflections on wet pavement, moody blue-purple atmosphere, full body shot, anime art style, high quality, detailed, beautiful lighting, moody, cinematic, mysterious, atmospheric" },
      { id: "c-rooftop", label: "Rooftop Sunset", file: "08-c-rooftop.png",
        prompt: "beautiful anime girl, with long black hair with orange-red gradient tips, worn loose, with pink ribbon, pink eyes, large and innocent, fair skin with soft warm undertone, cute round face, gentle features, 153cm petite delicate figure, gentle young woman with innocent charm, wearing a loose white summer blouse with rolled-up sleeves, wind catching the fabric, eyes closed with a peaceful content smile, wind blowing through her hair, face tilted slightly up toward the sky, standing on a building rooftop at golden hour sunset, orange and purple sky, city skyline in background, wind blowing gently, medium shot, anime art style, high quality, detailed, beautiful lighting, free, peaceful, beautiful, golden hour magic" }
    ]
  },
  {
    id: "09", nameCn: "芙莉莲", nameEn: "Frieren", anime: "葬送的芙莉莲",
    portrait: "09-frieren.png",
    vibe: "ancient, serene, melancholic beauty, wise elf mage",
    features: {
      hair: "long silver-white hair in twin low ponytails, with green leaf hair ornaments",
      eyes: "deep green eyes, calm ancient wisdom in her gaze",
      skin: "pale porcelain skin, ethereal",
      face: "delicate elfin face with pointed ears, ageless beauty",
      body: "165cm slender graceful elfin figure",
      age: "ancient elf with youthful appearance, timeless beauty"
    },
    scenes: [
      { id: "a-cafe", label: "Cafe Afternoon", file: "09-a-cafe.png",
        prompt: "beautiful anime girl, with long silver-white hair in twin low ponytails, with green leaves or twigs as natural hair ornaments, deep green eyes, calm ancient wisdom in her gaze, pale porcelain skin, ethereal, delicate elfin face with pointed ears, ageless beauty, 165cm slender graceful elfin figure, ancient elf with youthful appearance, timeless beauty, wearing a soft cream knit cardigan over a white t-shirt, relaxed casual style, gentle warm smile, chin resting on one hand, looking at the viewer with soft affectionate eyes, sitting at a window seat in a cozy cafe, warm afternoon sunlight, coffee cup on table, bokeh background, medium close-up shot, anime art style, high quality, detailed, beautiful lighting, warm, relaxed, intimate, natural beauty" },
      { id: "b-rain", label: "Rainy Street", file: "09-b-rain.png",
        prompt: "beautiful anime girl, with long silver-white hair in twin low ponytails, with green leaves or twigs as natural hair ornaments, deep green eyes, calm ancient wisdom in her gaze, pale porcelain skin, ethereal, delicate elfin face with pointed ears, ageless beauty, 165cm slender graceful elfin figure, ancient elf with youthful appearance, timeless beauty, wearing a dark navy trench coat over a light blouse, holding a clear umbrella, looking over her shoulder at the viewer with a mysterious slight smile, raindrops catching light, standing on a rain-soaked city street at twilight, neon reflections on wet pavement, moody blue-purple atmosphere, full body shot, anime art style, high quality, detailed, beautiful lighting, moody, cinematic, mysterious, atmospheric" },
      { id: "c-rooftop", label: "Rooftop Sunset", file: "09-c-rooftop.png",
        prompt: "beautiful anime girl, with long silver-white hair in twin low ponytails, with green leaves or twigs as natural hair ornaments, deep green eyes, calm ancient wisdom in her gaze, pale porcelain skin, ethereal, delicate elfin face with pointed ears, ageless beauty, 165cm slender graceful elfin figure, ancient elf with youthful appearance, timeless beauty, wearing a loose white summer blouse with rolled-up sleeves, wind catching the fabric, eyes closed with a peaceful content smile, wind blowing through her hair, face tilted slightly up toward the sky, standing on a building rooftop at golden hour sunset, orange and purple sky, city skyline in background, wind blowing gently, medium shot, anime art style, high quality, detailed, beautiful lighting, free, peaceful, beautiful, golden hour magic" }
    ]
  },
  {
    id: "10", nameCn: "五条悟♀", nameEn: "Gojo Satoru (Female)", anime: "咒术回战（性转同人）",
    portrait: "10-gojo-satoru-female-ver..png",
    vibe: "overpowered, charismatic, cocky beautiful, strongest sorcerer",
    features: {
      hair: "spiky fluffy snow-white hair, messy stylish short-medium length",
      eyes: "stunning brilliant ice-blue eyes, Six Eyes with infinity pattern",
      skin: "fair skin, sharp jawline softened for feminine version",
      face: "strikingly beautiful androgynous face, sharp confident features",
      body: "175cm tall athletic feminine figure",
      age: "confident powerful young woman, mid 20s, overwhelming charisma"
    },
    scenes: [
      { id: "a-cafe", label: "Cafe Afternoon", file: "10-a-cafe.png",
        prompt: "beautiful anime girl, with spiky fluffy snow-white hair, messy stylish short-medium length, stunning brilliant ice-blue eyes, the Six Eyes with infinity pattern visible, fair skin, sharp jawline softened for feminine version, strikingly beautiful androgynous face, sharp confident features, 175cm tall athletic feminine figure, confident powerful young woman, mid 20s, overwhelming charisma, wearing a soft cream knit cardigan over a white t-shirt, relaxed casual style, gentle warm smile, chin resting on one hand, looking at the viewer with soft affectionate eyes, sitting at a window seat in a cozy cafe, warm afternoon sunlight, coffee cup on table, bokeh background, medium close-up shot, anime art style, high quality, detailed, beautiful lighting, warm, relaxed, intimate, natural beauty" },
      { id: "b-rain", label: "Rainy Street", file: "10-b-rain.png",
        prompt: "beautiful anime girl, with spiky fluffy snow-white hair, messy stylish short-medium length, stunning brilliant ice-blue eyes, the Six Eyes with infinity pattern visible, fair skin, sharp jawline softened for feminine version, strikingly beautiful androgynous face, sharp confident features, 175cm tall athletic feminine figure, confident powerful young woman, mid 20s, overwhelming charisma, wearing a dark navy trench coat over a light blouse, holding a clear umbrella, looking over her shoulder at the viewer with a mysterious slight smile, raindrops catching light, standing on a rain-soaked city street at twilight, neon reflections on wet pavement, moody blue-purple atmosphere, full body shot, anime art style, high quality, detailed, beautiful lighting, moody, cinematic, mysterious, atmospheric" },
      { id: "c-rooftop", label: "Rooftop Sunset", file: "10-c-rooftop.png",
        prompt: "beautiful anime girl, with spiky fluffy snow-white hair, messy stylish short-medium length, stunning brilliant ice-blue eyes, the Six Eyes with infinity pattern visible, fair skin, sharp jawline softened for feminine version, strikingly beautiful androgynous face, sharp confident features, 175cm tall athletic feminine figure, confident powerful young woman, mid 20s, overwhelming charisma, wearing a loose white summer blouse with rolled-up sleeves, wind catching the fabric, eyes closed with a peaceful content smile, wind blowing through her hair, face tilted slightly up toward the sky, standing on a building rooftop at golden hour sunset, orange and purple sky, city skyline in background, wind blowing gently, medium shot, anime art style, high quality, detailed, beautiful lighting, free, peaceful, beautiful, golden hour magic" }
    ]
  }
];

const SCENE_LABELS = {
  "a-cafe": { label: "Cafe Afternoon", icon: "\u2615", color: "#f5a623" },
  "b-rain": { label: "Rainy Street", icon: "\ud83c\udf27\ufe0f", color: "#6eb5ff" },
  "c-rooftop": { label: "Rooftop Sunset", icon: "\ud83c\udf05", color: "#ff6b8a" }
};
