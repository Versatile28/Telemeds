;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';

    //! moment.js locale configuration

    moment.defineLocale('af', {
        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM : function (input) {
            return /^nm$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'vm' : 'VM';
            } else {
                return isLower ? 'nm' : 'NM';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Vandag om] LT',
            nextDay : '[Môre om] LT',
            nextWeek : 'dddd [om] LT',
            lastDay : '[Gister om] LT',
            lastWeek : '[Laas] dddd [om] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'oor %s',
            past : '%s gelede',
            s : '\'n paar sekondes',
            ss : '%d sekondes',
            m : '\'n minuut',
            mm : '%d minute',
            h : '\'n uur',
            hh : '%d ure',
            d : '\'n dag',
            dd : '%d dae',
            M : '\'n maand',
            MM : '%d maande',
            y : '\'n jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
        },
        week : {
            dow : 1, // Maandag is die eerste dag van die week.
            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ar-dz', {
        months : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ar-kw', {
        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap = {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '0': '0'
    }, pluralForm = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals = {
        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    }, pluralize = function (u) {
        return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return str.replace(/%d/i, number);
        };
    }, months = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];

    moment.defineLocale('ar-ly', {
        months : months,
        monthsShort : months,
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'بعد %s',
            past : 'منذ %s',
            s : pluralize('s'),
            ss : pluralize('s'),
            m : pluralize('m'),
            mm : pluralize('m'),
            h : pluralize('h'),
            hh : pluralize('h'),
            d : pluralize('d'),
            dd : pluralize('d'),
            M : pluralize('M'),
            MM : pluralize('M'),
            y : pluralize('y'),
            yy : pluralize('y')
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ar-ma', {
        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$1 = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    };

    moment.defineLocale('ar-sa', {
        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$1[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss : '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$2 = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, numberMap$1 = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    }, pluralForm$1 = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals$1 = {
        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    }, pluralize$1 = function (u) {
        return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm$1(number),
                str = plurals$1[u][pluralForm$1(number)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return str.replace(/%d/i, number);
        };
    }, months$1 = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];

    moment.defineLocale('ar', {
        months : months$1,
        monthsShort : months$1,
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'بعد %s',
            past : 'منذ %s',
            s : pluralize$1('s'),
            ss : pluralize$1('s'),
            m : pluralize$1('m'),
            mm : pluralize$1('m'),
            h : pluralize$1('h'),
            hh : pluralize$1('h'),
            d : pluralize$1('d'),
            dd : pluralize$1('d'),
            M : pluralize$1('M'),
            MM : pluralize$1('M'),
            y : pluralize$1('y'),
            yy : pluralize$1('y')
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap$1[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$2[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var suffixes = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        6: '-ncı',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı',
        90: '-ıncı'
    };

    moment.defineLocale('az', {
        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugün saat] LT',
            nextDay : '[sabah saat] LT',
            nextWeek : '[gələn həftə] dddd [saat] LT',
            lastDay : '[dünən] LT',
            lastWeek : '[keçən həftə] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s əvvəl',
            s : 'birneçə saniyə',
            ss : '%d saniyə',
            m : 'bir dəqiqə',
            mm : '%d dəqiqə',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gün',
            dd : '%d gün',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir il',
            yy : '%d il'
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM : function (input) {
            return /^(gündüz|axşam)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'gecə';
            } else if (hour < 12) {
                return 'səhər';
            } else if (hour < 17) {
                return 'gündüz';
            } else {
                return 'axşam';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '-ıncı';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
            'dd': 'дзень_дні_дзён',
            'MM': 'месяц_месяцы_месяцаў',
            'yy': 'год_гады_гадоў'
        };
        if (key === 'm') {
            return withoutSuffix ? 'хвіліна' : 'хвіліну';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'гадзіна' : 'гадзіну';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }

    moment.defineLocale('be', {
        months : {
            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
        },
        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays : {
            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY г.',
            LLL : 'D MMMM YYYY г., HH:mm',
            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar : {
            sameDay: '[Сёння ў] LT',
            nextDay: '[Заўтра ў] LT',
            lastDay: '[Учора ў] LT',
            nextWeek: function () {
                return '[У] dddd [ў] LT';
            },
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return '[У мінулую] dddd [ў] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[У мінулы] dddd [ў] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'праз %s',
            past : '%s таму',
            s : 'некалькі секунд',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithPlural,
            hh : relativeTimeWithPlural,
            d : 'дзень',
            dd : relativeTimeWithPlural,
            M : 'месяц',
            MM : relativeTimeWithPlural,
            y : 'год',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM : function (input) {
            return /^(дня|вечара)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночы';
            } else if (hour < 12) {
                return 'раніцы';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечара';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
                case 'D':
                    return number + '-га';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('bg', {
        months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Днес в] LT',
            nextDay : '[Утре в] LT',
            nextWeek : 'dddd [в] LT',
            lastDay : '[Вчера в] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[В изминалата] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[В изминалия] dddd [в] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'след %s',
            past : 'преди %s',
            s : 'няколко секунди',
            ss : '%d секунди',
            m : 'минута',
            mm : '%d минути',
            h : 'час',
            hh : '%d часа',
            d : 'ден',
            dd : '%d дни',
            M : 'месец',
            MM : '%d месеца',
            y : 'година',
            yy : '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-ев';
            } else if (last2Digits === 0) {
                return number + '-ен';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
            } else if (lastDigit === 1) {
                return number + '-ви';
            } else if (lastDigit === 2) {
                return number + '-ри';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
            } else {
                return number + '-ти';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('bm', {
        months : 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
        monthsShort : 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
        weekdays : 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
        weekdaysShort : 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
        weekdaysMin : 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'MMMM [tile] D [san] YYYY',
            LLL : 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
            LLLL : 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm'
        },
        calendar : {
            sameDay : '[Bi lɛrɛ] LT',
            nextDay : '[Sini lɛrɛ] LT',
            nextWeek : 'dddd [don lɛrɛ] LT',
            lastDay : '[Kunu lɛrɛ] LT',
            lastWeek : 'dddd [tɛmɛnen lɛrɛ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s kɔnɔ',
            past : 'a bɛ %s bɔ',
            s : 'sanga dama dama',
            ss : 'sekondi %d',
            m : 'miniti kelen',
            mm : 'miniti %d',
            h : 'lɛrɛ kelen',
            hh : 'lɛrɛ %d',
            d : 'tile kelen',
            dd : 'tile %d',
            M : 'kalo kelen',
            MM : 'kalo %d',
            y : 'san kelen',
            yy : 'san %d'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$3 = {
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
        '0': '০'
    },
    numberMap$2 = {
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9',
        '০': '0'
    };

    moment.defineLocale('bn', {
        months : 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort : 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
        weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
        weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
        weekdaysMin : 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
        longDateFormat : {
            LT : 'A h:mm সময়',
            LTS : 'A h:mm:ss সময়',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm সময়',
            LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
        },
        calendar : {
            sameDay : '[আজ] LT',
            nextDay : '[আগামীকাল] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[গতকাল] LT',
            lastWeek : '[গত] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s পরে',
            past : '%s আগে',
            s : 'কয়েক সেকেন্ড',
            ss : '%d সেকেন্ড',
            m : 'এক মিনিট',
            mm : '%d মিনিট',
            h : 'এক ঘন্টা',
            hh : '%d ঘন্টা',
            d : 'এক দিন',
            dd : '%d দিন',
            M : 'এক মাস',
            MM : '%d মাস',
            y : 'এক বছর',
            yy : '%d বছর'
        },
        preparse: function (string) {
            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
                return numberMap$2[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$3[match];
            });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'রাত' && hour >= 4) ||
                    (meridiem === 'দুপুর' && hour < 5) ||
                    meridiem === 'বিকাল') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'রাত';
            } else if (hour < 10) {
                return 'সকাল';
            } else if (hour < 17) {
                return 'দুপুর';
            } else if (hour < 20) {
                return 'বিকাল';
            } else {
                return 'রাত';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$4 = {
        '1': '༡',
        '2': '༢',
        '3': '༣',
        '4': '༤',
        '5': '༥',
        '6': '༦',
        '7': '༧',
        '8': '༨',
        '9': '༩',
        '0': '༠'
    },
    numberMap$3 = {
        '༡': '1',
        '༢': '2',
        '༣': '3',
        '༤': '4',
        '༥': '5',
        '༦': '6',
        '༧': '7',
        '༨': '8',
        '༩': '9',
        '༠': '0'
    };

    moment.defineLocale('bo', {
        months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
        weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[དི་རིང] LT',
            nextDay : '[སང་ཉིན] LT',
            nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
            lastDay : '[ཁ་སང] LT',
            lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ལ་',
            past : '%s སྔན་ལ',
            s : 'ལམ་སང',
            ss : '%d སྐར་ཆ།',
            m : 'སྐར་མ་གཅིག',
            mm : '%d སྐར་མ',
            h : 'ཆུ་ཚོད་གཅིག',
            hh : '%d ཆུ་ཚོད',
            d : 'ཉིན་གཅིག',
            dd : '%d ཉིན་',
            M : 'ཟླ་བ་གཅིག',
            MM : '%d ཟླ་བ',
            y : 'ལོ་གཅིག',
            yy : '%d ལོ'
        },
        preparse: function (string) {
            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
                return numberMap$3[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$4[match];
            });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
                    (meridiem === 'ཉིན་གུང' && hour < 5) ||
                    meridiem === 'དགོང་དག') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'མཚན་མོ';
            } else if (hour < 10) {
                return 'ཞོགས་ཀས';
            } else if (hour < 17) {
                return 'ཉིན་གུང';
            } else if (hour < 20) {
                return 'དགོང་དག';
            } else {
                return 'མཚན་མོ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function relativeTimeWithMutation(number, withoutSuffix, key) {
        var format = {
            'mm': 'munutenn',
            'MM': 'miz',
            'dd': 'devezh'
        };
        return number + ' ' + mutation(format[key], number);
    }
    function specialMutationForYears(number) {
        switch (lastNumber(number)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return number + ' bloaz';
            default:
                return number + ' vloaz';
        }
    }
    function lastNumber(number) {
        if (number > 9) {
            return lastNumber(number % 10);
        }
        return number;
    }
    function mutation(text, number) {
        if (number === 2) {
            return softMutation(text);
        }
        return text;
    }
    function softMutation(text) {
        var mutationTable = {
            'm': 'v',
            'b': 'v',
            'd': 'z'
        };
        if (mutationTable[text.charAt(0)] === undefined) {
            return text;
        }
        return mutationTable[text.charAt(0)] + text.substring(1);
    }

    moment.defineLocale('br', {
        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h[e]mm A',
            LTS : 'h[e]mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D [a viz] MMMM YYYY',
            LLL : 'D [a viz] MMMM YYYY h[e]mm A',
            LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
        },
        calendar : {
            sameDay : '[Hiziv da] LT',
            nextDay : '[Warc\'hoazh da] LT',
            nextWeek : 'dddd [da] LT',
            lastDay : '[Dec\'h da] LT',
            lastWeek : 'dddd [paset da] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'a-benn %s',
            past : '%s \'zo',
            s : 'un nebeud segondennoù',
            ss : '%d eilenn',
            m : 'ur vunutenn',
            mm : relativeTimeWithMutation,
            h : 'un eur',
            hh : '%d eur',
            d : 'un devezh',
            dd : relativeTimeWithMutation,
            M : 'ur miz',
            MM : relativeTimeWithMutation,
            y : 'ur bloaz',
            yy : specialMutationForYears
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal : function (number) {
            var output = (number === 1) ? 'añ' : 'vet';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                if (number === 1) {
                    result += 'sekunda';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sekunde';
                } else {
                    result += 'sekundi';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
            case 'mm':
                if (number === 1) {
                    result += 'minuta';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'minute';
                } else {
                    result += 'minuta';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'jedan sat' : 'jednog sata';
            case 'hh':
                if (number === 1) {
                    result += 'sat';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sata';
                } else {
                    result += 'sati';
                }
                return result;
            case 'dd':
                if (number === 1) {
                    result += 'dan';
                } else {
                    result += 'dana';
                }
                return result;
            case 'MM':
                if (number === 1) {
                    result += 'mjesec';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'mjeseca';
                } else {
                    result += 'mjeseci';
                }
                return result;
            case 'yy':
                if (number === 1) {
                    result += 'godina';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'godine';
                } else {
                    result += 'godina';
                }
                return result;
        }
    }

    moment.defineLocale('bs', {
        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[jučer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return '[prošlu] dddd [u] LT';
                    case 6:
                        return '[prošle] [subote] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prošli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            ss     : translate,
            m      : translate,
            mm     : translate,
            h      : translate,
            hh     : translate,
            d      : 'dan',
            dd     : translate,
            M      : 'mjesec',
            MM     : translate,
            y      : 'godinu',
            yy     : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ca', {
        months : {
            standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
            format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
            isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort : 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact : true,
        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin : 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM [de] YYYY',
            ll : 'D MMM YYYY',
            LLL : 'D MMMM [de] YYYY [a les] H:mm',
            lll : 'D MMM YYYY, H:mm',
            LLLL : 'dddd D MMMM [de] YYYY [a les] H:mm',
            llll : 'ddd D MMM YYYY, H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextDay : function () {
                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastDay : function () {
                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'd\'aquí %s',
            past : 'fa %s',
            s : 'uns segons',
            ss : '%d segons',
            m : 'un minut',
            mm : '%d minuts',
            h : 'una hora',
            hh : '%d hores',
            d : 'un dia',
            dd : '%d dies',
            M : 'un mes',
            MM : '%d mesos',
            y : 'un any',
            yy : '%d anys'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal : function (number, period) {
            var output = (number === 1) ? 'r' :
                (number === 2) ? 'n' :
                (number === 3) ? 'r' :
                (number === 4) ? 't' : 'è';
            if (period === 'w' || period === 'W') {
                output = 'a';
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var months$2 = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');

    var monthsParse = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i];
    // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
    // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
    var monthsRegex = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

    function plural$1(n) {
        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
    }
    function translate$1(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':  // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
            case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$1(number) ? 'sekundy' : 'sekund');
                } else {
                    return result + 'sekundami';
                }
                break;
            case 'm':  // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$1(number) ? 'minuty' : 'minut');
                } else {
                    return result + 'minutami';
                }
                break;
            case 'h':  // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh': // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$1(number) ? 'hodiny' : 'hodin');
                } else {
                    return result + 'hodinami';
                }
                break;
            case 'd':  // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'den' : 'dnem';
            case 'dd': // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$1(number) ? 'dny' : 'dní');
                } else {
                    return result + 'dny';
                }
                break;
            case 'M':  // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
            case 'MM': // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$1(number) ? 'měsíce' : 'měsíců');
                } else {
                    return result + 'měsíci';
                }
                break;
            case 'y':  // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
            case 'yy': // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$1(number) ? 'roky' : 'let');
                } else {
                    return result + 'lety';
                }
                break;
        }
    }

    moment.defineLocale('cs', {
        months : months$2,
        monthsShort : monthsShort,
        monthsRegex : monthsRegex,
        monthsShortRegex : monthsRegex,
        // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
        // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
        monthsStrictRegex : /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex : /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,
        weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm',
            l : 'D. M. YYYY'
        },
        calendar : {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v neděli v] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [v] LT';
                    case 3:
                        return '[ve středu v] LT';
                    case 4:
                        return '[ve čtvrtek v] LT';
                    case 5:
                        return '[v pátek v] LT';
                    case 6:
                        return '[v sobotu v] LT';
                }
            },
            lastDay: '[včera v] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[minulou neděli v] LT';
                    case 1:
                    case 2:
                        return '[minulé] dddd [v] LT';
                    case 3:
                        return '[minulou středu v] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [v] LT';
                    case 6:
                        return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'před %s',
            s : translate$1,
            ss : translate$1,
            m : translate$1,
            mm : translate$1,
            h : translate$1,
            hh : translate$1,
            d : translate$1,
            dd : translate$1,
            M : translate$1,
            MM : translate$1,
            y : translate$1,
            yy : translate$1
        },
        dayOfMonthOrdinalParse : /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('cv', {
        months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
            LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
            LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
        },
        calendar : {
            sameDay: '[Паян] LT [сехетре]',
            nextDay: '[Ыран] LT [сехетре]',
            lastDay: '[Ӗнер] LT [сехетре]',
            nextWeek: '[Ҫитес] dddd LT [сехетре]',
            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
            sameElse: 'L'
        },
        relativeTime : {
            future : function (output) {
                var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
                return output + affix;
            },
            past : '%s каялла',
            s : 'пӗр-ик ҫеккунт',
            ss : '%d ҫеккунт',
            m : 'пӗр минут',
            mm : '%d минут',
            h : 'пӗр сехет',
            hh : '%d сехет',
            d : 'пӗр кун',
            dd : '%d кун',
            M : 'пӗр уйӑх',
            MM : '%d уйӑх',
            y : 'пӗр ҫул',
            yy : '%d ҫул'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal : '%d-мӗш',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact : true,
        // time formats are the same as en-gb
        longDateFormat: {
            LT: 'HH:mm',
            LTS : 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Heddiw am] LT',
            nextDay: '[Yfory am] LT',
            nextWeek: 'dddd [am] LT',
            lastDay: '[Ddoe am] LT',
            lastWeek: 'dddd [diwethaf am] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'mewn %s',
            past: '%s yn ôl',
            s: 'ychydig eiliadau',
            ss: '%d eiliad',
            m: 'munud',
            mm: '%d munud',
            h: 'awr',
            hh: '%d awr',
            d: 'diwrnod',
            dd: '%d diwrnod',
            M: 'mis',
            MM: '%d mis',
            y: 'blwyddyn',
            yy: '%d flynedd'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
        ordinal: function (number) {
            var b = number,
                output = '',
                lookup = [
                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
                ];
            if (b > 20) {
                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                    output = 'fed'; // not 30ain, 70ain or 90ain
                } else {
                    output = 'ain';
                }
            } else if (b > 0) {
                output = lookup[b];
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('da', {
        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay : '[i dag kl.] LT',
            nextDay : '[i morgen kl.] LT',
            nextWeek : 'på dddd [kl.] LT',
            lastDay : '[i går kl.] LT',
            lastWeek : '[i] dddd[s kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'få sekunder',
            ss : '%d sekunder',
            m : 'et minut',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dage',
            M : 'en måned',
            MM : '%d måneder',
            y : 'et år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    moment.defineLocale('de-at', {
        months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function processRelativeTime$1(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    moment.defineLocale('de-ch', {
        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime$1,
            mm : '%d Minuten',
            h : processRelativeTime$1,
            hh : '%d Stunden',
            d : processRelativeTime$1,
            dd : processRelativeTime$1,
            M : processRelativeTime$1,
            MM : processRelativeTime$1,
            y : processRelativeTime$1,
            yy : processRelativeTime$1
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function processRelativeTime$2(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    moment.defineLocale('de', {
        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime$2,
            mm : '%d Minuten',
            h : processRelativeTime$2,
            hh : '%d Stunden',
            d : processRelativeTime$2,
            dd : processRelativeTime$2,
            M : processRelativeTime$2,
            MM : processRelativeTime$2,
            y : processRelativeTime$2,
            yy : processRelativeTime$2
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var months$3 = [
        'ޖެނުއަރީ',
        'ފެބްރުއަރީ',
        'މާރިޗު',
        'އޭޕްރީލު',
        'މޭ',
        'ޖޫން',
        'ޖުލައި',
        'އޯގަސްޓު',
        'ސެޕްޓެމްބަރު',
        'އޮކްޓޯބަރު',
        'ނޮވެމްބަރު',
        'ޑިސެމްބަރު'
    ], weekdays = [
        'އާދިއްތަ',
        'ހޯމަ',
        'އަންގާރަ',
        'ބުދަ',
        'ބުރާސްފަތި',
        'ހުކުރު',
        'ހޮނިހިރު'
    ];

    moment.defineLocale('dv', {
        months : months$3,
        monthsShort : months$3,
        weekdays : weekdays,
        weekdaysShort : weekdays,
        weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
        longDateFormat : {

            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/M/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /މކ|މފ/,
        isPM : function (input) {
            return 'މފ' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'މކ';
            } else {
                return 'މފ';
            }
        },
        calendar : {
            sameDay : '[މިއަދު] LT',
            nextDay : '[މާދަމާ] LT',
            nextWeek : 'dddd LT',
            lastDay : '[އިއްޔެ] LT',
            lastWeek : '[ފާއިތުވި] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ތެރޭގައި %s',
            past : 'ކުރިން %s',
            s : 'ސިކުންތުކޮޅެއް',
            ss : 'd% ސިކުންތު',
            m : 'މިނިޓެއް',
            mm : 'މިނިޓު %d',
            h : 'ގަޑިއިރެއް',
            hh : 'ގަޑިއިރު %d',
            d : 'ދުވަހެއް',
            dd : 'ދުވަސް %d',
            M : 'މަހެއް',
            MM : 'މަސް %d',
            y : 'އަހަރެއް',
            yy : 'އަހަރު %d'
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week : {
            dow : 7,  // Sunday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    //! moment.js locale configuration

    moment.defineLocale('el', {
        monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months : function (momentToFormat, format) {
            if (!momentToFormat) {
                return this._monthsNominativeEl;
            } else if (typeof format === 'string' && /D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
                return this._monthsGenitiveEl[momentToFormat.month()];
            } else {
                return this._monthsNominativeEl[momentToFormat.month()];
            }
        },
        monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'μμ' : 'ΜΜ';
            } else {
                return isLower ? 'πμ' : 'ΠΜ';
            }
        },
        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === 'μ');
        },
        meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl : {
            sameDay : '[Σήμερα {}] LT',
            nextDay : '[Αύριο {}] LT',
            nextWeek : 'dddd [{}] LT',
            lastDay : '[Χθες {}] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 6:
                        return '[το προηγούμενο] dddd [{}] LT';
                    default:
                        return '[την προηγούμενη] dddd [{}] LT';
                }
            },
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendarEl[key],
                hours = mom && mom.hours();
            if (isFunction(output)) {
                output = output.apply(mom);
            }
            return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
        },
        relativeTime : {
            future : 'σε %s',
            past : '%s πριν',
            s : 'λίγα δευτερόλεπτα',
            ss : '%d δευτερόλεπτα',
            m : 'ένα λεπτό',
            mm : '%d λεπτά',
            h : 'μία ώρα',
            hh : '%d ώρες',
            d : 'μία μέρα',
            dd : '%d μέρες',
            M : 'ένας μήνας',
            MM : '%d μήνες',
            y : 'ένας χρόνος',
            yy : '%d χρόνια'
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: '%dη',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4st is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('en-SG', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('en-au', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('en-ca', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'YYYY-MM-DD',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY h:mm A',
            LLLL : 'dddd, MMMM D, YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('en-gb', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('en-ie', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('en-il', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('en-nz', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('eo', {
        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
        weekdays : 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
        weekdaysShort : 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
        weekdaysMin : 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D[-a de] MMMM, YYYY',
            LLL : 'D[-a de] MMMM, YYYY HH:mm',
            LLLL : 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (input) {
            return input.charAt(0).toLowerCase() === 'p';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'p.t.m.' : 'P.T.M.';
            } else {
                return isLower ? 'a.t.m.' : 'A.T.M.';
            }
        },
        calendar : {
            sameDay : '[Hodiaŭ je] LT',
            nextDay : '[Morgaŭ je] LT',
            nextWeek : 'dddd [je] LT',
            lastDay : '[Hieraŭ je] LT',
            lastWeek : '[pasinta] dddd [je] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'post %s',
            past : 'antaŭ %s',
            s : 'sekundoj',
            ss : '%d sekundoj',
            m : 'minuto',
            mm : '%d minutoj',
            h : 'horo',
            hh : '%d horoj',
            d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
            dd : '%d tagoj',
            M : 'monato',
            MM : '%d monatoj',
            y : 'jaro',
            yy : '%d jaroj'
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal : '%da',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort$1 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse$1 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex$1 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    moment.defineLocale('es-do', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort$1[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsRegex: monthsRegex$1,
        monthsShortRegex: monthsRegex$1,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse$1,
        longMonthsParse: monthsParse$1,
        shortMonthsParse: monthsParse$1,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY h:mm A',
            LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse$2 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex$2 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    moment.defineLocale('es-us', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot$1;
            } else if (/-MMM-/.test(format)) {
                return monthsShort$2[m.month()];
            } else {
                return monthsShortDot$1[m.month()];
            }
        },
        monthsRegex: monthsRegex$2,
        monthsShortRegex: monthsRegex$2,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse$2,
        longMonthsParse: monthsParse$2,
        shortMonthsParse: monthsParse$2,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'MM/DD/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY h:mm A',
            LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var monthsShortDot$2 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort$3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse$3 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex$3 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    moment.defineLocale('es', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot$2;
            } else if (/-MMM-/.test(format)) {
                return monthsShort$3[m.month()];
            } else {
                return monthsShortDot$2[m.month()];
            }
        },
        monthsRegex : monthsRegex$3,
        monthsShortRegex : monthsRegex$3,
        monthsStrictRegex : /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex : /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse : monthsParse$3,
        longMonthsParse : monthsParse$3,
        shortMonthsParse : monthsParse$3,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY H:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function processRelativeTime$3(number, withoutSuffix, key, isFuture) {
        var format = {
            's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
            'ss': [number + 'sekundi', number + 'sekundit'],
            'm' : ['ühe minuti', 'üks minut'],
            'mm': [number + ' minuti', number + ' minutit'],
            'h' : ['ühe tunni', 'tund aega', 'üks tund'],
            'hh': [number + ' tunni', number + ' tundi'],
            'd' : ['ühe päeva', 'üks päev'],
            'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
            'MM': [number + ' kuu', number + ' kuud'],
            'y' : ['ühe aasta', 'aasta', 'üks aasta'],
            'yy': [number + ' aasta', number + ' aastat']
        };
        if (withoutSuffix) {
            return format[key][2] ? format[key][2] : format[key][1];
        }
        return isFuture ? format[key][0] : format[key][1];
    }

    moment.defineLocale('et', {
        months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat : {
            LT   : 'H:mm',
            LTS : 'H:mm:ss',
            L    : 'DD.MM.YYYY',
            LL   : 'D. MMMM YYYY',
            LLL  : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[Täna,] LT',
            nextDay  : '[Homme,] LT',
            nextWeek : '[Järgmine] dddd LT',
            lastDay  : '[Eile,] LT',
            lastWeek : '[Eelmine] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s pärast',
            past   : '%s tagasi',
            s      : processRelativeTime$3,
            ss     : processRelativeTime$3,
            m      : processRelativeTime$3,
            mm     : processRelativeTime$3,
            h      : processRelativeTime$3,
            hh     : processRelativeTime$3,
            d      : processRelativeTime$3,
            dd     : '%d päeva',
            M      : processRelativeTime$3,
            MM     : processRelativeTime$3,
            y      : processRelativeTime$3,
            yy     : processRelativeTime$3
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('eu', {
        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact : true,
        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY[ko] MMMM[ren] D[a]',
            LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
            l : 'YYYY-M-D',
            ll : 'YYYY[ko] MMM D[a]',
            lll : 'YYYY[ko] MMM D[a] HH:mm',
            llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
        },
        calendar : {
            sameDay : '[gaur] LT[etan]',
            nextDay : '[bihar] LT[etan]',
            nextWeek : 'dddd LT[etan]',
            lastDay : '[atzo] LT[etan]',
            lastWeek : '[aurreko] dddd LT[etan]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s barru',
            past : 'duela %s',
            s : 'segundo batzuk',
            ss : '%d segundo',
            m : 'minutu bat',
            mm : '%d minutu',
            h : 'ordu bat',
            hh : '%d ordu',
            d : 'egun bat',
            dd : '%d egun',
            M : 'hilabete bat',
            MM : '%d hilabete',
            y : 'urte bat',
            yy : '%d urte'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$5 = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
    }, numberMap$4 = {
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
        '۰': '0'
    };

    moment.defineLocale('fa', {
        months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
        weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
        weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (input) {
            return /بعد از ظهر/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'قبل از ظهر';
            } else {
                return 'بعد از ظهر';
            }
        },
        calendar : {
            sameDay : '[امروز ساعت] LT',
            nextDay : '[فردا ساعت] LT',
            nextWeek : 'dddd [ساعت] LT',
            lastDay : '[دیروز ساعت] LT',
            lastWeek : 'dddd [پیش] [ساعت] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'در %s',
            past : '%s پیش',
            s : 'چند ثانیه',
            ss : 'ثانیه d%',
            m : 'یک دقیقه',
            mm : '%d دقیقه',
            h : 'یک ساعت',
            hh : '%d ساعت',
            d : 'یک روز',
            dd : '%d روز',
            M : 'یک ماه',
            MM : '%d ماه',
            y : 'یک سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/[۰-۹]/g, function (match) {
                return numberMap$4[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$5[match];
            }).replace(/,/g, '،');
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal : '%dم',
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 12th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
        numbersFuture = [
            'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
            numbersPast[7], numbersPast[8], numbersPast[9]
        ];
    function translate$2(number, withoutSuffix, key, isFuture) {
        var result = '';
        switch (key) {
            case 's':
                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
            case 'ss':
                return isFuture ? 'sekunnin' : 'sekuntia';
            case 'm':
                return isFuture ? 'minuutin' : 'minuutti';
            case 'mm':
                result = isFuture ? 'minuutin' : 'minuuttia';
                break;
            case 'h':
                return isFuture ? 'tunnin' : 'tunti';
            case 'hh':
                result = isFuture ? 'tunnin' : 'tuntia';
                break;
            case 'd':
                return isFuture ? 'päivän' : 'päivä';
            case 'dd':
                result = isFuture ? 'päivän' : 'päivää';
                break;
            case 'M':
                return isFuture ? 'kuukauden' : 'kuukausi';
            case 'MM':
                result = isFuture ? 'kuukauden' : 'kuukautta';
                break;
            case 'y':
                return isFuture ? 'vuoden' : 'vuosi';
            case 'yy':
                result = isFuture ? 'vuoden' : 'vuotta';
                break;
        }
        result = verbalNumber(number, isFuture) + ' ' + result;
        return result;
    }
    function verbalNumber(number, isFuture) {
        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
    }

    moment.defineLocale('fi', {
        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'Do MMMM[ta] YYYY',
            LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l : 'D.M.YYYY',
            ll : 'Do MMM YYYY',
            lll : 'Do MMM YYYY, [klo] HH.mm',
            llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar : {
            sameDay : '[tänään] [klo] LT',
            nextDay : '[huomenna] [klo] LT',
            nextWeek : 'dddd [klo] LT',
            lastDay : '[eilen] [klo] LT',
            lastWeek : '[viime] dddd[na] [klo] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s päästä',
            past : '%s sitten',
            s : translate$2,
            ss : translate$2,
            m : translate$2,
            mm : translate$2,
            h : translate$2,
            hh : translate$2,
            d : translate$2,
            dd : translate$2,
            M : translate$2,
            MM : translate$2,
            y : translate$2,
            yy : translate$2
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('fo', {
        months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D. MMMM, YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Í dag kl.] LT',
            nextDay : '[Í morgin kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[Í gjár kl.] LT',
            lastWeek : '[síðstu] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'um %s',
            past : '%s síðani',
            s : 'fá sekund',
            ss : '%d sekundir',
            m : 'ein minuttur',
            mm : '%d minuttir',
            h : 'ein tími',
            hh : '%d tímar',
            d : 'ein dagur',
            dd : '%d dagar',
            M : 'ein mánaður',
            MM : '%d mánaðir',
            y : 'eitt ár',
            yy : '%d ár'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('fr-ca', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal : function (number, period) {
            switch (period) {
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'D':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('fr-ch', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal : function (number, period) {
            switch (period) {
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'D':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('fr', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal : function (number, period) {
            switch (period) {
                // TODO: Return 'e' when day of month > 1. Move this case inside
                // block for masculine words below.
                // See https://github.com/moment/moment/issues/3375
                case 'D':
                    return number + (number === 1 ? 'er' : '');

                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

    moment.defineLocale('fy', {
        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },
        monthsParseExact : true,
        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[hjoed om] LT',
            nextDay: '[moarn om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[juster om] LT',
            lastWeek: '[ôfrûne] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'oer %s',
            past : '%s lyn',
            s : 'in pear sekonden',
            ss : '%d sekonden',
            m : 'ien minút',
            mm : '%d minuten',
            h : 'ien oere',
            hh : '%d oeren',
            d : 'ien dei',
            dd : '%d dagen',
            M : 'ien moanne',
            MM : '%d moannen',
            y : 'ien jier',
            yy : '%d jierren'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration


    var months$4 = [
        'Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Méitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deaireadh Fómhair', 'Samhain', 'Nollaig'
    ];

    var monthsShort$4 = ['Eaná', 'Feab', 'Márt', 'Aibr', 'Beal', 'Méit', 'Iúil', 'Lúna', 'Meán', 'Deai', 'Samh', 'Noll'];

    var weekdays$1 = ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Satharn'];

    var weekdaysShort = ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'hAo', 'Sat'];

    var weekdaysMin = ['Do', 'Lu', 'Má', 'Ce', 'Dé', 'hA', 'Sa'];

    moment.defineLocale('ga', {
        months: months$4,
        monthsShort: monthsShort$4,
        monthsParseExact: true,
        weekdays: weekdays$1,
        weekdaysShort: weekdaysShort,
        weekdaysMin: weekdaysMin,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Inniu ag] LT',
            nextDay: '[Amárach ag] LT',
            nextWeek: 'dddd [ag] LT',
            lastDay: '[Inné aig] LT',
            lastWeek: 'dddd [seo caite] [ag] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'i %s',
            past: '%s ó shin',
            s: 'cúpla soicind',
            ss: '%d soicind',
            m: 'nóiméad',
            mm: '%d nóiméad',
            h: 'uair an chloig',
            hh: '%d uair an chloig',
            d: 'lá',
            dd: '%d lá',
            M: 'mí',
            MM: '%d mí',
            y: 'bliain',
            yy: '%d bliain'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (number) {
            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
            return number + output;
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var months$5 = [
        'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
    ];

    var monthsShort$5 = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

    var weekdays$2 = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

    var weekdaysShort$1 = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

    var weekdaysMin$1 = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

    moment.defineLocale('gd', {
        months : months$5,
        monthsShort : monthsShort$5,
        monthsParseExact : true,
        weekdays : weekdays$2,
        weekdaysShort : weekdaysShort$1,
        weekdaysMin : weekdaysMin$1,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[An-diugh aig] LT',
            nextDay : '[A-màireach aig] LT',
            nextWeek : 'dddd [aig] LT',
            lastDay : '[An-dè aig] LT',
            lastWeek : 'dddd [seo chaidh] [aig] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ann an %s',
            past : 'bho chionn %s',
            s : 'beagan diogan',
            ss : '%d diogan',
            m : 'mionaid',
            mm : '%d mionaidean',
            h : 'uair',
            hh : '%d uairean',
            d : 'latha',
            dd : '%d latha',
            M : 'mìos',
            MM : '%d mìosan',
            y : 'bliadhna',
            yy : '%d bliadhna'
        },
        dayOfMonthOrdinalParse : /\d{1,2}(d|na|mh)/,
        ordinal : function (number) {
            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('gl', {
        months : 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort : 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY H:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
            },
            nextDay : function () {
                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
            },
            lastDay : function () {
                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
            },
            lastWeek : function () {
                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : function (str) {
                if (str.indexOf('un') === 0) {
                    return 'n' + str;
                }
                return 'en ' + str;
            },
            past : 'hai %s',
            s : 'uns segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'unha hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function processRelativeTime$4(number, withoutSuffix, key, isFuture) {
        var format = {
            's': ['thodde secondanim', 'thodde second'],
            'ss': [number + ' secondanim', number + ' second'],
            'm': ['eka mintan', 'ek minute'],
            'mm': [number + ' mintanim', number + ' mintam'],
            'h': ['eka voran', 'ek vor'],
            'hh': [number + ' voranim', number + ' voram'],
            'd': ['eka disan', 'ek dis'],
            'dd': [number + ' disanim', number + ' dis'],
            'M': ['eka mhoinean', 'ek mhoino'],
            'MM': [number + ' mhoineanim', number + ' mhoine'],
            'y': ['eka vorsan', 'ek voros'],
            'yy': [number + ' vorsanim', number + ' vorsam']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    moment.defineLocale('gom-latn', {
        months : 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
        monthsShort : 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
        weekdaysShort : 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
        weekdaysMin : 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'A h:mm [vazta]',
            LTS : 'A h:mm:ss [vazta]',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY A h:mm [vazta]',
            LLLL : 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
            llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
        },
        calendar : {
            sameDay: '[Aiz] LT',
            nextDay: '[Faleam] LT',
            nextWeek: '[Ieta to] dddd[,] LT',
            lastDay: '[Kal] LT',
            lastWeek: '[Fatlo] dddd[,] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s',
            past : '%s adim',
            s : processRelativeTime$4,
            ss : processRelativeTime$4,
            m : processRelativeTime$4,
            mm : processRelativeTime$4,
            h : processRelativeTime$4,
            hh : processRelativeTime$4,
            d : processRelativeTime$4,
            dd : processRelativeTime$4,
            M : processRelativeTime$4,
            MM : processRelativeTime$4,
            y : processRelativeTime$4,
            yy : processRelativeTime$4
        },
        dayOfMonthOrdinalParse : /\d{1,2}(er)/,
        ordinal : function (number, period) {
            switch (period) {
                // the ordinal 'er' only applies to day of the month
                case 'D':
                    return number + 'er';
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                case 'w':
                case 'W':
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'rati') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'sokalli') {
                return hour;
            } else if (meridiem === 'donparam') {
                return hour > 12 ? hour : hour + 12;
            } else if (meridiem === 'sanje') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'rati';
            } else if (hour < 12) {
                return 'sokalli';
            } else if (hour < 16) {
                return 'donparam';
            } else if (hour < 20) {
                return 'sanje';
            } else {
                return 'rati';
            }
        }
    });

    //! moment.js locale configuration

    var symbolMap$6 = {
            '1': '૧',
            '2': '૨',
            '3': '૩',
            '4': '૪',
            '5': '૫',
            '6': '૬',
            '7': '૭',
            '8': '૮',
            '9': '૯',
            '0': '૦'
        },
        numberMap$5 = {
            '૧': '1',
            '૨': '2',
            '૩': '3',
            '૪': '4',
            '૫': '5',
            '૬': '6',
            '૭': '7',
            '૮': '8',
            '૯': '9',
            '૦': '0'
        };

    moment.defineLocale('gu', {
        months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
        monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
        monthsParseExact: true,
        weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
        weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
        weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
        longDateFormat: {
            LT: 'A h:mm વાગ્યે',
            LTS: 'A h:mm:ss વાગ્યે',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
            LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
        },
        calendar: {
            sameDay: '[આજ] LT',
            nextDay: '[કાલે] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ગઇકાલે] LT',
            lastWeek: '[પાછલા] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s મા',
            past: '%s પેહલા',
            s: 'અમુક પળો',
            ss: '%d સેકંડ',
            m: 'એક મિનિટ',
            mm: '%d મિનિટ',
            h: 'એક કલાક',
            hh: '%d કલાક',
            d: 'એક દિવસ',
            dd: '%d દિવસ',
            M: 'એક મહિનો',
            MM: '%d મહિનો',
            y: 'એક વર્ષ',
            yy: '%d વર્ષ'
        },
        preparse: function (string) {
            return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (match) {
                return numberMap$5[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$6[match];
            });
        },
        // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'રાત') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'સવાર') {
                return hour;
            } else if (meridiem === 'બપોર') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'સાંજ') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'રાત';
            } else if (hour < 10) {
                return 'સવાર';
            } else if (hour < 17) {
                return 'બપોર';
            } else if (hour < 20) {
                return 'સાંજ';
            } else {
                return 'રાત';
            }
        },
        week: {
            dow: 0, // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('he', {
        months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [ב]MMMM YYYY',
            LLL : 'D [ב]MMMM YYYY HH:mm',
            LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
            l : 'D/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[היום ב־]LT',
            nextDay : '[מחר ב־]LT',
            nextWeek : 'dddd [בשעה] LT',
            lastDay : '[אתמול ב־]LT',
            lastWeek : '[ביום] dddd [האחרון בשעה] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'בעוד %s',
            past : 'לפני %s',
            s : 'מספר שניות',
            ss : '%d שניות',
            m : 'דקה',
            mm : '%d דקות',
            h : 'שעה',
            hh : function (number) {
                if (number === 2) {
                    return 'שעתיים';
                }
                return number + ' שעות';
            },
            d : 'יום',
            dd : function (number) {
                if (number === 2) {
                    return 'יומיים';
                }
                return number + ' ימים';
            },
            M : 'חודש',
            MM : function (number) {
                if (number === 2) {
                    return 'חודשיים';
                }
                return number + ' חודשים';
            },
            y : 'שנה',
            yy : function (number) {
                if (number === 2) {
                    return 'שנתיים';
                } else if (number % 10 === 0 && number !== 10) {
                    return number + ' שנה';
                }
                return number + ' שנים';
            }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM : function (input) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 5) {
                return 'לפנות בוקר';
            } else if (hour < 10) {
                return 'בבוקר';
            } else if (hour < 12) {
                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
            } else if (hour < 18) {
                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
            } else {
                return 'בערב';
            }
        }
    });

    //! moment.js locale configuration

    var symbolMap$7 = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap$6 = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    moment.defineLocale('hi', {
        months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: true,
        weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat : {
            LT : 'A h:mm बजे',
            LTS : 'A h:mm:ss बजे',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm बजे',
            LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[कल] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[कल] LT',
            lastWeek : '[पिछले] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s में',
            past : '%s पहले',
            s : 'कुछ ही क्षण',
            ss : '%d सेकंड',
            m : 'एक मिनट',
            mm : '%d मिनट',
            h : 'एक घंटा',
            hh : '%d घंटे',
            d : 'एक दिन',
            dd : '%d दिन',
            M : 'एक महीने',
            MM : '%d महीने',
            y : 'एक वर्ष',
            yy : '%d वर्ष'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap$6[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$7[match];
            });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सुबह') {
                return hour;
            } else if (meridiem === 'दोपहर') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'शाम') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात';
            } else if (hour < 10) {
                return 'सुबह';
            } else if (hour < 17) {
                return 'दोपहर';
            } else if (hour < 20) {
                return 'शाम';
            } else {
                return 'रात';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function translate$3(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                if (number === 1) {
                    result += 'sekunda';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sekunde';
                } else {
                    result += 'sekundi';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
            case 'mm':
                if (number === 1) {
                    result += 'minuta';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'minute';
                } else {
                    result += 'minuta';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'jedan sat' : 'jednog sata';
            case 'hh':
                if (number === 1) {
                    result += 'sat';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sata';
                } else {
                    result += 'sati';
                }
                return result;
            case 'dd':
                if (number === 1) {
                    result += 'dan';
                } else {
                    result += 'dana';
                }
                return result;
            case 'MM':
                if (number === 1) {
                    result += 'mjesec';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'mjeseca';
                } else {
                    result += 'mjeseci';
                }
                return result;
            case 'yy':
                if (number === 1) {
                    result += 'godina';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'godine';
                } else {
                    result += 'godina';
                }
                return result;
        }
    }

    moment.defineLocale('hr', {
        months : {
            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
        },
        monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[jučer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return '[prošlu] dddd [u] LT';
                    case 6:
                        return '[prošle] [subote] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prošli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            ss     : translate$3,
            m      : translate$3,
            mm     : translate$3,
            h      : translate$3,
            hh     : translate$3,
            d      : 'dan',
            dd     : translate$3,
            M      : 'mjesec',
            MM     : translate$3,
            y      : 'godinu',
            yy     : translate$3
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    function translate$4(number, withoutSuffix, key, isFuture) {
        var num = number;
        switch (key) {
            case 's':
                return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
                return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';
            case 'm':
                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'mm':
                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'hh':
                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'd':
                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'dd':
                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'MM':
                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'y':
                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
            case 'yy':
                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
        }
        return '';
    }
    function week(isFuture) {
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
    }

    moment.defineLocale('hu', {
        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY. MMMM D.',
            LLL : 'YYYY. MMMM D. H:mm',
            LLLL : 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            } else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar : {
            sameDay : '[ma] LT[-kor]',
            nextDay : '[holnap] LT[-kor]',
            nextWeek : function () {
                return week.call(this, true);
            },
            lastDay : '[tegnap] LT[-kor]',
            lastWeek : function () {
                return week.call(this, false);
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s múlva',
            past : '%s',
            s : translate$4,
            ss : translate$4,
            m : translate$4,
            mm : translate$4,
            h : translate$4,
            hh : translate$4,
            d : translate$4,
            dd : translate$4,
            M : translate$4,
            MM : translate$4,
            y : translate$4,
            yy : translate$4
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('hy-am', {
        months : {
            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
        },
        monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
        weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
        weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY թ.',
            LLL : 'D MMMM YYYY թ., HH:mm',
            LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
        },
        calendar : {
            sameDay: '[այսօր] LT',
            nextDay: '[վաղը] LT',
            lastDay: '[երեկ] LT',
            nextWeek: function () {
                return 'dddd [օրը ժամը] LT';
            },
            lastWeek: function () {
                return '[անցած] dddd [օրը ժամը] LT';
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s հետո',
            past : '%s առաջ',
            s : 'մի քանի վայրկյան',
            ss : '%d վայրկյան',
            m : 'րոպե',
            mm : '%d րոպե',
            h : 'ժամ',
            hh : '%d ժամ',
            d : 'օր',
            dd : '%d օր',
            M : 'ամիս',
            MM : '%d ամիս',
            y : 'տարի',
            yy : '%d տարի'
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (input) {
            return /^(ցերեկվա|երեկոյան)$/.test(input);
        },
        meridiem : function (hour) {
            if (hour < 4) {
                return 'գիշերվա';
            } else if (hour < 12) {
                return 'առավոտվա';
            } else if (hour < 17) {
                return 'ցերեկվա';
            } else {
                return 'երեկոյան';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'DDD':
                case 'w':
                case 'W':
                case 'DDDo':
                    if (number === 1) {
                        return number + '-ին';
                    }
                    return number + '-րդ';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('id', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'siang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sore' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'siang';
            } else if (hours < 19) {
                return 'sore';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Besok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kemarin pukul] LT',
            lastWeek : 'dddd [lalu pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lalu',
            s : 'beberapa detik',
            ss : '%d detik',
            m : 'semenit',
            mm : '%d menit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function plural$2(n) {
        if (n % 100 === 11) {
            return true;
        } else if (n % 10 === 1) {
            return false;
        }
        return true;
    }
    function translate$5(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':
                return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
            case 'ss':
                if (plural$2(number)) {
                    return result + (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum');
                }
                return result + 'sekúnda';
            case 'm':
                return withoutSuffix ? 'mínúta' : 'mínútu';
            case 'mm':
                if (plural$2(number)) {
                    return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
                } else if (withoutSuffix) {
                    return result + 'mínúta';
                }
                return result + 'mínútu';
            case 'hh':
                if (plural$2(number)) {
                    return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
                }
                return result + 'klukkustund';
            case 'd':
                if (withoutSuffix) {
                    return 'dagur';
                }
                return isFuture ? 'dag' : 'degi';
            case 'dd':
                if (plural$2(number)) {
                    if (withoutSuffix) {
                        return result + 'dagar';
                    }
                    return result + (isFuture ? 'daga' : 'dögum');
                } else if (withoutSuffix) {
                    return result + 'dagur';
                }
                return result + (isFuture ? 'dag' : 'degi');
            case 'M':
                if (withoutSuffix) {
                    return 'mánuður';
                }
                return isFuture ? 'mánuð' : 'mánuði';
            case 'MM':
                if (plural$2(number)) {
                    if (withoutSuffix) {
                        return result + 'mánuðir';
                    }
                    return result + (isFuture ? 'mánuði' : 'mánuðum');
                } else if (withoutSuffix) {
                    return result + 'mánuður';
                }
                return result + (isFuture ? 'mánuð' : 'mánuði');
            case 'y':
                return withoutSuffix || isFuture ? 'ár' : 'ári';
            case 'yy':
                if (plural$2(number)) {
                    return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
                }
                return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
        }
    }

    moment.defineLocale('is', {
        months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar : {
            sameDay : '[í dag kl.] LT',
            nextDay : '[á morgun kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[í gær kl.] LT',
            lastWeek : '[síðasta] dddd [kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'eftir %s',
            past : 'fyrir %s síðan',
            s : translate$5,
            ss : translate$5,
            m : translate$5,
            mm : translate$5,
            h : 'klukkustund',
            hh : translate$5,
            d : translate$5,
            dd : translate$5,
            M : translate$5,
            MM : translate$5,
            y : translate$5,
            yy : translate$5
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('it-ch', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort : 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin : 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past : '%s fa',
            s : 'alcuni secondi',
            ss : '%d secondi',
            m : 'un minuto',
            mm : '%d minuti',
            h : 'un\'ora',
            hh : '%d ore',
            d : 'un giorno',
            dd : '%d giorni',
            M : 'un mese',
            MM : '%d mesi',
            y : 'un anno',
            yy : '%d anni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('it', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort : 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin : 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past : '%s fa',
            s : 'alcuni secondi',
            ss : '%d secondi',
            m : 'un minuto',
            mm : '%d minuti',
            h : 'un\'ora',
            hh : '%d ore',
            d : 'un giorno',
            dd : '%d giorni',
            M : 'un mese',
            MM : '%d mesi',
            y : 'un anno',
            yy : '%d anni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ja', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日 HH:mm',
            LLLL : 'YYYY年M月D日 dddd HH:mm',
            l : 'YYYY/MM/DD',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日(ddd) HH:mm'
        },
        meridiemParse: /午前|午後/i,
        isPM : function (input) {
            return input === '午後';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '午前';
            } else {
                return '午後';
            }
        },
        calendar : {
            sameDay : '[今日] LT',
            nextDay : '[明日] LT',
            nextWeek : function (now) {
                if (now.week() < this.week()) {
                    return '[来週]dddd LT';
                } else {
                    return 'dddd LT';
                }
            },
            lastDay : '[昨日] LT',
            lastWeek : function (now) {
                if (this.week() < now.week()) {
                    return '[先週]dddd LT';
                } else {
                    return 'dddd LT';
                }
            },
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse : /\d{1,2}日/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '日';
                default:
                    return number;
            }
        },
        relativeTime : {
            future : '%s後',
            past : '%s前',
            s : '数秒',
            ss : '%d秒',
            m : '1分',
            mm : '%d分',
            h : '1時間',
            hh : '%d時間',
            d : '1日',
            dd : '%d日',
            M : '1ヶ月',
            MM : '%dヶ月',
            y : '1年',
            yy : '%d年'
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('jv', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'enjing') {
                return hour;
            } else if (meridiem === 'siyang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'enjing';
            } else if (hours < 15) {
                return 'siyang';
            } else if (hours < 19) {
                return 'sonten';
            } else {
                return 'ndalu';
            }
        },
        calendar : {
            sameDay : '[Dinten puniko pukul] LT',
            nextDay : '[Mbenjang pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kala wingi pukul] LT',
            lastWeek : 'dddd [kepengker pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'wonten ing %s',
            past : '%s ingkang kepengker',
            s : 'sawetawis detik',
            ss : '%d detik',
            m : 'setunggal menit',
            mm : '%d menit',
            h : 'setunggal jam',
            hh : '%d jam',
            d : 'sedinten',
            dd : '%d dinten',
            M : 'sewulan',
            MM : '%d wulan',
            y : 'setaun',
            yy : '%d taun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ka', {
        months : {
            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
        },
        monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays : {
            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
            isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[დღეს] LT[-ზე]',
            nextDay : '[ხვალ] LT[-ზე]',
            lastDay : '[გუშინ] LT[-ზე]',
            nextWeek : '[შემდეგ] dddd LT[-ზე]',
            lastWeek : '[წინა] dddd LT-ზე',
            sameElse : 'L'
        },
        relativeTime : {
            future : function (s) {
                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
                    s.replace(/ი$/, 'ში') :
                    s + 'ში';
            },
            past : function (s) {
                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
                    return s.replace(/(ი|ე)$/, 'ის წინ');
                }
                if ((/წელი/).test(s)) {
                    return s.replace(/წელი$/, 'წლის წინ');
                }
            },
            s : 'რამდენიმე წამი',
            ss : '%d წამი',
            m : 'წუთი',
            mm : '%d წუთი',
            h : 'საათი',
            hh : '%d საათი',
            d : 'დღე',
            dd : '%d დღე',
            M : 'თვე',
            MM : '%d თვე',
            y : 'წელი',
            yy : '%d წელი'
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal : function (number) {
            if (number === 0) {
                return number;
            }
            if (number === 1) {
                return number + '-ლი';
            }
            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
                return 'მე-' + number;
            }
            return number + '-ე';
        },
        week : {
            dow : 1,
            doy : 7
        }
    });

    //! moment.js locale configuration

    var suffixes$1 = {
        0: '-ші',
        1: '-ші',
        2: '-ші',
        3: '-ші',
        4: '-ші',
        5: '-ші',
        6: '-шы',
        7: '-ші',
        8: '-ші',
        9: '-шы',
        10: '-шы',
        20: '-шы',
        30: '-шы',
        40: '-шы',
        50: '-ші',
        60: '-шы',
        70: '-ші',
        80: '-ші',
        90: '-шы',
        100: '-ші'
    };

    moment.defineLocale('kk', {
        months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
        weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Бүгін сағат] LT',
            nextDay : '[Ертең сағат] LT',
            nextWeek : 'dddd [сағат] LT',
            lastDay : '[Кеше сағат] LT',
            lastWeek : '[Өткен аптаның] dddd [сағат] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ішінде',
            past : '%s бұрын',
            s : 'бірнеше секунд',
            ss : '%d секунд',
            m : 'бір минут',
            mm : '%d минут',
            h : 'бір сағат',
            hh : '%d сағат',
            d : 'бір күн',
            dd : '%d күн',
            M : 'бір ай',
            MM : '%d ай',
            y : 'бір жыл',
            yy : '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal : function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes$1[number] || suffixes$1[a] || suffixes$1[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$8 = {
        '1': '១',
        '2': '២',
        '3': '៣',
        '4': '៤',
        '5': '៥',
        '6': '៦',
        '7': '៧',
        '8': '៨',
        '9': '៩',
        '0': '០'
    }, numberMap$7 = {
        '១': '1',
        '២': '2',
        '៣': '3',
        '៤': '4',
        '៥': '5',
        '៦': '6',
        '៧': '7',
        '៨': '8',
        '៩': '9',
        '០': '0'
    };

    moment.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_'
        ),
        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_'
        ),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function (input) {
            return input === 'ល្ងាច';
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ព្រឹក';
            } else {
                return 'ល្ងាច';
            }
        },
        calendar: {
            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
            nextDay: '[ស្អែក ម៉ោង] LT',
            nextWeek: 'dddd [ម៉ោង] LT',
            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%sទៀត',
            past: '%sមុន',
            s: 'ប៉ុន្មានវិនាទី',
            ss: '%d វិនាទី',
            m: 'មួយនាទី',
            mm: '%d នាទី',
            h: 'មួយម៉ោង',
            hh: '%d ម៉ោង',
            d: 'មួយថ្ងៃ',
            dd: '%d ថ្ងៃ',
            M: 'មួយខែ',
            MM: '%d ខែ',
            y: 'មួយឆ្នាំ',
            yy: '%d ឆ្នាំ'
        },
        dayOfMonthOrdinalParse : /ទី\d{1,2}/,
        ordinal : 'ទី%d',
        preparse: function (string) {
            return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
                return numberMap$7[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$8[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$9 = {
        '1': '೧',
        '2': '೨',
        '3': '೩',
        '4': '೪',
        '5': '೫',
        '6': '೬',
        '7': '೭',
        '8': '೮',
        '9': '೯',
        '0': '೦'
    },
    numberMap$8 = {
        '೧': '1',
        '೨': '2',
        '೩': '3',
        '೪': '4',
        '೫': '5',
        '೬': '6',
        '೭': '7',
        '೮': '8',
        '೯': '9',
        '೦': '0'
    };

    moment.defineLocale('kn', {
        months : 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
        monthsShort : 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
        monthsParseExact: true,
        weekdays : 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
        weekdaysShort : 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
        weekdaysMin : 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[ಇಂದು] LT',
            nextDay : '[ನಾಳೆ] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[ನಿನ್ನೆ] LT',
            lastWeek : '[ಕೊನೆಯ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ನಂತರ',
            past : '%s ಹಿಂದೆ',
            s : 'ಕೆಲವು ಕ್ಷಣಗಳು',
            ss : '%d ಸೆಕೆಂಡುಗಳು',
            m : 'ಒಂದು ನಿಮಿಷ',
            mm : '%d ನಿಮಿಷ',
            h : 'ಒಂದು ಗಂಟೆ',
            hh : '%d ಗಂಟೆ',
            d : 'ಒಂದು ದಿನ',
            dd : '%d ದಿನ',
            M : 'ಒಂದು ತಿಂಗಳು',
            MM : '%d ತಿಂಗಳು',
            y : 'ಒಂದು ವರ್ಷ',
            yy : '%d ವರ್ಷ'
        },
        preparse: function (string) {
            return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
                return numberMap$8[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$9[match];
            });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ರಾತ್ರಿ') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
                return hour;
            } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'ಸಂಜೆ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ರಾತ್ರಿ';
            } else if (hour < 10) {
                return 'ಬೆಳಿಗ್ಗೆ';
            } else if (hour < 17) {
                return 'ಮಧ್ಯಾಹ್ನ';
            } else if (hour < 20) {
                return 'ಸಂಜೆ';
            } else {
                return 'ರಾತ್ರಿ';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal : function (number) {
            return number + 'ನೇ';
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ko', {
        months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY년 MMMM D일',
            LLL : 'YYYY년 MMMM D일 A h:mm',
            LLLL : 'YYYY년 MMMM D일 dddd A h:mm',
            l : 'YYYY.MM.DD.',
            ll : 'YYYY년 MMMM D일',
            lll : 'YYYY년 MMMM D일 A h:mm',
            llll : 'YYYY년 MMMM D일 dddd A h:mm'
        },
        calendar : {
            sameDay : '오늘 LT',
            nextDay : '내일 LT',
            nextWeek : 'dddd LT',
            lastDay : '어제 LT',
            lastWeek : '지난주 dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s 후',
            past : '%s 전',
            s : '몇 초',
            ss : '%d초',
            m : '1분',
            mm : '%d분',
            h : '한 시간',
            hh : '%d시간',
            d : '하루',
            dd : '%d일',
            M : '한 달',
            MM : '%d달',
            y : '일 년',
            yy : '%d년'
        },
        dayOfMonthOrdinalParse : /\d{1,2}(일|월|주)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '일';
                case 'M':
                    return number + '월';
                case 'w':
                case 'W':
                    return number + '주';
                default:
                    return number;
            }
        },
        meridiemParse : /오전|오후/,
        isPM : function (token) {
            return token === '오후';
        },
        meridiem : function (hour, minute, isUpper) {
            return hour < 12 ? '오전' : '오후';
        }
    });

    //! moment.js locale configuration

    var symbolMap$a = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, numberMap$9 = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    },
    months$6 = [
        'کانونی دووەم',
        'شوبات',
        'ئازار',
        'نیسان',
        'ئایار',
        'حوزەیران',
        'تەمموز',
        'ئاب',
        'ئەیلوول',
        'تشرینی یەكەم',
        'تشرینی دووەم',
        'كانونی یەکەم'
    ];


    moment.defineLocale('ku', {
        months : months$6,
        monthsShort : months$6,
        weekdays : 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysShort : 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysMin : 'ی_د_س_چ_پ_ه_ش'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM: function (input) {
            return /ئێواره‌/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'به‌یانی';
            } else {
                return 'ئێواره‌';
            }
        },
        calendar : {
            sameDay : '[ئه‌مرۆ كاتژمێر] LT',
            nextDay : '[به‌یانی كاتژمێر] LT',
            nextWeek : 'dddd [كاتژمێر] LT',
            lastDay : '[دوێنێ كاتژمێر] LT',
            lastWeek : 'dddd [كاتژمێر] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'له‌ %s',
            past : '%s',
            s : 'چه‌ند چركه‌یه‌ك',
            ss : 'چركه‌ %d',
            m : 'یه‌ك خوله‌ك',
            mm : '%d خوله‌ك',
            h : 'یه‌ك كاتژمێر',
            hh : '%d كاتژمێر',
            d : 'یه‌ك ڕۆژ',
            dd : '%d ڕۆژ',
            M : 'یه‌ك مانگ',
            MM : '%d مانگ',
            y : 'یه‌ك ساڵ',
            yy : '%d ساڵ'
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap$9[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$a[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 12th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var suffixes$2 = {
        0: '-чү',
        1: '-чи',
        2: '-чи',
        3: '-чү',
        4: '-чү',
        5: '-чи',
        6: '-чы',
        7: '-чи',
        8: '-чи',
        9: '-чу',
        10: '-чу',
        20: '-чы',
        30: '-чу',
        40: '-чы',
        50: '-чү',
        60: '-чы',
        70: '-чи',
        80: '-чи',
        90: '-чу',
        100: '-чү'
    };

    moment.defineLocale('ky', {
        months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
        weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
        weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Бүгүн саат] LT',
            nextDay : '[Эртең саат] LT',
            nextWeek : 'dddd [саат] LT',
            lastDay : '[Кечээ саат] LT',
            lastWeek : '[Өткөн аптанын] dddd [күнү] [саат] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ичинде',
            past : '%s мурун',
            s : 'бирнече секунд',
            ss : '%d секунд',
            m : 'бир мүнөт',
            mm : '%d мүнөт',
            h : 'бир саат',
            hh : '%d саат',
            d : 'бир күн',
            dd : '%d күн',
            M : 'бир ай',
            MM : '%d ай',
            y : 'бир жыл',
            yy : '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal : function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes$2[number] || suffixes$2[a] || suffixes$2[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function processRelativeTime$5(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eng Minutt', 'enger Minutt'],
            'h': ['eng Stonn', 'enger Stonn'],
            'd': ['een Dag', 'engem Dag'],
            'M': ['ee Mount', 'engem Mount'],
            'y': ['ee Joer', 'engem Joer']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }
    function processFutureTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'a ' + string;
        }
        return 'an ' + string;
    }
    function processPastTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'viru ' + string;
        }
        return 'virun ' + string;
    }
    /**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
    function eifelerRegelAppliesToNumber(number) {
        number = parseInt(number, 10);
        if (isNaN(number)) {
            return false;
        }
        if (number < 0) {
            // Negative Number --> always true
            return true;
        } else if (number < 10) {
            // Only 1 digit
            if (4 <= number && number <= 7) {
                return true;
            }
            return false;
        } else if (number < 100) {
            // 2 digits
            var lastDigit = number % 10, firstDigit = number / 10;
            if (lastDigit === 0) {
                return eifelerRegelAppliesToNumber(firstDigit);
            }
            return eifelerRegelAppliesToNumber(lastDigit);
        } else if (number < 10000) {
            // 3 or 4 digits --> recursively check first digit
            while (number >= 10) {
                number = number / 10;
            }
            return eifelerRegelAppliesToNumber(number);
        } else {
            // Anything larger than 4 digits: recursively check first n-3 digits
            number = number / 1000;
            return eifelerRegelAppliesToNumber(number);
        }
    }

    moment.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm [Auer]',
            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
        },
        calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[Gëschter um] LT',
            lastWeek: function () {
                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
                switch (this.day()) {
                    case 2:
                    case 4:
                        return '[Leschten] dddd [um] LT';
                    default:
                        return '[Leschte] dddd [um] LT';
                }
            }
        },
        relativeTime : {
            future : processFutureTime,
            past : processPastTime,
            s : 'e puer Sekonnen',
            ss : '%d Sekonnen',
            m : processRelativeTime$5,
            mm : '%d Minutten',
            h : processRelativeTime$5,
            hh : '%d Stonnen',
            d : processRelativeTime$5,
            dd : '%d Deeg',
            M : processRelativeTime$5,
            MM : '%d Méint',
            y : processRelativeTime$5,
            yy : '%d Joer'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('lo', {
        months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (input) {
            return input === 'ຕອນແລງ';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ຕອນເຊົ້າ';
            } else {
                return 'ຕອນແລງ';
            }
        },
        calendar : {
            sameDay : '[ມື້ນີ້ເວລາ] LT',
            nextDay : '[ມື້ອື່ນເວລາ] LT',
            nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
            lastDay : '[ມື້ວານນີ້ເວລາ] LT',
            lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ອີກ %s',
            past : '%sຜ່ານມາ',
            s : 'ບໍ່ເທົ່າໃດວິນາທີ',
            ss : '%d ວິນາທີ' ,
            m : '1 ນາທີ',
            mm : '%d ນາທີ',
            h : '1 ຊົ່ວໂມງ',
            hh : '%d ຊົ່ວໂມງ',
            d : '1 ມື້',
            dd : '%d ມື້',
            M : '1 ເດືອນ',
            MM : '%d ເດືອນ',
            y : '1 ປີ',
            yy : '%d ປີ'
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal : function (number) {
            return 'ທີ່' + number;
        }
    });

    //! moment.js locale configuration

    var units = {
        'ss' : 'sekundė_sekundžių_sekundes',
        'm' : 'minutė_minutės_minutę',
        'mm': 'minutės_minučių_minutes',
        'h' : 'valanda_valandos_valandą',
        'hh': 'valandos_valandų_valandas',
        'd' : 'diena_dienos_dieną',
        'dd': 'dienos_dienų_dienas',
        'M' : 'mėnuo_mėnesio_mėnesį',
        'MM': 'mėnesiai_mėnesių_mėnesius',
        'y' : 'metai_metų_metus',
        'yy': 'metai_metų_metus'
    };
    function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
            return 'kelios sekundės';
        } else {
            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
        }
    }
    function translateSingular(number, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
    }
    function special(number) {
        return number % 10 === 0 || (number > 10 && number < 20);
    }
    function forms(key) {
        return units[key].split('_');
    }
    function translate$6(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        if (number === 1) {
            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
        } else if (withoutSuffix) {
            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
        } else {
            if (isFuture) {
                return result + forms(key)[1];
            } else {
                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
            }
        }
    }
    moment.defineLocale('lt', {
        months : {
            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays : {
            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY [m.] MMMM D [d.]',
            LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l : 'YYYY-MM-DD',
            ll : 'YYYY [m.] MMMM D [d.]',
            lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar : {
            sameDay : '[Šiandien] LT',
            nextDay : '[Rytoj] LT',
            nextWeek : 'dddd LT',
            lastDay : '[Vakar] LT',
            lastWeek : '[Praėjusį] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'po %s',
            past : 'prieš %s',
            s : translateSeconds,
            ss : translate$6,
            m : translateSingular,
            mm : translate$6,
            h : translateSingular,
            hh : translate$6,
            d : translateSingular,
            dd : translate$6,
            M : translateSingular,
            MM : translate$6,
            y : translateSingular,
            yy : translate$6
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal : function (number) {
            return number + '-oji';
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var units$1 = {
        'ss': 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'h': 'stundas_stundām_stunda_stundas'.split('_'),
        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
        'd': 'dienas_dienām_diena_dienas'.split('_'),
        'dd': 'dienas_dienām_diena_dienas'.split('_'),
        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'y': 'gada_gadiem_gads_gadi'.split('_'),
        'yy': 'gada_gadiem_gads_gadi'.split('_')
    };
    /**
     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
     */
    function format(forms, number, withoutSuffix) {
        if (withoutSuffix) {
            // E.g. "21 minūte", "3 minūtes".
            return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
        } else {
            // E.g. "21 minūtes" as in "pēc 21 minūtes".
            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
            return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
        }
    }
    function relativeTimeWithPlural$1(number, withoutSuffix, key) {
        return number + ' ' + format(units$1[key], number, withoutSuffix);
    }
    function relativeTimeWithSingular(number, withoutSuffix, key) {
        return format(units$1[key], number, withoutSuffix);
    }
    function relativeSeconds(number, withoutSuffix) {
        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
    }

    moment.defineLocale('lv', {
        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY.',
            LL : 'YYYY. [gada] D. MMMM',
            LLL : 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar : {
            sameDay : '[Šodien pulksten] LT',
            nextDay : '[Rīt pulksten] LT',
            nextWeek : 'dddd [pulksten] LT',
            lastDay : '[Vakar pulksten] LT',
            lastWeek : '[Pagājušā] dddd [pulksten] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'pēc %s',
            past : 'pirms %s',
            s : relativeSeconds,
            ss : relativeTimeWithPlural$1,
            m : relativeTimeWithSingular,
            mm : relativeTimeWithPlural$1,
            h : relativeTimeWithSingular,
            hh : relativeTimeWithPlural$1,
            d : relativeTimeWithSingular,
            dd : relativeTimeWithPlural$1,
            M : relativeTimeWithSingular,
            MM : relativeTimeWithPlural$1,
            y : relativeTimeWithSingular,
            yy : relativeTimeWithPlural$1
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var translator = {
        words: { //Different grammatical cases
            ss: ['sekund', 'sekunda', 'sekundi'],
            m: ['jedan minut', 'jednog minuta'],
            mm: ['minut', 'minuta', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mjesec', 'mjeseca', 'mjeseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    moment.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact : true,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sjutra u] LT',

            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juče u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[prošle] [nedjelje] [u] LT',
                    '[prošlog] [ponedjeljka] [u] LT',
                    '[prošlog] [utorka] [u] LT',
                    '[prošle] [srijede] [u] LT',
                    '[prošlog] [četvrtka] [u] LT',
                    '[prošlog] [petka] [u] LT',
                    '[prošle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'nekoliko sekundi',
            ss     : translator.translate,
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'dan',
            dd     : translator.translate,
            M      : 'mjesec',
            MM     : translator.translate,
            y      : 'godinu',
            yy     : translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('mi', {
        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [i] HH:mm',
            LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
        },
        calendar: {
            sameDay: '[i teie mahana, i] LT',
            nextDay: '[apopo i] LT',
            nextWeek: 'dddd [i] LT',
            lastDay: '[inanahi i] LT',
            lastWeek: 'dddd [whakamutunga i] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'i roto i %s',
            past: '%s i mua',
            s: 'te hēkona ruarua',
            ss: '%d hēkona',
            m: 'he meneti',
            mm: '%d meneti',
            h: 'te haora',
            hh: '%d haora',
            d: 'he ra',
            dd: '%d ra',
            M: 'he marama',
            MM: '%d marama',
            y: 'he tau',
            yy: '%d tau'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('mk', {
        months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Денес во] LT',
            nextDay : '[Утре во] LT',
            nextWeek : '[Во] dddd [во] LT',
            lastDay : '[Вчера во] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[Изминатата] dddd [во] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[Изминатиот] dddd [во] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'после %s',
            past : 'пред %s',
            s : 'неколку секунди',
            ss : '%d секунди',
            m : 'минута',
            mm : '%d минути',
            h : 'час',
            hh : '%d часа',
            d : 'ден',
            dd : '%d дена',
            M : 'месец',
            MM : '%d месеци',
            y : 'година',
            yy : '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-ев';
            } else if (last2Digits === 0) {
                return number + '-ен';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
            } else if (lastDigit === 1) {
                return number + '-ви';
            } else if (lastDigit === 2) {
                return number + '-ри';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
            } else {
                return number + '-ти';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ml', {
        months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        monthsParseExact : true,
        weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm -നു',
            LTS : 'A h:mm:ss -നു',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm -നു',
            LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
        },
        calendar : {
            sameDay : '[ഇന്ന്] LT',
            nextDay : '[നാളെ] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[ഇന്നലെ] LT',
            lastWeek : '[കഴിഞ്ഞ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s കഴിഞ്ഞ്',
            past : '%s മുൻപ്',
            s : 'അൽപ നിമിഷങ്ങൾ',
            ss : '%d സെക്കൻഡ്',
            m : 'ഒരു മിനിറ്റ്',
            mm : '%d മിനിറ്റ്',
            h : 'ഒരു മണിക്കൂർ',
            hh : '%d മണിക്കൂർ',
            d : 'ഒരു ദിവസം',
            dd : '%d ദിവസം',
            M : 'ഒരു മാസം',
            MM : '%d മാസം',
            y : 'ഒരു വർഷം',
            yy : '%d വർഷം'
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'രാത്രി' && hour >= 4) ||
                    meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
                    meridiem === 'വൈകുന്നേരം') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'രാത്രി';
            } else if (hour < 12) {
                return 'രാവിലെ';
            } else if (hour < 17) {
                return 'ഉച്ച കഴിഞ്ഞ്';
            } else if (hour < 20) {
                return 'വൈകുന്നേരം';
            } else {
                return 'രാത്രി';
            }
        }
    });

    //! moment.js locale configuration

    function translate$7(number, withoutSuffix, key, isFuture) {
        switch (key) {
            case 's':
                return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
            case 'ss':
                return number + (withoutSuffix ? ' секунд' : ' секундын');
            case 'm':
            case 'mm':
                return number + (withoutSuffix ? ' минут' : ' минутын');
            case 'h':
            case 'hh':
                return number + (withoutSuffix ? ' цаг' : ' цагийн');
            case 'd':
            case 'dd':
                return number + (withoutSuffix ? ' өдөр' : ' өдрийн');
            case 'M':
            case 'MM':
                return number + (withoutSuffix ? ' сар' : ' сарын');
            case 'y':
            case 'yy':
                return number + (withoutSuffix ? ' жил' : ' жилийн');
            default:
                return number;
        }
    }

    moment.defineLocale('mn', {
        months : 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort : '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact : true,
        weekdays : 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort : 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin : 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY оны MMMMын D',
            LLL : 'YYYY оны MMMMын D HH:mm',
            LLLL : 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM : function (input) {
            return input === 'ҮХ';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ҮӨ';
            } else {
                return 'ҮХ';
            }
        },
        calendar : {
            sameDay : '[Өнөөдөр] LT',
            nextDay : '[Маргааш] LT',
            nextWeek : '[Ирэх] dddd LT',
            lastDay : '[Өчигдөр] LT',
            lastWeek : '[Өнгөрсөн] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s дараа',
            past : '%s өмнө',
            s : translate$7,
            ss : translate$7,
            m : translate$7,
            mm : translate$7,
            h : translate$7,
            hh : translate$7,
            d : translate$7,
            dd : translate$7,
            M : translate$7,
            MM : translate$7,
            y : translate$7,
            yy : translate$7
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + ' өдөр';
                default:
                    return number;
            }
        }
    });

    //! moment.js locale configuration

    var symbolMap$b = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap$a = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    function relativeTimeMr(number, withoutSuffix, string, isFuture)
    {
        var output = '';
        if (withoutSuffix) {
            switch (string) {
                case 's': output = 'काही सेकंद'; break;
                case 'ss': output = '%d सेकंद'; break;
                case 'm': output = 'एक मिनिट'; break;
                case 'mm': output = '%d मिनिटे'; break;
                case 'h': output = 'एक तास'; break;
                case 'hh': output = '%d तास'; break;
                case 'd': output = 'एक दिवस'; break;
                case 'dd': output = '%d दिवस'; break;
                case 'M': output = 'एक महिना'; break;
                case 'MM': output = '%d महिने'; break;
                case 'y': output = 'एक वर्ष'; break;
                case 'yy': output = '%d वर्षे'; break;
            }
        }
        else {
            switch (string) {
                case 's': output = 'काही सेकंदां'; break;
                case 'ss': output = '%d सेकंदां'; break;
                case 'm': output = 'एका मिनिटा'; break;
                case 'mm': output = '%d मिनिटां'; break;
                case 'h': output = 'एका तासा'; break;
                case 'hh': output = '%d तासां'; break;
                case 'd': output = 'एका दिवसा'; break;
                case 'dd': output = '%d दिवसां'; break;
                case 'M': output = 'एका महिन्या'; break;
                case 'MM': output = '%d महिन्यां'; break;
                case 'y': output = 'एका वर्षा'; break;
                case 'yy': output = '%d वर्षां'; break;
            }
        }
        return output.replace(/%d/i, number);
    }

    moment.defineLocale('mr', {
        months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact : true,
        weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat : {
            LT : 'A h:mm वाजता',
            LTS : 'A h:mm:ss वाजता',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm वाजता',
            LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[उद्या] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[काल] LT',
            lastWeek: '[मागील] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future: '%sमध्ये',
            past: '%sपूर्वी',
            s: relativeTimeMr,
            ss: relativeTimeMr,
            m: relativeTimeMr,
            mm: relativeTimeMr,
            h: relativeTimeMr,
            hh: relativeTimeMr,
            d: relativeTimeMr,
            dd: relativeTimeMr,
            M: relativeTimeMr,
            MM: relativeTimeMr,
            y: relativeTimeMr,
            yy: relativeTimeMr
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap$a[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$b[match];
            });
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात्री') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सकाळी') {
                return hour;
            } else if (meridiem === 'दुपारी') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'सायंकाळी') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात्री';
            } else if (hour < 10) {
                return 'सकाळी';
            } else if (hour < 17) {
                return 'दुपारी';
            } else if (hour < 20) {
                return 'सायंकाळी';
            } else {
                return 'रात्री';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ms-my', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            ss : '%d saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ms', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            ss : '%d saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('mt', {
        months : 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
        monthsShort : 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
        weekdays : 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
        weekdaysShort : 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
        weekdaysMin : 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Illum fil-]LT',
            nextDay : '[Għada fil-]LT',
            nextWeek : 'dddd [fil-]LT',
            lastDay : '[Il-bieraħ fil-]LT',
            lastWeek : 'dddd [li għadda] [fil-]LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'f’ %s',
            past : '%s ilu',
            s : 'ftit sekondi',
            ss : '%d sekondi',
            m : 'minuta',
            mm : '%d minuti',
            h : 'siegħa',
            hh : '%d siegħat',
            d : 'ġurnata',
            dd : '%d ġranet',
            M : 'xahar',
            MM : '%d xhur',
            y : 'sena',
            yy : '%d sni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$c = {
        '1': '၁',
        '2': '၂',
        '3': '၃',
        '4': '၄',
        '5': '၅',
        '6': '၆',
        '7': '၇',
        '8': '၈',
        '9': '၉',
        '0': '၀'
    }, numberMap$b = {
        '၁': '1',
        '၂': '2',
        '၃': '3',
        '၄': '4',
        '၅': '5',
        '၆': '6',
        '၇': '7',
        '၈': '8',
        '၉': '9',
        '၀': '0'
    };

    moment.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[ယနေ.] LT [မှာ]',
            nextDay: '[မနက်ဖြန်] LT [မှာ]',
            nextWeek: 'dddd LT [မှာ]',
            lastDay: '[မနေ.က] LT [မှာ]',
            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'လာမည့် %s မှာ',
            past: 'လွန်ခဲ့သော %s က',
            s: 'စက္ကန်.အနည်းငယ်',
            ss : '%d စက္ကန့်',
            m: 'တစ်မိနစ်',
            mm: '%d မိနစ်',
            h: 'တစ်နာရီ',
            hh: '%d နာရီ',
            d: 'တစ်ရက်',
            dd: '%d ရက်',
            M: 'တစ်လ',
            MM: '%d လ',
            y: 'တစ်နှစ်',
            yy: '%d နှစ်'
        },
        preparse: function (string) {
            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
                return numberMap$b[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$c[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('nb', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact : true,
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] HH:mm',
            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'noen sekunder',
            ss : '%d sekunder',
            m : 'ett minutt',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dager',
            M : 'en måned',
            MM : '%d måneder',
            y : 'ett år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$d = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap$c = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    moment.defineLocale('ne', {
        months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        monthsParseExact : true,
        weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'Aको h:mm बजे',
            LTS : 'Aको h:mm:ss बजे',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, Aको h:mm बजे',
            LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap$c[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$d[match];
            });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'राति') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'बिहान') {
                return hour;
            } else if (meridiem === 'दिउँसो') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'साँझ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 3) {
                return 'राति';
            } else if (hour < 12) {
                return 'बिहान';
            } else if (hour < 16) {
                return 'दिउँसो';
            } else if (hour < 20) {
                return 'साँझ';
            } else {
                return 'राति';
            }
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[भोलि] LT',
            nextWeek : '[आउँदो] dddd[,] LT',
            lastDay : '[हिजो] LT',
            lastWeek : '[गएको] dddd[,] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sमा',
            past : '%s अगाडि',
            s : 'केही क्षण',
            ss : '%d सेकेण्ड',
            m : 'एक मिनेट',
            mm : '%d मिनेट',
            h : 'एक घण्टा',
            hh : '%d घण्टा',
            d : 'एक दिन',
            dd : '%d दिन',
            M : 'एक महिना',
            MM : '%d महिना',
            y : 'एक बर्ष',
            yy : '%d बर्ष'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var monthsShortWithDots$1 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsShortWithoutDots$1 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    var monthsParse$4 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var monthsRegex$4 = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

    moment.defineLocale('nl-be', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots$1;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots$1[m.month()];
            } else {
                return monthsShortWithDots$1[m.month()];
            }
        },

        monthsRegex: monthsRegex$4,
        monthsShortRegex: monthsRegex$4,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

        monthsParse : monthsParse$4,
        longMonthsParse : monthsParse$4,
        shortMonthsParse : monthsParse$4,

        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            ss : '%d seconden',
            m : 'één minuut',
            mm : '%d minuten',
            h : 'één uur',
            hh : '%d uur',
            d : 'één dag',
            dd : '%d dagen',
            M : 'één maand',
            MM : '%d maanden',
            y : 'één jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var monthsShortWithDots$2 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsShortWithoutDots$2 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    var monthsParse$5 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var monthsRegex$5 = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

    moment.defineLocale('nl', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots$2;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots$2[m.month()];
            } else {
                return monthsShortWithDots$2[m.month()];
            }
        },

        monthsRegex: monthsRegex$5,
        monthsShortRegex: monthsRegex$5,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

        monthsParse : monthsParse$5,
        longMonthsParse : monthsParse$5,
        shortMonthsParse : monthsParse$5,

        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            ss : '%d seconden',
            m : 'één minuut',
            mm : '%d minuten',
            h : 'één uur',
            hh : '%d uur',
            d : 'één dag',
            dd : '%d dagen',
            M : 'één maand',
            MM : '%d maanden',
            y : 'één jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('nn', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I går klokka] LT',
            lastWeek: '[Føregåande] dddd [klokka] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s sidan',
            s : 'nokre sekund',
            ss : '%d sekund',
            m : 'eit minutt',
            mm : '%d minutt',
            h : 'ein time',
            hh : '%d timar',
            d : 'ein dag',
            dd : '%d dagar',
            M : 'ein månad',
            MM : '%d månader',
            y : 'eit år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$e = {
        '1': '੧',
        '2': '੨',
        '3': '੩',
        '4': '੪',
        '5': '੫',
        '6': '੬',
        '7': '੭',
        '8': '੮',
        '9': '੯',
        '0': '੦'
    },
    numberMap$d = {
        '੧': '1',
        '੨': '2',
        '੩': '3',
        '੪': '4',
        '੫': '5',
        '੬': '6',
        '੭': '7',
        '੮': '8',
        '੯': '9',
        '੦': '0'
    };

    moment.defineLocale('pa-in', {
        // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
        months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
        weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm ਵਜੇ',
            LTS : 'A h:mm:ss ਵਜੇ',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
            LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
        },
        calendar : {
            sameDay : '[ਅਜ] LT',
            nextDay : '[ਕਲ] LT',
            nextWeek : '[ਅਗਲਾ] dddd, LT',
            lastDay : '[ਕਲ] LT',
            lastWeek : '[ਪਿਛਲੇ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ਵਿੱਚ',
            past : '%s ਪਿਛਲੇ',
            s : 'ਕੁਝ ਸਕਿੰਟ',
            ss : '%d ਸਕਿੰਟ',
            m : 'ਇਕ ਮਿੰਟ',
            mm : '%d ਮਿੰਟ',
            h : 'ਇੱਕ ਘੰਟਾ',
            hh : '%d ਘੰਟੇ',
            d : 'ਇੱਕ ਦਿਨ',
            dd : '%d ਦਿਨ',
            M : 'ਇੱਕ ਮਹੀਨਾ',
            MM : '%d ਮਹੀਨੇ',
            y : 'ਇੱਕ ਸਾਲ',
            yy : '%d ਸਾਲ'
        },
        preparse: function (string) {
            return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
                return numberMap$d[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$e[match];
            });
        },
        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ਰਾਤ') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ਸਵੇਰ') {
                return hour;
            } else if (meridiem === 'ਦੁਪਹਿਰ') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'ਸ਼ਾਮ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ਰਾਤ';
            } else if (hour < 10) {
                return 'ਸਵੇਰ';
            } else if (hour < 17) {
                return 'ਦੁਪਹਿਰ';
            } else if (hour < 20) {
                return 'ਸ਼ਾਮ';
            } else {
                return 'ਰਾਤ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    function plural$3(n) {
        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
    }
    function translate$8(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                return result + (plural$3(number) ? 'sekundy' : 'sekund');
            case 'm':
                return withoutSuffix ? 'minuta' : 'minutę';
            case 'mm':
                return result + (plural$3(number) ? 'minuty' : 'minut');
            case 'h':
                return withoutSuffix  ? 'godzina'  : 'godzinę';
            case 'hh':
                return result + (plural$3(number) ? 'godziny' : 'godzin');
            case 'MM':
                return result + (plural$3(number) ? 'miesiące' : 'miesięcy');
            case 'yy':
                return result + (plural$3(number) ? 'lata' : 'lat');
        }
    }

    moment.defineLocale('pl', {
        months : function (momentToFormat, format) {
            if (!momentToFormat) {
                return monthsNominative;
            } else if (format === '') {
                // Hack: if format empty we know this is used to generate
                // RegExp by moment. Give then back both valid forms of months
                // in RegExp ready format.
                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
            } else if (/D MMMM/.test(format)) {
                return monthsSubjective[momentToFormat.month()];
            } else {
                return monthsNominative[momentToFormat.month()];
            }
        },
        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort : 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin : 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W niedzielę o] LT';

                    case 2:
                        return '[We wtorek o] LT';

                    case 3:
                        return '[W środę o] LT';

                    case 6:
                        return '[W sobotę o] LT';

                    default:
                        return '[W] dddd [o] LT';
                }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W zeszłą niedzielę o] LT';
                    case 3:
                        return '[W zeszłą środę o] LT';
                    case 6:
                        return '[W zeszłą sobotę o] LT';
                    default:
                        return '[W zeszły] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : '%s temu',
            s : 'kilka sekund',
            ss : translate$8,
            m : translate$8,
            mm : translate$8,
            h : translate$8,
            hh : translate$8,
            d : '1 dzień',
            dd : '%d dni',
            M : 'miesiąc',
            MM : translate$8,
            y : 'rok',
            yy : translate$8
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('pt-br', {
        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'há %s',
            s : 'poucos segundos',
            ss : '%d segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal : '%dº'
    });

    //! moment.js locale configuration

    moment.defineLocale('pt', {
        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'há %s',
            s : 'segundos',
            ss : '%d segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function relativeTimeWithPlural$2(number, withoutSuffix, key) {
        var format = {
                'ss': 'secunde',
                'mm': 'minute',
                'hh': 'ore',
                'dd': 'zile',
                'MM': 'luni',
                'yy': 'ani'
            },
            separator = ' ';
        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
            separator = ' de ';
        }
        return number + separator + format[key];
    }

    moment.defineLocale('ro', {
        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'peste %s',
            past : '%s în urmă',
            s : 'câteva secunde',
            ss : relativeTimeWithPlural$2,
            m : 'un minut',
            mm : relativeTimeWithPlural$2,
            h : 'o oră',
            hh : relativeTimeWithPlural$2,
            d : 'o zi',
            dd : relativeTimeWithPlural$2,
            M : 'o lună',
            MM : relativeTimeWithPlural$2,
            y : 'un an',
            yy : relativeTimeWithPlural$2
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function plural$4(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural$3(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            'hh': 'час_часа_часов',
            'dd': 'день_дня_дней',
            'MM': 'месяц_месяца_месяцев',
            'yy': 'год_года_лет'
        };
        if (key === 'm') {
            return withoutSuffix ? 'минута' : 'минуту';
        }
        else {
            return number + ' ' + plural$4(format[key], +number);
        }
    }
    var monthsParse$6 = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

    // http://new.gramota.ru/spravka/rules/139-prop : § 103
    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    moment.defineLocale('ru', {
        months : {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort : {
            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays : {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse : monthsParse$6,
        longMonthsParse : monthsParse$6,
        shortMonthsParse : monthsParse$6,

        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

        // Выражение, которое соотвествует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY г.',
            LLL : 'D MMMM YYYY г., H:mm',
            LLLL : 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar : {
            sameDay: '[Сегодня, в] LT',
            nextDay: '[Завтра, в] LT',
            lastDay: '[Вчера, в] LT',
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[В следующее] dddd, [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В следующий] dddd, [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В следующую] dddd, [в] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd, [в] LT';
                    } else {
                        return '[В] dddd, [в] LT';
                    }
                }
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[В прошлое] dddd, [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В прошлый] dddd, [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В прошлую] dddd, [в] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd, [в] LT';
                    } else {
                        return '[В] dddd, [в] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'через %s',
            past : '%s назад',
            s : 'несколько секунд',
            ss : relativeTimeWithPlural$3,
            m : relativeTimeWithPlural$3,
            mm : relativeTimeWithPlural$3,
            h : 'час',
            hh : relativeTimeWithPlural$3,
            d : 'день',
            dd : relativeTimeWithPlural$3,
            M : 'месяц',
            MM : relativeTimeWithPlural$3,
            y : 'год',
            yy : relativeTimeWithPlural$3
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM : function (input) {
            return /^(дня|вечера)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночи';
            } else if (hour < 12) {
                return 'утра';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечера';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                    return number + '-й';
                case 'D':
                    return number + '-го';
                case 'w':
                case 'W':
                    return number + '-я';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var months$7 = [
        'جنوري',
        'فيبروري',
        'مارچ',
        'اپريل',
        'مئي',
        'جون',
        'جولاءِ',
        'آگسٽ',
        'سيپٽمبر',
        'آڪٽوبر',
        'نومبر',
        'ڊسمبر'
    ];
    var days = [
        'آچر',
        'سومر',
        'اڱارو',
        'اربع',
        'خميس',
        'جمع',
        'ڇنڇر'
    ];

    moment.defineLocale('sd', {
        months : months$7,
        monthsShort : months$7,
        weekdays : days,
        weekdaysShort : days,
        weekdaysMin : days,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd، D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM : function (input) {
            return 'شام' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'صبح';
            }
            return 'شام';
        },
        calendar : {
            sameDay : '[اڄ] LT',
            nextDay : '[سڀاڻي] LT',
            nextWeek : 'dddd [اڳين هفتي تي] LT',
            lastDay : '[ڪالهه] LT',
            lastWeek : '[گزريل هفتي] dddd [تي] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s پوء',
            past : '%s اڳ',
            s : 'چند سيڪنڊ',
            ss : '%d سيڪنڊ',
            m : 'هڪ منٽ',
            mm : '%d منٽ',
            h : 'هڪ ڪلاڪ',
            hh : '%d ڪلاڪ',
            d : 'هڪ ڏينهن',
            dd : '%d ڏينهن',
            M : 'هڪ مهينو',
            MM : '%d مهينا',
            y : 'هڪ سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('se', {
        months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
        monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
        weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'MMMM D. [b.] YYYY',
            LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
            LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
        },
        calendar : {
            sameDay: '[otne ti] LT',
            nextDay: '[ihttin ti] LT',
            nextWeek: 'dddd [ti] LT',
            lastDay: '[ikte ti] LT',
            lastWeek: '[ovddit] dddd [ti] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s geažes',
            past : 'maŋit %s',
            s : 'moadde sekunddat',
            ss: '%d sekunddat',
            m : 'okta minuhta',
            mm : '%d minuhtat',
            h : 'okta diimmu',
            hh : '%d diimmut',
            d : 'okta beaivi',
            dd : '%d beaivvit',
            M : 'okta mánnu',
            MM : '%d mánut',
            y : 'okta jahki',
            yy : '%d jagit'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    /*jshint -W100*/
    moment.defineLocale('si', {
        months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
        monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'a h:mm',
            LTS : 'a h:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY MMMM D',
            LLL : 'YYYY MMMM D, a h:mm',
            LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
        },
        calendar : {
            sameDay : '[අද] LT[ට]',
            nextDay : '[හෙට] LT[ට]',
            nextWeek : 'dddd LT[ට]',
            lastDay : '[ඊයේ] LT[ට]',
            lastWeek : '[පසුගිය] dddd LT[ට]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sකින්',
            past : '%sකට පෙර',
            s : 'තත්පර කිහිපය',
            ss : 'තත්පර %d',
            m : 'මිනිත්තුව',
            mm : 'මිනිත්තු %d',
            h : 'පැය',
            hh : 'පැය %d',
            d : 'දිනය',
            dd : 'දින %d',
            M : 'මාසය',
            MM : 'මාස %d',
            y : 'වසර',
            yy : 'වසර %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal : function (number) {
            return number + ' වැනි';
        },
        meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM : function (input) {
            return input === 'ප.ව.' || input === 'පස් වරු';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'ප.ව.' : 'පස් වරු';
            } else {
                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
            }
        }
    });

    //! moment.js locale configuration

    var months$8 = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
        monthsShort$6 = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    function plural$5(n) {
        return (n > 1) && (n < 5);
    }
    function translate$9(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':  // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
            case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$5(number) ? 'sekundy' : 'sekúnd');
                } else {
                    return result + 'sekundami';
                }
                break;
            case 'm':  // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$5(number) ? 'minúty' : 'minút');
                } else {
                    return result + 'minútami';
                }
                break;
            case 'h':  // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh': // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$5(number) ? 'hodiny' : 'hodín');
                } else {
                    return result + 'hodinami';
                }
                break;
            case 'd':  // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
            case 'dd': // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$5(number) ? 'dni' : 'dní');
                } else {
               ;4�óm+8��"\��)�I�y��G�����,Y)��e?���&�ջ;"�-�O�zv��#��"��V�0�R�K��*�[Z�Sy�k�ǻ`�&�]���6I�59>�y*��������l�B��<T�o�G�{C����~�۔���>����Lڔ�0��=�C���'1�@>
���m�t091�������N�z�u�zf�Tx�po�����&���᠉�>b:+Bm*�qb�g���, �J+�8O�q;�8'?�
8���N��2��r�Vr���ˋ�qҕ�ԇ��w��9{(d����Q�*� S	�˚m9,^���$	B�`L6B"	�w߷�j��NE���Zz��
UJ��n��m�z��gQ��f(�:�$!Dl4 U��L�B�	�� �sz�ې�(n�_ݐM�_&*EQ���)�� 	�wڱ�+���V�l_T?�3d;@c�a��~�{�T���R7$������#��̓\�/Bh�%�iG���em�����+AQ��`|�q~y����z|
fv;����:ix�9RH:mkk�CB��d#��΃�9��+}�Ļ��'���z�u�FRn��vJ��W�M��X@ R��&���?�N�)-�Q�B�t�EM��8�M�}�M!�6|#�9Ynf$<w��G6θ��s�~61�����t/͌õ�og$�U�l�g�X_;�M��MJ�Q�/��5��݇t��`��g`����&T+�����S��ۣ֨4؜J ���VָǨ'�(��� x�������!o)�C�㲺�Z�e�z�ll����cV�.���k Y�renu��1؋�5��Sy�O-'��!�F�/Lc��]�8����o]�9��x�;���{{L;Y�g<�z,h/�ǛX֖v(YԈ�������-��i�|-V[q0B.W��J�?p�uh&B���:"d�Q�D�W��t�L��8����vM�~u�^غ�p[�ԡ{SY��+�]�$C���s$&$�	l �Z17G�����L�����9 �H����;�{��eb~���4��7R(����I0i�k��9+����h,�K(��3yd���'\_#E!�&�ъ�Jva�Ff�V����kVc��m��H�*�Q�r��y	,�LiK�_�EN|�JVoI��\Z�.��UI4-\ܟ߉ާ�¾K)��oW��`����0\���:@5� `��l@�\�V���&��d9��h�iwo��e�2Q�*��B�s(�p�G��*�F�Zd�� ��N�ؕ�F�x�e�s�Ǜ����g~}��*����?�r��3�t2l�ms���W�4NMH�iz\�*���x^���\D-����VU#e�\�|����e�V�g����}��H��;�v��	�K�L���":KV�Z2S6#\�nI���+�g5]�o���������8�*`c�6�/�@Y�*��Ȟ�p���2�=�l�7I���%~/5s_֚��
qKtb��0ŦYM�"*�s�~��y[�ШT��Ǿ@Ǚ1���wy_Y�%�����?m�%K�F���L��<��9\ yݙ\�Q�H�W?33���ѯ� ��z�;��L�����iUeƪe@�)�S񖪪���Z��!���ﾊv;�p�2^	U�'��G�{�B�B��ᤇ�=K�L�%���ĳa��d�5���QO�!�w
�,���r��{}C!��o&�_ه�3�q�;c����<�+�9���̖�Sf�XZ�p(T������aYgLU�]�Q�~�A�&N<֎鯚ݬ�am�P��2�������\9�(Sz>��߷P+6��$b�I\)3��?�e��4�̗��VS�:[�β���������s�"@�7>�d��wS��b��sE����\�*#�A��MWB�T
~C�pcl��%
�t^��|������ș�D+��r�o*P�B�E���=�5n9al7͖7v���;<���*��'�6:��k���:	���1�w�3�"����a�a��Xci�3�h/�����y��_Nj̇y�T�#���^Snj<��m�>��ه��c�O�Vz�����T��lB����׎ݧ�����7��ff)8z�z�~�A��k9]m�1jJ`��</�s��|��}�>���*�)����@+ND�2���U\�z���^je���H���<��F��g�<6�J�k�T��n�@vX�lޒ���iZ+�B<�0V���N��%�N^���������kfd�����+��ͦTڷOA����t�b�f��Ù!�lZ�j�8T{N?����L.ީ��(vz�ʪ�m-q�f���H�sgV�����ѐc#Z%+�Cm<aRP�M/D!�/ۜ�����f_+}�W%4⽢9$���Y@8�kx~%��@�!P������e�bj1{��r����Ըu�!'��!o�&y.��#!e���K���m�6xCIH�BUj�v=�)./%6L�����0��2ZA�=��JH��o�ML�a{T2�������J��Qҗ�� Cp�:��I���������K=�*%y)���I����xϥ�Ѽ��02��d�\]�j9�|���UDdr|����(6�/7�������I]>�1��x.�r+��|��8�O�d������|��f|֐'Xʆ;��1	F%s����}��o;.a��2�<,&Q	]i��Zw-;���j������Q�A6�&��
�-�̷�5'���h�C;'gm)۪vf'�C0�b ���|>F;�%��K�����|���9:x�n���߸;�?��Ϭ�mv���8��+k&�z>
0��|X��#��R��O��i�*��p�G;�x�{D�|<�ؙs��f�;��;��Sx���H*/�~h(EԚ�-��D�P��B&���n������H��n��H� ���GJ6�X~"��=��b�� ���z���o*�z<Յ)l�@Še����J7�25p-���Wy
S��S�Z��`�g}���$`����Dr��}o�Q���^
L�Yp�V{
!�8�Ʋ��1fۋ&
1���-�~,	�T�^�]�+���BV�$��o/���1:*����?��u��s!�d��0.�פiز�ŉ�Q4	�l�����hd�I>ㇲ�C:�w�l񖃟Z6(<G�/_9M��iU��4���eÐ�fYEd�_��ւ���}�������]��Zz��Ƅ�g�l�:�H��3���j��	�]fW@��m{��r� ܨ�x���?�k���s�� �.�m��Z3�y��5h0����R{�LpG��Ղ���O��u��r3�{8�2�J�M%��1�	��/�e ~���[��a��v�z�������o��+�����3^�Z[S��`+�����]�FGkޢ{�I��?��H�Jmc�tn��y�!MZ
�a;e��<)?�L�a���gv�+��.�b3�Y�O�b�^3EO�ތa�� <YQ��G?�W���_k�pc�-�C��� ����n�\�n��z����h����JA�l��9e)��O�k��#���8Щ��+a���A�f�	���?��#��;�o�{}����1�}��;.�F�ւ=���M�� /�Ї]F�ݹ��@�q�2��U�9BV�������Xǃ���T����#QDy���5��Wtjը�9e<�F9AK)NH<d�`n���d<��2�5�zm��T�ڸcj�\��ݺ4dT X6r�u����(�k}�!L�]�ڃm(����fҵ�YO��j����'�rz^ ��O�X�m�M`���0�ַkC���&�uړ��Þp�<λ�\8@��xK�ɸ�Cys��H)$��(@�|!S�C��R ����)PT�p�G&:!Q��-?qd����ʗ.=��J~#�ڏn��d����ϯ�v�(ߐG���?�:��:�{���|x��>t�l�e���x���E�q4�S4D?+���%��A����K�J�k!�!LS>;8W�TE�i(L\F�n��A��P�f����� �x�p|DB��ob�qc��Â���ȭU� 6�ĸ��	�h�1k?�V�����}#o�W�mБ! X����nl=2(0��8��㬻	0,��VR�����h��8I')�W�N
v]>EA:��J�c5�i&�ah����y�B��z����R<����8E�ԟ�0�A���CS	��tj��/������X��,H[�u �6��=�A�_�tJ//�3[��Pƻ5��<�tP�z�9���h��Ȇ��z=X@�a��C*)���UI�O|@��y��O6U��)*�'�3B�T��asT��Ni�@���%J�gMl�g�i�Xɫ��rrl��w;y�:�9Xu�q3�R�� Ub�Rza��<`R��wV�g���~�Z-���Qn����FH�ܘ�-g�#�+-����0�1��^f��q��	P@6cF����JT��5a�GS���#SB�h�p
����x
����$uމ�Z){�
�^��B=�mA������>���\Ig�
@�GD�!d��5��I*�bi�+�aoǡ��hp�Ԋ�ދ(���5��2�l�o�K�޷����X:q�Ǫ�mꥪ�Z�DU{)��a9fkq�ĖIZW%g+,���;�l#��ք�e�v��fk��BI�M�Z*�<�^�C�W�m����,.j|&X�;�PU[VR�;�)�{ה49��$����)Bˮ�ޖ=aK���]�p�fxݣ��ZV�:[y�<��[S���`o	�<�FN~�e�Y�('�^�ĳ%7�0S���oy�^�|f����_a#��hx����;kZ�C4���e���Z9t�@aM�E���2V��Q��X�(�2��h�;E�h��0��nv/�»�doed�	jb�:��[��*c&����c�[F�r[���tj|b���֯��(b�3S����\q=���N�<T}�"�y��FxVi�zن�O���/'6{����S�8I��,p�ٝ^�;%l��qa�bk�چ,�[���u�����J��nËׯp���W6�ս�b�-�����g��������ٖ�8a�ԧ��f�|.�~��W5_}Cׂ:I��{�1ks�Qy���hwO�P�f���)��_ӵz�J��Ӵ�fxee)����`}˦�ϋ�v@̓y��SO�_�����h�tu��fq��s���b��Y0��>A�ɋ���P�Fc%R��>*|��ܥ* �2�#Q���� ���G��E�P��O�/���'$�rZ�l3p�9�t���}ZɁB���8��N��XfG���^�,a{��܆=!���̆+'Ү�2TL�ѭ5�\q^-��G&B8p ʒ��	��.Fp��~$�?c�����!����OHKh�zG�ߌh5(l���a���U���<����܍�k�����x�u���P��߱H�+	�|�2��}�g���(:���KX�x�6!݅���E�M0h�P�(`x*R�7.<9M2�A1*͞9j1-��\�+�(f!5Qu��F���`�'��^���K��z}�m�E��l�Z�~Ȫ�7us�ug=>G��,��i��O� ���Z���T6Z ��&*Pܸn$̢�=ٺi�g�n�+�����|�Yu1Z���z��E{EM�y
�W��M�yF����P��q\+s(��fh#����W���@ 5ǲ��ϛZi����������JQ=��AQ��,p%K`XV����,���2�v�dVYj����eT��u^3=$�t��QRz
Q�yuť�Y+�^(�Δ��D,�j�[;�l�0q�P.�W����f�FQ�5ل�;F����"�Y,S�����cx
D�O�9�
�7t+PPn��DWؾʹ���̶\�XS��28��R&����d�N�q
h<��f�,��,RE$�3�����'��W&��ش���l�X�h��7���M�"��!H�|x���aM" %�*D'�[ɌWR0�@�(a�J${�y'�B�@޴�H�o�b`�u%4�q}��`���h�k ��}��M���9lbc׿?,%�f���ӭv���i�*���z��|��OT��V5�Ek�ZZm�͎5�9o�C�\6YΙ9dlU��X�Z��=�$\y=� ��;J��cE�)�"��Q<�O�n�z��DBH�D*Sq=P�dqDO���3rK�}rhE�Fk,+����+}�>g7Q���W����@zd>�o*	nV\�У����꧁��m�
G��U�yk�W��c������,q�9�垎�Q,Ē�@�.@�f��_(��̓�e����ޝV$D%L�	jşLO�r�7Ӵ*k+C�aR�����P.7,��q��e��ɂ��+�.�J�H�vo�|Uԍp���be��g ����i nk&�RÊ��.LM=�O+oR�r9z�����w�v��~�Ku���u��2<U����ȵ��C̝�pu��*����B_J��ź��7 ��¾�X���Һq�K�1��Լ-���5�v)�Q0;�bG��.��V,GP;��](�� ���^����yb˽�	���TMqd<2��x9�v��jO�jm���O9i�4��w�!��A;���AG�+���B������
e�ר]=��d��3��R��m���4!��;FO��m�AA��n�D��9��ՓL�pO{��	
IB(�BWi��Q�?צץF?���$���V.�cږ�t��Z�y2/d�Ӈs�pkLNbJ�MZ����h�$"�
�5��<�����q{�"��W/JCԷ�b{����+b)a��Kk�h#t��¼T��~���1a�
�����X0H��0��GG�(S���J�gA��Ɂ���ce�fd	�,$�P+��72ViKU@E��Y^\q`��@3�
=��;�4�C���͓H����%zm��yy�za��Ĳj��[%T�(7����������0B�uX��:qst��+�����'=ݙ<4�B ��L鈇f<# �D����~���9n-��B/�Q��R��j�G���3��2��|�բ ��>���p��%Oj,l&&�V�Z>��~� i�������Fx k���G��HҌ�����ܸA񴵓 �/W��N����%˸����'�0xW���tKR��#��ƢuKMw�RKV�(�(H�G1�;۵�Sw��ц�,~+���_C�!�x�����l���A�T����%Z�W�yd&��&�7�
Hkx5�g��%|�9O��Q�f}�ؠP���p�JwMnK[]Z�h"�l}{��bw�"����S�M��L�����<S�y�xAc� �60�kcj3-M@d���if�G�8^^sa���6D����2�i}�X;���O���fR"W\D���'��gA?Z~j� `�����!*�xO�)sWV��V
�1�j�W���%@ŨB:b��Q�W�YOx>M"D0�Η��.���* ��L/�t`��H� �'��bk܎p�[w61djV����� ��.ůc����}7�� ��۶��?ru�J��p�V}�#u����Mt�jD,7�TU\1ɆeC&:����U>�Ig��EbO���B;������F��~������j�K�V������3�QE �A�G
�� Ϭ�n��f�-:���)�F8��uE�����|L�����eG��(�DMDc��`���;�Z��C�JÀj�#��e��p3��~w$��V3T^�P���5W��m1Z8B+pu��I&ż�f�>,)jf}E�Y�E_ ;����t뱨A�+)D��Iu=`�U���!��r��$k�����I7)�1��	/���Z[S��e�!T���dtE�/�V~�~T���3����Y%j�Ϛ�Ee���-�ۄ�W���ⲍ=i�ң�gқ�<���ql���f���V[����L��"=��	��`I8Voɾg�	��RJ��6�n�ze�W�?ֻ��t�����7J=�`_/�������nd���������4�3?�p�JL����<hH]%U�������/�Nx��_i��M�#g|�O�=��ď ���d�TƁ�o~�i�#�|���������ovf�s�����}�����
_q.pE���9L�����g�8%e��t�ߗ�����������0}��@��@��}R>zP2ͮG��j����uU�;l���)"(hgr��t��`rR���q�`�7�;��bWoďh.�S�X.c]�QP����P�%�J[֎
	�ƠTϵ˦��{Y<��6),�c<ZwR�B&$A�8�:��p}\(E�?�f#fl���t����&/��������`*RB.M����d
*�h\AH	=��[+�,n� �m6��:�f��s&�Ҵ���D�RU�Q`�����	����3�"ʪ��%<TL_nDCN�2��ȨQ�Ai,s)U��sMD� �����Z��;�����߭�l�uh��{o�,���2���Z6}�Z�c#N����|9��Љ@y��׸E���+讣:�"�^g~*�P��;=��L8�����>nw&[��"yL�e&�?	�8�B�x�[�1���;�Yif��_/ǂ[S@ce�*1� �Pq��	�n����)ѭ��:{�䔥�f�Ji�
(��C���-�-1��I��Z��)�pQ^�*�oFr׽p4�n�T<��p 8S$" `  �~���{$�,`2i�
di��i���O��սc��Y��a���;���co=�`�����0y�dHuہ�!v��������� Ff�h  �P�Fw���w���x|�I��|�=Q���Ի/����yj��s��΍I�j'�6Fj���H�H-����Z�� j��vA*Ԑ�kV!�#���o   � �$w��n�xPmP���E���!Ţ=
�뵒5�u�yV��j�8F���9�|#;x��@ � &��n6ƀ��*����#n�^G8�̖��H/�p۶���}�ۼ\��CX`�W���d�wDl3��Lh�r~bP8�55�I�c�9�j}/�p��q^�g��1-��vxsLa\.�2�`(Cd�8	���MF&R7�0=���;1��>�еAk���(hX:�fh���xdbW��d�؈BnH�̏	��8po#$d9
'�oz��#/9&r3L�Q���Lo�]X������3�����PKy\N�J��a����~�6��cd�v���ݻ�a����9�'(�����l쏗���Y�MuF�_��i�{�H�̈́ݒ=w2���D3����\G����7��M�<<�A�٘ 1�%$���D~�^�U�*����K~������b'/4MRs@k��W��%4��D�KfB�G����,�������T�IiA?!qJN����iK�r0�/��M�%���e�ZZ�m{���h�%d�:��^jM�TRm]�
ĚX��W��#��cTB"5��8.��đ;X1�r��w�ez��b}9��0ʐ����O�N�+�ҰЂ�W
o;)�Ⴋ��5����!���}s�����ƌ��I��W��`���uIf���c)�<7ycM���u��_s��;�q ��Y<��B���%\R��K:�>8��6�h2�̌�
/�m���ȘԤhE<Ǚ�1ʒP�� n"pd�F�}jw1.����ɟ�NE.�X�j�o�T��+p�8�)��p�y�y.��W?���3|���v���u>�Q�Sn�f��81DǇFKv0)�T�C��pm��/Q��R��5�-��ȸ��|�L�����?��Um ����p�w���ڽ������h�CǙ3�c�I��"<Jn��vV�T�H��&�1S.h	r�39�F߈�s�#��bx��c�@�j-�U~�1�@��^4�T�덒�9h4YfF�$/�N�=�sei�z!�G�[�ͨG�˖�����m�(��1,�|��{�c*��۳�]�f��S.�����e}����$'e5�q�����82��2_pn��;.�
o�!e#�bK21�_�uF9�׻\g�F޺�]������@=L��bA�hKN���Jx���fb0NU_��j�!�S�-r& �<?��k�a�v����)%�=wtigʟ��n��p��	�v�!޻�
���S ��cg^bGw<B7a�*�lw��)XJ��i��V8Fp��1kRs�7'cȃΤ��wf0�v�q_�1G�\�{A�g�ע�&`��_E8�!uY�K�s���k!��Ċ����p�'�Tf��$��}���5zl��%2�Ւ�Yi����T�lf:�ج�4l��6W���=�ף���7⩄�C`N�[:���s��6���e���i���ڻl���\�L�Cƥ��o�Lz�㱩����U�GGn}5�8ڴr�fڡ-�6t��6�b-! 	6ܲ>�)��8��VMz��Zp�@��?Q�����B��%,�	�F%��Q)�":#��F5e S���j��ԭnp4%v��"��I��a�:��P��D�tu�k���ɕ����P�&.I�	ӟb ��J���]��{��ʰ�2l���3��<�$��0��y�)�����7���!���9ur]�ɀ��,85�����iΈ]��&��a?��'�f|2|���:����n�K���*��N]�a!f�P̼��ful �C
28�}̀�&i�!w��ݶ��0�EP8g.�k��C-rPZ'%������O�)��b���2�>cp婬��Q1���O�6h�?��!������������������� ��bNƺ3�\�h�$�xKa��
n���9Q��yt��z���[��k���x[��xZ�e��am�M4!��b���`��(,��VQޜ��d�k�Pzם�:O�:�|}o������n���q�.	�s�0W�Jf"�f��>��O����+8[rx��6,s�KlG3��w\���Xp���a�c��=�ʢ�["�E�K¾g�G�E�z,�InR55�e�.�����A<5�4.h0�,�Z���x>��
B��V�q���"m�Ԇ��e\����S�:iɋ�%K�8�o�R �����ƎkՇ�B�fl�4���k��b[�w���
('�|!o�����@7���!aoh1L�F*Uk.�h189�p��F�_6��%���>�����?2���0��E;v(�U�a�k�n�Y����Q:y�1�=������%u�b���a�.qJzb�'#}������F�/�p�lէ�}
�p"圜�����@�=�z�(B8]�ȱe����;y#��Ȟڎdw��7�$^���,R-]_(nZ�G��v��Н�1z�M0�ħ�a�:��� q��\���⛧���~戄��7)���*�q�&�i<��!�ixk$�2�����:4مz��w�E��	��roc^�բ�����ө���$g��Ʈ	��J~dU]�iqed'�^q��O�у��4ï�7D�"��-�>�Vc��wE����#X�Q��F.�� A�^��Z��I1������d���:T_����n�Q��9�h��,>��d���/��8	��&7�7o�I*l��� ����4����4��8˿r&�6^u�J��Nk����e�{������QNZ�+�����$�/'�&�gC5���Ƀ�בx�n�'f��Uf�کU�=��Jb�E7��S&��:3a�yߒ���fp��<,�Q�N�F)������a��*�O���${�b��ha��Y���27���
�k��6��iX����(�fB����{��M����v��*�'��xA7����k?���NǴ�aq�)EW��7.�N��z�Zw�բ(�c��t7�=rex�?�p;F=	o,��6�%%Q���OzF<+�9� uȚ�@1
�g� �5�F�M���W4�}���g��|�k_���9�s����nBq��"����x�A�_<��_6�k x���K�cH�̮}8���+'E���� �ӯ�:/2�W���|ZZ���Eh���◓ή���PƂ���~�ɶ7r9�o�额;$����=I�)�)�6iI�l�
[�����s�>�$:'wZ��}nfx�G�3uꐻ��2�z�wӥ�m�O�A������|� ��i��҇y����r� ��P��U��
�6����)^N* |�)�,,O> �=���q_zj+	�;"p-�y��@{q�a���b9��s�f�t,h<�v�(o�Dgyf��#��q�)??nnߒ1
MX��ۉR���z��}�G�����a.�1�!;UrZ�<��:�,HE}���S��={��?���VT�!�ڊ�2YC�|�������E�tf��k��$�n�N�v���M�����?�|U#h(�'��d�J����G�l ax�_��W-1&#i�E��R�GPv%7�	R�9�!�� ��wI��������)næ�`���� �
	�+��/I�i/n�x�4{&4�&2�e�p��n��8�r& {G|@����7�yM��σ>Ey)eW@4������j���3�4{ǩ%弱�Tg1s�*�̖Jj�����f��I�A�준z���g����y����N���71Έ��;zsҌ# �荀� �>Xʕ�M�)yqF���.�k
L��q��d}���3�fs�+k��'�s�����9K�R�P�:��)��� �Y|��=�قy��xP:��!�\�
��e9�9#��13}����23��
wFt;:�Al{g;��9'`��39����,6l\�^5t����k1���>��$����b��;�P��ϯ��k q;t�1�n� P�ۧ��3��7I�3�l��ř�ݔ�VAXz�y�Cf��ܻ����f�n�ht����ׯ�h�qn�r���=��\��t�8j��o�Q��	��P[@e�h�|��Z^�׻<��S$%�Z�V~/0%t�_Vwٓb��-kv#�����X�����޲���$t���Ƌ�����Q�*7�V��7�[��9W6���
���.�B��YX���P�>��'E����lW�e���#Q���\=l�b[������82`�������35��)W��F�S(�A?����*o'�ʤ����R�yw/Ip�szN���H�@��v7������=D�gk���W�ͪx �� Տ7�&~�]�=��_� �۸�U��!�]W���S����p�]	ׅɈCY4��/�J�U;�`P���h�C��p�]�%��_��c�R�ځ�V���y�p��U�ސ}�7�T���eQ>�4��q&��Y�C�4���۠����&E�R]�2��J�!1��7�����q�!��\����Lk9a	m����]$�����C��;����<� (P�+�ғԃ�YVZ���@�ZZ�/�!�H�*h2�h:)#j(	J-�1�-��;wa<"�-��ktQ�kt8��֣{���|f��cY�}�
+��ZTe�cW�̴�	4���)a��`~T.yЇ��H_��1N���D�f��P/����.R\���1�o�5D�Z��y��v��F2�e�[�	�c��x������\.�������fΡ����* O�>j�8�'�\��Y��{����KD,��6����Bĳ��D[��BM���<{�@��qU!�#���D������2�
�U��L̲^��'qi�RP�5��'MXGK��/������[Ms5���Υ���NG�g6�R�{���ç�K����[i��H9D�a$GgB�)O`F_h�Q�Y�%�%��$BLm5X'��-9l��⁶��� 7��(9�`�Z�0_g�菭F3�Z]���o�� S&�C �
�F��|��Nx3��N�����ƈ�AE�A�T�he�(��N��C-i�t�ҟ*��=Mi}g���|�Y�3�.���N����?\5d0���2����۷XV�bP9�o��8�M�{�9��:�HJ�{�<�*w�����VO:ʘ�
+>�n��v�y��A��8AK�(ON�i��e�s]BE�[�|0ͦY�lA�)01o��㎭��Q\�dt�v��Pw*'%�������K���c�u����KΥY%�n"ӿ����.�rx.�����	vCzt�X5�5o����&nܷx���SqN�����@'ؽ*O�NP�'g}'�X�y�a;��K4L������rΘ�3u�b���*4�x��<͙Sf�h�G'��/�y�&0�þ�(hʓ�]@��sƠ�r;qO��L��V۽�~��O����!n��p1J-)f56JU�������;>�pF%��EN��̅O8���_-_�8+|\�+F+�fGu�
��ϫA�m,�^��i9��wXUsE�ܹ�ȍ�c��WLh�O^;��w҆}N�g?�S_�	��#ߴ� g�i�j��^�&R��r|s�vE�n�x�A���^[pg�oef�I��gq��ZFaP�*�̧P0�>�� ��#>a����w���l~_�#�|�{s��i	(�h�Ɇkrl>fbƪ	"<_�!C�3�&:q��F=,t_E��q�
�p�0���}�Q^4�n��ϵ�ĥ�e�����(�=�*��H�E�B��nH_�Z�9���(���H��wf<��1s��8��l�v*������	��V��p�U�eÌ�d�@ZI�R\u�Dן�9��mT^s H�Y����)%3o�Y����s74I���a$���~��gf�ݖق�X��i$W�f�dͷ��c�a�f�S�5�����v�3�&D��ɜX��d�+<�Їa��nb6$�־Kz��N9ى	FObc�.!�m�T�*6���r?*R�H���y��YJ�^"�T�L$��SW�W��|�o4���ހf�p8��N;�-TУ>o��9JPQ
㮥�=�������]��7M���0�-,�x,�9��x�f9�;S
z��L�
3�ۗ��yO��h&��E�f5�Q
�?'IBS�p:�I��3�� nj.\�
����B����eX�n�'I�Q�/�zZ�'{G�mrk8e�I�'u~���y(z���@����s��Q�=��&Y��S�ں��z�R��u��,-�o�?��op?�u��p��1J|��#���,�{߲���ih4�&=�i�ep�� Q�x���Կ����b?��wg�c17y/Jr���C��s��Z��EbC=�F�ra9�p �G eH��^@���!��(��8#�h�<��D�R6��?��l8��|e|� o:
nW��/[t�������K��!����MwW�Q.8��O��;� �	�+g����9��e��κw6]�63�� �da��Y�jA��3&=lIm{�*�,���z����r�Q"�Ŏ��y8��S|,HuY6���f�������4�?X���%�'NX��I L�#H[M�j�΍F46��"N������,
Bs�0&!�iQ3|!C_k��=M�r]��	P�BP\� ׁ��s�B��π��fˁf�({l�:��,x/�!�`���/���>7��Fr6��z\�
�+��K`O�G��N��J���l�E�b���m.��I�y1E�h����	j{�����1Vp|�Q$\�;��]���@�����=�1��3`4.�F����߶��������u�]�G���ҙ��Wd��)���~��GcX��]�ӛ�H���ɻ�U�8b�s�Ӱ�����������^���=d>\g�ǂx�V�<�װ|,ujUB�j�U�ȏr�
��d����o�-Cz̄zͥjꃷjT�?���A�O�lH������s*�C.�"�TWY��
Q%x'ʲ�e&͕cμ���;����f�7w���/"���ݻ�}�v�C��] ��h�3�A�x�sD0���ч����XcWWk�		H��z؛%|����F;�/!�ڰ��:�������rb4�l*3�%/ΝQKa{�xJ��д�%U�Ovq�Đ� �,���_���نl�m J�\g-�|7�Yd��$(;n'J�f>�;�5�6sff��M�Τʷ�Ƕ;���ͅ
�?�J{���2�ݶv�N�����+�P̅}ʶ�<���
����-H3|��[���a�p���?��c&�jg*}���0�������,)�oT�X�Q�Z���|�Z���loT�rzv��~!�bj']�*�@R��d�7��x�G��������?�u<5be{�A~��m`��GP�{��b����"gQ�}&7�@:w�ZV��W�(�����u�71��E��0/BNi�2�i�bB� ]A�n��b8�eD�w�������LABC4�ԇ��Is���AJ�9�
��.'���xފ|E�0�)z���z����W�9�����I5~�K��y�܀�(�b&�#��׽~�/�UV��3��*wpj1!����A�9Y�˩6gɛg����t��H5���L�~�jL�7��,��������$�� ����Җ�ô�B$���!��D����$�T{��ߓ���_�af�V/���폚k;4؁�z^�]�1t}#���8�`5�U���c#⇈��-��=mR˃ǣqL(�,��&�saa�M��Q�Ym�zlN��H�lȘ�t"�l����Hg�u���%,W���ݒ(��$�7��k<�����.:%�?p�v臥�_��8�y�W����?��ڊF���/�tWx�};�͎�Xl����Q
��%6Ё�0)���<���d8���nY�J�+��?�$��|����V3Ó��v����%6�*$��ʹ�9kS� �pTu�<�p\��_7Y�?�zq�z�X��~�L��S9�U�nw#pv�hc!����i�%qw9OC��"���W�CZ�;	�,����k�UM�GIV����D��Ȋ�g�r���������E��%5�Y0�lm�̡U�ݛ�Z�]t���-�΋�ۜv�K��Qd�F��o�N>�w�y�ܟ��cVW��;�����
$ڌ|"��R���| J����?'Ư:gw��ܹ{�b/G)���K�՜�Z��51T
�F�v?p��)�~�ũ�˸�7�]�-�kنM+f;p��]5�<!<N��M�&4�����!q��nR=�1��p]�+0���bĴ�a�p�*��즺DM��2�F�$[/vB�]��w
���=օ�g^u��L���H���/^���2V��Z�G�`(�wl��ȄM=��蔘R8VU;��h˞���*6XHx��q�O�\��4̙�(<�{;X�cj��gٚLl���˪.��&c+,cs��\��	�g�i�vDrg8?�$o�5n������a~JG��*�P��Ew�(0(ش���h۶ G�Wf=��ISG�d���jг�J�`���KR���2>�?y>���0��oy�g���>Q^vY��?�j�#u�:
ä��-i�H��$��sӜ�;\��{М����,7�4��l���F����K�^��&ʶY���z����|�a�C� T����U�46���ba��_� �6����)�F��a���W}�92Z��{e9�=��JJ#q���s��"H�f8�� 6l��6b/����QJ���RK�� �0��ªJ�p�R�N+��B����l*�;Rk-mx"��̅%�է� ��`.0-S�[�F��IK�/��q��y�񮴣�k�V�/���v�3X�w�~����R�o�=1\X�w��Ǣ�(ٞ4��^*���b��^�|Y��'���tI����#��&"�/��'Loo����G��%��&Y�Č�^_ɋĿc-��\�LM����9$�>L��{nQ��l.p����P/\8���]�P�ub��+G�D�6
��$��d�B:.�!*�I�!�N�41����X�A┱ck�V�u|=�ߛ���٠�O�( 1�L��0�(�C��^��k�C�ś��8�c��.ǈ�zLj�`��̲Ԏz�.���GD��FA��k���Y�b,8�M�����L��7�c��_�g4�6�*|`��U��c����i$f3gӛ
D��0i�`+�q��	B�6i��>�'x2'TMۥ)�����荅�8�ah1u�'mzS$�m����b`ܯu;D �v>rGΉbgq� M��޾�f�6��z|Bz�Q��W�(]�d5�$YQ4$e�Ͷa�97�aOl��ɒϐ����[t��j���+���{�}	Z1���QbDD�L �P~�y�)\a��1�8ksMU)f5lHE���f:�#8r%�x���M;}?��i:�P
�g�|�RU*�?�?�FCF����Sdd۟e�7�q-4��ǝ�w�#^���9À����ʳ��B%��[�ߕ!�,��6$�=vo��H!�Q*D�"���1����JeB�/TQ�D?�E��KrG�3�e/�{=�k��[n��r�JC�)fm�>���4_Κ������X�*���ӣM�a�NT��A�.�����KU렎�}��z!���T�.���yG^TPǦ��������
=��J�����?�c��[�e�M�wğ�=%3�w�5��;��w;)�f� �L��I�2�B���0G�v�0�����J�U��W��'��o�5�ͬ�}i�i��s�iW�.['\�E��4.g�&-f�PYb�� �Wv�̄�E_R�{0|x��4/�:4(��2<|��Q�l�;_���]�65�۰ �`���+f/k�� m��>S8O82�ZH�����S�lk�6�n�JD�^J���'o�/F���kU4�y^��ْn;�t��Z�^�A�Og��� t% C�D�	��Z1A�N��������=V5w�v����;�Oi���{
���z��r�4P�I�1�/�k�~�"��������
7��CDg��Z��ܒr6��)�&V��X0V֌�Pq����bD7_�Χ�H܎��xM1sx�V�f@ud��4�me�m��-AS�36K�2�+&�o~%n�4�g�P�2�!�qϨ�%�J��>�9c]*�T���:�!eB�Ke���&��?!�y�뵑���S�|JӉ5�d����V��x�/���͒k5v���&����c�ׯ]�g'��&I糹M)�����o\���ͣ.��S'�)�� 9zl�O�����2�\�$]��s�LA�������Ϭf�z���6W�%gy����ƥJ,Bu��D�U49.�fgiX_�R�q��i�%�<C�c��'F�pe`	�zy��������S�����'��%lt7|G<2�ҽ�7�����oX �,J��5"�
8*�Ά�2<�񱸒d>�8b��tC\P��)}�$>�_k��ŻHx�$����U��:t"�2��2�'���j���`�x��)�jq��2nl��Q��7G_ZX3�5��2�at�&�D�*fʖ@_���K��_+�'�r4�S&6
�\7������?`:�|�B�_�t��$���pL�=@�Ul��8�` !1�/���k�qO(l���v̳��"�pj�d�wZ[�35\�P���ي�7hb� ��ߨO�>�D�"SCѽ���FJB4 !x�E��k��m�t-/�[6?GF�\����A�%�3�2��v��/P�4q-(}^'�t�K�����B��o!ؼ��R��">Q���v*0��|5E�?���������R�C�l��W�E���_׏W���x��"�y�w:{�`G)r�#����ӑ��xkл|�O�M�0�30���K}H�gq�` �t�v�)��҇�����=�B�!m׎C�׹��l�j�2uFcV��/=d�ގ����٬�*��o��ڶQ��C�q�?p���(��0.;�,z��P���������<�q�������Aw�{E0���'~�V�j���Uz�-�~0���k�h�6���}.&7
��Z���竲6�J��TXvR��8UD�*|;9�j��&�x������y�]�5���[��Z>ѥ��������i$�R�)�Lͨ53FDk��f��Ę�k2��*f�_�{���٩:Δ%���N��~9���!�}L�6���pK1�3#~Ϗ�˃>�\��� ��l|
O����7,��r�G]��<��o7Q0?p���Ʊ�]�pX�nP�WK�H��ƧtoE�ۄ��0M�W�%��̝9���ן�����=����G�q���Ѥu.�IA���ן����
1�7S6�f�W/�Z�n��ch��DA��/������~4��T�@L�ȹ���=HF��DD�DE18��@� 
<ek�̂/�sوB4q�y���5� ��3q*��K�x^�X�;;�G�;�k{����6�S��q�f4H�y�9��2Q�b2Gd<�F�V��)�"� �V֗>=
�j�L���v�Uh���ϫ8V��V-i��S��q�HH)A��^�2�uf8�0$k��O�����z��>������
��L��S�P8?M�SQ�{�si���T8�fy��������p��u22�'˖a�%�*[;��خ�c2��9\����-��JP���������ѿ�þ0l��z�K\b�u9S���	�:�<��%���J�ه"���D�!���4�3�F��7 �LhFc{0�1>TM��r搭/�Z�L�d��wM�����hYl �/�pj��E��!�w��{e3���:����K�-�ר@����Uё��n��B���4�-��㤲\p�8�1���Ih��KǨ�5���&�c�֨�KP{TX7P�>��2�ø�{Sg�a�0I��)��D�z~��[9}.C`I#p��<��QLU%Y�ƙ`���:���2?�����?��E�=��b*&xҳ�k���n
O�X���h|�[�"����)���H�(���'/�&������ɿ48tޡ0H����i�hL�+$����	H3a�7N��;�r�2�S��Q��vUࡔ�%�Y���7��{���i�Zo���$(����i>6�!�����P���ߌ��.3�. �_��U����w�R�2�d�"�P���m3Y�0 S�FEX1N,���f���b�ofW������Հ4������M�[�#��B�9����N�#2V`� �C�\�(d�`h���h�l�����;t�kuF�蓋� ���,��rc��T�=��p�n�Y]8  �	��Wä�<����;3lx�[�5A[�]�sL�nC��I���Ho
k1�
�n'm�������m�����1�}��j|�ݐ�9����bk�ի�~z��<�"E�wA�X>r�a�\���%ݻ���0B2�~��Ո�%����T��i�
b1V��Dxb�k�LC�t�V���B�����ro����B?rz
��#a�k
��_�Љn�8�ݻG3��j�KnAX������wQŽ�\BJ
���Cʃ�2�ܨf���I�0�騿�!�
�4��X$]!k��X�V[zrs��2Z0�w��~4��q�p���/V��EJQ-�+�Q/���Z�0�2��H(9�ݬ"��@���N�����=�=;i`}P��Q�u�b�`n|w�5}i�&&q�e���Z��j���f��8(եi�}|ʂ�$�$}�d�]�����yi�N_�ϼ�2V�;"����W!��P�ߵn]�a�����eh�Q�k����F���&�HtmX���W2�bn3  ����ěrCl����q9H͡�3,��������q8��ڼY�և�`V9�ύ�g���e��x�;#3���V����Y��*n0��*�\���х��H(�����H����������u����5����sZ]#���Z�	j�_	�x�D���c��0O����@�Bn���$���.�-�*�Tr���ՖH�Z�l�k���V�,9qs�f��q��	�2�U�N��V9�j��z�q���!�\�ȇ{�\[^�S����o�q����yb�.�8����1�u�y���6���nc�v��=! �j�>�A�dk��x|jq�Hs'h��+�;�7��UH��1�9��RȶY)=EOw�sׅ$x8����S�,�`#/C�4�NZ��X�2�Ί�ڟ�i6�֤e�Z78�E|���Y���T�����(��T&����s(�����	�zdZ����je׹xX�t��Sz�d�ϣ
	�P'Q�Cxf9�{a�b*�x8�"SDd��R��f�&y58�o�A�L,��#j�����U�f�[+�����������N�L�ײ�D�.����+~�o��a<�@��5ʐD��aY�!*Y���֤'�f�.��̓}�M�r�Y���	�4)�g�ݚ���IӶ.�:�T5Y����?ҷ:+� ts�j�r�/��x��S��m�VF�z�Yr��w�	�X�n;�,]6$\���5<�:6�KR��;�#���5zd���3H��<��Ҳ!`�pa$l�Ԣ� �d�4����� (��h����'a���?�%w���]�۵J��$�T���Y�<i�nj����=����>@Ϫͅ7��#u ߰C��n1s-�1]

�{�@���X
V4��� ��Q|]�A���#�Tv��^�yh�wx�*��r:�%�۫=��7:�M㲎����Vۚ�p�g�h�5�"ݬ��-b�F�J�PF���V�P��i�c^tk��4�@�"7V/y
��}�sbw��/�ڪ9륋z�ȘZ<��ܶV��d%܌��.��hB��&AL."Y����!��[������y�Y팎Xt�0&���>��<?���C5�#i��^Ҷ�)H�Z��@n!�#:���$�@-|	P��}�_�Q�c�V8�j�7����������;�:��nR��/�_�XF��]�
d����m���[�2�:�(i��K�Ǳ�5���J��bK�`�� �[�ڟ7��)\8`[p���5Yc4g��P*��:�W�G��jn��-^�/�k�S"m8EEs+��[��c�!�y�}f%[��t�k�ZU�5�$�w
m�t���q��|�.�`5���S"S���ҟZ0"Y�����5
�ݤܝ��������VH��LA5���V�4xd��;i�[24`Α~_0���i�m���������达Q��5�+B��6�+�������mg��k��P���۶���$�F�f��$kᘻZ�I���;��<@
��ܖ���m�����%Pd��ĸK[�ESzq�R��͓�$�B"�,&��v?�|��e��v�V/��iRǒ�E�����	Q��
�+՟x��͸Ir���6�8�%�-�W���8�S�N��,S��u���LIt�c�Vs���7hd�ڽh�c)��|����v�\y�����������{#g�Ȫ����sL���P���J��Lŗ[a�j#�h�u4}����
�quv�j�� ��Hvc1=^eY 鈙=�E5|�(��6X֜�x�����d�;�n���+(�W�b�v�Q�F0;X��}Ԋ��VQ���-��Ē�����:v����!i�?�-���l�yB�(�A%3R�C���� ��p��p3�հ����e!�%%+X��`��Z��nB���)��\�e\�-�v\�R��zO@f7��c��(c��?ǉ�!�h�R�IOڠ���Ld��g a��*�h,�e�H�a{J��,��1*��0����uݛ\�d��v�m�|����-��cfZ;Nč}�(e{w���Ět�� �
?�a0���C��^�r��q��+����[��z��Jͻ���]3��������O�`�.XLP��X���[Ԁ]����V) ���Wm=��%ެk� 2�m%�U�`��C�����pOE�`����0�(y��8����SI1�rV�t�G�m���G�����f��9#c�P�e��Q��F�����ؕ9���$�z�$�����s�����E�=�N\t�o�2�GX̨���I�!��͡�7ďuT�3G��ݐ���x^�gC�Cz��n�ֈ@8Bw��}���!���,�ڼ����Bb_�6 ��@M;?L�(U�����-��L�O�_����3gB���v����8}џ�}��2��J����O�ѱG}8�Qܙt*��;���v�k�Y�ܜ�����h_� �z�m״v�'S�s_"\�u���?���.u� 	���w+6�Aϔ�B�=��X�)O����wu��$H�߄�3Z^ᜀ����T@�˜�F9��N�(���<����Zf�E"b��'���dY@��[R(�����njw��EQQ���tFH����x�u�R�#Ĕ���VF��g�k�;�$��{�����P��2%�m����19P�<{Z�6m�>Wa���Ş~���! 4�ti�����QD#Z�u��Ǟ�u> 1�h\��Ӊ�ߖ[�h_9w=Q�X�6�_]�Y
�w�l��N�@�دf̈́�"^K��BI���f�iT��������{O�|:Z��G:ٓ�U��+٤]ETApk�«�,�)q&%��h�S����j�x%^�f7O����U��W���2�r����`Zfw^��k���T�q�N͉x�P!���4��VE�E��1�捙�@ݚ�EhJ.�8�
ߐ�����-F1�����0>{G�m��j�+��~����pT���Q`,b�EZG��b�n��������@�k�~ҘO-��o)�Y6+E�a� �j @�6��OXT�y%��~�hR�����&q�ʧ��Î�:��w@V=k�f��7u�l"��a�kæC�u��C?�A���P?�ks���=��!Y[�^����E�f����!e��k]��H��TW/��n3;�V��_�-��+�ط�y$#��C\v!�0�@>�k����#u��=gh=�������9P<D����4n�q�?Zӿ�b or���q��b�8E�9��;��Y>iCK�9"�_��@^�����M7��̈��=�¯��#��qD=������~\_��RUu$/D�����i.c	r>��j�
�nu���]�!^vw��w����v�e$�4m��q�3<
���Qx���ǈ�;g����@i�GW��񕺓K�:w�w�-��x��y�(���\=cB�@}YU-�y	��J�;+�k%#�.\NrQ��k�b6vyL
�m׭<�
��{��c�ZL^R_'ЏӃ� �.�4U�8X;Y+�Ǒa�����/�6]���T;�O����{��$B?)H�1��I�X0BL���j�X��|�a���&��)��Q����0b�b':ꂗV�Ͱ�8`w�z���@W�,ܬ����֞����|MkZ u�バ�rj]�f�o7lc�mc&�ȼz.T�6Gh�S��7�7�i%;��u*;���>"�h?mB���1D��b��Ӆ3��
R�-�>\�;�ľ��H���W�����w����;��:�񔉉��u�D���m���m�s��O��Mh���t��^���s�PƔ��V��
��/�� |�:6�-���HB̵�;�����C��7�I]~?�s�~F܈��⽡�C݀��|�WS�/|������;�A���RFGVX����yդg��{�E#uJ� �����r ���tik:㦹El�K�Ïog���g�����r�c\Z���]����L4k35��M-w�=����=J�I�{��!ve?s�,z뇇iN���a�H/S�4���QNWca������6�abt�v9.�>�qGA���)!"�� �0��:Pe5j/���o,d.�g{�^>̋��ڱ
�?�R[�qDW�^q欑$�����!��s�U��>��ߪ�\���l�9���<0_!�}IP�~=_��2j�nH�@'"�wU��3�V�m��+�}��ǻ���|�����`w�����C�3�#������m+5l�;7�'�z�ɧ����^3���mR-���Aڹ�i;�v��
5P�^��B| l�>rU�iq�&[��sܸ���}��P���gկ�}�@oZ��}���q[?���'�`�B�jd�ڎ��ZX_O�g�	�|����a�Ņ8�10����A6������.	Ĉ���F[F���K�WF�2a��~tci�T�%,�*xh��l��t��9�`2�U�@z���yz�Յ�k}_@�=4t��+��(�r����^9jj��& �C�c���"��U.���Da����C��8����ޙ f��n����t�,��^P�IUl�'-���e������
�d�G��e�p���ؒu�A�S��-�����RjS�s71c���?�#A_�Wkr'մU�,�h"?����4��%wy��Q��'������x��棰���|W�k7I����f��@��uPd!=�aj#k�^dl�XB[N�Z[@��A-��u�m����*�<��'$�h��R���O�X�����NJ	-OJ��=�	c��� ��H_���4DM�{�a�5�?P]��)F�C��v [�O�ےZS>�TN�0
Z�����Z���P*=�}�>*4ެ-�7�o)��gŖ�9&� �Q{d%��h��t��v�}��NgN�� ױzjѲ��9��r�"hՄ��F:��Ͱ�~�ǡy�Q�����iUO��0x̢WAJE��g�+Z�<��;��'��6��%����y0��C��؆�����o���T��6��ҋ�U�A��[W�����/��6�kY<\���Q��e)������W����|J���s-�]nKb��U�OW���ff�y��ܳ�9(/��XE��C��C�z��|�kX��[�*�[_lg��/>¡���k��lu��/2��\`ɵ��>���=Wg�.ս͊�$6n�.��%���ǌg�'ސy�� ~�q�N�]kQo�m��sr�!��ݺ�Y����h��+ԀW���md�<L)5�r\߻�7��(����K�	����]J%j汰�\��Ϸ����y�e N;h��Ll1 ���c�������.�R�s��u����J�@ �='(�[�DOYߪe]f�r�fƊ����$j�2Z�����m���z���}��SI����`�/ϵ8��+�Q����u/�Rcz�wDx��s�B�f ���E:�8������,:S٢�BB?,�Ae��wR��~�'���b�m}m�# r'Ë�3X2���l�M)OZ��"c��l=�va�6�%��l�ڇ������h��|����6����?�i�0-�4�y-�:3��Y9�<�-��ѿ�/�:�.>�EC#�Kn�Q�����[� 8�]����`|���{S��͛צ��h��C�Ӷ��34�YMB|,�I�A���F��V޵���`QQ`��//^���7(%a�0�W�{<�����Chn����(m�~���*���mV��ޭ�J��p��3 �Vr�܅1��5��L[����ї�;�i���Y �!V�A	�	����ZOV���kֱ��\H;��5	W�d���a��dM��3��P�����t���ޭ���ܱ���NI짠���J�ˡw��Rqz����7�OC��y�4#��������e����Fʿ�� ��b4H<4��a�G~���������{��hv�0	�Jj��J��c1�h��x7pژ�<��ba:��JQB:��KK�!��]������h|/��%hx�_tF��E(���k��O��T�T�"Q��{q8/�/?%K���$��N�����W��t8��+���z�n%�C����'��]Ig��!x%1'X���8��/d����ӳ��4h�D{��b�����%�Xp^�&_��$�ǤpƠ�(�
��M���-á+�P����|h�Ɂ5V���iz�Ƃ�y���QO�*@=�	�6�8Ȭ~��-����'����\������H��:d�i���)�t` s�/�Rqhͽ�lT��>�T~��Ub��j*�Y��Nt�Z��~b�阪Ԗ�C{ViM�SA�����Xp�pSbF�$>��[f��X�\�mˎ�\!��`˷��PčX��9'�S`���Bs6� ��F��H�+����V'y�+<DG9�a]R�Eg#����(��/4��(Ɩ�	 ,&�aE|Z��E��Ϳ�^��:����k���ҕO=��+��9��#pۜD�x����
w�g*
n׊��8�,�����H�mC<����q�+�����LÓ0��S��h1�Y! ���� �����*�61��[��|���`��RIl3��e�P��1��A�'_4�w��>�9�no/�.����he7���W�U|�[OF��bܬS�J{ޫK��,*���{	A��wmꗚe��\Q��M7�5�@^��Y�����\��h���o����GY\���>��L�:{�쁫�!��T������4��'(��k�c��얞����շ�����*מTj�ECX�J@���A{�-�ݭ)ɏ\f������_Z�v���˦Wti��IJ3���pO�Ł�j�N�EXr�Ϭ�,G�%^��s����'�'ȷ�xs�$�Ů��)�"Z����@��1ɧR�o#Rȡcz�,��W�h��k\��q��@��T�j'������U��s�|Y��4R�ʋ�-��Xu��iBd�A��6�b�>%�_��:� ;����~�iZ��۴���|%:�j/!��L\�t'�B�J���ҟ�ΕPܮ�,�ŕ���Ps=�@���3g��׶-�@��W{dq�/q�Դ�K74���C����u�0�ts���/���_~�T�H�GY����f������ѥ|�~=�k��tN�?r������M�y`���[Z��S��?Mʵm��Q�N���ag�#�Q�fܮ�q���߃�� 7S$" `  ����F�R�6t�4�4���B��2���q=-2�Ye�9�<;�og����L���>�= #���#v�o�8��}n�0��� ���� =�k��g�dl��|���%�V`Kw�N�joIb��=mH�d�}߱�bl߻!J����A���U[0JR���FE|l��m>6R��+��H���  �*2*�7��ͼ���?}"�>TD$h��i�K5�Kx�ߦ�Q׏�g���",���nᢢڡ�[&S{ew1��{PE܃{jk̆m�����H�1\>@����q���0��W0����Z݇@Vj�u���q7�H@u�k��;�[��\6rԝ����%��]�$6�q�3Y�k8����Yh@�Jk�y�=�c��8�2�.�Z�c��$�|G��v���3��ԁ��9e"7Ӹgs�Ml���QclNS��F����4�����.��eX�b/�$
��I�|�%��.υP<��4� ��u��^���ކ+����l2U�K,�+��8��<�����9��U��F�^Ä�����C�AK)g��*iT(�2�!�$?M��������X�����cmeJ��E�ż��,�3(9n"NWo�b��6����ִk5<�kL��5Ft_Gf����uoPOC.XW���^���;  ���/�*q��:����3�*�Ry�pi�w�� o׸��w` �K�٦�"��9�s�/�;��-X8��²s���N�δa}��
t	�ERCˣ�[(6�6n3u�P*�
��p1нܠ���q��J��z�T _cq��9�GiU�|[��$(xׯ����x��@*-,֯j7����E����4NJi�t���W����E�W2��Ɛ;�S4!��	�LC#�M��WQ����!Y�����H&�y&�r�^ OhU���ᇘ��:y�>5R�	ٸ����R/�w;?k��.8}��q
���-��-w�C�3�HL�%(%����V,��~�e�\���Ҹ���}ÑgG�Zas����{��O�K)�� ����i>�\�iѩ�Kt*�.3l�T�mRc���/M�f��,��ފ-�����
1��Ͻ�AR^�9�q={E�ϐСǣ��gv|}�G	����0(��\��Lm������S�&/�,t�@0. ���m��@��ȴl�!DUǬ��o�2�9��Jq�FjG���b�V�&�!���4�tyB�z�
pɋ
���֛���H�9�~H����Q�{��3�Y
�Sg�HX1c?nn>/&�}�e�ɆƑ�����C8�/pb�a��(�sQT�F>(��h�F�(�ʼ�ã�G��9-����+��TA��7����'�RL�-x�HO3¦��|����C�8Ҿ�0"�C��Ƈ^��,����A'~�������R�)��pk���������r�1��QOʉ�j�+�N�3���~*��"o=i�����%���VFU����ժץ:_�lͮnrb���������,>��s�E��Ƙ:�&�ͫ��0 \������5��-f��g��f�*�
�Z5�"�HV&��at����C�S�-Qէ	�@9	��L��+>6n�Ț+a�0;�&�4�0BE^f��F��A�c�ԥ�*����	R�5\����0�Z�Q�f-��$�%���	���}$U��ƍb/��t��Frш`~�iqh�K@�Z\���wC��h�.�U	a��np��j%�V��K��ءƿ�P���ޗ���Z���-�⾀�w]x��������Y�gP�ʥ_��e(�(?|�>�D�=�D*�K���2"�3R�� '��gM;�3�L��|ݑ�b��b(����q�L%ěu�w��xm�|��g�妋8��\��gn���s�[, �>3��t�S�������j���PU��[�U��F�q/a͔��-!�@Q!��tsߑq(��wI�0��	
��-^N�f�\��K���?��{���|6��.��3��R9T�)�'Ǧ�D�R�]��}>n�^�:	��g�{�`��HrI�	�Pz+��j{�Ш�N�|�)��b@L�#��6w�,#�XU�T&� 
�<c�00`�?V� a�8�a!8�p�!|*�r�j��3L��]2��
4vbw�)o�	��[�����f�w2��&iۦf����������0�?c]7H��p�L��:��Q�pV�ӎWB̜�5���-�G1��3U�SO��_��뇴 �1�{�;ڭ�ڥ(M�����8�D�u�U.֌j��i۷�|y��,4xmu|\I�Tj�W�"�da_�x�#��,5z͊T	��l�ɾ��sx� Ʊ�����ʋ�m04s�ߙ��c�a��'� ;�\t�խ��f�����~E.N�2=��F1�Vjm���{C��j[���5�+��*>�<6�)p�cnA��#@b��,>1>�c�vV4v���,��0V�"�����Mgr�q�� �y9�m�&��钲�[����T�.9D��oFQt�(H'����]L�z��LAg1�O���'j����ĺr�ઽj�5�X�Tzy��+����
���e ���<T�}�L܄1�N��N��O12-��M�16k�Mh�x��r<�c��g����;��&��L��
���-И��e�
d�SC�U4
�!�!"R��T$�#D##!qX/��tO�n��D��^�D������@;oݕXe%�)�o���s�e*�qy���-����X�xo�B���J�;�V���>���]�_ 'lF���E���/NJ�CJ9V�B��eW&�@����^_���X�򰚍�^�{�V�ԫ!�1a���َ������msPx�2h��tp�y�Ch4�������_�S!���ߛ9iW�"{
� S2��h 9��h�q�0����z�t0p����h�>���K�b(׉����\	'qR)�����0w�M)�����_�^���*���<N�����P�N/��N
�9���O��-r�	@�۪җ����S������jg��"��B�ymMaB�>��6����A𯘘L�!$L�%�z�^?���O�H�C���@3�Ȫ����cf����o���/��w�/Ez��JY���~�����UD���u-%��S:�&���S�|ҥ��4v�Í�FT:�H��Dh��g���9�����-S�o�GݖR����yA���b��@H�)tM�����u���JY�^�bG36xjL0ǔ}y<6��u�bS�v����Q��d�4+�}];�O���ov�n����mLB���͓�?�-XYZ[(�Ԗ�V۲lp��)�\���/��Rz���L&۝A���b��"�!}=+����i]�A[�;�oU��q�gPm��&Ѷ���t�N�y���j��+���{�&͍�5ِ�9�0|��o��L8� ��[B����lr@>��iP��cs�SwC���	(|�d�������K`����0�Ųs:lz�o�`W?��cI���/���p�����5.g���x��?�W.�l��)�xiM��^r�����S�oHD9�hx��� fC��N�?��*i� L��&r�����O)X ޟ��� H@䇍r�NeZ`��q���H�Q_�!�,�D�De���\��yB��P����K*�_ �V)��v�/��R�d�f[i�0n�p9\N([��E0�m�}��t���G�5�RTZXZ�����r?:�}q�ד�����o���9�?�ixu�G��#�鹶��o�����1�KtW���@��q?Y�����������8l\BD�4>MӍL5�b"|�Z��U�h�H8x84Sn~&�\�լ���ζb1���ILa�`��˿:M�7d\ａC/ܜ�ZRK�am8�Վ���I��Ni�񿡯Qӥ.�C��E�AM�a�V�ϥNj���m�>�$d�M�ډ銯:�s�>��
!.az�u��"�s�4���>��r���E�W�O��^��2���|�*E?-��FQ��M՛^�gu��H�s�3z���7HN��'6
q��{U�����j�˸��j�'xk�9^���R��çj� �i�|JG��s�W]X�~f�8�ھ�vb��v3m"l�/������nf@��4�`l�a4�}9�3��1�=���lڢ�����bj�"ߩ'��=�p��������X"2�.,&{^���ŗ��0R2jkK�J���2o�
� �������'k�vz)��n�zE�m^��!c��ix�;_W~�Q�\S��}���.,�S>�	 =����7��/��W�Bȼ��R]�6ѷ��>��a�T>ګ$�� �GVK�J�]�'���0Y Ů��/�VS���R�ƴ��g��諲;Ê��m����/%���&)��E�v�p�fN7A�`��#忟7��>�U��	�X6� 1�d�Vae�Wla�����D�������c�tn.c
�v^�n�_��-K�9qlrq��n�#`7P4��lptf-����V�,˺��Wupd#�/@�tCW�V�&��sK�n}��헉X�:ܑ����.!�/*�8e��.u�����0�����o<o侜�e��������t�w��\�C���??|�>��j��W�c���4�&Vl���%N��)Iձk,l:qy{&|	v�]�6>&G�w[d�}+�r�W��3��M{��\;6���q���Fu��.]g־5{�ϔ��=j�Xr��=h�e��7;�j�<�{ɱt�3�zsGe��t[8�I�Q=;���e�"5�-j{BmdW���c�uj�t$��nb�j����BáK8�V`� nB�	�$䄴�EL�+LN*h.1�d�@�8M�R��Ą	����I�"e�e
f_��/��jߥ�r�d�%H���>֨A��JR���=Hm%���%�1*%���nA����ԉ��,]L�KIF�-�$0�ֆe�Cέ��沙՚P� ����.���RK:�U~*.���⒪�s]F�P��/X�%���}���c�^�.E�P�]fx�< ��Z��X2@-8w�x@H��;�!�������jq��=@$ّ5Y,0����`/��'��I �(�G�|���A�q��|`A �tJrɺ��@pX�1���.� *�a�P8A\ ��=�:�m �� ����^ ���� [qF~�7���^~��Y�����d��q��{�8HZ0^A�0= )����8�`P�@0�9�g��)=��\V���ɋ07T0Ş���z���N��G����y�u�[�J�lm��r����2�=�s�{I#٩�c�漂;���ܲS��
�%	�W�a8ڊ+AwV�j�n"Q���j���d�I=�<1"؛]�Xą��Ȑ�I�E�ITU`1*UM�d�U��Q���$���|�!&���i��=O����f��.r�[Ĭ�?2��*����iB�����V��J�%f8����dX�d	2���FV��!d߬[�.�T?oѳ�^�X�&�7龋��z�����L��~�����*.ׯ}�Q{*�d���b�.��l�8���q'��*�&Ƌ�8��&F�f�iǞB��u9�ܽ�{�%u�͸��������}�%��	�ӄ#ν'���Hɲ�ōI����W��;��-Ѧ��]}��a׃=	_��z�9��a/f�����w]q�N�����;�fY���3��f���P�(Vj�O����K�7n�����@��5w`Gu��&��uNz<��8l9��O�����)��<����$�L���ӽ�&��%Yؙ�-ޟ�����5R���_݇��n�'a���$7e��}0A�`W/85�`b(�kJ��=�A�.�'�F�ݽ�����˶m� �E%��/��H	���n���(�f���ה��D����a
B��6@y�X!`ƽ�ѽ7�����Ҁ?�wyV��?���%�)n���ȹ�
��nL�2�ao?U���$7M>���[���k*D����e�i�/|GP���V��L����C�vq��}��]�w�,��6z���s}b���ּ�ɲ[+�z�N����6m}�ӳz
��g�c���L���-#��DS�B�o��{��G�x͆�J��劵<>D�Ố�g�(D��d��Mh��X�|q�����V_�M�Gm��E���4�
ϰ�l�HԮ����f�g��yB���pm�/��K�z<W{�C:�q�C�����N�I(�������g���`Ϩ+�@@��PI�Ͳ"��8���l���t��c������4�NN�~���*JE��c)�iNs�+lP�M���I�^1��k�Om����#�A&����A��$�f�܄Dr�rL���Ը0��h	秺�m�(�K�
�0�X4�|t8��.`�PyQ�;�;����$L��|X��H�V�}ʜ��Q���.&"�����k��-�}���<��g����j��I�-m���]�/s(����lV4���w\Ė��,��E�c�x2�J���k=��1�R~"��f~]������o�ݸp�~;��q�$bLL΢9�ݸמ^/�|�鶡�\�
���C���.k���ggs前�[�{�����=_��w���H�y�2�x��I(?\7С4�Z`k.�!���a5bF"3%��K[�0s4�9%s��xm1}'D-&f�n�M���3]�&{�·O����vo-dT��M��qW�_6�-e����Ր7qIH}���R�z4��ל��<D0�e�8��ɠm+ �\#OZ<�O����x�L�b��d�C�`l�LS`&�������F߲%�h�j����.���d\������o�[�_�]��جjEP�U��t�r���@�1��Feŝ��=��8/&��2���Yxr�.П�6�ھ�#ʄ�c�z���u#c���̲��l�LCtL�Xu�A��<6�%(���Q�b��4�2e�\p{L��}	��N^�6v<,.ZmS"���r��(}�_��-a��|W ����S��ގA�>O�}��^��4�ɖ���a�t���H6����%�'�s��<�FZ���IW����}_�������w��Gڿh;T�zz8���Cj����f�{�̙@Q_z7M��yGt&F���L�_�+�E>��>��S�Qv��R�Ƿ�}�e\�}<ʘ>�n����-2~�Pω�Xس�*���듦����u����O���`�D"�v�F�I9��%���bμs��Sr���J�9ZF�ڊ����z����S��R��C��'֢)X�o܅��a�%�ݘD[���6���I���hD"#�(�%�X���]/�%�$��ܒT9#_�OCT�ea�t�c( ��	$�!�F�c
2��r6����0��4���y6����(����e���{o8 �1����k��vT�0�س���V66F�^�xz��d5i�U�b�a��S�E�g͘!]kF�	���6����w������0��	���Np�����B��E"모KK�S�3�D%쟼��~Q���6:�y2ƍd��%�=��0���Ig��|��4sɤ;��m�:���jw_(`���iG��~%�������Q�Lz��j��Tٜ�v���}䚋r�È�3��'��t����ک��/^.d����q(W��;���>����)�^�w<�Նw�|�r��f�7��g���������oNg���ބ*��ňe�,/;���NYP-�Y�K�
%��6o@��s�@�}[��-�1$�$�χ���¯
��̫�Ĝp����;�[���GX<�vǌQf����8��2W��׹}f���l������T�C��ڧ����+.��c����z+�&7u|�,�B�����v>z��:mJ�����ۭ}��9r^I�ﰴ�P�8�)�"w E0U��CD*�}�*c��0��K �,w�k�m@򿟑֒�6��|�2Z�B���P|:U��=ea�-RA�<sF���m�B���m�Ij̒%�'�#��X-I2��8�V~.���Mc��Y�V�Z��P���< �H���,�Y|t!����r��oȫ$>��!�WxH�3L�h0d��?�\�F;�,y1�$�Y����}�ڶ|9��eK}��O>M�ߟ��6X�땘���Z|黵��l��/�C�u�n�^�0-�ӌ�BL3L
\gO�6?�Z^(�*%w����A��s+�.a�k`������]mt��������l�`�;a#�Q!ԡn�uڔu�(�݂��?��Ev"�X���#�V(�h�ݐ��sy5��'�a��rl8)n�H�dl�_L���&���^������_���?��,�' �,`��:��V?=��fx���xv�����������_�?|o�۟�&d휩f�?rԙ]��<�����A����Ld��� �������X�}��3�&%���G�=���r`H^p��#UGg��%2�,�\l����1@l0����>G��ư�E�h��ϥɺ�H0���^.6���].� oo��6q��{����������v�SW��C������Y1����+Tpp�)�s�p����3��V��E�(������ז]Dbp�X�m�[�W��'b7�B�vS�7�@����R(%6����K���א�����@+�)с֕�k`�KQr˿W>�V#n�ţ%AQ\�(����"� e���˵=�%�VFA��5�Uչ��M/�'�a��6���"��׭>��ՏF�y텓j��t	���!�J�3�6�b;���_sWY�1y�S=�o��@0��<G��E�z����{F�׸��jcV��N`˛	��hP^�DX8y���R��9/G��*��윶@��wE7��G �A��\�7!H`���f&�r���W��h�J��Խۀ��#-�cLg�掂e�}6_�pv�bu����p��=l��()5���C�>�]®�g �y}ͯD{��2�n��`��VƎ�C&�����L1�"rR����C�|v02W_��������ķV[��,� �D���������Z ��V�����|��?g���`j��W� E�<�6����ې�\;�5��s#|`�����a���ǏɆ��<-Z��Fd�.,�fO>7�������%Ok�^�K.�(F`�q�)΋} ֳ=�0e�wXV�~j��wC��1-?ʹ�vX���(fJE��LQ4��[r��ab��Hi�j���Q<�c6��D9���	��NQ�a�����b@Cy	}�����}V�)2�87�g�>�^|J<$��V�7�H��3�|����PO$�u�n��s�#�	���j_��b�=�i:��U�:�6+(��]�ӫɭ;ũ��� t��*��~�&�>�����j��� �^���5��K�'q�G����)���aP׊kL	9�T����]�*�fx�ʈƄ�I:�lC���w��r���v�:{��㋶�^���)�&.��%'.�&�M88�@���#������6������{�ݖ�$ڢ���r���_�k��0�Ť�^¯�bp�-^z8Rk�3���%�'�������6x�ׂ{r<Mس��]K��Ì�R�g�"�C��9��y��}�_�k�H��/�^	
R���v �_~ߧ],�B�ū�uA����&�����=uZ�7������
��^#�=��0�����朒
�����)�����C��䎏V J�S*]�^����>Z��m2�#Z�x�~&qC�h�
�cZ����"���E���<�
w��oXǝo�O]�b�!l`bmc��k�b���c�y�S�n���:2ՙ�wA����Nק��O�`�����	q&7>��l;�wT~�XO�:�X7'�(v��Y�֛~�%�K��������^��w�C��T.<5H���^Jkl��: �A�}��99�8��+�e ,�������+���-��,a��Cdn��2o`Q���Y�$+Hb�ְ.W�+A�ePkP�����#i�IXr����&Z��Zc���ՏB��}:��9'��Ϭ;�>�P�*�,Dr�G� 21I��@�2�$��F!,�Nn,�m�����V��:wؑd�Z٬đ��e�	}>!ZY�899��]�Ʌg��KcicLvΡr&����+�˗��Z�6�a�Eu�������[M�ͻUT0�Ļ������NP���O)��7�f|��Kk�'��=�����L�*Ց1���O��?Pʻ|�|H�&JI�ڰ�ٷ�VFO�ؑC����3KvE���'P���Π�ؠ�!'�E���G�3	w)��X�5-C�M�m/h�~��B-2*�s�+�w�A�E�ⲙ�b6�OUV��P��1&��f'dQ�������c�r*�]~��f�O� d֛@�x�f'��t'�e����ҩwLh��\���(���r�M)�L��UFd���e��f닊99��$Ɔx4���12�`�En�6���2�n�ic=:�T�#|�a4��������hFp�o�x���4�D5��>�˶�ad��ܤXt���E�Afn�8��fڥ�|dvP��TE.W�|ݗ���C&��11
MpNŅ(O5��TM�k�[�jr�7i�8�'��_äP�%E
Y'��a!�$9��;4�"��_]FJi&~��� ]+�cJ6S3���I�_�v�]u~mg˱�����6�XM0T3�Ri���m��@�;O;?ZT���N=1+'�&�zh�����������`ݟ����0�}y�6��5�j�Ibs�������54�b-�U�$�ޤb��.ħ�����Wh�i�^7��K*�^v^���N}(��\h{i�W)u�w�	������3��/��߃%K�l��|�eNұ��2q���x(|=�����O��Ѫ�!%��)�O
192(�DW�͡n�/;_ ��X�%V���k�����qd7��;q���I2h���@�����&����[?D_g���p:��NöFP?�
ETu"Z�,����ĵ����'�%2e;��[�Z��$���&;�~�k�n�eپ��~ekۢt��#N�+�0���mg�d�敳;��u�)g���}��Ӟn@P;>��	�oW�Մ�M����\�lm)^"|M�^J#y.Z�[�t��Z�glڧ<�j?�6j0;��"#2�ŀP�1�l�2��UU$m��i���Yv�\��&�f�ڕ��;?�C!B�"DB�!D�"�!B�"DB�!D�"�!B�"DG� ��$    #a V  �MU�**����_)����m{J)*	H��U; *�t����.���I�.�|	Q �(�  0kw�IC� �5X�J�M@C�A�(�gu-A�ڢ������E/�]�ACLD�)����X@����(��    ����j���`�(o�!+	��Y%)dIT����OC���|�>�����>|Ç��|�>�����?|մ����X��D�)��?�"ڐ��~!?�]�=(1
���^X��a��K�5J#�KAFYI�y4ތ���Z����"$�������~���PY��o̞J��?(wQ����C%O=v����Gw*`�e���czE��&�YO���>�rzE ���O�kn�Q��eB־�?�?�rtd���W=�*�*{��|Y��K������g���@=��vaH�Q��������ׯ��
�s��h��>~U���*�����P�9^�����٧��h,֦~�#o _v��R�P���@=����<g]�~B|�>{���A��#�b���j��]�����k��� ���o푋���Z���g-���{� �ɿ���s�����"�^�|�%����rR
��"�qt�*>��_���c�g���1��d�~�o{�\���"�Տ��˝�����/�8`\��m��ՑM�4�jjL���|���pJJ���8�b�5v7b7�%e� �"�?�0��b�P����M��1�9�s@wrv���A��Y�2ƞ�͞ޞ�(����W8,�@5���� ���+�Y���S���!mD�1y1*'�s��J�,�ؘ�1a�O���1���'�K�E��A�j�#�D�:b��aƃ��?X����5�� ��-�J��+������Λ�%���,�3̲P��x��H(�w XB �Lh�0˂�QDb�_�����#)��6��}�؄��2����G���TĈ�9�a�qQ���f�3�g�d��Pf����f���'iN.�̔3�h:��:cv�w�t���f=�<�y��v��b'�[�E��`P|h�B��P�Z��� �=���&J�J��Ў"o/1Ǣq��-j�P1G��1���47�g�!ԃ��ds�s:s=f(�,�5�k(kJjfՄ��0y�D�!��ǳ�琧3N(�q�u�*)Ʈ�k�#0����#�"=�}��@���\⿄��`-G�!��/&�c`S6f-_���3�3�gJ2�i��t�Ĭ�po#J]fM��F��ꓠ&]J�+��$ �b��Z&nK�/����F�LO�A�iΡ�C�3�󼞣��=�z2����l�+�^�� �>dn��A*��|s��IM���7�7�6�4�ƒ#s��8�w�vT��@�P�	�s��`��}�p}��wD�ʰH��V�����Q 5A�
�����ρ�F�L�N3@2�k��Ciŏ7�6���%��͝�<^��㼿�jgĐd�g�����Oh��Â>p0>�|��������#b�a	�&*I��� eΜw�DXk1؂_E��[q��^��jL�1�C�w�b(b�o�o2mz�4T���:�u!�iܙ�)ݳ�*���w�il5�3��
q��4���-uۑ_ `�ERb+ʶ8o��B� X.�\�����g���w�8�X�@kQ.�n�<7!d�1H1�a2�̝��A����.�6�j�j[�{g�@��m�X����fu��%O�x`�0>�,R:�z�8Tq������3E'f;�:3v+��!ۼ�L�<Zy����<�����t��T���E�����"8�����ҮN�	+��P�~�4�Z�S
�$�� f��x;@w����=`x�X�bh$"���Z�o���&8M�xO(�a��w<�I<#(�6Hn#��iw����c�@�|������s�G ���!^��r�
�9D"�"��F$�xIo��Hcx�
&,0�tŜŸ�ԋٌٌ	��x�DFi5�4�jk\n���9ݙ�/����9�~,�.y��~�
'8N���9�t����3H���=&���4L��4��"��x�7roD��O����`�@�mw�Aj���k���C10�!e�O;�umh��`w�9w7��ЄC�0!q��<4q`�ᑃL�<�r����4��9���r:�� �AL/��SX�A�ZD��D�UId+�&rJ�8!^��

Z\�Ь⹊��Ո&�n[���~��E_�[�����#�G쒋D?Y�YP�n�􁺅f�,:����{�(�-H7���Z�j�ŠR�T�e�����HkC��6q@��5ahF��4�h����"�4����ڰ�!�4�6�iƧ��s�2� 5���r�j���(q9C뎣:��`���:Q}p|(�v$�!�����mw����|��xx0���C,�>�y�G��?Dz�A�P�H=}����"9B$.@��HZ!j�����E���D�'FP�(T�Ϣ���@	Lx���.�<pԃ^�d�>�&�\�`�Џ ��'�w�VX�)���=$~	���#�gT�A�;���i��SǇs�:V) ℻KF>��QL�e3gHgng�g�f�ɾP�2נ�0�g�j��7F7�o�n�J-�� WR/N)��t1�`� ���<0w�d�@���D+tV@�л��	��$�"�`�\{�6@.1h"����v��"�\6�m	��?b~�PI�8!ȁ��;��GO��̐0�ɶ�ns1�0��1�1|cb
�4�y��5i����1������*�V���J&vMG���������Ţ�H!$TK�	���-C�#^+V�T,H�D�ABH^,@��P$t�U�"��[	�� 7�OH���
U��ʾ!�������G��p�x>��[�Vۘ.����y\�<�r����tϊ��+��>�q#-���^���E����@���q?�tzi$tֲ�����\Z�EK��]@�ݠ�_J�GЧ�����M�+� 8���j��w�?>@�:��?>��(���T�P����k�ӻ�����U����z�8 0M��/L$���-�kKF=�;�ݾ�lՌ������&1�Ƃe��eV�"C�����H=[��	��U	�+U@�T힒)b8o�T[�@]'U)���O-��Vn�w�)�,*k�\̉��j>0�Q��=0��˘X"n��E-���L^.A��o��*:Q}G�8�mD��뒣�qj��p(��O)�C\�e�:��B{,bm������<�|�
���z�.m����E۪`�K�Z�Y�j��Fk�"����Ka����qZ�q���y7�ɾݙ��b]�K%�D`��z�w��q:���%��vu=�NZ�*^��@w߰m�&�Vu���tW?���73~�S��75s�e��rk�����SS�.H]�'3͈�@ӱ�j�yu�m�|��fk�����^-�������ꂯKkK�FI�oP����H4��pY�Lx�,L
?�G�*��`=>�0���r?g��;ڇi��?���8��Y�@Z�B^�!^*��3=}�� ����z�?�{�r	��h8�
T�>=T�\�t��_S9�D8��v��([�]�{�Ju�h��pt�U�T��rԭM�23S��_� gnJ\�L����)��]��6��8��z�71�Ed���o>;����a�_M:��9wE!/�=�E��_���ɇP����R��G=o�]���m��|��*Hl�Pfw$�`%t��.gV_/��v���qIM��ծz������V��JE�ې��M�7:m���]�{6�w��F�b֋�4�hRS`��s<:�ZX,��Cr�B��f��n�l\ѷ��{�7�������%o�� �AXxﷰ��J���!���X/�w�����[�������&~f��>��w @2��/���[�7j/���5�����<~�_#j�[O-;��)H�i�`�n���f��6Fr�y~�ڧ#��u+~VZ�ν���s��۔򖂶����S,d�*ф��׎�hz՜W8�}b�0�5�������zr!X��4�+!K�����8\���u�Է�%��#�?���5�f�!�Ȿ׹��l�B�J�Lz�g�T��؞�1K��6�� � e�3(06zk�-�����X�Ҹ�����q����>��l7�59��k4A�ygtGx�;I����a���W1U�.yy�G_E��L�$Yq��C?y��>��v����1u������g]X?��hRF�l����px�צ��e�y�.�n�Rj����hĜ	������/�/r!8�O���˿2˳�$~f��g�����ڇ ��%�K��g��"!�kh g��,�;U������>R��a�L?��`뀱������iJU�fE����X��ݬWo�����y~�q������2��L�,�W�錷�3d���c^���NŅ����d�°$��Zv̶'��j�&���fGEW�i��|]sB�N�D���gd�����K3k�*Ї\!�_�i�ږ}���d��&+�b���n�j�~p��%Y��Εܽ��]�K��f�ZW5+�Z�u�Ba�Фʕ�FJ붓w�u����ˑˉ��zh���8���[�\tJ ���k;F�.t�fu�J��V�g��Rt�3V;i�p&(�eR3[�j2W�n䒸���H��}o'��]J��G��Zg&*�*�/畹��w �_�{��M|+�f��*k�||���{5����V�y���?�����!ag ��_�>���G�s�{IRA�G�g�X���
S��c΋�Y��=e��&�mZ��sU r��q[���<~V�=K�4ŧ.���H�/Q�>�g�!v�_R�����v<��ڔd��˦D�q���c��/f�q�nʵf&l�q��Snk��ң/ �c#�@���!n����鯣{վtk}�J��e�ʍ�3ٳk�k�����M=�'>\3&�D""e�yN�\���kUQ(��/�a]gmcJ�!؁,�Ah���r1ENj��ug#G+�W�6���:Hb�7����fJ�@��,��Y+X�_�x-�^	.'�����k�<��o���"%�.�V��2e]��ي��IR]�ܤN�1�W	�tG��/��T7��:����4�YI&�����O�������8�<<-?���+��ZD�7*�;p��@��h�г�{�j٠+�`�~#�祚v\��D���z�̺�[�lRU�����*3���R���/a&�9te��i��*B��P��ص�q�T3|��43.�����@lb*K��N$e=&��C�>��d��0W�l��ē����rɑ��N��=UC�P>��#ϋ�藼��
|]*��Q��r�b���/��8|�E����r��	N���T��2��>3�t������ҧ���i���c���Nz����Uwn�"W*�ׅrb����P_�ڙK���\��'���aq�b�a�F��%�1��3�/Q-/vjʝ�1���J4�:�1�\�'Tjr����D<K��x�5ægb�Y��m��<!�iS�\����Vb��&t����PRZN�'�$m�5uE���C��N�,�]l2ux
�:c�9��[�[�����h��wPF6�dL^�;#/��o�Xq�4��yӪ��1�Wk�#���V�r�B���х�*�}�w����{c恶�.'�..��R�æ<�m��NRl��_K6^��+ː}Qc$F�����^(CPO��H'}�>
�{%'m1�4�z�L���N����*/�7�KT�%
6+~)�bq~VL]��m�w/}$�_��蕷.���ܻ.�����i����o��C٦���_���o"Q�U�^H���]��-=���-Z��H��ױc����k,�ժ7"���n���S����/�D])��*�w�����Y����̂w��M_�?5g=8��4:cQl�X��%�� H)��_�nu���Z��l���~��/�3���+-Ʈ��v��6l�V>�B��T7����k?�����?�tE-�k+x�|�`xh�o�zA��K����9v��sN��w��%Í#��ҡ�2�6s�����Z��Gjj��4M�R<n)]j��1mU.;�R�ˢ��Wn�~`�u��k��ڭ�B|�&�`u��I4�{�x��Zykw�6aC=ė�U���tF���n���+��#YTx�27L�yK��˝�+h�5�&��a����z��B���t0�WuF	3�@��T��'��s��v���C`�&R���R�ES���il���>�B�-E��Y,���f�Wc���^�p�X��0r:PL�w�k����"nl����X�<i�,��u� T7���7j����0U��6�.��B�=hw�JaBY`�tx�4�0����>zNs�۲=�ʙ�%�s7��Y�Β��߳4�U46V���lG̧/�3Βv;�w-�B]27L�9��ql�ߍ_��t��m�\Ӑ����^��'6�ck+C�d]�sc-%�s�יi)�9��eb^5n/GUG�רڷ�:
/��VN3��2jKh�dӮ�������˩�&5=3`r�M���C��z�5� ����+f��p1�-+���z�uC�o��_3�XP��C���K��G��#��$l D���T����$��@�����˒)J߹�����9X��>���w���/N��e��;X��/����2������?矸Ͱ_&R�6��vv�������/lO��z��vL=0�tG��W��b�(9Z�U�����]�V���r*j:5����T�Y��RO���ڦ*�O�/YtU�X}^i���ߍ,�I2�&b�So}���m�hǰD���o����nѫ����檷X��
�#&��+�xrݬ2k?�=�q��n�Hpe��M��z��Z���-��Ɔu����fP�ŋ�[3鱄�� b��U��ENd�8��ʵ�ӳ~nߋ�N�I�ݐziy�d��\a%7���M�N& J���<���(ڕ��B��?Gզ�P���F��P�ߩ�)P�~���:d(��U����T���ɴ����i֎�;ˑ�ݠ{�8�	���}��R�?[��m�֣^�.�����K�|�'�����w�;j)�(5�ƞ�we��J�l;��1��j���������Twq-�jc�dk�f+�Nw��KS�!���X�6��br�v�N��;A�n��HtH�Y(0nh��B�������mݸ�oVSL4�V�<�C��H����Aw�jN���C秶3hG��l;TJx�\���{�?s��<Fk#��,5�&����DNe�Ze�=��W[6�
�T�� �V9  �t  ��  ��   8S$" p  �o��/W�r�<�,�-" �LI 7&������s�
S��D���wdƶ�}��� jL0�J;��/ŭc�ϓ � �� ��~���_�;�z��9=���ޓ�؊�w���Ϧ�z(e����k)-��>�3 F!
e��R�L�1�Fɐm)әy�Bk)��R�   U3 F_d3s�>����-[�m�1�D"�#���w ��1uEC;�	 W�V�'�6�d�iEˉp3_hS���KK�I)n��^��r�v����=�kO���7v/������RkbɇZi`�j��>�����=9�e��;�c�CD����trS�T4�cn�9�\q�-HZ#����lXsE�)-�׷��~eP��[u�`jԹ_��Ƅ�a�;H�����ѿE�J�6���u�}d<j��n�e�Z�����u�����܀�)T;o�s�>��b=��j�m�p��B����۵�u�)r��W�.{ݚ"ﶛJ�ɮ�}T� ������t�6+]�n�0a�۵�9���ƅ[r#�{� w|w�e�P����*>�шZT:�?������<�>m�f�^LH�i�|bi;t�ؑ9�0P��L"�l@g!�$:�GC�L���i`e�Y�^Q�+r��=W�%����bdK��K��J.��@��>�2�?_l�@��i�''��3�$5����0�b+�馌���8�px�,4������Ы�@[��@;�χvZ(�K�y
�Ū�BYm�(�8/�A�S��%b-Û��g�\�\��\ɦ�&�X���O�ZQJ�|��d����U��cSTXm3�q��uܝ��]U��FcV�Vv�~kKW=uP�=]hĪ�����)a��4yҀ��I������CS�n��P���&��P��	��;Tv��;�T�:z�����2=��⡰�D|8-x<d`*>�N��/a�O�������M�	�W\��CI�����yH�0�ׯW��� 1_��97N��BVz�����T�B9�?���� 	���4��j휕�$��^��'!q�a�&�)8��1)E�4���hÍ�}����MոqO�j���������.����wOy���M���Ž�?�����͟�j	�_Uju[����.�jK�U�y>q��p!wL�U�W�.ݔw2���m����8�8��𠯋o0(ѥ���dĪ��B�G:�J�C�
Q�A7S{3����+�+��U�#���c�7hr�$ل0zU��|)V�E�̛I�x9��3I=B��%/ȄF����N�),�s2GǊUu�Гi�v��y)|�;�4��)� �[f'k�Z�&ϰo&��YG��j^�A9]�ac���N�v�_�6t�)��CK3�=t�Qmn�F�o]�u�S�(�'�����^W~����Ě��s�怮��ȸ$���n� ;ɑ����r����"� ژk��9�N�ɚ�Qp��$��i��$�<��Q�To�ܓ�-=����$&��F��E2�|�|';`K������;ͭы�7�M���د���L�E3t��˽/�u�g}ֶ-�sK!�O��0r*�W�cxx\Q%��V���+��GVgX���C�a,��2Q5��7�����1�L����������Me��� b��ͻ� �_�c{�����[��h4Ǹ�a��laZC)��hI�4���EC!+^"�ic��:
»�]�R<�Ữ���.�"+k˭/s�@�%����h"W�7���kwT��mdP��k���O���`� ��,wjVL�����ѝ���+=j|5�;K�N�Ѭ"�v�xy�		n�ݐ����Σ07�m%X3���zA$�U ����<၍���׊�Dz��C�񃦍��I Olw���6ao��<9�	�x�m1��ϻ�L��2}K���6(�3����
���6�,�	p4"}�p���(�[�佋��d	���R���5���=�hd�0�'��f��0N`:�*Ϫ�5����4�@%q�Q""����Ez�0�������m��犥�2,7X3��Ug�=F
�2�;� {��8|]���P����� ���	�a`� ���K�&�Qm��U�$w�)�2��=A�C��E8��t
�͕�1m	������%�^� ��	d�*񠜧
�^A2G�B~����mTn�cT�t�N�^Uu���롥�]��J%ފ��v�y��3�����K|���Q�nl�BU_�F�tj�N�1���hÃm��:��	Z?G'����w�v8nD��A:�+J��˚ ?95������>x]n���I�̽GU�����0�W�U������ᵽ�S�k���tv�٩KA����{�|jS��K�m�D("� �cQX�\��1�IȦ�2�r�3��G��D�,�9T����U1<�����^��\�?u2j(�a��2s3\�w���F<�����N����,h�����ۣ���wp0��iӋ��i�$4����pi􉮹�%q�5�~�x��w�|6=�k}���*�$�:A��9gmb(m�H+'�O+�g~)�d�����qs����g�㪾���� �^�C�.Kc;|\���zH�
�!m�[^� ��W�c���*A��.o3�P�	�ڄ j���)�q[F�t%��!���j��3�l	��� Pۛ��M�?Ll�.FG�N[��[�\�eA�׸u�Ad�ń�d�2�(!�&��Ш Á\y�5i��ַ��9��r��Dϥe�?��� ��X����+�Ud��MG�f�TZ5�i��&����+tMQ(h�S"'�N>_U��]9f:&P?��&���'��kF�F3��z��u>�s����#�y��y_!�e�[��,5��,�o���ts�~�p�l��3�̗�c�>�iX�� [�H(�4WK�]6pG������C|C;dFX�S�Ej��c!y�b��$�G+_�	fu/�9�K@;8QT-����Z���&����x
��*M��WE �WA �T��u��/�삏��]
n<"m�������5Vy�����@}�C��b;YU(a�mO�����+	���N$��QZ���A��k1�\�t��-��� 9rư�&	C����ɢF_T���䐣��/h���],N����;��D�r�8b��9���a�C��WW�e���[�|���b��uEw��e���d�����חէ�}�K+`����k�%�!�ë݄�#��o/I���9��~�P��T{3!(�Ɋ�a��HR����r�f�@&�n���ȭn�p��&d"Z+0�6Pe�����zaT�"Ol�f:<X�ޮ�h�n n��=	��Nݡ����{@�@cRɊ�������<4[û��.�r�p,�u��ب�	;_��`��y�!Ut;�>�T�'2�����؜����1�q�S���R�Z,�A�/y9�z�kH�
RȜ��6��}X�yzd�=�أ��/���n6��'�×��*"��*��c�{�&��B�6ռ4ΰ (Ŷ��Gx&�1h(O�*y�2�H�ر{Ǚ�g���t; 	�!�o�j�i�4]%L$$����.�\��%�׳��u���u��jB<�@s���V&���;�<U�U`n�P�b�xb�R�k���W�W��N�/��K���'mO���QQ��ѠX�O�%&�vݨXww�cA��Ҭ~����oWS�'�U���qԜ4����QCy��&6{����D~�b�$�ɿ&7�s��)U���6�d����@�l:JlFYk�$�W��z�S�e�5�O|1����ٶcb���"y�����9�PE@+x��tU�}i�20yD-�Uߌ���p:u��Ee����*�m������#B�"�%.�^ʟ3��Ҏ
F��$I�sY���ӗM3�Y$N>*'w0�P,fXٝ9������w�Qp-ذ�q�f;[w,�rO�ὀ[�ʯ\�WA�V['�GM<�.�х_���@2፨�f�f�H"�'\����ܹ5�+_N�lB����4�����tqi�/%)��	��p��e=g~���W� �ⵎ"$@Rs��7_�+ڟz�L���ރ�}$��$��SB��v���lAl����I|���eOZiX8��)`l��m�<�?�"ie �R�̏KC2D�g9�O���~r�@�B�J�Y}<�P��@9���b��˭%�w��-�mC���-�:q�Yp��5V���,��`�G�<��Չ�⳹R)hS����o�ǰd^��JhWrMJ⌅�0�KҿjU/d�v����wcօ�N���ᮂ`	�g��Bֹ���5l���b�1`�^���?�'��a��b����/�y>�EͧtI�ɠ1���M��q4���bޏ�c�Pm�0GZ���5�9��\��YE���i-#���^�/Ƃ+��B�W�L7f�8r=q����%��G-@����C�P�I�4�0�1�H�����G�H�ݧ��܍^����|a��ie�y���BsD ��x��?��ð�%�����vyGU���6%�->�~��.��	��0��%�/�"Z����BP6xn
R+��v�s�Flc��L*��;��ٮ�/�tQ&��*	5c|i��{@�,O����#г[�'�>�5�Ff�.M�Z�� Eʙثvq�tz]�s~��,r'�����K:.g���I��3}�}�����6$}6�sە�W�TnIc��;��>R(Ɓf2AcY�#�[x���v����F�_�2ȧzy�*����P��ߋ�i0i(�Ds�EnuD3$]�T�F!x��q�+Ӛ�J�40{����_?g�ڠe(�^�)��۟'�%�!m�%�I+1��9�dh��Ye�m."W��׾�
�9H������[fNSN���^��2zZ��*k�ʴb x
s�\n)WC�@+�+�&�U+�nlHR�fFm�o���8���lqYi�:�T��-�`���%�������R���S��PQa���KDb�ݨ�@ �ղ�e���
��tr.BV�!&+��s\6�k�|!5�S����o�D,��q�&���I����{����H�fcD���[��4�&Y��AY�C��>Ƴ�sՓ^iK@���ԯPgE�ʥ ���
�HjR���5'�M�߉$��Q}my�\�80��Gko�=�
�;>����iw��B�D������(��H��������ga���~\珺cm(Μ&�e	��"t�5�w.�74@9�����m��4�@4���u��'��GyȚ'��5��A�6?0]�{i:�C;���JC���� `O7~�-���6"�*�u�'C�S��a���ʳ�k��/��˱1N��0�Ve���5� ���!b����M����Х�"�\G<�{��؃6�]� ֚�I8�>}� O��̼�)���{�V�3���_�q��=�W�_w����+��)�]�;�P��Ľ e�v�4�uqI�S�O�ǲ�y��)�@"H������~�uj�f������p�ޞxhVCo�X2aw4��R�W�޸ὸO�Z$���C���/
]�{��Ыp!�&�C9�)Vb�x�[�ɖ"F��-tZ�C"�����c�*:h��%�xgwh�6g��!�y������脾L7�X � h��
��f�\�@�g ��4N�dV�b5���l�C�_г�A�1�A����|�8�A	��+�����N��b8$��j��e%�g�������׷F*�Lʏ/�9����Ƚ�#���}U�>�}2|�Q�^ؘ������ܡ��F~i��3sd'�"s+�/�'���?EgT,����δ����=ȿ�n{���`8*� 8ÃL�L�p_�}b����;��h���f
�^Cx9=a�Q�//�/�Ք�ڲv�\���	f���(J�?�6q��\����琽g�(<��x���ڰ/�'.fj��R��D�����!Ŏ�殛jPIǮȇ@D�>�ԽXCR��9�^���b5�XiN���y;�	d�U,�*k�il|�K�����k��^��zt�;A���2���?Ůa�m�%�!����wM�W��-{G��Y��Aτ�!Ȣ��*-�B�]���"V-��T��=��g�5�q�[�o�%�Y�۲� Y�%.²>���h�_4��(�N�γXm����F&���#վd��1c���6�Y�k[;,�j��zo�ۮt5��w�jFN�΁��l�������x߫��c^\@�Yg��s��X!<B�0+�+�������Z�h����d�"چ ��b�Ǵ��E��-����o�P.���.��Lk�7�`W���cC�'Ĭ5'�v���|)6
G������	H�@̒��x��U1+�L�̲�/r\�,ܼZ��8?����G妮>�1��DP�9�{#ː���Ɖ.�C,K��<D�\�� F��l�YqL�Qc��1Ip�D��^~-Y�ᑯ�����J�~Z�T�.�xD��L�_~��Z�i��x���&4R3�V���T7��"�kzy0�1�J
q�-�����1�2��k�K��E��a·	Hui�{Y�~db[%���r24`�^yqk��OΕ��Ww8��[A�f�ӭ�_�͜ Tm��z;�/�[)�f����5��ϰ�c�EU�C�.���9�r:{��Yk=���p�B�[KT�"�Ga:���$�N/�7��1���|r�0��.>];��� �`j7�1���y�ղo腙|P;Ʋ�m�
�����͊�hɚ�ѿ̟$�ĥ��?�c`��64ᮼ����%/� ���Rx#�.�6JA��8�����;D9^52#C�DK���>}�]����D?�y�5�W����Тt+n"� �nW�1��o��+���kB Ѝ�TvА��:|���V&{�c�U��DW����������+<t�N"��?��QZY�����Pϒ�t:�����SD�f@fn�I�U�i�����]��	�F�ǿ,�'�J3__����t��=�6��/��ԯ�W)�^Ǣ�"��u�'���`�
�D����OߚF`�īQ)�~�9F	ǈ4��o1��;��S`�b�A+�+6n�ZP3r7�ٷ�Y10z2��"Ʊ�����^��ѰD+�/��D�]�$=�y�����VL�w qF�a�f<����J�-x۶�{�V&`��3�I�Z�� �k�:c�-�����Jb�8B�-��$Bvw>I�e�̩�<�15��s�����Yq�H�\?tTE�	��{kf`-��Ń�#6܏h4L]/1��X	o�N�P��x ���y��U?,�k�W� 6�Bw�ȃ��i����� 8\�+M��k�ON7�?��ڈ.�/V��V�9�P}c��"�ؘ����!�����$�-����W��%&/es)���r�a����@��I�ᗋcM��������_��� �:���w��8n #�����Ӱ��%��.W3;J�w��n8�?�K��{\Vz^�$IE%kO킟hhR\sc��!�	��bB�vI��W�t����]��"��<���%�ޠ�J��&�e����2읧3~?�0�k݀��b��n�%�P�"�n-�b;��+>����G)m�a��qr�"�P�
�^o4�Qf���AV��Ī!�Gի*Y�.�[K;�F ���j��+9�ٹe��=�Y���"ԕ=�Ӥ��=�$�d��E��h�Z�5���Ɇj�Q�'%3�5IE�F�p{V����L����x��5�i;�ЛD��399�TA��(�����ٷ�O>���c��}6�"c�u��i�f}5��	)g�#p��>��2��CK�\��Ot�'u�J���}y�S��R�Y�<_��yJ���=����ʺ+�l���lK�q�ƒ��44�8zf��1���wߨ�L�Ez#1��X� �Qu��b��l��ս����.|����/��Y0���%�5+���6���#����'S�	!Kz�M�yǻ��_1bQP��R�ap���38�y՘��'c�_s(�i������k���yÑ�;%R޳�_�Is���M��R�]�jh~��t4�I�]R�ע[��F�J�i����#�ye:�#�i}#�y� -�_���ʹ��%n����Se�_��ˋx\�`�TER�h���O���Q�������CXլ	�1�8�A�dWv.8瑬`�$���~�T������;7�%_����k�B+#��Yb�^:���k�E���7��j�IH��'F@=OE�)��Y�r�Ma��I�У�jr|xrw��/T:P��P�������m�:�/Y�̾�n���h�<��^m�+â��{Ӥ�/���%މr��4rR�Kɓ������qɕO���2b-�d���ޥ��|*B���F���_�����/��嶌o�%PԊ[��$��/��u��_;}_�沧���7�����MYQ&f�|۾k6,��X��q$w�6�����HS�[�NxN��"���0z���,����嬛D���T�V6<�|���[ȩ����ς�⺉�3��g+����A�V��}����`ܸ�@��lI�fĸG����#=Ԯ���I��hN�'�;��p��3���+5�*-l�Ҽ{�5�dL���g-���&m*��;M����8`9��U.Z�ClVL��mE%w�9�k��+Qqy��fC���1�ݍ��?�t[��<`�9����z�x��t�L~P�����q� �ѫuO�Ah
���$UI������ǣ��x�Iv��:�����ѯ֫<+<ߦ��&�2���e庋 ��c�\ʮ5���QĈ`��e��ٿf�����5�F�L�R���#P�g��o�`I�;��VvP�nXn	��v�WG�Ztx�}[	d��'6E�$-��Mzv�p�B�y��A�o��>�8��$EcT"Å�pþ�&���:����`�5�MA51f��qm�<%s���5��ߺ��s8�P�4��00і7+u��p.}j�.���b(+fnC�B�-���St^xtz[~pY!9�/tz[�pX��i�j���a="���w&+���	5@�������:���_���-@�i��g���ޒV>���7#[��c��8��	-�����v	�����t;�� �eL��;�p����m��u_܂�8�)��п^&��?� �⧋h�T�Ws�.8!V��.���kؒx:�{�le�!ˠ�$�(�c����x-�u��A'�lh��K�|h�z���?Ȕl�_A�.�T�֙ҩ��78�W��� M7���΃�<s2em�`�l�y� Va(h�	H��$��+z��B��D>j���p�c���R���UIӞ��{���U5󇢻�G���9,���Vٵ̭"W��TO��Ŷ��7z�(^��_��~	���Q�����ۻ[��`��(-U��؎]���'��?�GZE��9Z�-��T��]�5�n��4��'i�,xk�hͼ�����G�J�Sx0��d%Z��錓�NjV,L_�>p��\�RMD�9�y�y{�e}�K7�5�L��W���T�>�Fz��Ff�|d��DἹ@\����@N�4jK�R׋��$�@�Pt�W�蜯��t���f���Ύ4`l��-�i�!�I���#Y|9D}oum6&H�����5A{·�/W��^ˆue�p�J�5�ɛ6���U6_�����o��/��E��q���xӂ�@��9,|�:ꥋ^�� �a���&�`�!��2�������$X�ϗ�篩XM�HД�ReN<z���DQ ��a{��K��{G�k�h�m=���D<��dB?��!����Nո���
�I��Ć2AA��~�ĮI���
���씸`l�ў��N�t���A	�B3���@��{��n�f*�a��N]I�\�:ޝ`��碛dϳ�d:��{�O�ͪ�q�VӶk��<�_[��j�Jg�#Q$oC���[s3K�vG�t�\M[��xc�z���5#��ii��b�3cv����x%ϰô����p��P���}ɟ�^.�Q�TrL��toI+MnS^6}ϑ��d��ٞ�y��4���Gk����"C�m��Iʁ��*�q�-A`���;�EҺb �Ն��Z��m��jja'��Tx����U�_*���.��� �cMѳ��|zy��nYq�]y�!��$K�p�.��sd���!�|7!��Y3zHe]��_�3��XC�V�)�T9W��s!;w�Σ�<�m�Pیp
��O��]��:��Z��%e��Jb�½����\N�sx��\�b6��Z��<� ~����� ׸2�!�L��T��o�mj��%Lg�9��y#EspYі�Ӛ˕��n�,�؍��7�	t���BԸ����,*S�\���1L\|\i�ehB(!R&��H�� �,�?ǵy��q����:�8i["�A$�9�s�[ì9d���Ѹ�v}�͗�ɱUśO�J�1�P��☆Q�2�-����ㆸ�b*N\
:�}��n�s�>M+����V���6X�r��B�Y� &�#ѭ��]M,�&���
(m���U�=�1SL�_�\�.�(�D3b��\���D���x��,��Z8���q��k:)�K˥�5`����\��� [�QQ=G�@����]� �S�sjh��#	h�/|\t�{?�1�4$�E���_�t�<�F��R����}�S��#t����'P���n�WBG�h�})�^�+�Z�f͏T�	���=�́��V���"�L�ng=��;�9�K�M�D�^m!2o�;� ��`�jg/5��xLӃ��4V�\�,����[��c�/���.�:�,9/(�rL�m�:�K� �&宽j )M�m��%��0	��H|y�VO��>�+}a��dҐ��#P�
s�*�>a�E��Wh��M���2�zPK��x���&�XpDr�v� t�{��f��4�kH��K�����j枓N���!l�ōtܶذ�Ђ��P��%"�G�S��ӨԴ��Gu��hE/��l�%D���
'H�ҝں�ӷ9�{���*,�W�,/�)U��$y�֝p���朶;��w�Y��.�����/��/N���q�ڃ+�7�Y�듽�<��H���IBP��=�s(!�T�ak����3�$��5���{i�b�g�� *׍i�bt��W�`�v���Y�ߕw�+	��� ��aSoI}M����;0����'񭨦Ӽϫ'�·�pD�B�P���
��S7q���Œx@yS�(�?��c|�{P+��bڴ��5B���˳?mg.�UQ�%j��=9�TXz�˙c���w���0خ��w?DcGl��7��������cu%o�M��Y����f��j:��Z�~
=�{ֆd���x#^��\%,����oIٳ|`Q�fRtF_���Tړ�'�d�-׎��x7'"��Mq������ʻ�x|��q�<FMέ?K���۟$�����LűD�zSh�D�L������H�=��r�M��1����4}�O�8����2��*�f^$��t1�F�����I˺ᚮ-Ͽ���,� ~k�'���5b�����R�q�Þ^s��cVH"�����a��V��#r͗�tr��ٵ�P�[�Y�ps��?��֭�^	�����+��C��y��ܒV��o\D]���-����R5񻜽��gvh֐⦉%q,�����ؕZx1&n$�bhJ�'f���;ǡ��+rW�k���xaJx���8�@���%+q�H��"g�F�Q�~�;�oJM;�!K|M�(q7e�;���^�.W�cu�ڪJ�'`�f������D$��� �&�t+�`9�oU��ڦ�H6�
@�	�|3W1�K�����Ѣ��;O��ds#���Ⱥ��-�6 �ٮ��L\���R���@�w�׃w�h��6�AE��L��ѕ��ZT�0�J�R�4�g���*�EpP�;��Q�r���ۜ�� )�7��2���0�J�]_�=h)���W�s�N��w�A����4OA}��ei R�π�� `{�{�D_�P������!PW���z��=���A �^-�n	���Ga�����
��-/-�9)�'�(�zb����%��lw0�\��1&�@ږ����r�(��Ld.n�K��$�}�DW]�l�fE�C��g00Cr-Y/SB;5�J�
}�fK�_�Z6�"�ŗrTӹ��G(wfQ�1{mȔ��7.�]-�эL0���2QF'�ͷ
^n����e�"��/��i��SI9��B�f��^t~�|D�8�i��(_���δ�t)(y��>���ѵ�\$nB�	����;K��:U��֘-<d~I�N����٫��&�e��o˕�Y}~Ts[C�Q3V&W�q���9:Tb�g!�����8��򏉓ؔ��p�}��K�����a�l�p���"'+{[h3�~��D�wn{T�_84� �N�ZݜQQ�,a�z$����Q��YZP���Ş+j���uT��ų�Fnɏ�cV�2&s�**�s���-�_%� /^M��r���K��1�!�P����4���[�?j��x�)�.%{*1������w�f�O�T��h��C/�
u���ҠU�{�x�Y!�m_9I?r�f�_�kLM$ɿ�v}�+�j��V��M�8���	��f���Zrm�IF�Y�q���,} ���-�k�Z/�ߍǰ\V6b�9�%A��^2yhRF��V4���`!��1��z�U�:	7�_\!��Y�5K=���d���ڜ��?ǒ�rP���������bv��_�f�Ĉ�?3�5�̫x���
��ª�x5
4j'%<�α���n\}?��-\���3^��M��L�l���gǰ��C5u\�@M�Uܺ}�	I�t�ZPݏZ}��Qqg1sb�߲��X:A�iwk� f�>������O+ِq���������t�V�e�oF��Bl�1xmiG����s���~��8��?�4��o��r �9���8�o���<��I��X6�,���J�ֻ
��xzd��g{i� rPF<��|=j��!��hv��	�]�ϡ� ���՘�sr"�c��]��ID�׍�1�����;Rң��xy��\ˆoߋ�An:)SY.ǪJ� {���V)���n-�k�leXn�	�O'�g����_�뗜c���]t�=e�婈�7?Ͳ�
eA�/���d��;���1�c�0��ށ����bc�xҗ��0�b�+��|/1����˭�K���p�ُ>;��Ql���\g��3�Ɔ����ً�Uy��4�C�u3�A�ǏL���+�G�	�2'%�w�.�nXc��p����l�˽MF�7z�?;Q^���r0���Z���������޲�����l��n��$�'�톭��v	ezQÿ�9���}[�G���~loW�m'���o��+�_=h�e��^�D�q)�H>�-G���8�rgѳ�s1�0N8��*����R�v������"��fM��2�r��z�W��=ǚ[B�F���kK|��>��+ D�Glޕ���u��z[
7�����[���a�k���A���/<@:�2	z̃h���I�����g�~#û��k��Bs�c�t�w��\�k{�4���
d�� K�� �ŵD�^H�$xG�x\�LJ��ioCc��;��s�y���[����td�%$ED��:��tސ#��{��15e������OY���8���V���T������p�wG����ʚyq`��Ng�O6��в�4K�`����P>�/���h|M1�Q������V��|��)5NW:�;�ؘ�A1s�nˀl��M�8V�����pt5ü\S�O�Sm.R�I}O�f��[B~��}�c*��]6���%�W��\��3Iej��B�F.P9�ٝ��+�\kה+L� %��Fl�9�����y�1��H������DR�Lr���;�ZS}6��fH����ބ2/�a�ы�>ئ�?J�3_���Y���.�e�8?���^b����O�[���ha�ޛ?��+_�s���@2�rm�U�a0�q�,)��\0)�Q�)+^��׿ĂB�_�a��1�t�Bl(�Ro�'���P��R�T�栌�0;z�(��K��FP7�O�S)�"O��*D燑�'�= �B<E��`J��2��4�*��tr뫫}3�8a�JB��v���'R}`��Ɯ%`�M�~�~;+M�RoZ�`:�:�i`�޽�.�zu�;tC���]�����D��ȁۻ}�)���L�?����G��x��$�:���!Rs)�������[�6�~�@m�r�^Z�a�W�=����8�x�fJ�����M�!E��!x���X��d�k8��   0C%" `  ��z���!�<`���@b)�̐!z�����?��
T�����{��۷;Nn��26� ɴ�T�e{�y�l�c:� �\�  ���Td3#o��;���evoMV��lB*ja��Áꨍ�H��PR�R�@T$�r-I���r-ܪ@�k�*IT���   �~�w��w2s��%�Ȭ$ @$�
�/�  �����ZR���(@57���5T��'���U" ��w� Ū˅.b���ʗ�NwՇ��rX�}��JK�xr���(9�G� {c�[v
[}��jǡ�{��B�
�Q�qׁ�,A�pDʛ�%H*n�i>{��o���0	y����򶦓v��,`u�a-�#t	 n��p5W�"����_]���;���}a� qjdK���x�K��T��ҧpЛ+�?�)�z�s�/�v�x��=!��͐�]�<�ӣ� ����.j
ͺ)ZA�je��tj�����@I}�Wn�����x�T�fBI�СE��/(����ynCM\��Y_��X�,��.�YG��!/th@��%/��zЂ�NYV-�����2��/��;�j4l7��)�w�8�jն.�4��
�f��F6U �� �Bж��s�o��xR�y�>O^���{n�՚WV �ڒ�9[����uG��}E�|81*U���ie	uw��m�n�D☚ڷ�g>��s�݊�>����kh:�|��c�x��xL�/a6RY���J���1��"��T���d��X�10H�	�:���0�%�}S��d(Rx�InlT�q��k%Z̑C����3P�ìm�|{�/L_M\�&�l�&�M��up�1��o(�Ǣ|�
u����xquͩA�" ?��2�@�� ���UiY����wT`x��f8Ķ��!��a]�S!.�.vv�$Z�0NM���Mɴ�&0x zC=����kh�(�f�"�rY_�j�`|�}#�jsUX��O'���2Azxz��Iw�@�0ŕ��T��;��RS�V�-��)/��,�( \���r�}F�מFh�4ȵ+e�x+�֋�x�y���0��h�c��&�5��uk��=}�� �	
�p�1���g��o�L���'�\$�blXD<��@52/����	��-�h�4M�������U���֞�X�K<�bY�"�pX4�LI�8�%�K4�#"��H|��w�`Kf����=�HT�,�Wz�!�����r�yw�/ocC���Q��u�0�]�W�N�CQ��M�ʤʽ�"�:�X���2X��x���@8XcW���N�O�ɓ�8~�K�P��D���$��B5�!���h��$���ݥh7|}�]MWnB��0�|X�[��)W��9�kኦu7�6�YOa�ܧ�3��.V�*Ȍw
�/�c.Z
h(wa���b��-VJ��5�!ake�Q���Α�@o<
�l�!w�!'��%�L]n����̗V&x�N������f�@t�UQ@�k��͌��/�̡ê�ƽ�ea�|�����a�C0�T�,〚���8����%V�<҅)l��Otj�ȰgB� �vby���gW��%%X��(��S\~�N2�Q�3V%И���R6t���ʋV�sy�|��P�ϭ|0���tƣK��V��˸ڕՄH+^aC�#2屣�^���k)�
�I\>7p��8r�����[Z�J��i[fA���V�Ms	�^#�[��i��\"~fU�99}�>)�D�?e����I5�c�쁰��@�d%�"3P�A�G�mA���>ը�Q8���0:}/]z_i��´�en�Iq�@��ͺC�Q׌�;�g�a����|+��!�]���r�̹M����sj�F+o(z.�ޝ��6��E|z* kӫ����h�1�R#B8�5���E<���-�>Ix~��rB��0W��EHC����[�ĉ6���{�Xk.^X��0>��Ɵ�v����&1w'�_�Q�o=��<,���P
�a�ZMxFd�2���Kޛh�v���1{�ZE6ZjC��ܖ��԰v��{�G�ѩ����/|����s�C����W@�ǭ���ƀ��b��6]{�w���2���JV� p��h(VT��Q��"^�>��NA�޴F��*:��F"�G��� V��*ɪ�;��#$Pg(�P$���K��̬��Y�gTAg�l�7��l�Sk�f�"�2K������`.n����d�?�/�p�ŋD�>A�n��|���ͮF��������:6[�?��P_Y��LYY+�k�<�R]pDʃW�k�b+��Yj��m��f�s]���JMk]�d�w�ɥ�vj,��^���l{�9)���W�Mz�ͥ�v�߱���ۍZ���2�)`? 2+q��
��sr_w���u�)ϒ�tΟ�\݅�zw�՝�R�NZ]�x�)^��(��4 ӥr�I���g,�c�4��y��:�FR����;p�Y����sD��������$�dO��NvPz�Rv��]����;v�hh,n3)do��TH��'8�_��.�
��|��Y�~ET�h�1�^�a)@_�u�Ba������>�}���6���'J�܄���5����%Հ���㉪XF{�P����a�{�{�KA>���r�M���g����{��r�^�I�0}��xU2Ѽ�p�⡰M�m��mT��S� mӦ�x)S@���@즏0�S �Z�(�ɍ���^�l~4(	uَ]���$�O3S"�F�R��6$�c��e��]���C��R��Ԓ$(!�ΠR��R�W#����ݮg�Av�W^��$��C��鹦�Z2S�/f.�����K����{V�K�qjy_#$/��k�� G#�2y`��%yB��K�!��C�͌���۽�䋑V���[_Ʌ�`htP�ʆh��nN�	ʹ��R��4̩�G7��ӑi��L�"�A�f�����++��l&���%b;K�b�ē咏L����W_�a|���[���������<��7���KB�'z@Nn��\ܨg��]���z<[�|h�����mPl��d�x�A��G�	J�v�qB@�o:�]r�nɍG�|�}�f��D��5rP<ָ=z�C�d� y;�C�Ư�7I��1�R�=4X:^;�t�}@t�R�(�$ ]w6+�B���k�N�!����S}G<��!�+��\��k�?��<}\z�8��U;e{�k��f����R��B��ؔnMX��������v���"���t#��#� 9�v�:�(z���B��eY��"��#�raz��_���[sүǧ$qʙHN��R)1���+t��#�Ut[�!si�W)�^�[�oi>��S�]5��SF����lY���_��}m�6-�d���pO�ξ��5�X$��������|H�A �n��d\�wy�;�у�Àh%Y���T�oK" ��T�wrB�J�y傖�c.���7��8�-}Kk7r:��ͮ�.H�$�hU��3�(Z�*�WÛ!���Ǜl�ȏ͡����)
V�ѧ���k9��J�D8A���o��4�!n7	�w��B�mB��7j�v�؂1v��B�R<M��݀$��V�l�ɢ��5A�A��f,!�v�t	�.�ӻ[�-
F���J�XU۬�_���,��^TyT���Ϯ�1�2�@�-�tl^<�0�L����0�ؑ��N��-{��D��(�f�����1��~�*X�*5=�H��R`�b{�w��z}/$C<�\�^��pO�Q��!�\�aZň�d�����l�N�<�sْF�%�_��϶W���G��֗r�ـd�|�2�G�D���}.��1�f�A�W����C�WO�	��s?�d~�D��D�n�y���j������HuXE����mp���n�-ًQ���p��W��san�^3�2��Ȃ�NC��s�n��N��O"QNcۨ9%���ڀnH�1��p?TK��c�۵�O�,7$:�Z�i��]nvjk&,lfx:9*�����QN��E��<|���'�,�@*?�GC�̏|���Q�W�E���m�2�/�"jL��@���f�W�j~�Q�Ѿ�f����d��ufM��yw�ŉu�͘7��D	&{]�,i�}��<��#1�(VMً��N�<���A�2�RO�q\Tn �{��� :
?b�S������=%��n�����G��/�� 5�8Lvۏ�E�v��=wZbx�A�N�
w�u|���S�h�h0A����f�ߎ���R)T��C� ��b(o?��NU�)�;bBn��p����	��壤�Z�U#�ve~��MuB�1��k�s0�I
2eTit4�]��r�-��`��i�Q�s��P����I�7�87�9�+���~7���|���kk�eȋ����}��Ǭ��	�V�m)������(p.�䞎��V����2�ț�W��?�w�&�;&���|eP��)�>�d)c<!-R���x���l0	9�R\����!\�#�F���0��gY�Lac���/�6�gRd�?�X��	i�ÆΧޔ�)+C���n���X�#���p�g��mx�����!�o����Y�̛Ӳ7���_l
e�.*#��_<�0��WU��n"�3U`#)p�ټ{�FJF�LI����Nb�l��i��h>��ܙQ��г�m͌Z0œ9�jƸo�80&h0��9�f��S�[Z(�*�1�MN
w# ��!A)̈́Bh	8�,:r��K]���_<2R�_��v�J��Y)>j�g3�k�W��
z:��4��[�]E�ՙ�n�o���X���o��{�L�=�h�GIˍ.�3=͓������B1TI͕�����J�M�J�A�O#�-��ܮtM�׃�����W�]`-^<�Hg�^��"ȑ.�4�$X�ƪ�k�U{塗ZxuY��d�ʭ�:��Fq �t:��Ph�i���a�3K��d���P�J+�����q��s \�$w��r�;�m�e�_�f��׫/��g}�4��Uh���w���)hn}����(�F�F��"�W��K�!%V"�:����6wBȖ�@��6rK�f����� ��4<��h��%P�Ҕ8Qx�N.
-r ��
E��>eqOnf7�	��1�mS������Y�w_8�t��ƞZ>�ː6jh׿���
P���ҷ'��s��&f-
!IUy�k&�q�G������|�pc� A�q� 8x�sB��QDd`鹲�P���in�㖼�P��ϊ�:Ĉ���V}V(��\���Y(f:�wX�B�/�������#ᴷ���^�J�|��B��Rg#�C1�<�-�D���`��,��t@\��[0n.�
1���񌼡o����v����& ���9�OJ�æߌg�I+ˇ?�,�>�'`�iWz3`���.2�H���
5�U��o|&���b��)�>��3�ȷ]��1l�R�����f�� �� q��.�Â�:����]�lU��"����z��L]��[p��9�Kقx,�o<�R��_c�8w��,���H���f����� �'�A��*�4���aI�hrs7�C���k�S)��}�q�x)B��#r��7��+)C���Ep|9Ƌ�b^E�Jh��f�r����N<���i�-���ǶQ�r��o�h�朵�����s�b^�˼��B��?RPnI�&���u�	CI�1<C�����*�h��|�'E�
2�����,��n�j������i	WE�	[8Z�n#�Y{�����_�6m�Q-q���{ۜ�����}0�#v(�,�L	Pz� �0���0�������Z1�%��t��3f�d�^ad�AȒ��vد���r��=KvG�ɉh�^���hgR�b�B��R��,�w�a'��=��oF��*Ȃ�7�)�����B}��?�uXЋ�y�K6� ����s�Ɠ�� -��7��ʊ�V����%�7��U���`��tF+��y<�?O�X�j<�i�J��,ڀM��t�ׇ�$�B�y$	!�1��c�+���	Oq�S�T�i���2��w�ᡸ�`�z�p�������RGƃ8s8葮�R�G0S�?�_K��8�G-�mKΑ�]B����J��)U��YZi9,��m苷���щ�I�E�h�o��*ab�4��<Z��A���R����j���E�i�5r��E��9�1�Y�}`)�쏖[��.�0���ޏ�Vʡ�I�����SZk���.H�����Q���2@w&�SF'c��9)4Z�м ��k�Vi����j��*��8w�d;so �츌�U����'��D�Y9�jG�pP'D���ߩ��I�w��6� G2� 4M�6!q���t��HH�����I�ˤ��o�/���Ω12�O�qN���|�8.�/�#I'z��&	�xN�㐮*,����)�G����pf���w\1����Z�]D�1�����;ib�Wr����ϓ�|�!��j���U#=�c!Wbfs|���KўǙx��}����%�vIlp��kމ�+ g���{����K/�Ŵ%߾
l��Sݪ\��d75�b?�z&�!�+��VE�Z=�3����c8����uiJ���&������)���V�u��X��_>I�����}(�P�����J������Й$�{��L!%�JC�[�^�h�P��utŴ�P{��J�8?-yZn��ID��S������4� (��A����m_^�ď��Tsa���Ph�4�I����h�*fµB���n�����!�������~�k��Ӈ�ėA�O�=�����!x�S��A%�W�>�mQi�y��ʡ,^Q	ļ�acA\窎�A�/�D,��u&��	1�g����h���R�afZT���Un08��A&-�J��Bk�d�$�OL��M�B���G��cVK�u�g��4����憽�?��A��I�e��]�$��tW�)���Ж�Ӌɇ���?S���+������/��r{դ����{+N���ă$��Sz��nUk�h��ۼ���E��a�����IО6$�>+ܹ%��A�y���u�j�I�Z��RS��{乹�:<�����R$�s����r�6ޟ�uL��A����ԇ�.2��_o�|�1��;~��3�$`��@iç��C��j�?s$��s!�F�O�3�]�F�ߖ��2�eE��\,&��#� dH+�ؿ���X̔��HJ��������EL9�I��\��N*b!Z~Ό#G�k�k� ��T���*$��W���w6�C��2.v����:n��{6�[���Ij����,I�]\�e$N$
��Ŭ�F�5��8l�k��m�	�^�Z�|��DV}�@b7ݙi*�m��"&G���������<��r.k\��j_����Ev޷��U�hg#Ǚwf�c�n�N8�����we��]9��7��j�H{�T��@�\=1��qY��������+��e�MX�{��Z��n
-B���Q�3�𵲣�K� :�243�Dw� �#+ ��H���^�i�u;3�8��/�@RV'��(�y��zl�'��+ʘz�<��I��X�"�5����r�~uIryZ��E�����Ȼ�ܳA�^v�i仏��_�}����/��4��k�D+ܜ�
�z�.��	c���^����q�wI��6Pc��e����z%�ӻ�yF"�3¬~b�D�SFE��V���uj�����6#�LF��1lNOVtH{��H��T�o��C����P�+����2Z՜��i29(�t�fj�Eg��ȅҭ1�%�����*�f�����_� 0o�0��m@[����_2~V�6��e�O�=�!�}�-P�����&���Gm̶/��FqD�����t�|���о��pj��&5ߣÓ/�̮�<���T��,��E��9�xuS� 7w`!!�̮�r�����.6	\��h��1�"����h0oD���'5���w�aT&,���ڧ�������OL`R�j�M+�p
���z1D(,9	�ӥB��v���*��Q$��|�*�+�򢟨�^�]�+ ���G�I�#=�l(���܄��gljqgv��,�MY]��MÄx B�o��Q�_����<�]CS,��ylp}���˿7t�M�s�Yg�i��e�t2���O��.b�է}��9�{��k�*.
H�3@OE�R��+徳`�{4����ބj��ZU�]�
���wD?^?�����_��׬j �z-7�Uo�b8iq[�iҰ}�%�qK(p����1	��L�됕��h�麿K�d4�$�K�֗F
7��g�#q<�e3a8��gs����k�TQ=�Et�b�FUv��v��A�L<ȩ���Mj��p1��gd'F&�%�1�q����僴kg� ��g��mAs<�/���*Lg��Ѽ�i��ų�:ܰ��:;�7�� ��\l�,�ؠ
sC�y�h�עv�o-
��h_�(GÖ�s���*	;\��XSn�)۟΅ FRG5<[(~��ƔS�]\ˈNҾ���%���F�_���~�F�n��-�Tv0�ۄ�=,�9�s��i~］�����bZUu��(}Wo�ο�_���^����<(@W�r�����uMA�(�T]��/O��#���E���òO�U��G�WW3.i$	)�ǎ8ڧ�A�}�,R����B1�a}��/���ر�l}�f���f?��B.u]��_��Ru̲JEn���!�v�G"_i���"����e��g�7��p��/�R��tr��SVM�s����D���o�9�/��(�fn
00;�^*D���U<�� XaM�L��7���\$����o��6/JM��	w����#��F���O�� �V��א�KR`����*�O��{���C�藒goΗ(��,����{�!��4l���N����_>¹b>:`1q�*�;��I���U�L��)��5�_�T���^�zi�rk}|��E?���Y�i�gP�]�B���Gv�e��c�I�_�yE��-�fk�����z��p��ޘ?������3=J,��3�:�<ֆ��#b\������d\z���B���pBp��ĒM�W�����'���x��_?�B����(�w���+��Z1�DG=�t��!j�+����n�@vvK� ���О�V����⺭�u��	Y��[7NL���qm�����n�(�?��R�#���:e���j!�'$�������/�E�lפ[�L�?�}џ�!���Q�������XD�y^5�D�F��f(�s��K4����i�-#^<���.lK2 Q��0�7�y:����P�KeT���M�5u�4\�;ɲ�F�p֮��D����׬�Aw,ַ�;w����u��y��/�ŕb-0�*ղ��{�ʡ{oa���G4Q�oW���z�]���	dL�����őb�Ɵ'�� x��]?�����!��;�yDx�_�.`93��o�j��ZC�z�Ӡ*�qgIe�gFe��5��r�~F�0%���\���p�l����_�����XU�s�����:a��vʘ��+?��ӰR�Y�8�s�׽tP^]�5C/�rSC ���o,�r����Q���"��
"�4�=	@3��E�4v��J� q�}Ʒ?���i��q�-�I�=G%Y}�-DP~���`Ս�ɜ�a��z�T>�)�H�ɢ�9�;��V�G�)�ٔA0����t�?�j*SՕ`��I6�!ӮI��\JM?ZJ��T�ص~v`~n���A�Dzt������"0a��:�)�0���|J¢�XNT��G�_�%���	~:4g!��Q�ȑ�"��	�
�7j����h�s�������v�Sbd9ǭ��̳$���Z���|�ɢ�}v_b��uه�?�P4ɓ�k΄�`��<J!�%�RqT�1�|s�������@�4�8�1�'*p��@��]���d "�B�' {{ҷH�5�}t�3��'p9��ŉ�vI�"� S�Xi��ۇ��2=5�>�ۇ��Xc�N��#IPZ>-����J��g���Ȉ_���p�!R�[�F�<x����n
���^�@>V�U�qv[�X���n㐇Km����?�f��M�zD�"���U���[Z��ߩ��x�384'Hw&�!�г�+1u�S�S�N�
j�@�ы�y0��1�1�����TzY}�����e="k�$�J2̪Gs�[����_ �J��9{���넜�x�ލf�8��jsde&A�Hx��ï�I0���s�����	�g��N��g0d�%�>�\��~����sDj/�٘�Il��F���|���P2��K�qQ�����M=�h�����2,�ߙ���h-e�bO�D{>q_z7ǔ(�Z(��J�Z�Z���sb$�F��%?ͽ0`K�^�N|UZZ�c�@���\͟i
�=C��mZ�q�UrO�M�i]�,տ���c-�F�L�:Һ<Z��B��`#�,ƓLQn Rp�oC�����h1�B��0 �e�T�˷��s�5����ma������Q�T#֛A�W�KdC�V��^��\�Pg���
�݌�P����,f_��d�%v�~>���=�N�<d�ϩ/	�R5�Lu����S�ƾ$�=�#�����4G2���	~+3aS�̽6�zL�$/��J�&�ȱhB��~�C8Wq�T��#���;eG��c
�O�Dԯ��z/��N����i�s���m#���x"te�q�m�*öJ~ԁ�:؝�Ll-+X�n鯏��E$�ӭ+kj�ъ:w~dպ�6k�0��t�-�ؗ��� (q�K<#���`�:�҉��zɵt^ �z��}*��}�����QY
tʶ:�f��|3	T�:���B�wC�vGs�r�
{�(�*.B ��>�j�c��}�E-�����l~7"6c�qe�"ȍHx���-�_��N9Q�U+(!�q�,��Q��>S	�v�i�/ab��ɧg֤����;���J����b���~��o�>���'��!J&}Bz�tqV�y���|��r�>3`1nʊ'�O�|]�4�������'1Lq���:	d]��\�ؿMm���Ž) �4+�~A^� �m�*U��v��F�!5��g��W�5y����i��Š9����=x]��\�U�D�=���V��1s�G�W�)���ۦ�!\�{nT������k2��h
�Ǆpb��!��
x�����!���Ψ8b�-j����`����qzݿ_���h�P|ƇՉ����Pk݅�''sǭ_L;=���_�N��u���JCߊP���2ȇ�T��e887�$���2쨉�i<u*�2��]����*�%qq���'Hp���a����,1��.�����`����D�G��$k��ax{#�7k�Ch�P���Y�P���a�Î����Z���]Da��=g���.��Hl*��Y��M��$>���\��
���F7�o$�`j���f~nԃ{�Zi;�5GeggP����J���m5��F��pl��c�?8���G�v���.��6���=��$��耣�ן��1>��(�y�� ��YCO\��Ge��	�l���p�u�/]RLxy2��n��k�)@����3Ԥ߾�3��2ݣô��i������-y��M�c���,�+�KNe����
`B��ʵqbg@y�3"�4�=�]Gw�/�Ė�agV�]}�Q��b�gp�����[���	l�h��c�,�%����;��irt����&��c�۹x���S�v�݆�e����٘�,��F�}��j^�T������(���J*9��������,��'X�
�G�e8��NN��:�$|��F�ٺ�S��C �o�_UZ�Qk�ewˠX��3���c��F`�䊾IW�uQ#ЗƻzQ�^����]b��v��tI۽?�m��9^�#v@����_> �z�����+h��]:׿�����z�����&"�)�a0Vr
z,�����7���c�����A?b�x�蝀�'�דK�˗W�h$�tޯ����w6j�ǯl�+��r䃿?�G����(0����V���=m��^�5�c�-g"���Ij5����B7U��X��9g��1BX5�����n�jv��>�~�9�r�D�W
�Y�&�Ѣ���ν ��fb���i]`:�kN
\�\�l�ca�NXa�	k�p�M��gLG��D
Ͽ�6�Y�LJ,h�x��֨f� yd�x��東����/�
�����^��C�w���5�fnue汩n*Cl#�k:gs�8�Fv* l�S�l���fyC���w���e�
}���]��nv���Gw�Ƕo�2��tgY��8����c����~4���;�D>fZ� .���`�|��X/�㪘��{�q�eo���X>�nS���͏��]�u�:Y˧M��
�Ϗ�k����6������B�W������Rt\�pkW�Q�oP�d|#o^�}��5�������q�͖rA2=�Z�r�8�\6j��;����`��m���Bעsg$��#1�"m���(��m1��������!`镎��HL�嶫����ǃ"�5�y��k��ˣ<CM�#�=��2�($%��=�O����~:���7�z��>Br�4�k��@]&��؉>����P�Z���֑*y�h�={d��s�)h'M���#q���U�r�<�6��1����w�hɫ�d�kɎ�ȍs��V��:G���=`d'�x��@j}<xn�<D�ݚX�y�G?�W����XH�T#r�T��jM9��`:7�x��\���\�¿y�p�ܷ������s���3�X>�C�J)�
X�4��$����H���R�6�W�Q_;����h1�?4(�;M|֟��C�fa��jGf]{歑'Ō�4��{+K60�#q�a�8�B�;�
f��H_�:�W��,0���D��̋1MM�h�ѡP��s�z�(�VMQ!N��R�djR�\igG>O�%f��?��P�zjҶqQ9@X�4�Ǩx�ё�R�u�+Yx���$ԏ�܈-[��}����|E�I�����(e�-���!������P�	:[<D�;H~m���5�04B���-�$zq��լ��������JԬ���1K#J�Ƌ�w�ƥ�A�S��蜰z�jN2FYq�����YR��?�����b�)E��<v_ȷm)e�_����Z��v� �b�܅�]��S�o�(<�,�,<2f��N���U+�ϊs�}���t�Ï}��3(�u[PVa����` ě�c7�0��I
%����Z�6�3K�`+��J9�ʔ尐�$e�AO��6�B�m=�5t֢��A�˻Z���;�t�w�
�V.�T�h�<���$�����(��V���X�J���V�[zkFc\S֢�w�C���mx����?�k�=�K��M�>��մ鋝�m�*f��k��y�2� ���: z�����e�k=���!^���}=�*�&�L��P;�#"I)�/�Oz���0u�*-	��tpSEc�䇨�����Tt�te5���R,���Z�b����1S���W�1�jw�a��>�/V��m�I����~.	d���!0)�_t�����2S/R���AD�Y��I��,�����g��q��`�3�5Q8AM��3NI�T�
QC�Ci!�@Ǥ�y�Aҝ�G&N��t"�y�A#��5�y�G҃S'�G�#v̿�u��\�\���(W<k����hP��m_�#Lz�0��4������x���/��MF���A��ٛ�e[{��0�M@�\�َ�I����A*�|�w�R�q|iV�� ��M]�0>7�
�灭 ���W^�CӴ5jC;P� ��<��>�=�{��k`60����m� W�;�d���A�D�(��-��-�9�Ncv�Ҭ�������ńMs�e�������|�݄����h77Rs�ul�?�,d����+l 9�q�=�K��0�_x�I���q>�C�*�x��*�'�2�g �N�$����,��BP~I�q�eT��_?��Xv L{Z�(ǗP)3H�O�bQ�'5u
��e�H�e!�����`�X�r�zL�=���D�,l�8� ��n�u*�b���H͖("��F��6�xF�Z2�e>+�Fɍ��^�N�-�7,q���kg����	(���/O̰2����=8V�#<%WG��H{t�tH^j�f
�=�M��^:6�P��+g��I]���x�U�^?�j�Nh���z:����e]T��P��*��%�K	���H)�
�C�4����V����*�5[��փ�~�n�[����S�3�FDXy��������w`rT)�n�7͡�����y��6�Q8�:/��I���X�m`6 >{��9ܭ	G^4´���h�Hi�nr5v��}��;(,"���T�,,�0%��Ԍ4���6t
نO���%�:�u�����y	���dL��Q��Z��V�y���;�Xg�Sw,.Y�L8�� ���/dϬ�r������`�s��|��ٹ:�3N���Yr�r6N)���퐄8u�ZSY���g���s��~�P�{�^�h�ɕ�����?��haF�/
**.�S�M����{���.iX�A;��c��`�0� NN/��ĭIEc0��#ˁ"Xo[�������$���O3���IP�x!(�uD���GA�C��_/n���u ��p�6Qp��O)Mh1��n�5=sC;�º�|Q��LdwE��9���o�0�SY��,�LG���c6&��3�;�y���pn���r�|k�3ߟ�P��E&�B�Hf��$���{�����K��Q���p����=J�l�E���nE�ӄ��,�#�ѝw��j���\�#a8�����G�A�Ks����M�	q8r̀6�ݼ�_YP~��L�U �A�D�G g��~qC�n��X���=��_ydJŷ��)��M�ږ!, � 0Sw$" p  ��뗛Y�NFBEBYB�BYB���%��dEX�/�ķ�_��ѩ=���0�M�y��0��}��ζ%�D(5��@��Cѱ�ΦB@2Tv#   ��U߃�<n��os�38�������i��7Yժ4ig����$P$�D-H?t�Z+?2$é;�-�YtR�2O!�Җ*GL����������   4 4C:��I����4$���_��\ ��(q��	���#�Wn�G�:�_���	�� 9i��%��0��#�S�cP���p��E�����&f�A���
B��(a�>aR�e�ô�����$L8ڳ#�!oI�!i��M����*N7(9*)�`�����p�-l���Pn=1�D�z��u�r&��Dt̿��s�����?a^�U���v�R�6&�(�ئ��R;�w�qz='�'���������}-kZf�ɋ@��->Gb7[z��"�w8[��IcƮD�]�F��\��u�������Hx�jW��	~O��g����ґ\�CR������U��w�(�k*�jl�C�1ICnD5���������~J1��vA��9��'.�,��u����<��狂���De�;ʉ [�6�Tv���*Us8s�<$a�[���d#�>����0<E,���&�' odH��1�0�� h�D�S���#����/�>y7O��K7�E�Ⱥ��������+��vd�����N�_� �N6�) ��e��GGõ7�㪇�aY&�@��ز!����S�]�WxV��_����2`���4ܐ��.���:�#��5����YRfh���T��35p��y�?q='$o���2��I��?;w���UW �NH���
	R;Ǻ/�ײ��:�%�8��A9�v��7�p�T��8�:1u\6�W����XS��h
�]���ir�J���:�a���+���r�����;�e�'�b#Jj�D�D�����zJ@$C��];�����&b��v�Q2Jj��.����[%#��;����!����B2-�Ѩ����d�@$6�2�d8d��	�4���A��'��I�����J����!]�з�k��b�X��"�-Ǹ}t��Կ"L٥3�'
�;����!DǨ3LO�'��dP��"��~�rh�p�b>����oJP��� �)���{ʷ��Xz2�(Ǯ'�}X��D�X�(1ظ�RS���+���3�ʣ��<�q�f�Y7ޱ������J�<���C�짊J���:v���}�5T��������G��'�d�O�BT�ۍ��M�ȕ4>f�
����&#���9l�Y�������MܛaJ���G��)�8�ю��E�����[ oAU��-��C#��ZD��kF��
�j�f�}��ȲlT�1F�����`��$���Ջ^#U	�l������� r2��� �hh ���DV@�Ğ�Ȟ�j�+C[�<�� Ə�l��If,�"f����P�s��0k+kSLՋ���бo|��˝�B�Q��@<�4+�l:S��	/9�S%q����ʟAx����K6Y��0�}'���(��cGԨ9��cg `�[m1����\�Z�h�s$�M��M��pv$��;�'�h?��T\O��\��[�Zr��5 � ���"$h�Lt΃�NR�AAR}N�r+���$m�Q0����CM��*O�}9���*�|�Q��.�AS#y�*�����#�� �E����qo��`Iya	}�D���Z��<��+�3"��\���
�'�������ViJ2�O汱�.
7CO���AX������RW�Ei�Z|,���"��ǃn���vl��vwD�ͅAV a�dT�H_���ǣl����ERC$s�3���J��iwT� +l�ko���Á�_��gy>d�������X�.�o餚:X���)hg�q�(,�"H�������O��6��<�M!WT]�9�E�'���Δ��[�v�����S������)Q�}�.I������9R�t$�+VB.A
�C���Ry�`Ny^�KJF06A�T�(5�g}^6e�pN�UA2�s�I �2T�K��jP����zn��!�~y�>bYnhÇ--EL��(�W�Y��<�0d8O��c��X�I*&~��>r1�D��=�j����\|%������&�;���g��6�� _h��4k�y��H��}�s���^+ $v%+����}��)�%���܍&6�ؖ��yz2���Թ���s�E
�8}4��@�2��O�#& �����k
U�E��:|�j�7�f�6��X���JSl��D�ɀ�j<A��O���P��?���ą�e�'�����/_� N�e����
O�[U��/�^��s�����;�{�\���@9�������@�C{��)+����ȪHP�!Y���8�Y']	9�5>�4��P�R�K���9!ǣ�M"�P��r}��J��B�� �@#h�\^��J+�<�ʎ�W��,��p��AD���l�K�w���C��	��q6B\�A�"m"�v�q�W��"�|!�0�Z��Cp�}K
.ҏ��\z$�6�߆�#� M@?�Mq`JX;,��Ւ��`���ģ��Ak��j%^%���	�^ ��kD�b����������x��`�0�pV��ZT�����{!�,�m��A�k'���ٖ獶Լ��;�o� G��x�Ѱ�a#�sg��54�KcǠo�%�$��ow����9�D	 �>����/,�j*�V-��ȦfN�	���O�:Ii'��&��wD�B��7cB$g�cd�kj'�P9f�2�;�j=�� �a6C2�x���J������3J$6����!GwH�/�k��=��L�a��&�݁|��c9Dw�I��H���"|�����5�mda
�r�����������T�{mؖV��O���(�x�����<Z�oD���/>����_}�|V��-�h��YB���&륥�M��B��f�[�a9�-q�㫷�'�:�
m������a��hH��	b_��=�9Q�̭3Tj�R��T����9`��&��گ �X��:B���s�I\�>�M�(Jj��#����Φ����Eݜ�i�Wa���b�s�a�\"Q\�͹J4��ht�.���|@y]��:@�3����LB�gh*]���W���S|L���t�B�U���h��s��aw�o���.�EA[\�-���C[w�<�F�pPx�vZ1n��k�Ʃn@�T%�5\��� +��Aj��J{�U�� M��aXك;O�6�B���t�7a�YDه�
D�'�����Z�ك���%�C�
[�%2:�N(�!�D����naq���zx)��B�$'��;�`�^a�C.�6h�ז��M�
�%�=�'��=��Y2`b@��	Bt�aT�6���,ED�pXB��E��-%�:'�v.�!˼;ψc[h��GK4̿d�*��X�F�d?>T�R�ʵV3��Nz�l���J�xn%i��(=i��b�ڤO�bC]�)[�Ĥ�&�.l��E�d���C�����w�Jp�*�b$[(kH��&9>�I���E"�K��ko�,u��H;�R�t�z?撡-��"��%���]��6����ؐ�h)���ڦ������|d���.��=hB��ȳ^��D|m]�?RW��\Ng�o�B���8g����������'���0�b���yL$^� x�U9�T�&H�$Bu�f���"*B�N�JU��J��p�����O�]�~uU�s�v� Ε���S'N *�!��qfVX,�_a͆�����j�m�ƛ�0[0f4��N�Gf���#|+��	+0-���)��e��h���n��/�R�W`�	V��V��`3�Lܟ����q#Y5JX���cѣ�b�����q�+c��c���DW:洞aL`���
a9�|\���d������^$'�kVD��S�79�3�=�
K��']��.e��0��K�q	1(�Yͣ	����c4�#ke֭�x���6>��8m}v���c����h@hc��k4D�)V�΢hT��g�h�ŉgGd̬����}�q'�8���閣L�]�+���<]/H�bU�3;4�w��ȕ;K3cjY�r���V�/E��b�Hv�+{�������`�!�����vg�:精�j�I��ؘj7�uY���{*0ͯ���DT;���Y�]jj�
w��k9�
�n�h0���:��;�4Ƨ���Xz�c���Q��7Wz�wB�� �:�[���#9������I����,I���'T�DL��'	����!�)ݨ0��̇��:�}����y&�X�7���� ��F��C(��>yӧg����֧i�?u�{����v�ʲRK�Q.[�����ABB�76+C��*�R��	3���s��
�pC!��ڐ��������f)���7JG/�o��ed#�}�L{���%*xֲlr�#'h,{^��.I$`e�iKD2�	d����KȆ��U��j�D��S,FO��T[$���驀d
�]�=O
1�T�0R�Rp�UT�។]�i�ĩ�d�:cyVW����j5$,b����\l'��8-�5�ϼڤ��y�i��og!hl$Hn�Q�n¯��`,(M(9#r\�keD��-�Z�y- ���
abη8k 5����=��}��
������G��C��b���	�s�^����~\9�,��P���4=�ϲ��o��yx�v�/f�u@�C�y�oH+=��T���Qx�.����x�hrV��nu���_��}c�he�p��Ś���s:�������ȓ��������I������D����lV��\;�i���$�j��%={M��+
�n|��` !��n��ڏ-�%M�%�
�B)+W��R�E3�Oe���]�b��Dg�V���Kp�n,���P!�
,���*9V�(al�.�h�����Z�`��
5%
/ #�v�)
0���
u��v�T5��T%�#H�k��e'~s��dw5L�47AJ��Z�Kn���vV+�HbeP�����$)�9������CC|4��{	�&l�O�au�<z6��Q�?r��$#,�[a���=:�v��	� �l�+&f��:�M�|�к'A������z�r�����,l�V[���64_ �fh���7�U�뷳��8�ߤE�L9zs�Ȯ�Dk�0��h�N���k�
��2g������_1��!f�xı�ГY�H	����݋�C�56Y7豣ɔa"K�Y�WW�=�+�찑ʿ&�<kv��W��o=ؗ�!ho����v�y��otu˯�a�*��{��7��pn��k��)���g0Yn�(��\h�(��9=:�ħ�O*q�|0�P���;U�~���~����ʀ�\i��.R�MC\�eK���_KKq�_\l��Ł�������7!f%��}��Y�=�H{1��:��_1�b���1~��$B�ISa^�ʎEz ^�20=+~1,|@�;�SńC?��8D���om����$��7ݜ:��o�B�F����{ѾP����=�����# ��/��>�..096z�=Hy[L4g��c��z���H쵩S�'5�y$140Q�K	���.�����e~�b��/V* ?;��~οKh���]C��7����֩�_V��o���;��D+۸�]�%3�eb�z�±v�]��E93���{�N^ݡI �HC�'�Y7@Zb�Z�=���kK��5�ɾ��nD�r$S���01��������F/�_s(���u5��Lt��L����e���Ѽ��|�"�4�/Us1
����)��(�{j���+
`�B쯃�m��{̢g�Z�E�(Խ���c����Po�9�=�bߓ(=�B���yQ�{�B��P����P�"80	&��+�_`�>����,>_��PG�.A�C��-�� �N��*�q��Q�c�4>
�D��sc}�C �xT�O��9G�R�k]f���ll����L��=�#_�QM��% �����;�-��\��{�W�A��Y�Y�|�u��dɦ��!v�������.�cR7(�FX�ɝX�����:G��/�ˁ��Vw�_j� Rw�+'�W!f��8��g�+�J�@H��q(R������#�=�cS���H��
C��<0.�4������yM������'rC�j%x<i�+�_��&y>�����(�K"����rY���]�u&L���A��E����|&`�[S^s�4��˨&=�)��bg��@g�g�-j���PJ��Ci�Y�)4��pE7���V~����,:e�s$u��c�����l�	|��''�?o-qJI�&�(�˞Dq��^�k䬗P>g �R��y]�9X�Ԭ�A3��ݡc}ʮ�+Z_*n3i�яg���Q,�I���=��ߑd�`Ӵ�?�h 3_�)g׀He�b�Kx,�F���$-$�����`"���V��+�ą1i�HRķ#����HP��op�W\�X�2�}���K�X,��=氕g�MQ�`y�Ƽ9L�#��M��ǧ7�Ԣvc�˸���n��@t}����l���-���`ɱ��A�zl�]0�q����C���^P%I���9�)}-$ǾbLC+�S^\,C|��U�h_/�V��:ͰCF.�'aj,-����3\�^R��B��e:A{��w �)��E9��������&=��I�0���±�D�*ܥ������;R�E�������כ51����w������5?B,�ɇ����=�B<�K�{Y���{��j�v:�.%J9o7����d����a��%�읆�	�/s��0���\Q���X?�)�OO��6�DiPµ��p��,$��G<�5���n�z\R�Qi��\�0��È����i�jb- ��p��=r��￦�O�t�-�Ćn]���J��2������K��O�U�����4"r6^�SA���O�ba�\�������i���M-O�k�)@$�f���o���_�p�d����ӣBK9����w����u�93�;"L<�Y�i�����+�ӱ����L�Ta�Q�VM�\�.��U��>���K��sl;�+F����8e�'�)�9��gEf�pܟ��w����a�0K8
�����c� Tñ$Ҥ��0h���#pޯ���(G�KKR'����x���q�L햲E���r畅>��7�0o+c������*��>�T��vﬀ?�tҙw�Zɿ$������g���H!���7��x3)�2H���7����G7�[���7*�{��`f��^`f~����ć��,�D��ΏwD�kk@���}|7G-��Gm�p����^"��_�( ����Afbb������X�@����_�/�v���1��f:��V��,W���~Y�`�'����ތ�yfƪ�F%��G����8A���:�;�]�� R��o���M0��1m�Ų���/�Y'��bq��3���7F��{ۯ���Q�<x:�VR��Տ+�F>ɟu��I�?F���u�H��a��L41P�vv�tW8+f�mtt�G��i}[zȕ�/a���c��JV�E��\7Xw��?��nv�0�g(]1���+�$9�V�����X�vs_�e�3�C�ϣလp�-P�;4�B���a���~��k�	aӢ�uh�Ы���P����"_(�RRr*��/_81UZ\Tl��Ջ��txm�[tVQ�?���O8�~q��߳�'�b�'��͋xd��W�k�-�����x��@�8U|	��f��D�w]�v�{X\!��
�5�@�
�`���U�J���m��o7w˪���m�5ױ�3Vȸo]���s�qS�p��dՖ>-r~��m���d���WDjje;9��⿴�^��~�/;����ك�E��]��Ӡ�d,9�e&sm
}�3Q�A����W=D���5;�=�W�:F!���̦�A8opjա�3���
�B;��$Xہ�+5)�m�0�9�}��N�Jw0l�c��h(�o ������@��C�GR��E�`�#6LF�1��1�Ⱥ�<ܸ ��@%�C�NK�5�P��)���0�	��S�X���))%����pR?:�e2 ��6���e͹�*ZkIn�ݢJ+���H��k:ᰉ�4ܽ�����'���;��[|�ރ�[ϋC�'d[�թ'�f,d�Z}���O����R\";Y�z�jw�'�q�jtŎ7橆����ˤ��<O��S�O�ϣ�<J��z~��C#J���2��ԕyq�z3�ɏ�Z�ϐ��a�,a�d�ʨ����<l�T�����pY�.o�n2P+�o'����p���򫝀�8ݛ#W��]V�{1����9!��"�G�!j�I����y�Jf$�L:x�Kr|T.ԏ}��$�k25ӕ�Z����N_q�3r,�		��@ߥ��?e*�q��II�t�*��u=�b���4�+�{ծ�\e����t�׿�%X����S����yc緘��6�qZ"5�K�ȂU�Q�~�wॱlHJ��h�#s����(S�\Q��|d����!G��I�fW�{��C�۾q�1ip�e�P�5N��͛��D{���S ��k�������{r�U�b$��G���^n��D=�f#��-=���3;x���F��U�!�qR�$1��ê����G	�_xh���}�%��a�G�&5,h�6O=����]{
j\����b�Y��%��Y��/�� ��&7�~��&%���/��K������ٓ�H��'��
穂2��i_�s)\���͑�l�x�֖4A2�3?�؏bɝm*[}�S%��~��4��7���,|9ar%�0�!�"���ÒH�g��V��j��N���f͗ �n��uy�8�e����H,[H�@���RG>�S[�� >�r�[^>���s�lt�l_
[��]퍘��,�>JF>�*�9�PS&�Y�X���J ���a�Gx`����y5�1��nfBYP�+Mc�A�7~������,ŧ��,���F�}]�C�x$���9�,�p�4�d�f�^XY007���;�F�  c������S�>�|(�-9O�q�fb�`�olR�H�z*sȼ��*n;�*B�q����I��9r�*Mq���kp*������	���)9<rD�,�K�{@=���
��2	o���g�{��0�`���p�и!��q!s}]�W	�Ln��n}�I~0��أ,�:��oE��h�աI�ɳ߇�S��%?�%�Q��g�곈�S������ΕV?�.���6?
r72�Z Ȫfs�4R�gcMULC��e�fg��E�R�*t��DN�*��򜐟�Q��M��,_u_Vmr��5���I������A�d�e��P�[�d����gK.��}X�
�GH+������$��@�h_){F�;mL�T��T^)����'ɗ+v2� lTc�@�+Jێ��J~h�����K[ d�p�Y�p���p=@�Sq��a��P��pU��R�� 	8�4�S��S] ��q��W7��:rT'�Z�������UWA:V�N-���� Vc2�3c�#W��?�;�#�x���/ʳ:�yĥ�A�����]�X�rU0U��LaC�K�f^Nδ�X�M1�&�n�/_����G(:�S*��C0�'��u�*n�D���i�q��2D�zm'�l�yҕ�Wk.<3T�E�w�
��t2B�g�p�Dh��i���׊z�jP�Gq�N?}GG2��:>�@�E��j��u#s��������z.��4��X�_M�����S�Dʰ�#����
���_�\9�e����s�gX�;ɧX��1�U&��BzV�v�J����n)2�/�ԯ y��ܴ�v�tߨj�^o��8~r~��$��od�fc�[����wv�\})��K���\ �Rt�8�����᪎ϣ*��zR���U�?��Ũ#Z�t�Y5Aͪ7�����Px(�\4q��2�c*w�.Q
�{<ʞ�~�&
O�ʫb��+S��P;8�|2b)(MA��Ep7x!>�B,�E�~6�_��[*���#<�B������CE���r�e)��aZh�����"��Q{�.�^	�-ڑ���P�A��:��b��Eq�q�i�>�T�R���^�yR�=GT{�X����̮t%��+�r�<P�L�)�r֐��٥=0���>_\Y�_,q��^�v���,��:�ϫ&.����ި�e���نC'�c�(�8*�,�#����R}����Ik)t2�(�NZO�_<�k|�q�̻��}ؔ�!�A!]��˂<e��

�n}`�2v���!��b�t��F�ѽ��;��.C����V<�|x���s��w�5���M5�%ǅ�[�_���w����se������+k�1X]�
NI��&:#�G�w�?�9�]��m�#�@_J�ϩEg1�K��O1����d&o���}��?G%}y}((A�1�:��+�ުfz4�.wO�sy2 ۧ��9�+$鵪__9�wXǚw��&�m`��P�9���j����g�C+XM��U�T��[���n��j�8L)��/��")�q�˕����E�Ռ�c��+�׃��P>�����Hiؚɗ4�b.�@r�f���! +��ڵ��fZ�@��a�"�m���W����C���H*@����/�S6"�zp����1O����进�h"��л*��:��/X<��N�B��a1�b�d��/��m��<r`���؅��r�H?�{ϋ�@�����0-h������jЕ��B��1�^W���_��9���c�S�=�aȓ.)��R�|��&{�)����^;TL�C�#��ק�q�h�!N�*S6���>�Ü�8�o���t�ܟ�u^�*݌l��+2 �b|�O��?e_�'n`���ؐI�
�(?
������,����<�g�5���~�:��\���������p�NQC�;c|ɝU$[Gk2<����nr��2��}o��T|m�k�MR�&E�0K��m�����1SH�R��1�����W��Rʳ	�C�z�;@bƔ)b�I�-a	�\�\�������_c�%P\Jџ+��������ԧa?���,xl�f�S��H�7�,X�9�l¨��1��Mi�@�PY�̍��.Y�N����Vu�Qԟ�P4&�	���+�ʜG8苇��W����\��P"I���`�Yǿ���,%��lQ��m�L����F�h���.f�
�O�TG ��_�����jAD"��BJh��v%Lw16e�*��;���.���s¦��X	�"o;�������)�eul�ӹ	O�XYj#Y�j���"}�u:[�<VH�z~�Y�U��<����F�,[�e)���.�x�X����iҗ\Ύ6�+q�.�#������vl2ދ�cރY�CF_1mߏ�!���\�>kk�lD.�������L�z�k0l�Jb�Y̜�M����]�&VfH��?L+�i��]7;=�g����������B���a��Zh��_�!��v&�gЦ��`|�r��|ܨ�Y\7S�{��G��; ��Ap�9����u�<49�E�	�#3����/?�������^KT��ЎYb
���/�E�ۈ݃^ G{��n^k/�B������ܼ��b��.D����^���a�z��k��{ˋ�,���p������e(:\[v,6�
޼�y�
�E��MQ���
���m�
��6���F�EZ��j�S[l��@h@C�է�e`�ů�ͤ�e�3H�Kʟ+����P�];l��ⳟ���]�週M',��6��xX���:?c��Xu��V2A���^�/����	h�{60(S�y�N��"��BK(=��t�jW�O��71���@"�k�?!�Χĳ��TP�/	)܂�&�X���K�������em�>�?Ѳ	EY�O�w��=ف9Z�Vfd�����ќMQg^����o��ŀF���^}`��,�&��K{;��l�?�@�\�Зi��B��2��CS���Iq�>�]-n?Q�@�sI�����E�&ݔ��}�޸�2����I�����Χ?mw��ڿ�)��i�g�xUY�}қ��9��M�K��m����4`ژ�F�m��U�M7�t�*tOy���x��E$�g����� <�>�w�rժ�e���΀���1k�5G,�9{H��hwJ��QD�L[����H�Y�`��x1���)/��c��U���vVM�Bʾ�@�H�:G�a�V�=��zH��!�|�1���q���� 3�SҠl����e7��w�3�]l�Z���������n5�M/�>�EOPu��^��+��+>��?�YB�P~-�W�B��؈{BKкTl]�-�V�WC��杨�;���l���[�E�����#�mʭs�m8J����S�ٷK���J�X��L��0��ES�{B����Bt�#Ю #���+mb��&x����� Nw"��2��<%l\�u�<����x�,h)N�5�y��!ߟ�8�AZR`yfYs�?����.�:*E4����O��?���� ;�Ҩ|b^�Ԧ+)'�W�_��?`t���x�	�WPP�{l7�4��K�RV�:�`�}ԥ����ɦ�7���d������(	S�?\�!� ���Nd?D�WA4N��ת�xb�$�l*���PS���'W3��p/�	}!(����<uH���ܩ����%Lְv��X���קR��zd�kk��ʊJ����
��e�`�����"�^\[������E��{���uԐc:F.���	��z.��R����sW��aA�9�䭵ʝ���*����Ԧ�x$�=D[�+���A��P9��Mm)���*��'+��2
����Җ�\�=S���*���VSK�l�5�#~d�Т�C2@��I�yrء��/�ک�(RJ�U�%0�Z=c����́���=�v�2l>�#2�ʡ<�_��<����Ί��(�蕚,{r����j�E�F��0;Qh���m�
��P*��!���&�B�~���:HB�3�9��{�[GC������dO����iL��)��?:������oف�_�z��2�N�����O<��JUR4 }�&ex��p�Y���n�I�� �'�V���5�����w���~���\�	y���I_��O����P�x�` �>EN~�>��Q��r�)�7|��&��ǯ@i�Q�pef�=ϏF�m��jHN���,��hҭ=�%�Jy��Jd��!�p��[�zN�Us*!�>��|u��h`��ϓ[�_�P���a�ա��3�N�'s�[U�i�\��;��K��Ǟ���<�h���?h�	��r�>4���Sp����c�����8nA�V�I�����^f-
��p$�i!��p>��r�����j�'C	�����
c�7x� ��K�?���s�&���\��}���ȡ��"�vOYz��j�=��v��&ü~l�e���et����D��}�2����oq�����ٟKj����f�0xnj��Õ)l�(FL�s�K{l!�ףX�ԅ�!$��u������������b���ZB��71��c�7٧}9��dY]�q����}���53G�x�=�y�X�YK�eŔ�m��y�WɁ��7��U`��#_sQ�������O��@���4n���OZxG�Ǭ,�