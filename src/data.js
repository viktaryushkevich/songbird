const data = [
    [
        {
            id: 1,
            name: 'Тетерев',
            species: 'Lyrurus tetrix',
            description: 'Тетерев – достаточно крупная птица с маленькой головой и коротким клювом. Самцы по размерам больше, чем самки, длина их тела от 49 до 58 см, масса находится в пределах 1-1,4 кг, а самки в длину достигают от 40 до 45 см, а их вес составляет 0,7-1 кг',
            image: 'https://live.staticflickr.com/7479/15878882580_db9aa701fb_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/UIXHEHSYRN/XC524820-XC234703%20-%20Whooper%20Swan%20-%20Cygnus%20cygnus.mp3',
        },
        {
            id: 2,
            name: 'Рябчик',
            species: 'Tetrastes bonasia',
            description: 'Длина взрослого рябчика с хвостом составляет от 35 до 37 см, размах крыльев от 48 до 54 см. Масса самцов от 327 до 580 г, для самочек от 305 до 560 г. Масса птиц изменяется в зависимости от времени года, максимальных значений она достигает в ноябре-декабре. В течение зимы рябчики теряют вес и весной становятся гораздо меньше по размерам. Голова у рябчика маленькая, клюв короткий, изогнутый, сильный, длиной около 1 см.',
            image: 'https://live.staticflickr.com/1771/43782490572_0832d7bf7b_h.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234610-Default%20Project.mp3',
        },
        {
            id: 3,
            name: 'Перепел',
            species: 'Coturnix coturnix',
            description: 'Длина тела взрослой перепелки составляет от 16 до 20 см, масса находится в пределах  80 – 145 г. Оперение охристое, голова, спинка, надхвостье и хвост украшены бурыми поперечными полосами и пятнами, на глазах видна рыжая полоса. Самец отличается тёмно-рыжими щеками и зобом. Горло и область подбородка у него черного цвета. У самочки подбородок и горло охристое, а на животике и боках видны темные пестрины.',
            image: 'https://live.staticflickr.com/65535/48469283026_e11c0e6691_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234682-Default%20Project.mp3',
        },
        {
            id: 4,
            name: 'Сова уральская',
            species: 'Strix uralensis',
            description: 'Это одна из самых крупных неясытей. Её длина достигает 70 см, размах крыльев около 115 см, длина крыла примерно 35–40 см, хвоста 30 см. Главный отличительный признак вида – длинный, клиновидный, с темными полосами хвост: когда сова сидит на дереве, хвост далеко выступает из-под сложенных крыльев. Общая окраска спинной стороны беловато-охристая с бурым продольным рисунком и слабыми поперечными отметинами на больших перьях.',
            image: 'https://live.staticflickr.com/4803/32235476708_90d1a9c268_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/ACYAQZYZTA/XC324670-samiec%20i%20m%C5%82ody%202.mp3',
        }, 
        {
            id: 5,
            name: 'Пеночка-трещотка',
            species: 'Phylloscopus sibilatrix',
            description: 'Пеночка-трещотка длиной примерно от 11 до 13 см, размах крыльев от 19 до 24 см. Вес составляет примерно от 8 до 13 граммов. Верхняя сторона зелёная, грудь желтовато-белая. У маленькой птицы белое брюхо, жёлтое горло и жёлтые брови. Самец и самка окрашены одинаково. Пеночка-трещотка может прожить до 8 лет.',
            image: 'https://live.staticflickr.com/4855/30838878757_6307a9aa92_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC416412-180429_04_11.30h_fluiter_belarus_.mp3',
        },
        {
            id: 6,
            name: 'Серая славка',
            species: 'Sylvia communis',
            description: 'Небольшая подвижная птица мельче воробья. Спинная сторона серовато-бурая с пепельно-серой окраской головы, боков шеи и надхвостья; плечи рыжие; горло белое; остальная брюшная сторона розовато-белая.',
            image: 'https://live.staticflickr.com/1859/44481437692_46bb0c8e57_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/EHAHTZIMID/XC331532-LS110365_SC.mp3',
        }                
    ],
    [
        {
            id: 1,
            name: 'Шлемоносный казуар',
            species: 'Casuarius casuarius',
            description: 'Шлемоносный казуар достигает высоты 1,5 м и веса около 80 кг. На голове казуар имеет вырост, называемый «шлемом», который у самцов крупнее, чем у самок. Массивные трёхпалые ноги этой новогвинейской птицы вооружены большими когтями, особенно длинным является коготь внутреннего (первого) пальца. Этим оружием казуар способен наносить серьёзные раны, так как, защищаясь, наносит мощные удары ногами. Казуары быстро бегают и хорошо прыгают.',
            image: 'https://live.staticflickr.com/4183/34037884620_19bf190a83_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC132934-cassowary.mp3',
        },
        {
            id: 2,
            name: 'Эму',
            species: 'Dromaius novaehollandiae',
            description: 'Эму (лат. Dromaius novaehollandiae) — птица отряда казуарообразных, крупнейшая австралийская птица. Это вторая по величине птица после страуса. Ранее эму относили к страусообразным (классификация пересмотрена в 1980-е годы). Эму распространён на большей части материка Австралии, хотя избегает густонаселённых районов, густых лесов и засушливых зон.',
            image: 'https://live.staticflickr.com/3342/3518276406_21100026dc_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC287026-emu-drumming-bowra1.mp3',
        },
        {
            id: 3,
            name: 'Полулапчатый гусь',
            species: 'Anseranas semipalmata',
            description: 'Полулапчатый гусь - единственный вид семейства Anseranatidae отряда гусеобразных птиц. Иногда его классифицируют как отдельный род в семействе утиных (Anatidae). Однако не менее вероятно, что полулапчатый гусь более близко связан с паламедеями (Anhimidae), так как разделяет с ними некоторые свойства. К ним относятся сравнительно длинные лапы, длинная шея и сильно редуцированные плавательные перепонки. Самцы достигают величины 90 см — самки, как правило, несколько мельче.',
            image: 'https://live.staticflickr.com/8156/7465565964_1190f65056_z.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BFZLBCXHWQ/XC503277-skatg%C3%A5s.mp3',
        },
        {
            id: 4,
            name: 'Чёрный лебедь',
            species: 'Cygnus atratus',
            description: 'Взрослые особи достигают роста от 110 до 140 см и являются немного меньшими, чем лебедь-шипун, а их вес составляет от 5 до 8 кг. Шея чёрного лебедя наиболее длинная среди лебедей, благодаря 32 шейным позвонкам он может охотиться под водой в более глубоких водоёмах. В полёте шея составляет больше половины всей длины птицы. Оперение и лапы чёрного цвета, белыми являются лишь отдельные перья, спрятанные в глубине. На краях крыльев у чёрных лебедей кудрявые перья. Клюв светящегося красного цвета и украшен белым кольцом у края. Цвет глаз варьирует между оранжевым и светло-коричневым.',
            image: 'https://live.staticflickr.com/633/23715885321_3f29808094_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/FPDBIILGCX/XC495755-MIXPRE-1275_Black%20Swan_20190811_Winspears.mp3',
        },
        {
            id: 5,
            name: 'Кустарниковый большеног',
            species: 'Alectura lathami lathami',
            description: 'Кустарниковый большеног длиной от 60 до 75 см, размах крыльев 85 см. Это самый крупный вид большеногов в Австралии. Окраска оперения в основном чёрная, нижняя часть тела с крапинами белого цвета. Ноги длинные. Красная голова бесперая. Жёлтая или сине-серая гортань набухает у самца в брачный период.',
            image: 'https://live.staticflickr.com/65535/48254123137_0b3c0c5fa7_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OHGEFOWNMD/XC517533-Brushturkey%2006_42_07.mp3',
        },
        {
            id: 6,
            name: 'Глазчатая курица',
            species: 'Leipoa ocellata',
            description: 'Глазчатая курица длиной примерно 60 см. Самец весит 2 кг, самка — от 1,5 до 2 кг. У птиц сильные ноги и короткий, согнутый клюв. Оперение на голове и шее от коричневого до голубовато-серого. Верхняя часть тела и крылья имеют коричневые и черноватые полосы. Цвет брюха грязно-белый.',
            image: 'https://live.staticflickr.com/65535/47694852182_b300183223_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC407665-Leipoa_ocellata-FL%20Hattah%20NP%2020Oct15%208.04am%20LS117980a.mp3',
        },
    ],
    [
        {
            id: 1,
            name: 'Снежная куропатка',
            species: 'Lerwa lerwa',
            description: 'У птиц короткие округлые крылья и сильный клюв. У самцов на ногах шпора. Оперение верхней части тела самца и самки, а также головы и шеи полосами чёрно-белого цвета. Нижняя часть тела каштанового цвета. Клюв и ноги кораллового цвета.',
            image: 'https://live.staticflickr.com/7893/47398616552_9a918e0b21_h.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/PWDLINYMKL/XC266751-Snow%20Partridge1BL2015.mp3',
        },
        {
            id: 2,
            name: 'Тибетский улар',
            species: 'Tetraogallus tibetanus',
            description: 'Голова, шея и участок спины у шеи темно-серые с охристым налётом. Спина покрыта густым чёрным крапом. Брюхо покрыто полосами чёрного и белого цветов, черные полосы уже белых. зоб и грудь беловатого оттенка.  Самка отличается от самца рыжеватым налетом и темными крапинами на голове и шее.',
            image: 'https://live.staticflickr.com/65535/48445413157_23e0355fbb_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/QPDPKRWEEK/XC176140-Tibetan%20Snowcock%201%20130610.mp3',
        },
        {
            id: 3,
            name: 'Жемчужный турач',
            species: 'Francolinus pintadeanus pintadeanus',
            description: 'Длина тела птицы в среднем составляет 30—34 см, вес — 280—400 г. Самки немного меньше самцов. Жемчужные турачи обитают в Камбодже, Китае, Индии, Лаосе, Мьянме, на Филиппинах, в Таиланде и Вьетнаме. Они интродуцированы на Маврикий, Филиппины, Мадагаскар, в США, Чили и Аргентину[4]. Обитают в субтропических и тропических лесах.',
            image: 'https://live.staticflickr.com/1631/26735662096_e8b5abcabf_h.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/DYEJEXGTVP/XC487498-01199%20%E4%B8%AD%E5%8D%8E%E9%B9%A7%E9%B8%AA%20%E6%8C%87%E5%90%8D%E4%BA%9A%E7%A7%8D%20m%20%E6%B7%B1%E5%9C%B3%20%E5%91%A8%E5%93%B2.mp3',
        },
        {
            id: 4,
            name: 'Немой перепел',
            species: 'Coturnix japonica',
            description: 'Немой перепел, или японский перепел[1] (лат. Coturnix japonica); некоторыми считается подвидом обыкновенного перепела — лат. Coturnix coturnix japonica), — птица подсемейства куропатковых отряда курообразных. Одомашнен человеком и разводится ради мяса и яиц; используется также как модельный организм в научно-исследовательских (лабораторных) целях.',
            image: 'https://live.staticflickr.com/65535/49384418337_c05193e6b6_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YNOAMCSSHX/XC448524-%20180419%20%E5%8C%97%E5%85%AB%E6%BB%A7%20%E4%BD%8E%E7%9F%AE%E7%A8%80%E7%96%8F%E8%8A%A6%E8%8B%87%E5%9C%B0SHADOW_0162S12.mp3',
        },
        {
            id: 5,
            name: 'Итагин',
            species: 'Ithaginis cruentus berezowskii',
            description: 'Самец кровавого фазана достигает длины от 44 до 48 см. Самки несколько меньше и достигают длины от 40 до 42 см. Масса — от 410 до 620 г. Оперение очень мягкое, у птиц обоего пола также имеется хохол, который у самки немного короче. Хвост относительно короткий для фазанов, ступенчатый, состоящий из 14 перьев. Клюв короткий и сильно согнут вниз. Клюв чёрный с красным основанием. Голая кожа за глазами красная, во время размножения у самца принимает ярко-красный цвет. Ноги длинные по сравнению с телом и сильные. Их цвет ярко-красный.',
            image: 'https://live.staticflickr.com/903/26935101897_7642dc11b4_b.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/QPDPKRWEEK/XC175919-Blood%20Pheasant%202%20130612.mp3',
        },
        {
            id: 6,
            name: 'Глазчатый фазан',
            species: 'Tragopan temminckii',
            description: 'Глазчатый трагопан длиной 60 см — это коренастая птица с коротким хвостом. У самца красное оперение с серыми и чёрно-белыми пятнами. Беспёрое, голубое лицо обрамлено чёрным цветом. Хохолок, шея и грудь оранжевые. У свисающих подобных лацканам мешков гортани узор состоит из оттенков синего и контрастных красных пятен. От похожего трагопана-сатира он отличается, прежде всего, более светлым синим цветом лица и красной верхней стороной. У самки коричневое оперение с белыми пятнами, очень похожа на самок трагопана-сатира.',
            image: 'https://live.staticflickr.com/5569/14739801336_33a0ed4369_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/PWDLINYMKL/XC265943-Temminck%27s%20Tragopan2FP2015.mp3',
        },
    ],
    [
        {
            id: 1,
            name: 'Голубокрылый чирок',
            species: 'Spatula discors',
            description: 'Длина голубокрылого чирка — 40 см, размах крыльев — около 57 см, вес — около 400 г. У него происходит 2 линьки за год и третья линька на первом году жизни. У взрослого самца серовато-голубая голова с белым серпом на лице, светло-коричневое тело с белым пятном сзади и черный хвост. Взрослая самка пестро-коричневая с беловатой областью у основания носа. У обоих полов голубое зеркало и желтые лапы. В полете они особенно стремительно взмахивают крыльями.',
            image: 'https://live.staticflickr.com/7877/46411970304_5e0080e5a6_h.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WCNFEBIHCJ/XC139897-BWTE001b.mp3',
        },
        {
            id: 2,
            name: 'Калифорнийский хохлатый перепел',
            species: 'Callipepla californica',
            description: 'Калифорнийский хохлатый перепел характеризуется длиной от 23 до 25 см. Самец и самка окрашены одинаково, оперение самок, тем не менее, немного бледнее, у самца дополнительно присутствует чёрный надгортанник и рисунок лица. Верхняя часть тела и голова серо-бурого цвета. Перья хохла с белыми вершинами. Шея и грудь голубовато-серые. На боковых сторонах коричневатого цвета имеются тонкие, белые продольные полосы. Брюхо и подхвостье жёлто-коричневатые с чёрным чешуйчатым рисунком.',
            image: 'https://live.staticflickr.com/65535/48400199321_3d59cd5ac4_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/XEIROMUDEB/XC159657-IAC%202012-09-22%20T09-46-30.mp3',
        },
        {
            id: 3,
            name: 'Воротниковый рябчик',
            species: 'Bonasa umbellus',
            description: 'Длина тела 43—48 см, длина хвоста 11,4—19 см. Размах крыльев около 60 см, при длине крыла до 47 см, клюв — 2 см. Вес составляет 500—650 г (отдельные самцы весят до 800 г). Окрас оперения у рябчиков, обитающих в разных частях ареала отличается: птицы, живущие в южных широтах, отличаются оперением в котором преобладают красно-коричневые оттенки, а птицы, живущие в северных широтах, характеризуются преобладанием в оперении серых оттенков.',
            image: 'https://live.staticflickr.com/4090/35482548152_e05cec2273_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WOPIRNCCSX/XC324960-Foret%20Montmorency-2016-06-11-06h42%20LS115833.mp3',
        },
        {
            id: 4,
            name: 'Черноклювая гагара',
            species: 'Gavia immer',
            description: 'Одна из наиболее крупных гагар, размерами уступает лишь белоклювой. Длина тела — 690—910 мм, длина крыла — 331—400 мм, вес 2,7—6,3 кг. У взрослых птиц летом голова и шея чёрные с зелёным металлическим оттенком, узкий поперечный участок у основания горла имеет короткую продольной белую штриховку. Более широкий участок с такой штриховкой расположен по бокам шеи, образуя светлый полуошейник в её средней части. Верхняя сторона тела чёрная с крупными четырёхугольными (в плечевой области) и многочисленными мелкими округлыми белыми пятнами. Нижняя сторона белая с узкими продольными чёрными полосками по бокам груди.',
            image: 'https://live.staticflickr.com/5444/9053936503_d780715333_h.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YUQKLBFUPV/XC254325-COLO-Kawagama-June27-2015.mp3',
        },
        {
            id: 5,
            name: 'Американская выпь',
            species: 'Botaurus lentiginosus',
            description: 'Американская выпь является средней по размеру цаплей с толстым телом и шеей и короткими ногами. Верхняя часть тела коричневого окраса, с мелкими чёрными пятнами, нижняя — чёрно-белая. Шея белого цвета. От выпи европейской её отличают размер и толщина когтей на ногах.',
            image: 'https://live.staticflickr.com/8266/29079238213_2595b35af1_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/WOKAPEXFUA/XC419704-2018-06-08%20-%20British%20Columbia%20-%20Prince%20George%20-%20MIXPRE-070%20-%20Giscome%20American%20Bittern.mp3',
        },
        {
            id: 6,
            name: 'Большая голубая цапля',
            species: 'Ardea herodias',
            description: 'Большая голубая цапля является самой крупной цаплей Северной Америки, её полная длина составляет 97—137 см, а вес 2,1—2,5 кг. Средний размах крыльев — 213 см. Крылья длинные, закруглённые. Клюв длинный, на конце имеет коническую форму, окрашен в светло-жёлтый цвет. Хвост короткий. Ноги длинные, зелёные. Шея также длинная. Оперение в верхней части тела серое, на шее имеются белые, чёрные и ржаво-коричневые полосы. У самцов на затылке имеется густой хохолок чёрных перьев. Также самцы несколько крупнее самок.',
            image: 'https://live.staticflickr.com/65535/48349031122_e43167cfe7_4k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/XEIROMUDEB/XC210695-IAC266%20gbhe.MP3',
        },
    ],
    [
        {
            id: 1,
            name: 'Страус',
            species: 'Struthio camelus',
            description: 'Африканский страус — самая крупная из современных птиц: высотой до 270 см и массой до 156 кг. Страус имеет плотное телосложение, длинную шею и небольшую уплощённую голову. Клюв прямой и плоский, с роговым «когтем» на надклювье, довольно мягкий. Глаза большие, с густыми ресницами на верхнем веке. Страусы — нелетающие птицы. Для них характерно полное отсутствие киля и слаборазвитая грудная мускулатура; скелет не пневматичен, за исключением бедренных костей. Крылья у страусов недоразвитые; два пальца на них заканчиваются когтями, или шпорами. Задние конечности длинные и сильные, всего с двумя пальцами. Один из пальцев заканчивается подобием рогового копыта — на него птица опирается при беге',
            image: 'https://live.staticflickr.com/8651/29081079126_ea2513599c_h.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/DNKBTPCMSQ/Ostrich%20RV%202-10.mp3',
        },
        {
            id: 2,
            name: 'Обыкновенная цесарка',
            species: 'Numida meleagris',
            description: 'Обыкновенная цесарка - птица из семейства цесарковых. Единственный вид рода Numida, устаревшее название — Numida ptilorhynca, одомашнен человеком. Характеризуются рогообразным отростком на темени и красными мясистыми бородками. В Восточной Африке именуются канга (суахили kanga, или khanga), в Южной Африке (африкаанс) также называются генефалами (букв. "гвинейская птица"), в Италии — фараонской курицей',
            image: 'https://live.staticflickr.com/65535/49163507583_a99e043cd7_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/RLSEYIEVCI/XC363058-tarentaal.mp3',
        },
        {
            id: 3,
            name: 'Турач коки',
            species: 'Peliperdix coqui coqui',
            description: 'Выражен половой диморфизм. У самцов красно-коричневая макушка, над глазами и клювом, а также на подбородке, горле, щеках, затылке и по бокам шеи оперение золотистого цвета. Нижняя часть шеи и затылок покрыты полосами чёрно-белого цвета. Верхняя часть тела имеет отчётливый перепелиный рисунок, нижняя часть светло-жёлтая с чёрными полосами. Перья хвоста ржаво-жёлтые. У самок бурая макушка и светло-жёлтое лицо. Пунктирная полоса чёрно-белого цвета тянется от бровей через виски и заканчивается по бокам шеи. Та же самая полоса проходит от уголков клюва вниз. Горло белое, шея, грудь и верхняя часть тела красно-коричневые, стержень перьев белый. Нижняя сторона бледно-жёлтая с чёрными полосами.',
            image: 'https://live.staticflickr.com/4910/45156531754_b72d60dd4b_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC516148-Peliperdix_coqui_nom-FL%20X%20song%20Polokwane%20GameRes%2030Oct19%205.43am%20LS115231a.mp3',
        },
        {
            id: 4,
            name: 'Капский турач',
            species: 'Pternistis capensis',
            description: 'Капский турач длиной 40—42 см, в среднем самец крупнее самки. У него ярко-красные ноги. Оперение очень тёмное, с тонкими серыми и белыми линиями. Только затылок и макушка головы одноцветные. Самец и самка внешне похожи, только у самца по две шпоры на ногах, а у самки только одна. Молодые птицы похожи на взрослых, у них более тёмные ноги и более чёткие линии в оперении. Призывный крик — громкое «какалак-какалак-какалак».',
            image: 'https://live.staticflickr.com/65535/48396929671_af2f46c586_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC392667-LS105875%20Cape%20Francolin%20cal%20and%20call%20in%20flight%20A.mp3',
        },
        {
            id: 5,
            name: 'Обыкновенный перепел',
            species: 'Coturnix coturnix',
            description: 'Этот вид был впервые описан Карлом Линнеем в своей книге «Systema naturae» в 1758 году как «Tetrao coturnix». Длина тела 16—22 см, вес 91—131 грамм. Оперение охристого цвета, верх головы, спина, надхвостье и верхние кроющие перья хвоста в тёмных и светлых бурых поперечных полосках и пятнах, позади глаз рыжеватая полоска. У самца щёки тёмно-рыжие, зоб рыжий, подбородок и горло чёрные. Самка отличается от него бледно-охристым подбородком и горлом и присутствием чёрно-бурых пятен (пестрин) на нижней части туловища и боках.',
            image: 'https://live.staticflickr.com/65535/48469283026_e11c0e6691_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/HZKCNRIPRH/XC126341-SpurfowlORGuinneefowl04Jan2013BenfontijnFreeStateSouthAfrika2.mp3',
        },
        {
            id: 6,
            name: 'Африканский пингвин',
            species: 'Spheniscus demersus',
            description: 'Пингвины в воде могут развивать скорость до 20 км/ч, нырять глубже 100 м. и задерживать дыхание на 2-3 минуты. В течение кормёжки могут проплывать 70—120 км в океане. Африканский пингвин, сбежавший во время наводнения в Тбилиси 2015 года из местного зоопарка, проплыл 60 км. Питаются в основном мелкой рыбой (мальками сельди, анчоусов, сардин и др.). Основные враги — человек, акулы, чайки (для птенцов), морские котики (как конкурент за добычу и как хищник) и одичавшие кошки (для птенцов и яиц в некоторых колониях).',
            image: 'https://live.staticflickr.com/65535/49204518852_9b69c907a4_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC392704-LS106470%20STONE%20POINT%20African%20Penguin%20calls%20A%20juv%20calls%20A.mp3',
        }
    ],
    [
        {
            id: 1,
            name: 'Антарктическая крачка',
            species: 'Sterna vittata',
            description: 'Ареал: южные моря Антарктики и Субантарктики. На север встречается до Кергелена, Новой Зеландии, Огненной Земли, Фолклендов и Тристан-да-Кунья, реже — до юга Бразилии и Австралии. В Южной Америке ареал пересекается с местообитанием южноамериканской крачки, сезонно — полярной крачки, которая ежегодно мигрирует из Арктики в Антарктику. Вид широко распространён, присвоенный ей охранный статус — «вызывающие наименьшие опасения». Общее количество особей оценивается в 140 тысяч.',
            image: 'https://live.staticflickr.com/1213/5105905438_277d27994c_c.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/HKBZXSHAHB/XC332011-Tern%2C%20Antarctic.mp3',
        },
        {
            id: 2,
            name: 'Южнополярный поморник',
            species: 'Stercorarius maccormicki',
            description: 'Южнополя́рный помо́рник (лат. Catharacta maccormicki) — морская птица, принадлежащая роду больших поморников (Catharacta) семейства поморниковых отряда ржанкообразных, широко распространённая в Антарктике. Впервые вид был описан в 1893 году как Stercorarius maccormicki британским орнитологом Говардом Саундерсом (англ. Howard Saunders, 1835—1907). Среди различных авторов нет единого мнения к какому роду относить южнополярного поморника. Нередко его продолжают рассматривать в составе рода Stercorarius, включающего поморников Северного полушария. ',
            image: 'https://live.staticflickr.com/8308/29196611570_cde47773b7_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/XC305317-STE-022SouthPolarSkua_2008_long.mp3',
        },
        {
            id: 3,
            name: 'Большой конёк',
            species: 'Anthus antarcticus',
            description: 'Большой конёк (лат. Anthus antarcticus) — певчая птица из семейства трясогузковых. Эндемик острова Южная Георгия, единственная певчая птица Субантарктики. Гнездо из соломинок устраивает обычно в траве, куда откладывает четыре яйца в год. Питается насекомыми и паукообразными. Вид находился под угрозой из-за серых крыс, завезённых на остров, а также антропогенных факторов.',
            image: 'https://live.staticflickr.com/5443/8766171640_355df28f2e_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/FPAGKPAQYO/XC318725-SouthGeorgia%20Pipit_Salisbury_24dec2015_Fschmitt_2.mp3',
        },
        {
            id: 4,
            name: 'Белая ржанка',
            species: 'Chionis albus',
            description: 'Длина тела от 34 до 41 см, масса варьирует от 460 до 780 г. Размах крыльев от 74 до 84 см. Половой диморфизм отсутствует. Самцы немного крупнее самок. Оперение полностью белое, крылья небольшие, лапы короткие. Типично для белых ржанок быстрое передвижение по земле, во время которого они так же, как голуби, кивают головой.',
            image: 'https://live.staticflickr.com/7813/39713643563_5c8b7e8519_k.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/FPAGKPAQYO/XC415432-Snowy%20Sheathbill_HalfMoon_Sshetlands_7jan2018_Fschmitt.mp3',
        },
        {
            id: 5,
            name: 'Антарктический буревестник',
            species: 'Thalassoica antarctica',
            description: 'Антаркти́ческий буреве́стник (лат. Thalassoica antarctica) — морская птица, принадлежащая монотипическому роду антарктических буревестников (Thalassoica) семейства буревестниковых отряда буревестникообразных (трубконосых), распространённая в Антарктике. Впервые вид был описан в 1789 году как Procellaria antarctica немецким врачом и натуралистом Иоганном Фридрихом Гмелиным (нем. Johann Friedrich Gmelin, 1748—1804). Позднее этот вид был помещён в род Thalassoica.',
            image: 'https://live.staticflickr.com/8720/28183889703_84c6166c63_h.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/STE-021antpetrellmp3single.mp3',
        },
        {
            id: 6,
            name: 'Антарктический пингвин',
            species: 'Pygoscelis antarcticus',
            description: 'Ареал данного вида — побережье Антарктиды со стороны Южной Америки и прилегающих островов, на север распространён до Южной Георгии, Буве и Баллени. Заплывает до Фолклендских островов. Также Антарктические пингвины встречаются и на айсбергах в Антарктике. Количество особей оценивается в 6,5—7,5 миллион пар. Взрослые антарктические пингвины достигают роста 60—70 см и веса около 4,5 кг.[3] Задняя сторона тела и головы, а также клюв у антарктических пингвинов тёмно-серые, почти чёрные, передняя сторона — белая. По шее, от уха к уху, идет тонкая чёрная полоска. Птенцы покрыты серым пухом (спереди — более светлым). Гнёзда пингвины строят среди камней, самец и самка попеременно 5—10 дней высиживают 1—2 яйца в течение 35 дней. В возрасте 50—60 дней молодняк уже начинает выходить в море.',
            image: 'https://live.staticflickr.com/5818/23933902485_1d2d196279_z.jpg',
            audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/XC254602-Chinstrap%20Penguin2015-2-19-5.mp3',
        },
    ],
];

export default data;