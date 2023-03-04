const quizData = [
    {
        question: "Князь, крестивший Русь",
        a: "Рюрик",
        b: "Владимир Святославович",
        c: "Владимир Мономах",
        correct: "a",
    },
    {
        question: "На рубеже ХШ-Х1У в. наиболее развитыми политическими центрами Руси были",
        a: "Тверь и Москва",
        b: "Чернигов и Киев",
        c: "Новгород и Смоленск",
        correct: "a",

    },
    {
        question: "Наследственное земельное владение на Руси",
        a: "феод ",
        b: "вотчина",
        c: "надел",
        correct: "b",
    },
    {
        question: "Назовите значение Куликовской битвы (укажи лишнее)",
        a: "доказала важность объединения отдельных земель для совместной борьбы с неприятелем",
        b: "способствовала возрождению национального самосознания русского народа",
        c: "завершилось татаро-монгольское иго на Руси",
        correct: "c",
    },
    {
        question: "Со времен правления Ивана III в России появились новые военные подразделения (укажите лишнее)",
        a: "стрелецкие полки   ",
        b: "дворянское ополчение",
        c: "наемное войско",
        correct: "c",
    },
    {
        question: "Смутное время на Руси продолжалось до",
        a: "1613г",
        b: "1615г",
        c: "1700",
        correct: "a",
    },
    {
        question: "В 1612г. Новгородское ополчение, направленное против польских и шведских захватчиков возглавили",
        a: "Минин и Пожарский",
        b: "Василий Шуйский.",
        c: "Михаил Романов",
        correct: "a",
    },
    {
        question: "При Петре была основана регулярная армия, которая комплектовалась на основе",
        a: "рекрутских наборов",
        b: "Всеобщей воинской повинности",
        c: "дворянского ополчения",
        correct: "a",
    },
    {
        question: "В 1703 году Петр Великий основал новую столицу России",
        a: "Москву",
        b: "Санкт-Петербург",
        c: "Киев",
        correct: "b",
    },
    {
        question: "Преобладание   вывоза товаров из страны над ввозом",
        a: "меркантилизм",
        b: "кспортная ориентация",
        c: "Торговый баланс",
        correct: "a",
    },
    {
        question: "В 1812 г. Вторжение «Великой армии» французов в Россию возглавил",
        a: "Наполеон ",
        b: "Мюрат ",
        c: "Талейран",
        correct: "a",
    },
    {
        question: "Представители русской общественной мысли 1830-1850ых годов идеализировавшие русский народ, историческое прошлое России, считавшие, что Россия должна развиваться самобытным путем, назывались",
        a: "западники",
        b: "славянофилы",
        c: "декабрист",
        correct: "b",
    },
    {
        question: "Отмена крепостного права, проведение военной, судебной, земской формы относится к царствованию",
        a: "Павла I ",
        b: "Николая I",
        c: "Александра II",
        correct: "c",
    },
    {
        question: "Двоевластие установилось в России в",
        a: "марте 1917 г.    ",
        b: "апреле 1917 г",
        c: "октябре 1918 г.",
        correct: "a",
    },
    {
        question: "Декрет о земле, принятый II съездом Советов, предусматривал",
        a: "национализацию всей земли",
        b: "роспуск крестьянской общины",
        c: "наделение крестьян землей по потребностям",
        correct: "a",
    },
    {
        question: "Первая конституция СССР была принята",
        a: "1922г",
        b: "1924г",
        c: "1925г",
        correct: "a",
    },
    {
        question: "Господство однопартийной системы в СССР способствовало установлению:",
        a: "тоталитарного режима",
        b: "политического равноправия населения",
        c: "демократического режима",
        correct: "a",
    },
    {
        question: "Характерной чертой тоталитарной системы не является",
        a: "культ личности",
        b: "репрессии",
        c: "многопартийность",
        correct: "c",
    },
    {
        question: "План «Барбаросса» предусматривал... ",
        a: "колонизацию всей территории СССР",
        b: "превращение СССР в военного союзника Германии",
        c: "план молниеносной войны",
        correct: "c",
    },
    {
        question: "Битва на Курской дуге состоялась",
        a: "мае-июне 1943г.",
        b: "июне-июле 1943г.",
        c: "августе 1944г",
        correct: "b",
    },

        {
        question: "Партизанское движение в годы войны играло важную роль, так как...",
        a: "было независимым от Красной Армии",
        b: "охватило большие территории ",
        c: "велось за пределами СССР",
        correct: "b",
    },
        {
        question: "Основной результат освоения целины в 1950 гг.",
        a: "временное увеличение сбора зерна",
        b: "передача земли в собственность крестьянам",
        c: "переход > интенсивным методам ведения сельского хозяйства",
        correct: "a",
    },    {
        question: "Реформы 1965г. не дали результатов из-за",
        a: "их неприятия большинством населения",
        b: "внутренней борьбы КПСС",
        c: "смешивания либеральных и командных методов управления",
        correct: "c",
    },
    {
        question: "В годы правления Н.С.Хрущева",
        a: "введена плата за обучение в школах и вузах",
        b: "крестьянам разрешена свободная торговля на рынке",
        c: "развернулось широкое жилищное строительство",
        correct: "c",
    },
    {
        question: "Номенклатура в СССР в 1960-1980 годы-это",
        a: "слой руководящих привилегированных работников ",
        b: "ведущие представители науки и культуры",
        c: "низший слой административных чиновников",
        correct: "a",
    },{
        question: "Политический строй, установившийся в России по Конституции РФ 1993 года определяется как",
        a: "парламентская республика ",
        b: "президентская республика  ",
        c: "смешанная республика",
        correct: "c",
    },
    {
        question: "Радикальные (гайдаровские) реформы по переходу к рыночной экономике начались в России (год):",
        a: "1986 г.",
        b: "1990 г.",
        c: "1992 г.",
        correct: "c",
    },{
        question: "Верховная власть в Новгороде принадлежала?",
        a: "Верховная власть в Новгороде принадлежала князю",
        b: "Верховная власть в Новгороде принадлежала городской думе",
        c: "Верховная власть в Новгороде принадлежала народному собранию ",
        correct: "c",
    },{
        question: "Куликовская битва состоялась? ",
        a: "в 1380 году",
        b: "в 1552 году",
        c: "в 1382 году",
        correct: "a",
    },{
        question: "Переход предприятий и отраслей хозяйства из частных рук в руки государства - это",
        a: "Реструктуризация экономики",
        b: "Конфискация предприятий и отраслей хозяйства",
        c: "Национализация",
        correct: "с",
    },
    {
        question: "Укажите хронологические рамки Великой Отечественной войны",
        a: "22 июня 1941 года - 9 мая 1945 года",
        b: "1 сентября 1939 года - 2 сентября 1945 года",
        c: "7 декабря 1941 года - 2 сентября 1945 года",
        correct: "a",
    },    {
        question: "В 1945 году обладателями ядерного оружия являлось государство",
        a: "Российская Федерация",
        b: "Китайская Народная Республика",
        c: "Соединенные Штаты Америки",
        correct: "c",
    },    {
        question: "Противоборство двух сверхдержав СССР и США начавшиеся после окончания II Мировой войны, узловыми моментами которого были гонка вооружений, соперничество в Европе и   участие в региональных конфликтах - это",
        a: "Империализм",
        b: "Глобальная война",
        c: "Холодная война",
        correct: "c",
    },    {
        question: "Первым президентом России был",
        a: "В.В. Путин",
        b: "М.С. Горбачев",
        c: "Б.Н. Ельцин",
        correct: "c",
    }, {
        question: "Назовите имя президента СССР, избранного на этот пост в 1990 году",
        a: "Б.Н. Ельцин",
        b: "В.В. Путин",
        c: "М.С. Горбачев",
        correct: "c",
    },
    
    

  ];