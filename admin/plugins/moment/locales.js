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
            nextDay : '[MÃ´re om] LT',
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
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris RÃ¶ling : https://github.com/jjupiter
        },
        week : {
            dow : 1, // Maandag is die eerste dag van die week.
            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ar-dz', {
        months : 'Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±'.split('_'),
        monthsShort : 'Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±'.split('_'),
        weekdays : 'Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª'.split('_'),
        weekdaysShort : 'Ø§Ø­Ø¯_Ø§Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª'.split('_'),
        weekdaysMin : 'Ø£Ø­_Ø¥Ø«_Ø«Ù„Ø§_Ø£Ø±_Ø®Ù…_Ø¬Ù…_Ø³Ø¨'.split('_'),
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
            sameDay: '[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextDay: '[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextWeek: 'dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastDay: '[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastWeek: 'dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'ÙÙŠ %s',
            past : 'Ù…Ù†Ø° %s',
            s : 'Ø«ÙˆØ§Ù†',
            ss : '%d Ø«Ø§Ù†ÙŠØ©',
            m : 'Ø¯Ù‚ÙŠÙ‚Ø©',
            mm : '%d Ø¯Ù‚Ø§Ø¦Ù‚',
            h : 'Ø³Ø§Ø¹Ø©',
            hh : '%d Ø³Ø§Ø¹Ø§Øª',
            d : 'ÙŠÙˆÙ…',
            dd : '%d Ø£ÙŠØ§Ù…',
            M : 'Ø´Ù‡Ø±',
            MM : '%d Ø£Ø´Ù‡Ø±',
            y : 'Ø³Ù†Ø©',
            yy : '%d Ø³Ù†ÙˆØ§Øª'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ar-kw', {
        months : 'ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±'.split('_'),
        monthsShort : 'ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±'.split('_'),
        weekdays : 'Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª'.split('_'),
        weekdaysShort : 'Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª'.split('_'),
        weekdaysMin : 'Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³'.split('_'),
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
            sameDay: '[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextDay: '[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextWeek: 'dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastDay: '[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastWeek: 'dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'ÙÙŠ %s',
            past : 'Ù…Ù†Ø° %s',
            s : 'Ø«ÙˆØ§Ù†',
            ss : '%d Ø«Ø§Ù†ÙŠØ©',
            m : 'Ø¯Ù‚ÙŠÙ‚Ø©',
            mm : '%d Ø¯Ù‚Ø§Ø¦Ù‚',
            h : 'Ø³Ø§Ø¹Ø©',
            hh : '%d Ø³Ø§Ø¹Ø§Øª',
            d : 'ÙŠÙˆÙ…',
            dd : '%d Ø£ÙŠØ§Ù…',
            M : 'Ø´Ù‡Ø±',
            MM : '%d Ø£Ø´Ù‡Ø±',
            y : 'Ø³Ù†Ø©',
            yy : '%d Ø³Ù†ÙˆØ§Øª'
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
        s : ['Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©', 'Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©', ['Ø«Ø§Ù†ÙŠØªØ§Ù†', 'Ø«Ø§Ù†ÙŠØªÙŠÙ†'], '%d Ø«ÙˆØ§Ù†', '%d Ø«Ø§Ù†ÙŠØ©', '%d Ø«Ø§Ù†ÙŠØ©'],
        m : ['Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©', 'Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©', ['Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†', 'Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†'], '%d Ø¯Ù‚Ø§Ø¦Ù‚', '%d Ø¯Ù‚ÙŠÙ‚Ø©', '%d Ø¯Ù‚ÙŠÙ‚Ø©'],
        h : ['Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©', 'Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©', ['Ø³Ø§Ø¹ØªØ§Ù†', 'Ø³Ø§Ø¹ØªÙŠÙ†'], '%d Ø³Ø§Ø¹Ø§Øª', '%d Ø³Ø§Ø¹Ø©', '%d Ø³Ø§Ø¹Ø©'],
        d : ['Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…', 'ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯', ['ÙŠÙˆÙ…Ø§Ù†', 'ÙŠÙˆÙ…ÙŠÙ†'], '%d Ø£ÙŠØ§Ù…', '%d ÙŠÙˆÙ…Ù‹Ø§', '%d ÙŠÙˆÙ…'],
        M : ['Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±', 'Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯', ['Ø´Ù‡Ø±Ø§Ù†', 'Ø´Ù‡Ø±ÙŠÙ†'], '%d Ø£Ø´Ù‡Ø±', '%d Ø´Ù‡Ø±Ø§', '%d Ø´Ù‡Ø±'],
        y : ['Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…', 'Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯', ['Ø¹Ø§Ù…Ø§Ù†', 'Ø¹Ø§Ù…ÙŠÙ†'], '%d Ø£Ø¹ÙˆØ§Ù…', '%d Ø¹Ø§Ù…Ù‹Ø§', '%d Ø¹Ø§Ù…']
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
        'ÙŠÙ†Ø§ÙŠØ±',
        'ÙØ¨Ø±Ø§ÙŠØ±',
        'Ù…Ø§Ø±Ø³',
        'Ø£Ø¨Ø±ÙŠÙ„',
        'Ù…Ø§ÙŠÙˆ',
        'ÙŠÙˆÙ†ÙŠÙˆ',
        'ÙŠÙˆÙ„ÙŠÙˆ',
        'Ø£ØºØ³Ø·Ø³',
        'Ø³Ø¨ØªÙ…Ø¨Ø±',
        'Ø£ÙƒØªÙˆØ¨Ø±',
        'Ù†ÙˆÙÙ…Ø¨Ø±',
        'Ø¯ÙŠØ³Ù…Ø¨Ø±'
    ];

    moment.defineLocale('ar-ly', {
        months : months,
        monthsShort : months,
        weekdays : 'Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª'.split('_'),
        weekdaysShort : 'Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª'.split('_'),
        weekdaysMin : 'Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /Øµ|Ù…/,
        isPM : function (input) {
            return 'Ù…' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'Øµ';
            } else {
                return 'Ù…';
            }
        },
        calendar : {
            sameDay: '[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextDay: '[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextWeek: 'dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastDay: '[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastWeek: 'dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'Ø¨Ø¹Ø¯ %s',
            past : 'Ù…Ù†Ø° %s',
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
            return string.replace(/ØŒ/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, 'ØŒ');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ar-ma', {
        months : 'ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±'.split('_'),
        monthsShort : 'ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±'.split('_'),
        weekdays : 'Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª'.split('_'),
        weekdaysShort : 'Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª'.split('_'),
        weekdaysMin : 'Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³'.split('_'),
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
            sameDay: '[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextDay: '[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextWeek: 'dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastDay: '[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastWeek: 'dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'ÙÙŠ %s',
            past : 'Ù…Ù†Ø° %s',
            s : 'Ø«ÙˆØ§Ù†',
            ss : '%d Ø«Ø§Ù†ÙŠØ©',
            m : 'Ø¯Ù‚ÙŠÙ‚Ø©',
            mm : '%d Ø¯Ù‚Ø§Ø¦Ù‚',
            h : 'Ø³Ø§Ø¹Ø©',
            hh : '%d Ø³Ø§Ø¹Ø§Øª',
            d : 'ÙŠÙˆÙ…',
            dd : '%d Ø£ÙŠØ§Ù…',
            M : 'Ø´Ù‡Ø±',
            MM : '%d Ø£Ø´Ù‡Ø±',
            y : 'Ø³Ù†Ø©',
            yy : '%d Ø³Ù†ÙˆØ§Øª'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$1 = {
        '1': 'Ù¡',
        '2': 'Ù¢',
        '3': 'Ù£',
        '4': 'Ù¤',
        '5': 'Ù¥',
        '6': 'Ù¦',
        '7': 'Ù§',
        '8': 'Ù¨',
        '9': 'Ù©',
        '0': 'Ù '
    }, numberMap = {
        'Ù¡': '1',
        'Ù¢': '2',
        'Ù£': '3',
        'Ù¤': '4',
        'Ù¥': '5',
        'Ù¦': '6',
        'Ù§': '7',
        'Ù¨': '8',
        'Ù©': '9',
        'Ù ': '0'
    };

    moment.defineLocale('ar-sa', {
        months : 'ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±'.split('_'),
        monthsShort : 'ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±'.split('_'),
        weekdays : 'Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª'.split('_'),
        weekdaysShort : 'Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª'.split('_'),
        weekdaysMin : 'Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /Øµ|Ù…/,
        isPM : function (input) {
            return 'Ù…' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'Øµ';
            } else {
                return 'Ù…';
            }
        },
        calendar : {
            sameDay: '[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextDay: '[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextWeek: 'dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastDay: '[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastWeek: 'dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'ÙÙŠ %s',
            past : 'Ù…Ù†Ø° %s',
            s : 'Ø«ÙˆØ§Ù†',
            ss : '%d Ø«Ø§Ù†ÙŠØ©',
            m : 'Ø¯Ù‚ÙŠÙ‚Ø©',
            mm : '%d Ø¯Ù‚Ø§Ø¦Ù‚',
            h : 'Ø³Ø§Ø¹Ø©',
            hh : '%d Ø³Ø§Ø¹Ø§Øª',
            d : 'ÙŠÙˆÙ…',
            dd : '%d Ø£ÙŠØ§Ù…',
            M : 'Ø´Ù‡Ø±',
            MM : '%d Ø£Ø´Ù‡Ø±',
            y : 'Ø³Ù†Ø©',
            yy : '%d Ø³Ù†ÙˆØ§Øª'
        },
        preparse: function (string) {
            return string.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function (match) {
                return numberMap[match];
            }).replace(/ØŒ/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$1[match];
            }).replace(/,/g, 'ØŒ');
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ar-tn', {
        months: 'Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±'.split('_'),
        monthsShort: 'Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±'.split('_'),
        weekdays: 'Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª'.split('_'),
        weekdaysShort: 'Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª'.split('_'),
        weekdaysMin: 'Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³'.split('_'),
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
            sameDay: '[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextDay: '[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextWeek: 'dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastDay: '[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastWeek: 'dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'ÙÙŠ %s',
            past: 'Ù…Ù†Ø° %s',
            s: 'Ø«ÙˆØ§Ù†',
            ss : '%d Ø«Ø§Ù†ÙŠØ©',
            m: 'Ø¯Ù‚ÙŠÙ‚Ø©',
            mm: '%d Ø¯Ù‚Ø§Ø¦Ù‚',
            h: 'Ø³Ø§Ø¹Ø©',
            hh: '%d Ø³Ø§Ø¹Ø§Øª',
            d: 'ÙŠÙˆÙ…',
            dd: '%d Ø£ÙŠØ§Ù…',
            M: 'Ø´Ù‡Ø±',
            MM: '%d Ø£Ø´Ù‡Ø±',
            y: 'Ø³Ù†Ø©',
            yy: '%d Ø³Ù†ÙˆØ§Øª'
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$2 = {
        '1': 'Ù¡',
        '2': 'Ù¢',
        '3': 'Ù£',
        '4': 'Ù¤',
        '5': 'Ù¥',
        '6': 'Ù¦',
        '7': 'Ù§',
        '8': 'Ù¨',
        '9': 'Ù©',
        '0': 'Ù '
    }, numberMap$1 = {
        'Ù¡': '1',
        'Ù¢': '2',
        'Ù£': '3',
        'Ù¤': '4',
        'Ù¥': '5',
        'Ù¦': '6',
        'Ù§': '7',
        'Ù¨': '8',
        'Ù©': '9',
        'Ù ': '0'
    }, pluralForm$1 = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals$1 = {
        s : ['Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©', 'Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©', ['Ø«Ø§Ù†ÙŠØªØ§Ù†', 'Ø«Ø§Ù†ÙŠØªÙŠÙ†'], '%d Ø«ÙˆØ§Ù†', '%d Ø«Ø§Ù†ÙŠØ©', '%d Ø«Ø§Ù†ÙŠØ©'],
        m : ['Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©', 'Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©', ['Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†', 'Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†'], '%d Ø¯Ù‚Ø§Ø¦Ù‚', '%d Ø¯Ù‚ÙŠÙ‚Ø©', '%d Ø¯Ù‚ÙŠÙ‚Ø©'],
        h : ['Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©', 'Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©', ['Ø³Ø§Ø¹ØªØ§Ù†', 'Ø³Ø§Ø¹ØªÙŠÙ†'], '%d Ø³Ø§Ø¹Ø§Øª', '%d Ø³Ø§Ø¹Ø©', '%d Ø³Ø§Ø¹Ø©'],
        d : ['Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…', 'ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯', ['ÙŠÙˆÙ…Ø§Ù†', 'ÙŠÙˆÙ…ÙŠÙ†'], '%d Ø£ÙŠØ§Ù…', '%d ÙŠÙˆÙ…Ù‹Ø§', '%d ÙŠÙˆÙ…'],
        M : ['Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±', 'Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯', ['Ø´Ù‡Ø±Ø§Ù†', 'Ø´Ù‡Ø±ÙŠÙ†'], '%d Ø£Ø´Ù‡Ø±', '%d Ø´Ù‡Ø±Ø§', '%d Ø´Ù‡Ø±'],
        y : ['Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…', 'Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯', ['Ø¹Ø§Ù…Ø§Ù†', 'Ø¹Ø§Ù…ÙŠÙ†'], '%d Ø£Ø¹ÙˆØ§Ù…', '%d Ø¹Ø§Ù…Ù‹Ø§', '%d Ø¹Ø§Ù…']
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
        'ÙŠÙ†Ø§ÙŠØ±',
        'ÙØ¨Ø±Ø§ÙŠØ±',
        'Ù…Ø§Ø±Ø³',
        'Ø£Ø¨Ø±ÙŠÙ„',
        'Ù…Ø§ÙŠÙˆ',
        'ÙŠÙˆÙ†ÙŠÙˆ',
        'ÙŠÙˆÙ„ÙŠÙˆ',
        'Ø£ØºØ³Ø·Ø³',
        'Ø³Ø¨ØªÙ…Ø¨Ø±',
        'Ø£ÙƒØªÙˆØ¨Ø±',
        'Ù†ÙˆÙÙ…Ø¨Ø±',
        'Ø¯ÙŠØ³Ù…Ø¨Ø±'
    ];

    moment.defineLocale('ar', {
        months : months$1,
        monthsShort : months$1,
        weekdays : 'Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª'.split('_'),
        weekdaysShort : 'Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª'.split('_'),
        weekdaysMin : 'Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /Øµ|Ù…/,
        isPM : function (input) {
            return 'Ù…' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'Øµ';
            } else {
                return 'Ù…';
            }
        },
        calendar : {
            sameDay: '[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextDay: '[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            nextWeek: 'dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastDay: '[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            lastWeek: 'dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'Ø¨Ø¹Ø¯ %s',
            past : 'Ù…Ù†Ø° %s',
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
            return string.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function (match) {
                return numberMap$1[match];
            }).replace(/ØŒ/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$2[match];
            }).replace(/,/g, 'ØŒ');
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
        3: '-Ã¼ncÃ¼',
        4: '-Ã¼ncÃ¼',
        100: '-Ã¼ncÃ¼',
        6: '-ncÄ±',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-Ä±ncÄ±',
        90: '-Ä±ncÄ±'
    };

    moment.defineLocale('az', {
        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays : 'Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™'.split('_'),
        weekdaysShort : 'Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n'.split('_'),
        weekdaysMin : 'Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™'.split('_'),
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
            sameDay : '[bugÃ¼n saat] LT',
            nextDay : '[sabah saat] LT',
            nextWeek : '[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT',
            lastDay : '[dÃ¼nÉ™n] LT',
            lastWeek : '[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s É™vvÉ™l',
            s : 'birneÃ§É™ saniyÉ™',
            ss : '%d saniyÉ™',
            m : 'bir dÉ™qiqÉ™',
            mm : '%d dÉ™qiqÉ™',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gÃ¼n',
            dd : '%d gÃ¼n',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir il',
            yy : '%d il'
        },
        meridiemParse: /gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,
        isPM : function (input) {
            return /^(gÃ¼ndÃ¼z|axÅŸam)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'gecÉ™';
            } else if (hour < 12) {
                return 'sÉ™hÉ™r';
            } else if (hour < 17) {
                return 'gÃ¼ndÃ¼z';
            } else {
                return 'axÅŸam';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '-Ä±ncÄ±';
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
            'ss': withoutSuffix ? 'ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´' : 'ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´',
            'mm': withoutSuffix ? 'Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½' : 'Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½',
            'hh': withoutSuffix ? 'Ð³Ð°Ð´Ð·Ñ–Ð½Ð°_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½' : 'Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½',
            'dd': 'Ð´Ð·ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð·Ñ‘Ð½',
            'MM': 'Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ñ‹_Ð¼ÐµÑÑÑ†Ð°Ñž',
            'yy': 'Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ‹_Ð³Ð°Ð´Ð¾Ñž'
        };
        if (key === 'm') {
            return withoutSuffix ? 'Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°' : 'Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'Ð³Ð°Ð´Ð·Ñ–Ð½Ð°' : 'Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }

    moment.defineLocale('be', {
        months : {
            format: 'ÑÑ‚ÑƒÐ´Ð·ÐµÐ½Ñ_Ð»ÑŽÑ‚Ð°Ð³Ð°_ÑÐ°ÐºÐ°Ð²Ñ–ÐºÐ°_ÐºÑ€Ð°ÑÐ°Ð²Ñ–ÐºÐ°_Ñ‚Ñ€Ð°ÑžÐ½Ñ_Ñ‡ÑÑ€Ð²ÐµÐ½Ñ_Ð»Ñ–Ð¿ÐµÐ½Ñ_Ð¶Ð½Ñ–ÑžÐ½Ñ_Ð²ÐµÑ€Ð°ÑÐ½Ñ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–ÐºÐ°_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ'.split('_'),
            standalone: 'ÑÑ‚ÑƒÐ´Ð·ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ñ‹_ÑÐ°ÐºÐ°Ð²Ñ–Ðº_ÐºÑ€Ð°ÑÐ°Ð²Ñ–Ðº_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÑÑ€Ð²ÐµÐ½ÑŒ_Ð»Ñ–Ð¿ÐµÐ½ÑŒ_Ð¶Ð½Ñ–Ð²ÐµÐ½ÑŒ_Ð²ÐµÑ€Ð°ÑÐµÐ½ÑŒ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–Ðº_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½ÑŒ'.split('_')
        },
        monthsShort : 'ÑÑ‚ÑƒÐ´_Ð»ÑŽÑ‚_ÑÐ°Ðº_ÐºÑ€Ð°Ñ_Ñ‚Ñ€Ð°Ð²_Ñ‡ÑÑ€Ð²_Ð»Ñ–Ð¿_Ð¶Ð½Ñ–Ð²_Ð²ÐµÑ€_ÐºÐ°ÑÑ‚_Ð»Ñ–ÑÑ‚_ÑÐ½ÐµÐ¶'.split('_'),
        weekdays : {
            format: 'Ð½ÑÐ´Ð·ÐµÐ»ÑŽ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ñƒ_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ñƒ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ'.split('_'),
            standalone: 'Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ð°_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ð°_ÑÑƒÐ±Ð¾Ñ‚Ð°'.split('_'),
            isFormat: /\[ ?[Ð£ÑƒÑž] ?(?:Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½ÑƒÑŽ)? ?\] ?dddd/
        },
        weekdaysShort : 'Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±'.split('_'),
        weekdaysMin : 'Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY Ð³.',
            LLL : 'D MMMM YYYY Ð³., HH:mm',
            LLLL : 'dddd, D MMMM YYYY Ð³., HH:mm'
        },
        calendar : {
            sameDay: '[Ð¡Ñ‘Ð½Ð½Ñ Ñž] LT',
            nextDay: '[Ð—Ð°ÑžÑ‚Ñ€Ð° Ñž] LT',
            lastDay: '[Ð£Ñ‡Ð¾Ñ€Ð° Ñž] LT',
            nextWeek: function () {
                return '[Ð£] dddd [Ñž] LT';
            },
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return '[Ð£ Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ] dddd [Ñž] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[Ð£ Ð¼Ñ–Ð½ÑƒÐ»Ñ‹] dddd [Ñž] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'Ð¿Ñ€Ð°Ð· %s',
            past : '%s Ñ‚Ð°Ð¼Ñƒ',
            s : 'Ð½ÐµÐºÐ°Ð»ÑŒÐºÑ– ÑÐµÐºÑƒÐ½Ð´',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithPlural,
            hh : relativeTimeWithPlural,
            d : 'Ð´Ð·ÐµÐ½ÑŒ',
            dd : relativeTimeWithPlural,
            M : 'Ð¼ÐµÑÑÑ†',
            MM : relativeTimeWithPlural,
            y : 'Ð³Ð¾Ð´',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /Ð½Ð¾Ñ‡Ñ‹|Ñ€Ð°Ð½Ñ–Ñ†Ñ‹|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°/,
        isPM : function (input) {
            return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'Ð½Ð¾Ñ‡Ñ‹';
            } else if (hour < 12) {
                return 'Ñ€Ð°Ð½Ñ–Ñ†Ñ‹';
            } else if (hour < 17) {
                return 'Ð´Ð½Ñ';
            } else {
                return 'Ð²ÐµÑ‡Ð°Ñ€Ð°';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(Ñ–|Ñ‹|Ð³Ð°)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-Ñ–' : number + '-Ñ‹';
                case 'D':
                    return number + '-Ð³Ð°';
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
        months : 'ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸'.split('_'),
        monthsShort : 'ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº'.split('_'),
        weekdays : 'Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°'.split('_'),
        weekdaysShort : 'Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±'.split('_'),
        weekdaysMin : 'Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Ð”Ð½ÐµÑ Ð²] LT',
            nextDay : '[Ð£Ñ‚Ñ€Ðµ Ð²] LT',
            nextWeek : 'dddd [Ð²] LT',
            lastDay : '[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ÑÐ»ÐµÐ´ %s',
            past : 'Ð¿Ñ€ÐµÐ´Ð¸ %s',
            s : 'Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸',
            ss : '%d ÑÐµÐºÑƒÐ½Ð´Ð¸',
            m : 'Ð¼Ð¸Ð½ÑƒÑ‚Ð°',
            mm : '%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸',
            h : 'Ñ‡Ð°Ñ',
            hh : '%d Ñ‡Ð°ÑÐ°',
            d : 'Ð´ÐµÐ½',
            dd : '%d Ð´Ð½Ð¸',
            M : 'Ð¼ÐµÑÐµÑ†',
            MM : '%d Ð¼ÐµÑÐµÑ†Ð°',
            y : 'Ð³Ð¾Ð´Ð¸Ð½Ð°',
            yy : '%d Ð³Ð¾Ð´Ð¸Ð½Ð¸'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-ÐµÐ²';
            } else if (last2Digits === 0) {
                return number + '-ÐµÐ½';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-Ñ‚Ð¸';
            } else if (lastDigit === 1) {
                return number + '-Ð²Ð¸';
            } else if (lastDigit === 2) {
                return number + '-Ñ€Ð¸';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-Ð¼Ð¸';
            } else {
                return number + '-Ñ‚Ð¸';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('bm', {
        months : 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_MÉ›kalo_ZuwÉ›nkalo_Zuluyekalo_Utikalo_SÉ›tanburukalo_É”kutÉ”burukalo_Nowanburukalo_Desanburukalo'.split('_'),
        monthsShort : 'Zan_Few_Mar_Awi_MÉ›_Zuw_Zul_Uti_SÉ›t_É”ku_Now_Des'.split('_'),
        weekdays : 'Kari_NtÉ›nÉ›n_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
        weekdaysShort : 'Kar_NtÉ›_Tar_Ara_Ala_Jum_Sib'.split('_'),
        weekdaysMin : 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'MMMM [tile] D [san] YYYY',
            LLL : 'MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm',
            LLLL : 'dddd MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm'
        },
        calendar : {
            sameDay : '[Bi lÉ›rÉ›] LT',
            nextDay : '[Sini lÉ›rÉ›] LT',
            nextWeek : 'dddd [don lÉ›rÉ›] LT',
            lastDay : '[Kunu lÉ›rÉ›] LT',
            lastWeek : 'dddd [tÉ›mÉ›nen lÉ›rÉ›] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s kÉ”nÉ”',
            past : 'a bÉ› %s bÉ”',
            s : 'sanga dama dama',
            ss : 'sekondi %d',
            m : 'miniti kelen',
            mm : 'miniti %d',
            h : 'lÉ›rÉ› kelen',
            hh : 'lÉ›rÉ› %d',
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
        '1': 'à§§',
        '2': 'à§¨',
        '3': 'à§©',
        '4': 'à§ª',
        '5': 'à§«',
        '6': 'à§¬',
        '7': 'à§­',
        '8': 'à§®',
        '9': 'à§¯',
        '0': 'à§¦'
    },
    numberMap$2 = {
        'à§§': '1',
        'à§¨': '2',
        'à§©': '3',
        'à§ª': '4',
        'à§«': '5',
        'à§¬': '6',
        'à§­': '7',
        'à§®': '8',
        'à§¯': '9',
        'à§¦': '0'
    };

    moment.defineLocale('bn', {
        months : 'à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à§€_à¦«à§‡à¦¬à§à¦°à§à§Ÿà¦¾à¦°à¦¿_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°'.split('_'),
        monthsShort : 'à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²_à¦†à¦—_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­à§‡_à¦¡à¦¿à¦¸à§‡'.split('_'),
        weekdays : 'à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°'.split('_'),
        weekdaysShort : 'à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿'.split('_'),
        weekdaysMin : 'à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦ƒ_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿'.split('_'),
        longDateFormat : {
            LT : 'A h:mm à¦¸à¦®à§Ÿ',
            LTS : 'A h:mm:ss à¦¸à¦®à§Ÿ',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ',
            LLLL : 'dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ'
        },
        calendar : {
            sameDay : '[à¦†à¦œ] LT',
            nextDay : '[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à¦—à¦¤à¦•à¦¾à¦²] LT',
            lastWeek : '[à¦—à¦¤] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à¦ªà¦°à§‡',
            past : '%s à¦†à¦—à§‡',
            s : 'à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡',
            ss : '%d à¦¸à§‡à¦•à§‡à¦¨à§à¦¡',
            m : 'à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ',
            mm : '%d à¦®à¦¿à¦¨à¦¿à¦Ÿ',
            h : 'à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾',
            hh : '%d à¦˜à¦¨à§à¦Ÿà¦¾',
            d : 'à¦à¦• à¦¦à¦¿à¦¨',
            dd : '%d à¦¦à¦¿à¦¨',
            M : 'à¦à¦• à¦®à¦¾à¦¸',
            MM : '%d à¦®à¦¾à¦¸',
            y : 'à¦à¦• à¦¬à¦›à¦°',
            yy : '%d à¦¬à¦›à¦°'
        },
        preparse: function (string) {
            return string.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, function (match) {
                return numberMap$2[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$3[match];
            });
        },
        meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'à¦°à¦¾à¦¤' && hour >= 4) ||
                    (meridiem === 'à¦¦à§à¦ªà§à¦°' && hour < 5) ||
                    meridiem === 'à¦¬à¦¿à¦•à¦¾à¦²') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à¦°à¦¾à¦¤';
            } else if (hour < 10) {
                return 'à¦¸à¦•à¦¾à¦²';
            } else if (hour < 17) {
                return 'à¦¦à§à¦ªà§à¦°';
            } else if (hour < 20) {
                return 'à¦¬à¦¿à¦•à¦¾à¦²';
            } else {
                return 'à¦°à¦¾à¦¤';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$4 = {
        '1': 'à¼¡',
        '2': 'à¼¢',
        '3': 'à¼£',
        '4': 'à¼¤',
        '5': 'à¼¥',
        '6': 'à¼¦',
        '7': 'à¼§',
        '8': 'à¼¨',
        '9': 'à¼©',
        '0': 'à¼ '
    },
    numberMap$3 = {
        'à¼¡': '1',
        'à¼¢': '2',
        'à¼£': '3',
        'à¼¤': '4',
        'à¼¥': '5',
        'à¼¦': '6',
        'à¼§': '7',
        'à¼¨': '8',
        'à¼©': '9',
        'à¼ ': '0'
    };

    moment.defineLocale('bo', {
        months : 'à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”'.split('_'),
        monthsShort : 'à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”'.split('_'),
        weekdays : 'à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹'.split('_'),
        weekdaysShort : 'à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹'.split('_'),
        weekdaysMin : 'à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[à½‘à½²à¼‹à½¢à½²à½„] LT',
            nextDay : '[à½¦à½„à¼‹à½‰à½²à½“] LT',
            nextWeek : '[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT',
            lastDay : '[à½à¼‹à½¦à½„] LT',
            lastWeek : '[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à½£à¼‹',
            past : '%s à½¦à¾”à½“à¼‹à½£',
            s : 'à½£à½˜à¼‹à½¦à½„',
            ss : '%d à½¦à¾à½¢à¼‹à½†à¼',
            m : 'à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚',
            mm : '%d à½¦à¾à½¢à¼‹à½˜',
            h : 'à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚',
            hh : '%d à½†à½´à¼‹à½šà½¼à½‘',
            d : 'à½‰à½²à½“à¼‹à½‚à½…à½²à½‚',
            dd : '%d à½‰à½²à½“à¼‹',
            M : 'à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚',
            MM : '%d à½Ÿà¾³à¼‹à½–',
            y : 'à½£à½¼à¼‹à½‚à½…à½²à½‚',
            yy : '%d à½£à½¼'
        },
        preparse: function (string) {
            return string.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g, function (match) {
                return numberMap$3[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$4[match];
            });
        },
        meridiemParse: /à½˜à½šà½“à¼‹à½˜à½¼|à½žà½¼à½‚à½¦à¼‹à½€à½¦|à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'à½˜à½šà½“à¼‹à½˜à½¼' && hour >= 4) ||
                    (meridiem === 'à½‰à½²à½“à¼‹à½‚à½´à½„' && hour < 5) ||
                    meridiem === 'à½‘à½‚à½¼à½„à¼‹à½‘à½‚') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à½˜à½šà½“à¼‹à½˜à½¼';
            } else if (hour < 10) {
                return 'à½žà½¼à½‚à½¦à¼‹à½€à½¦';
            } else if (hour < 17) {
                return 'à½‰à½²à½“à¼‹à½‚à½´à½„';
            } else if (hour < 20) {
                return 'à½‘à½‚à½¼à½„à¼‹à½‘à½‚';
            } else {
                return 'à½˜à½šà½“à¼‹à½˜à½¼';
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
            s : 'un nebeud segondennoÃ¹',
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
        dayOfMonthOrdinalParse: /\d{1,2}(aÃ±|vet)/,
        ordinal : function (number) {
            var output = (number === 1) ? 'aÃ±' : 'vet';
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
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._Äet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_Äe_pe_su'.split('_'),
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
            lastDay  : '[juÄer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return '[proÅ¡lu] dddd [u] LT';
                    case 6:
                        return '[proÅ¡le] [subote] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[proÅ¡li] dddd [u] LT';
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
            standalone: 'gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
            format: 'de gener_de febrer_de marÃ§_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
            isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort : 'gen._febr._marÃ§_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
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
                return '[demÃ  a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
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
            future : 'd\'aquÃ­ %s',
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
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
        ordinal : function (number, period) {
            var output = (number === 1) ? 'r' :
                (number === 2) ? 'n' :
                (number === 3) ? 'r' :
                (number === 4) ? 't' : 'Ã¨';
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

    var months$2 = 'leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec'.split('_'),
        monthsShort = 'led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro'.split('_');

    var monthsParse = [/^led/i, /^Ãºno/i, /^bÅ™e/i, /^dub/i, /^kvÄ›/i, /^(Ävn|Äerven$|Äervna)/i, /^(Ävc|Äervenec|Äervence)/i, /^srp/i, /^zÃ¡Å™/i, /^Å™Ã­j/i, /^lis/i, /^pro/i];
    // NOTE: 'Äerven' is substring of 'Äervenec'; therefore 'Äervenec' must precede 'Äerven' in the regex to be fully matched.
    // Otherwise parser matches '1. Äervenec' as '1. Äerven' + 'ec'.
    var monthsRegex = /^(leden|Ãºnor|bÅ™ezen|duben|kvÄ›ten|Äervenec|Äervence|Äerven|Äervna|srpen|zÃ¡Å™Ã­|Å™Ã­jen|listopad|prosinec|led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i;

    function plural$1(n) {
        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
    }
    function translate$1(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':  // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pÃ¡r sekund' : 'pÃ¡r sekundami';
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
                    return result + (plural$1(number) ? 'dny' : 'dnÃ­');
                } else {
                    return result + 'dny';
                }
                break;
            case 'M':  // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'mÄ›sÃ­c' : 'mÄ›sÃ­cem';
            case 'MM': // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$1(number) ? 'mÄ›sÃ­ce' : 'mÄ›sÃ­cÅ¯');
                } else {
                    return result + 'mÄ›sÃ­ci';
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
        // NOTE: 'Äerven' is substring of 'Äervenec'; therefore 'Äervenec' must precede 'Äerven' in the regex to be fully matched.
        // Otherwise parser matches '1. Äervenec' as '1. Äerven' + 'ec'.
        monthsStrictRegex : /^(leden|ledna|Ãºnora|Ãºnor|bÅ™ezen|bÅ™ezna|duben|dubna|kvÄ›ten|kvÄ›tna|Äervenec|Äervence|Äerven|Äervna|srpen|srpna|zÃ¡Å™Ã­|Å™Ã­jen|Å™Ã­jna|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex : /^(led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i,
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,
        weekdays : 'nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota'.split('_'),
        weekdaysShort : 'ne_po_Ãºt_st_Ät_pÃ¡_so'.split('_'),
        weekdaysMin : 'ne_po_Ãºt_st_Ät_pÃ¡_so'.split('_'),
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
            nextDay: '[zÃ­tra v] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v nedÄ›li v] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [v] LT';
                    case 3:
                        return '[ve stÅ™edu v] LT';
                    case 4:
                        return '[ve Ätvrtek v] LT';
                    case 5:
                        return '[v pÃ¡tek v] LT';
                    case 6:
                        return '[v sobotu v] LT';
                }
            },
            lastDay: '[vÄera v] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[minulou nedÄ›li v] LT';
                    case 1:
                    case 2:
                        return '[minulÃ©] dddd [v] LT';
                    case 3:
                        return '[minulou stÅ™edu v] LT';
                    case 4:
                    case 5:
                        return '[minulÃ½] dddd [v] LT';
                    case 6:
                        return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'pÅ™ed %s',
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
        months : 'ÐºÓ‘Ñ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€Ó‘Ñ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€Ð»Ð°_Ð°Ð²Ó‘Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²'.split('_'),
        monthsShort : 'ÐºÓ‘Ñ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€_Ð°Ð²Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ'.split('_'),
        weekdays : 'Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÓ—Ò«Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÓ‘Ð¼Ð°Ñ‚ÐºÑƒÐ½'.split('_'),
        weekdaysShort : 'Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÓ—Ò«_ÑÑ€Ð½_ÑˆÓ‘Ð¼'.split('_'),
        weekdaysMin : 'Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÒ«_ÑÑ€_ÑˆÐ¼'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—]',
            LLL : 'YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm',
            LLLL : 'dddd, YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm'
        },
        calendar : {
            sameDay: '[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]',
            nextDay: '[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]',
            lastDay: '[Ó–Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]',
            nextWeek: '[ÒªÐ¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]',
            lastWeek: '[Ð˜Ñ€Ñ‚Ð½Ó—] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]',
            sameElse: 'L'
        },
        relativeTime : {
            future : function (output) {
                var affix = /ÑÐµÑ…ÐµÑ‚$/i.exec(output) ? 'Ñ€ÐµÐ½' : /Ò«ÑƒÐ»$/i.exec(output) ? 'Ñ‚Ð°Ð½' : 'Ñ€Ð°Ð½';
                return output + affix;
            },
            past : '%s ÐºÐ°ÑÐ»Ð»Ð°',
            s : 'Ð¿Ó—Ñ€-Ð¸Ðº Ò«ÐµÐºÐºÑƒÐ½Ñ‚',
            ss : '%d Ò«ÐµÐºÐºÑƒÐ½Ñ‚',
            m : 'Ð¿Ó—Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚',
            mm : '%d Ð¼Ð¸Ð½ÑƒÑ‚',
            h : 'Ð¿Ó—Ñ€ ÑÐµÑ…ÐµÑ‚',
            hh : '%d ÑÐµÑ…ÐµÑ‚',
            d : 'Ð¿Ó—Ñ€ ÐºÑƒÐ½',
            dd : '%d ÐºÑƒÐ½',
            M : 'Ð¿Ó—Ñ€ ÑƒÐ¹Ó‘Ñ…',
            MM : '%d ÑƒÐ¹Ó‘Ñ…',
            y : 'Ð¿Ó—Ñ€ Ò«ÑƒÐ»',
            yy : '%d Ò«ÑƒÐ»'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-Ð¼Ó—Ñˆ/,
        ordinal : '%d-Ð¼Ó—Ñˆ',
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
            past: '%s yn Ã´l',
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
        weekdays : 'sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag'.split('_'),
        weekdaysShort : 'sÃ¸n_man_tir_ons_tor_fre_lÃ¸r'.split('_'),
        weekdaysMin : 'sÃ¸_ma_ti_on_to_fr_lÃ¸'.split('_'),
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
            nextWeek : 'pÃ¥ dddd [kl.] LT',
            lastDay : '[i gÃ¥r kl.] LT',
            lastWeek : '[i] dddd[s kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'fÃ¥ sekunder',
            ss : '%d sekunder',
            m : 'et minut',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dage',
            M : 'en mÃ¥ned',
            MM : '%d mÃ¥neder',
            y : 'et Ã¥r',
            yy : '%d Ã¥r'
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
        months : 'JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'JÃ¤n._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
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
        months : 'Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
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
        months : 'Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
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
        'Þ–Þ¬Þ‚ÞªÞ‡Þ¦ÞƒÞ©',
        'ÞŠÞ¬Þ„Þ°ÞƒÞªÞ‡Þ¦ÞƒÞ©',
        'Þ‰Þ§ÞƒÞ¨Þ—Þª',
        'Þ‡Þ­Þ•Þ°ÞƒÞ©ÞÞª',
        'Þ‰Þ­',
        'Þ–Þ«Þ‚Þ°',
        'Þ–ÞªÞÞ¦Þ‡Þ¨',
        'Þ‡Þ¯ÞŽÞ¦ÞÞ°Þ“Þª',
        'ÞÞ¬Þ•Þ°Þ“Þ¬Þ‰Þ°Þ„Þ¦ÞƒÞª',
        'Þ‡Þ®Þ†Þ°Þ“Þ¯Þ„Þ¦ÞƒÞª',
        'Þ‚Þ®ÞˆÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª',
        'Þ‘Þ¨ÞÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª'
    ], weekdays = [
        'Þ‡Þ§Þ‹Þ¨Þ‡Þ°ÞŒÞ¦',
        'Þ€Þ¯Þ‰Þ¦',
        'Þ‡Þ¦Þ‚Þ°ÞŽÞ§ÞƒÞ¦',
        'Þ„ÞªÞ‹Þ¦',
        'Þ„ÞªÞƒÞ§ÞÞ°ÞŠÞ¦ÞŒÞ¨',
        'Þ€ÞªÞ†ÞªÞƒÞª',
        'Þ€Þ®Þ‚Þ¨Þ€Þ¨ÞƒÞª'
    ];

    moment.defineLocale('dv', {
        months : months$3,
        monthsShort : months$3,
        weekdays : weekdays,
        weekdaysShort : weekdays,
        weekdaysMin : 'Þ‡Þ§Þ‹Þ¨_Þ€Þ¯Þ‰Þ¦_Þ‡Þ¦Þ‚Þ°_Þ„ÞªÞ‹Þ¦_Þ„ÞªÞƒÞ§_Þ€ÞªÞ†Þª_Þ€Þ®Þ‚Þ¨'.split('_'),
        longDateFormat : {

            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/M/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /Þ‰Þ†|Þ‰ÞŠ/,
        isPM : function (input) {
            return 'Þ‰ÞŠ' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'Þ‰Þ†';
            } else {
                return 'Þ‰ÞŠ';
            }
        },
        calendar : {
            sameDay : '[Þ‰Þ¨Þ‡Þ¦Þ‹Þª] LT',
            nextDay : '[Þ‰Þ§Þ‹Þ¦Þ‰Þ§] LT',
            nextWeek : 'dddd LT',
            lastDay : '[Þ‡Þ¨Þ‡Þ°Þ”Þ¬] LT',
            lastWeek : '[ÞŠÞ§Þ‡Þ¨ÞŒÞªÞˆÞ¨] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ÞŒÞ¬ÞƒÞ­ÞŽÞ¦Þ‡Þ¨ %s',
            past : 'Þ†ÞªÞƒÞ¨Þ‚Þ° %s',
            s : 'ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞªÞ†Þ®Þ…Þ¬Þ‡Þ°',
            ss : 'd% ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞª',
            m : 'Þ‰Þ¨Þ‚Þ¨Þ“Þ¬Þ‡Þ°',
            mm : 'Þ‰Þ¨Þ‚Þ¨Þ“Þª %d',
            h : 'ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞ¬Þ‡Þ°',
            hh : 'ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞª %d',
            d : 'Þ‹ÞªÞˆÞ¦Þ€Þ¬Þ‡Þ°',
            dd : 'Þ‹ÞªÞˆÞ¦ÞÞ° %d',
            M : 'Þ‰Þ¦Þ€Þ¬Þ‡Þ°',
            MM : 'Þ‰Þ¦ÞÞ° %d',
            y : 'Þ‡Þ¦Þ€Þ¦ÞƒÞ¬Þ‡Þ°',
            yy : 'Þ‡Þ¦Þ€Þ¦ÞƒÞª %d'
        },
        preparse: function (string) {
            return string.replace(/ØŒ/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, 'ØŒ');
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
        monthsNominativeEl : 'Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚'.split('_'),
        monthsGenitiveEl : 'Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…'.split('_'),
        months : function (momentToFormat, format) {
            if (!momentToFormat) {
                return this._monthsNominativeEl;
            } else if (typeof format === 'string' && /D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
                return this._monthsGenitiveEl[momentToFormat.month()];
            } else {
                return this._monthsNominativeEl[momentToFormat.month()];
            }
        },
        monthsShort : 'Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº'.split('_'),
        weekdays : 'ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿'.split('_'),
        weekdaysShort : 'ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²'.split('_'),
        weekdaysMin : 'ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±'.split('_'),
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'Î¼Î¼' : 'ÎœÎœ';
            } else {
                return isLower ? 'Ï€Î¼' : 'Î Îœ';
            }
        },
        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === 'Î¼');
        },
        meridiemParse : /[Î Îœ]\.?Îœ?\.?/i,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl : {
            sameDay : '[Î£Î®Î¼ÎµÏÎ± {}] LT',
            nextDay : '[Î‘ÏÏÎ¹Î¿ {}] LT',
            nextWeek : 'dddd [{}] LT',
            lastDay : '[Î§Î¸ÎµÏ‚ {}] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 6:
                        return '[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT';
                    default:
                        return '[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT';
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
            return output.replace('{}', (hours % 12 === 1 ? 'ÏƒÏ„Î·' : 'ÏƒÏ„Î¹Ï‚'));
        },
        relativeTime : {
            future : 'ÏƒÎµ %s',
            past : '%s Ï€ÏÎ¹Î½',
            s : 'Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±',
            ss : '%d Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±',
            m : 'Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ',
            mm : '%d Î»ÎµÏ€Ï„Î¬',
            h : 'Î¼Î¯Î± ÏŽÏÎ±',
            hh : '%d ÏŽÏÎµÏ‚',
            d : 'Î¼Î¯Î± Î¼Î­ÏÎ±',
            dd : '%d Î¼Î­ÏÎµÏ‚',
            M : 'Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚',
            MM : '%d Î¼Î®Î½ÎµÏ‚',
            y : 'Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚',
            yy : '%d Ï‡ÏÏŒÎ½Î¹Î±'
        },
        dayOfMonthOrdinalParse: /\d{1,2}Î·/,
        ordinal: '%dÎ·',
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
        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aÅ­g_sep_okt_nov_dec'.split('_'),
        weekdays : 'dimanÄ‰o_lundo_mardo_merkredo_ÄµaÅ­do_vendredo_sabato'.split('_'),
        weekdaysShort : 'dim_lun_mard_merk_ÄµaÅ­_ven_sab'.split('_'),
        weekdaysMin : 'di_lu_ma_me_Äµa_ve_sa'.split('_'),
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
            sameDay : '[HodiaÅ­ je] LT',
            nextDay : '[MorgaÅ­ je] LT',
            nextWeek : 'dddd [je] LT',
            lastDay : '[HieraÅ­ je] LT',
            lastWeek : '[pasinta] dddd [je] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'post %s',
            past : 'antaÅ­ %s',
            s : 'sekundoj',
            ss : '%d sekundoj',
            m : 'minuto',
            mm : '%d minutoj',
            h : 'horo',
            hh : '%d horoj',
            d : 'tago',//ne 'diurno', Ä‰ar estas uzita por proksimumo
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
        weekdays : 'domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado'.split('_'),
        weekdaysShort : 'dom._lun._mar._miÃ©._jue._vie._sÃ¡b.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sÃ¡'.split('_'),
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
                return '[maÃ±ana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
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
            d : 'un dÃ­a',
            dd : '%d dÃ­as',
            M : 'un mes',
            MM : '%d meses',
            y : 'un aÃ±o',
            yy : '%d aÃ±os'
        },
        dayOfMonthOrdinalParse : /\d{1,2}Âº/,
        ordinal : '%dÂº',
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
        weekdays : 'domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado'.split('_'),
        weekdaysShort : 'dom._lun._mar._miÃ©._jue._vie._sÃ¡b.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sÃ¡'.split('_'),
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
                return '[maÃ±ana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
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
            d : 'un dÃ­a',
            dd : '%d dÃ­as',
            M : 'un mes',
            MM : '%d meses',
            y : 'un aÃ±o',
            yy : '%d aÃ±os'
        },
        dayOfMonthOrdinalParse : /\d{1,2}Âº/,
        ordinal : '%dÂº',
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
        weekdays : 'domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado'.split('_'),
        weekdaysShort : 'dom._lun._mar._miÃ©._jue._vie._sÃ¡b.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sÃ¡'.split('_'),
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
                return '[maÃ±ana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
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
            d : 'un dÃ­a',
            dd : '%d dÃ­as',
            M : 'un mes',
            MM : '%d meses',
            y : 'un aÃ±o',
            yy : '%d aÃ±os'
        },
        dayOfMonthOrdinalParse : /\d{1,2}Âº/,
        ordinal : '%dÂº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    function processRelativeTime$3(number, withoutSuffix, key, isFuture) {
        var format = {
            's' : ['mÃµne sekundi', 'mÃµni sekund', 'paar sekundit'],
            'ss': [number + 'sekundi', number + 'sekundit'],
            'm' : ['Ã¼he minuti', 'Ã¼ks minut'],
            'mm': [number + ' minuti', number + ' minutit'],
            'h' : ['Ã¼he tunni', 'tund aega', 'Ã¼ks tund'],
            'hh': [number + ' tunni', number + ' tundi'],
            'd' : ['Ã¼he pÃ¤eva', 'Ã¼ks pÃ¤ev'],
            'M' : ['kuu aja', 'kuu aega', 'Ã¼ks kuu'],
            'MM': [number + ' kuu', number + ' kuud'],
            'y' : ['Ã¼he aasta', 'aasta', 'Ã¼ks aasta'],
            'yy': [number + ' aasta', number + ' aastat']
        };
        if (withoutSuffix) {
            return format[key][2] ? format[key][2] : format[key][1];
        }
        return isFuture ? format[key][0] : format[key][1];
    }

    moment.defineLocale('et', {
        months        : 'jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort   : 'jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays      : 'pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev'.split('_'),
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
            sameDay  : '[TÃ¤na,] LT',
            nextDay  : '[Homme,] LT',
            nextWeek : '[JÃ¤rgmine] dddd LT',
            lastDay  : '[Eile,] LT',
            lastWeek : '[Eelmine] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s pÃ¤rast',
            past   : '%s tagasi',
            s      : processRelativeTime$3,
            ss     : processRelativeTime$3,
            m      : processRelativeTime$3,
            mm     : processRelativeTime$3,
            h      : processRelativeTime$3,
            hh     : processRelativeTime$3,
            d      : processRelativeTime$3,
            dd     : '%d pÃ¤eva',
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
        '1': 'Û±',
        '2': 'Û²',
        '3': 'Û³',
        '4': 'Û´',
        '5': 'Ûµ',
        '6': 'Û¶',
        '7': 'Û·',
        '8': 'Û¸',
        '9': 'Û¹',
        '0': 'Û°'
    }, numberMap$4 = {
        'Û±': '1',
        'Û²': '2',
        'Û³': '3',
        'Û´': '4',
        'Ûµ': '5',
        'Û¶': '6',
        'Û·': '7',
        'Û¸': '8',
        'Û¹': '9',
        'Û°': '0'
    };

    moment.defineLocale('fa', {
        months : 'Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±'.split('_'),
        monthsShort : 'Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±'.split('_'),
        weekdays : 'ÛŒÚ©\u200cØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡\u200cØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬\u200cØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡'.split('_'),
        weekdaysShort : 'ÛŒÚ©\u200cØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡\u200cØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬\u200cØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡'.split('_'),
        weekdaysMin : 'ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/,
        isPM: function (input) {
            return /Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±';
            } else {
                return 'Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±';
            }
        },
        calendar : {
            sameDay : '[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT',
            nextDay : '[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT',
            nextWeek : 'dddd [Ø³Ø§Ø¹Øª] LT',
            lastDay : '[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT',
            lastWeek : 'dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Ø¯Ø± %s',
            past : '%s Ù¾ÛŒØ´',
            s : 'Ú†Ù†Ø¯ Ø«Ø§Ù†ÛŒÙ‡',
            ss : 'Ø«Ø§Ù†ÛŒÙ‡ d%',
            m : 'ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡',
            mm : '%d Ø¯Ù‚ÛŒÙ‚Ù‡',
            h : 'ÛŒÚ© Ø³Ø§Ø¹Øª',
            hh : '%d Ø³Ø§Ø¹Øª',
            d : 'ÛŒÚ© Ø±ÙˆØ²',
            dd : '%d Ø±ÙˆØ²',
            M : 'ÛŒÚ© Ù…Ø§Ù‡',
            MM : '%d Ù…Ø§Ù‡',
            y : 'ÛŒÚ© Ø³Ø§Ù„',
            yy : '%d Ø³Ø§Ù„'
        },
        preparse: function (string) {
            return string.replace(/[Û°-Û¹]/g, function (match) {
                return numberMap$4[match];
            }).replace(/ØŒ/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$5[match];
            }).replace(/,/g, 'ØŒ');
        },
        dayOfMonthOrdinalParse: /\d{1,2}Ù…/,
        ordinal : '%dÙ…',
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 12th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var numbersPast = 'nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n'.split(' '),
        numbersFuture = [
            'nolla', 'yhden', 'kahden', 'kolmen', 'neljÃ¤n', 'viiden', 'kuuden',
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
                return isFuture ? 'pÃ¤ivÃ¤n' : 'pÃ¤ivÃ¤';
            case 'dd':
                result = isFuture ? 'pÃ¤ivÃ¤n' : 'pÃ¤ivÃ¤Ã¤';
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
        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu'.split('_'),
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
            sameDay : '[tÃ¤nÃ¤Ã¤n] [klo] LT',
            nextDay : '[huomenna] [klo] LT',
            nextWeek : 'dddd [klo] LT',
            lastDay : '[eilen] [klo] LT',
            lastWeek : '[viime] dddd[na] [klo] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s pÃ¤Ã¤stÃ¤',
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
        months : 'januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur'.split('_'),
        weekdaysShort : 'sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley'.split('_'),
        weekdaysMin : 'su_mÃ¡_tÃ½_mi_hÃ³_fr_le'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D. MMMM, YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Ã dag kl.] LT',
            nextDay : '[Ã morgin kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[Ã gjÃ¡r kl.] LT',
            lastWeek : '[sÃ­Ã°stu] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'um %s',
            past : '%s sÃ­Ã°ani',
            s : 'fÃ¡ sekund',
            ss : '%d sekundir',
            m : 'ein minuttur',
            mm : '%d minuttir',
            h : 'ein tÃ­mi',
            hh : '%d tÃ­mar',
            d : 'ein dagur',
            dd : '%d dagar',
            M : 'ein mÃ¡naÃ°ur',
            MM : '%d mÃ¡naÃ°ir',
            y : 'eitt Ã¡r',
            yy : '%d Ã¡r'
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
        months : 'janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre'.split('_'),
        monthsShort : 'janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.'.split('_'),
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
            sameDay : '[Aujourdâ€™hui Ã ] LT',
            nextDay : '[Demain Ã ] LT',
            nextWeek : 'dddd [Ã ] LT',
            lastDay : '[Hier Ã ] LT',
            lastWeek : 'dddd [dernier Ã ] LT',
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
        months : 'janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre'.split('_'),
        monthsShort : 'janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.'.split('_'),
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
            sameDay : '[Aujourdâ€™hui Ã ] LT',
            nextDay : '[Demain Ã ] LT',
            nextWeek : 'dddd [Ã ] LT',
            lastDay : '[Hier Ã ] LT',
            lastWeek : 'dddd [dernier Ã ] LT',
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
        months : 'janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre'.split('_'),
        monthsShort : 'janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.'.split('_'),
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
            sameDay : '[Aujourdâ€™hui Ã ] LT',
            nextDay : '[Demain Ã ] LT',
            nextWeek : 'dddd [Ã ] LT',
            lastDay : '[Hier Ã ] LT',
            lastWeek : 'dddd [dernier Ã ] LT',
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
            lastWeek: '[Ã´frÃ»ne] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'oer %s',
            past : '%s lyn',
            s : 'in pear sekonden',
            ss : '%d sekonden',
            m : 'ien minÃºt',
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
        'EanÃ¡ir', 'Feabhra', 'MÃ¡rta', 'AibreÃ¡n', 'Bealtaine', 'MÃ©itheamh', 'IÃºil', 'LÃºnasa', 'MeÃ¡n FÃ³mhair', 'Deaireadh FÃ³mhair', 'Samhain', 'Nollaig'
    ];

    var monthsShort$4 = ['EanÃ¡', 'Feab', 'MÃ¡rt', 'Aibr', 'Beal', 'MÃ©it', 'IÃºil', 'LÃºna', 'MeÃ¡n', 'Deai', 'Samh', 'Noll'];

    var weekdays$1 = ['DÃ© Domhnaigh', 'DÃ© Luain', 'DÃ© MÃ¡irt', 'DÃ© CÃ©adaoin', 'DÃ©ardaoin', 'DÃ© hAoine', 'DÃ© Satharn'];

    var weekdaysShort = ['Dom', 'Lua', 'MÃ¡i', 'CÃ©a', 'DÃ©a', 'hAo', 'Sat'];

    var weekdaysMin = ['Do', 'Lu', 'MÃ¡', 'Ce', 'DÃ©', 'hA', 'Sa'];

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
            nextDay: '[AmÃ¡rach ag] LT',
            nextWeek: 'dddd [ag] LT',
            lastDay: '[InnÃ© aig] LT',
            lastWeek: 'dddd [seo caite] [ag] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'i %s',
            past: '%s Ã³ shin',
            s: 'cÃºpla soicind',
            ss: '%d soicind',
            m: 'nÃ³imÃ©ad',
            mm: '%d nÃ³imÃ©ad',
            h: 'uair an chloig',
            hh: '%d uair an chloig',
            d: 'lÃ¡',
            dd: '%d lÃ¡',
            M: 'mÃ­',
            MM: '%d mÃ­',
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
        'Am Faoilleach', 'An Gearran', 'Am MÃ rt', 'An Giblean', 'An CÃ¨itean', 'An t-Ã’gmhios', 'An t-Iuchar', 'An LÃ¹nastal', 'An t-Sultain', 'An DÃ mhair', 'An t-Samhain', 'An DÃ¹bhlachd'
    ];

    var monthsShort$5 = ['Faoi', 'Gear', 'MÃ rt', 'Gibl', 'CÃ¨it', 'Ã’gmh', 'Iuch', 'LÃ¹n', 'Sult', 'DÃ mh', 'Samh', 'DÃ¹bh'];

    var weekdays$2 = ['DidÃ²mhnaich', 'Diluain', 'DimÃ irt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

    var weekdaysShort$1 = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

    var weekdaysMin$1 = ['DÃ²', 'Lu', 'MÃ ', 'Ci', 'Ar', 'Ha', 'Sa'];

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
            nextDay : '[A-mÃ ireach aig] LT',
            nextWeek : 'dddd [aig] LT',
            lastDay : '[An-dÃ¨ aig] LT',
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
            M : 'mÃ¬os',
            MM : '%d mÃ¬osan',
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
        months : 'xaneiro_febreiro_marzo_abril_maio_xuÃ±o_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort : 'xan._feb._mar._abr._mai._xuÃ±._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'domingo_luns_martes_mÃ©rcores_xoves_venres_sÃ¡bado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mÃ©r._xov._ven._sÃ¡b.'.split('_'),
        weekdaysMin : 'do_lu_ma_mÃ©_xo_ve_sÃ¡'.split('_'),
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
                return '[hoxe ' + ((this.hours() !== 1) ? 'Ã¡s' : 'Ã¡') + '] LT';
            },
            nextDay : function () {
                return '[maÃ±Ã¡ ' + ((this.hours() !== 1) ? 'Ã¡s' : 'Ã¡') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [' + ((this.hours() !== 1) ? 'Ã¡s' : 'a') + '] LT';
            },
            lastDay : function () {
                return '[onte ' + ((this.hours() !== 1) ? 'Ã¡' : 'a') + '] LT';
            },
            lastWeek : function () {
                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'Ã¡s' : 'a') + '] LT';
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
            d : 'un dÃ­a',
            dd : '%d dÃ­as',
            M : 'un mes',
            MM : '%d meses',
            y : 'un ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse : /\d{1,2}Âº/,
        ordinal : '%dÂº',
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
            '1': 'à«§',
            '2': 'à«¨',
            '3': 'à«©',
            '4': 'à«ª',
            '5': 'à««',
            '6': 'à«¬',
            '7': 'à«­',
            '8': 'à«®',
            '9': 'à«¯',
            '0': 'à«¦'
        },
        numberMap$5 = {
            'à«§': '1',
            'à«¨': '2',
            'à«©': '3',
            'à«ª': '4',
            'à««': '5',
            'à«¬': '6',
            'à«­': '7',
            'à«®': '8',
            'à«¯': '9',
            'à«¦': '0'
        };

    moment.defineLocale('gu', {
        months: 'àªœàª¾àª¨à«àª¯à«àª†àª°à«€_àª«à«‡àª¬à«àª°à«àª†àª°à«€_àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿àª²_àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾àªˆ_àª‘àª—àª¸à«àªŸ_àª¸àªªà«àªŸà«‡àª®à«àª¬àª°_àª‘àª•à«àªŸà«àª¬àª°_àª¨àªµà«‡àª®à«àª¬àª°_àª¡àª¿àª¸à«‡àª®à«àª¬àª°'.split('_'),
        monthsShort: 'àªœàª¾àª¨à«àª¯à«._àª«à«‡àª¬à«àª°à«._àª®àª¾àª°à«àªš_àªàªªà«àª°àª¿._àª®à«‡_àªœà«‚àª¨_àªœà«àª²àª¾._àª‘àª—._àª¸àªªà«àªŸà«‡._àª‘àª•à«àªŸà«._àª¨àªµà«‡._àª¡àª¿àª¸à«‡.'.split('_'),
        monthsParseExact: true,
        weekdays: 'àª°àªµàª¿àªµàª¾àª°_àª¸à«‹àª®àªµàª¾àª°_àª®àª‚àª—àª³àªµàª¾àª°_àª¬à«àª§à«àªµàª¾àª°_àª—à«àª°à«àªµàª¾àª°_àª¶à«àª•à«àª°àªµàª¾àª°_àª¶àª¨àª¿àªµàª¾àª°'.split('_'),
        weekdaysShort: 'àª°àªµàª¿_àª¸à«‹àª®_àª®àª‚àª—àª³_àª¬à«àª§à«_àª—à«àª°à«_àª¶à«àª•à«àª°_àª¶àª¨àª¿'.split('_'),
        weekdaysMin: 'àª°_àª¸à«‹_àª®àª‚_àª¬à«_àª—à«_àª¶à«_àª¶'.split('_'),
        longDateFormat: {
            LT: 'A h:mm àªµàª¾àª—à«àª¯à«‡',
            LTS: 'A h:mm:ss àªµàª¾àª—à«àª¯à«‡',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡',
            LLLL: 'dddd, D MMMM YYYY, A h:mm àªµàª¾àª—à«àª¯à«‡'
        },
        calendar: {
            sameDay: '[àª†àªœ] LT',
            nextDay: '[àª•àª¾àª²à«‡] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[àª—àª‡àª•àª¾àª²à«‡] LT',
            lastWeek: '[àªªàª¾àª›àª²àª¾] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s àª®àª¾',
            past: '%s àªªà«‡àª¹àª²àª¾',
            s: 'àª…àª®à«àª• àªªàª³à«‹',
            ss: '%d àª¸à«‡àª•àª‚àª¡',
            m: 'àªàª• àª®àª¿àª¨àª¿àªŸ',
            mm: '%d àª®àª¿àª¨àª¿àªŸ',
            h: 'àªàª• àª•àª²àª¾àª•',
            hh: '%d àª•àª²àª¾àª•',
            d: 'àªàª• àª¦àª¿àªµàª¸',
            dd: '%d àª¦àª¿àªµàª¸',
            M: 'àªàª• àª®àª¹àª¿àª¨à«‹',
            MM: '%d àª®àª¹àª¿àª¨à«‹',
            y: 'àªàª• àªµàª°à«àª·',
            yy: '%d àªµàª°à«àª·'
        },
        preparse: function (string) {
            return string.replace(/[à«§à«¨à«©à«ªà««à«¬à«­à«®à«¯à«¦]/g, function (match) {
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
        meridiemParse: /àª°àª¾àª¤|àª¬àªªà«‹àª°|àª¸àªµàª¾àª°|àª¸àª¾àª‚àªœ/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'àª°àª¾àª¤') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'àª¸àªµàª¾àª°') {
                return hour;
            } else if (meridiem === 'àª¬àªªà«‹àª°') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'àª¸àª¾àª‚àªœ') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'àª°àª¾àª¤';
            } else if (hour < 10) {
                return 'àª¸àªµàª¾àª°';
            } else if (hour < 17) {
                return 'àª¬àªªà«‹àª°';
            } else if (hour < 20) {
                return 'àª¸àª¾àª‚àªœ';
            } else {
                return 'àª°àª¾àª¤';
            }
        },
        week: {
            dow: 0, // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('he', {
        months : '×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨'.split('_'),
        monthsShort : '×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³'.split('_'),
        weekdays : '×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª'.split('_'),
        weekdaysShort : '××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³'.split('_'),
        weekdaysMin : '×_×‘_×’_×“_×”_×•_×©'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [×‘]MMMM YYYY',
            LLL : 'D [×‘]MMMM YYYY HH:mm',
            LLLL : 'dddd, D [×‘]MMMM YYYY HH:mm',
            l : 'D/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[×”×™×•× ×‘Ö¾]LT',
            nextDay : '[×ž×—×¨ ×‘Ö¾]LT',
            nextWeek : 'dddd [×‘×©×¢×”] LT',
            lastDay : '[××ª×ž×•×œ ×‘Ö¾]LT',
            lastWeek : '[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '×‘×¢×•×“ %s',
            past : '×œ×¤× ×™ %s',
            s : '×ž×¡×¤×¨ ×©× ×™×•×ª',
            ss : '%d ×©× ×™×•×ª',
            m : '×“×§×”',
            mm : '%d ×“×§×•×ª',
            h : '×©×¢×”',
            hh : function (number) {
                if (number === 2) {
                    return '×©×¢×ª×™×™×';
                }
                return number + ' ×©×¢×•×ª';
            },
            d : '×™×•×',
            dd : function (number) {
                if (number === 2) {
                    return '×™×•×ž×™×™×';
                }
                return number + ' ×™×ž×™×';
            },
            M : '×—×•×“×©',
            MM : function (number) {
                if (number === 2) {
                    return '×—×•×“×©×™×™×';
                }
                return number + ' ×—×•×“×©×™×';
            },
            y : '×©× ×”',
            yy : function (number) {
                if (number === 2) {
                    return '×©× ×ª×™×™×';
                } else if (number % 10 === 0 && number !== 10) {
                    return number + ' ×©× ×”';
                }
                return number + ' ×©× ×™×';
            }
        },
        meridiemParse: /××—×”"×¦|×œ×¤× ×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×œ×¤× ×™ ×”×¦×”×¨×™×™×|×œ×¤× ×•×ª ×‘×•×§×¨|×‘×‘×•×§×¨|×‘×¢×¨×‘/i,
        isPM : function (input) {
            return /^(××—×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×‘×¢×¨×‘)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 5) {
                return '×œ×¤× ×•×ª ×‘×•×§×¨';
            } else if (hour < 10) {
                return '×‘×‘×•×§×¨';
            } else if (hour < 12) {
                return isLower ? '×œ×¤× ×”"×¦' : '×œ×¤× ×™ ×”×¦×”×¨×™×™×';
            } else if (hour < 18) {
                return isLower ? '××—×”"×¦' : '××—×¨×™ ×”×¦×”×¨×™×™×';
            } else {
                return '×‘×¢×¨×‘';
            }
        }
    });

    //! moment.js locale configuration

    var symbolMap$7 = {
        '1': 'à¥§',
        '2': 'à¥¨',
        '3': 'à¥©',
        '4': 'à¥ª',
        '5': 'à¥«',
        '6': 'à¥¬',
        '7': 'à¥­',
        '8': 'à¥®',
        '9': 'à¥¯',
        '0': 'à¥¦'
    },
    numberMap$6 = {
        'à¥§': '1',
        'à¥¨': '2',
        'à¥©': '3',
        'à¥ª': '4',
        'à¥«': '5',
        'à¥¬': '6',
        'à¥­': '7',
        'à¥®': '8',
        'à¥¯': '9',
        'à¥¦': '0'
    };

    moment.defineLocale('hi', {
        months : 'à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°'.split('_'),
        monthsShort : 'à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.'.split('_'),
        monthsParseExact: true,
        weekdays : 'à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°'.split('_'),
        weekdaysShort : 'à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿'.split('_'),
        weekdaysMin : 'à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶'.split('_'),
        longDateFormat : {
            LT : 'A h:mm à¤¬à¤œà¥‡',
            LTS : 'A h:mm:ss à¤¬à¤œà¥‡',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm à¤¬à¤œà¥‡',
            LLLL : 'dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡'
        },
        calendar : {
            sameDay : '[à¤†à¤œ] LT',
            nextDay : '[à¤•à¤²] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à¤•à¤²] LT',
            lastWeek : '[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à¤®à¥‡à¤‚',
            past : '%s à¤ªà¤¹à¤²à¥‡',
            s : 'à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£',
            ss : '%d à¤¸à¥‡à¤•à¤‚à¤¡',
            m : 'à¤à¤• à¤®à¤¿à¤¨à¤Ÿ',
            mm : '%d à¤®à¤¿à¤¨à¤Ÿ',
            h : 'à¤à¤• à¤˜à¤‚à¤Ÿà¤¾',
            hh : '%d à¤˜à¤‚à¤Ÿà¥‡',
            d : 'à¤à¤• à¤¦à¤¿à¤¨',
            dd : '%d à¤¦à¤¿à¤¨',
            M : 'à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡',
            MM : '%d à¤®à¤¹à¥€à¤¨à¥‡',
            y : 'à¤à¤• à¤µà¤°à¥à¤·',
            yy : '%d à¤µà¤°à¥à¤·'
        },
        preparse: function (string) {
            return string.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (match) {
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
        meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'à¤°à¤¾à¤¤') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'à¤¸à¥à¤¬à¤¹') {
                return hour;
            } else if (meridiem === 'à¤¦à¥‹à¤ªà¤¹à¤°') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'à¤¶à¤¾à¤®') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à¤°à¤¾à¤¤';
            } else if (hour < 10) {
                return 'à¤¸à¥à¤¬à¤¹';
            } else if (hour < 17) {
                return 'à¤¦à¥‹à¤ªà¤¹à¤°';
            } else if (hour < 20) {
                return 'à¤¶à¤¾à¤®';
            } else {
                return 'à¤°à¤¾à¤¤';
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
            format: 'sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
            standalone: 'sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
        },
        monthsShort : 'sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._Äet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_Äe_pe_su'.split('_'),
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
            lastDay  : '[juÄer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return '[proÅ¡lu] dddd [u] LT';
                    case 6:
                        return '[proÅ¡le] [subote] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[proÅ¡li] dddd [u] LT';
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

    var weekEndings = 'vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton'.split(' ');
    function translate$4(number, withoutSuffix, key, isFuture) {
        var num = number;
        switch (key) {
            case 's':
                return (isFuture || withoutSuffix) ? 'nÃ©hÃ¡ny mÃ¡sodperc' : 'nÃ©hÃ¡ny mÃ¡sodperce';
            case 'ss':
                return num + (isFuture || withoutSuffix) ? ' mÃ¡sodperc' : ' mÃ¡sodperce';
            case 'm':
                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'mm':
                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (isFuture || withoutSuffix ? ' Ã³ra' : ' Ã³rÃ¡ja');
            case 'hh':
                return num + (isFuture || withoutSuffix ? ' Ã³ra' : ' Ã³rÃ¡ja');
            case 'd':
                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'dd':
                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (isFuture || withoutSuffix ? ' hÃ³nap' : ' hÃ³napja');
            case 'MM':
                return num + (isFuture || withoutSuffix ? ' hÃ³nap' : ' hÃ³napja');
            case 'y':
                return 'egy' + (isFuture || withoutSuffix ? ' Ã©v' : ' Ã©ve');
            case 'yy':
                return num + (isFuture || withoutSuffix ? ' Ã©v' : ' Ã©ve');
        }
        return '';
    }
    function week(isFuture) {
        return (isFuture ? '' : '[mÃºlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
    }

    moment.defineLocale('hu', {
        months : 'januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december'.split('_'),
        monthsShort : 'jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec'.split('_'),
        weekdays : 'vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat'.split('_'),
        weekdaysShort : 'vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo'.split('_'),
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
            future : '%s mÃºlva',
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
            format: 'Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«'.split('_'),
            standalone: 'Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€'.split('_')
        },
        monthsShort : 'Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿'.split('_'),
        weekdays : 'Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©'.split('_'),
        weekdaysShort : 'Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©'.split('_'),
        weekdaysMin : 'Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY Õ©.',
            LLL : 'D MMMM YYYY Õ©., HH:mm',
            LLLL : 'dddd, D MMMM YYYY Õ©., HH:mm'
        },
        calendar : {
            sameDay: '[Õ¡ÕµÕ½Ö…Ö€] LT',
            nextDay: '[Õ¾Õ¡Õ²Õ¨] LT',
            lastDay: '[Õ¥Ö€Õ¥Õ¯] LT',
            nextWeek: function () {
                return 'dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT';
            },
            lastWeek: function () {
                return '[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT';
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s Õ°Õ¥Õ¿Õ¸',
            past : '%s Õ¡Õ¼Õ¡Õ»',
            s : 'Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶',
            ss : '%d Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶',
            m : 'Ö€Õ¸ÕºÕ¥',
            mm : '%d Ö€Õ¸ÕºÕ¥',
            h : 'ÕªÕ¡Õ´',
            hh : '%d ÕªÕ¡Õ´',
            d : 'Ö…Ö€',
            dd : '%d Ö…Ö€',
            M : 'Õ¡Õ´Õ«Õ½',
            MM : '%d Õ¡Õ´Õ«Õ½',
            y : 'Õ¿Õ¡Ö€Õ«',
            yy : '%d Õ¿Õ¡Ö€Õ«'
        },
        meridiemParse: /Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶/,
        isPM: function (input) {
            return /^(ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(input);
        },
        meridiem : function (hour) {
            if (hour < 4) {
                return 'Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡';
            } else if (hour < 12) {
                return 'Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡';
            } else if (hour < 17) {
                return 'ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡';
            } else {
                return 'Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(Õ«Õ¶|Ö€Õ¤)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'DDD':
                case 'w':
                case 'W':
                case 'DDDo':
                    if (number === 1) {
                        return number + '-Õ«Õ¶';
                    }
                    return number + '-Ö€Õ¤';
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
                return withoutSuffix || isFuture ? 'nokkrar sekÃºndur' : 'nokkrum sekÃºndum';
            case 'ss':
                if (plural$2(number)) {
                    return result + (withoutSuffix || isFuture ? 'sekÃºndur' : 'sekÃºndum');
                }
                return result + 'sekÃºnda';
            case 'm':
                return withoutSuffix ? 'mÃ­nÃºta' : 'mÃ­nÃºtu';
            case 'mm':
                if (plural$2(number)) {
                    return result + (withoutSuffix || isFuture ? 'mÃ­nÃºtur' : 'mÃ­nÃºtum');
                } else if (withoutSuffix) {
                    return result + 'mÃ­nÃºta';
                }
                return result + 'mÃ­nÃºtu';
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
                    return result + (isFuture ? 'daga' : 'dÃ¶gum');
                } else if (withoutSuffix) {
                    return result + 'dagur';
                }
                return result + (isFuture ? 'dag' : 'degi');
            case 'M':
                if (withoutSuffix) {
                    return 'mÃ¡nuÃ°ur';
                }
                return isFuture ? 'mÃ¡nuÃ°' : 'mÃ¡nuÃ°i';
            case 'MM':
                if (plural$2(number)) {
                    if (withoutSuffix) {
                        return result + 'mÃ¡nuÃ°ir';
                    }
                    return result + (isFuture ? 'mÃ¡nuÃ°i' : 'mÃ¡nuÃ°um');
                } else if (withoutSuffix) {
                    return result + 'mÃ¡nuÃ°ur';
                }
                return result + (isFuture ? 'mÃ¡nuÃ°' : 'mÃ¡nuÃ°i');
            case 'y':
                return withoutSuffix || isFuture ? 'Ã¡r' : 'Ã¡ri';
            case 'yy':
                if (plural$2(number)) {
                    return result + (withoutSuffix || isFuture ? 'Ã¡r' : 'Ã¡rum');
                }
                return result + (withoutSuffix || isFuture ? 'Ã¡r' : 'Ã¡ri');
        }
    }

    moment.defineLocale('is', {
        months : 'janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des'.split('_'),
        weekdays : 'sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur'.split('_'),
        weekdaysShort : 'sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau'.split('_'),
        weekdaysMin : 'Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar : {
            sameDay : '[Ã­ dag kl.] LT',
            nextDay : '[Ã¡ morgun kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[Ã­ gÃ¦r kl.] LT',
            lastWeek : '[sÃ­Ã°asta] dddd [kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'eftir %s',
            past : 'fyrir %s sÃ­Ã°an',
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
        weekdays : 'domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato'.split('_'),
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
        dayOfMonthOrdinalParse : /\d{1,2}Âº/,
        ordinal: '%dÂº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('it', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato'.split('_'),
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
        dayOfMonthOrdinalParse : /\d{1,2}Âº/,
        ordinal: '%dÂº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ja', {
        months : 'ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ'.split('_'),
        monthsShort : '1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ'.split('_'),
        weekdays : 'æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥'.split('_'),
        weekdaysShort : 'æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ'.split('_'),
        weekdaysMin : 'æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYYå¹´MæœˆDæ—¥',
            LLL : 'YYYYå¹´MæœˆDæ—¥ HH:mm',
            LLLL : 'YYYYå¹´MæœˆDæ—¥ dddd HH:mm',
            l : 'YYYY/MM/DD',
            ll : 'YYYYå¹´MæœˆDæ—¥',
            lll : 'YYYYå¹´MæœˆDæ—¥ HH:mm',
            llll : 'YYYYå¹´MæœˆDæ—¥(ddd) HH:mm'
        },
        meridiemParse: /åˆå‰|åˆå¾Œ/i,
        isPM : function (input) {
            return input === 'åˆå¾Œ';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'åˆå‰';
            } else {
                return 'åˆå¾Œ';
            }
        },
        calendar : {
            sameDay : '[ä»Šæ—¥] LT',
            nextDay : '[æ˜Žæ—¥] LT',
            nextWeek : function (now) {
                if (now.week() < this.week()) {
                    return '[æ¥é€±]dddd LT';
                } else {
                    return 'dddd LT';
                }
            },
            lastDay : '[æ˜¨æ—¥] LT',
            lastWeek : function (now) {
                if (this.week() < now.week()) {
                    return '[å…ˆé€±]dddd LT';
                } else {
                    return 'dddd LT';
                }
            },
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse : /\d{1,2}æ—¥/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + 'æ—¥';
                default:
                    return number;
            }
        },
        relativeTime : {
            future : '%så¾Œ',
            past : '%så‰',
            s : 'æ•°ç§’',
            ss : '%dç§’',
            m : '1åˆ†',
            mm : '%dåˆ†',
            h : '1æ™‚é–“',
            hh : '%dæ™‚é–“',
            d : '1æ—¥',
            dd : '%dæ—¥',
            M : '1ãƒ¶æœˆ',
            MM : '%dãƒ¶æœˆ',
            y : '1å¹´',
            yy : '%då¹´'
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
            standalone: 'áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜'.split('_'),
            format: 'áƒ˜áƒáƒœáƒ•áƒáƒ áƒ¡_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ¡_áƒ›áƒáƒ áƒ¢áƒ¡_áƒáƒžáƒ áƒ˜áƒšáƒ˜áƒ¡_áƒ›áƒáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ¡_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ¡_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ¡_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡'.split('_')
        },
        monthsShort : 'áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™'.split('_'),
        weekdays : {
            standalone: 'áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜'.split('_'),
            format: 'áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡'.split('_'),
            isFormat: /(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/
        },
        weekdaysShort : 'áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘'.split('_'),
        weekdaysMin : 'áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]',
            nextDay : '[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]',
            lastDay : '[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]',
            nextWeek : '[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]',
            lastWeek : '[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”',
            sameElse : 'L'
        },
        relativeTime : {
            future : function (s) {
                return (/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ¬áƒ”áƒšáƒ˜)/).test(s) ?
                    s.replace(/áƒ˜$/, 'áƒ¨áƒ˜') :
                    s + 'áƒ¨áƒ˜';
            },
            past : function (s) {
                if ((/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/).test(s)) {
                    return s.replace(/(áƒ˜|áƒ”)$/, 'áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ');
                }
                if ((/áƒ¬áƒ”áƒšáƒ˜/).test(s)) {
                    return s.replace(/áƒ¬áƒ”áƒšáƒ˜$/, 'áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ');
                }
            },
            s : 'áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜',
            ss : '%d áƒ¬áƒáƒ›áƒ˜',
            m : 'áƒ¬áƒ£áƒ—áƒ˜',
            mm : '%d áƒ¬áƒ£áƒ—áƒ˜',
            h : 'áƒ¡áƒáƒáƒ—áƒ˜',
            hh : '%d áƒ¡áƒáƒáƒ—áƒ˜',
            d : 'áƒ“áƒ¦áƒ”',
            dd : '%d áƒ“áƒ¦áƒ”',
            M : 'áƒ—áƒ•áƒ”',
            MM : '%d áƒ—áƒ•áƒ”',
            y : 'áƒ¬áƒ”áƒšáƒ˜',
            yy : '%d áƒ¬áƒ”áƒšáƒ˜'
        },
        dayOfMonthOrdinalParse: /0|1-áƒšáƒ˜|áƒ›áƒ”-\d{1,2}|\d{1,2}-áƒ”/,
        ordinal : function (number) {
            if (number === 0) {
                return number;
            }
            if (number === 1) {
                return number + '-áƒšáƒ˜';
            }
            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
                return 'áƒ›áƒ”-' + number;
            }
            return number + '-áƒ”';
        },
        week : {
            dow : 1,
            doy : 7
        }
    });

    //! moment.js locale configuration

    var suffixes$1 = {
        0: '-ÑˆÑ–',
        1: '-ÑˆÑ–',
        2: '-ÑˆÑ–',
        3: '-ÑˆÑ–',
        4: '-ÑˆÑ–',
        5: '-ÑˆÑ–',
        6: '-ÑˆÑ‹',
        7: '-ÑˆÑ–',
        8: '-ÑˆÑ–',
        9: '-ÑˆÑ‹',
        10: '-ÑˆÑ‹',
        20: '-ÑˆÑ‹',
        30: '-ÑˆÑ‹',
        40: '-ÑˆÑ‹',
        50: '-ÑˆÑ–',
        60: '-ÑˆÑ‹',
        70: '-ÑˆÑ–',
        80: '-ÑˆÑ–',
        90: '-ÑˆÑ‹',
        100: '-ÑˆÑ–'
    };

    moment.defineLocale('kk', {
        months : 'Ò›Ð°Ò£Ñ‚Ð°Ñ€_Ð°Ò›Ð¿Ð°Ð½_Ð½Ð°ÑƒÑ€Ñ‹Ð·_ÑÓ™ÑƒÑ–Ñ€_Ð¼Ð°Ð¼Ñ‹Ñ€_Ð¼Ð°ÑƒÑÑ‹Ð¼_ÑˆÑ–Ð»Ð´Ðµ_Ñ‚Ð°Ð¼Ñ‹Ð·_Ò›Ñ‹Ñ€ÐºÒ¯Ð¹ÐµÐº_Ò›Ð°Ð·Ð°Ð½_Ò›Ð°Ñ€Ð°ÑˆÐ°_Ð¶ÐµÐ»Ñ‚Ð¾Ò›ÑÐ°Ð½'.split('_'),
        monthsShort : 'Ò›Ð°Ò£_Ð°Ò›Ð¿_Ð½Ð°Ñƒ_ÑÓ™Ñƒ_Ð¼Ð°Ð¼_Ð¼Ð°Ñƒ_ÑˆÑ–Ð»_Ñ‚Ð°Ð¼_Ò›Ñ‹Ñ€_Ò›Ð°Ð·_Ò›Ð°Ñ€_Ð¶ÐµÐ»'.split('_'),
        weekdays : 'Ð¶ÐµÐºÑÐµÐ½Ð±Ñ–_Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ–_ÑÐµÐ¹ÑÐµÐ½Ð±Ñ–_ÑÓ™Ñ€ÑÐµÐ½Ð±Ñ–_Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð¶Ò±Ð¼Ð°_ÑÐµÐ½Ð±Ñ–'.split('_'),
        weekdaysShort : 'Ð¶ÐµÐº_Ð´Ò¯Ð¹_ÑÐµÐ¹_ÑÓ™Ñ€_Ð±ÐµÐ¹_Ð¶Ò±Ð¼_ÑÐµÐ½'.split('_'),
        weekdaysMin : 'Ð¶Ðº_Ð´Ð¹_ÑÐ¹_ÑÑ€_Ð±Ð¹_Ð¶Ð¼_ÑÐ½'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Ð‘Ò¯Ð³Ñ–Ð½ ÑÐ°Ò“Ð°Ñ‚] LT',
            nextDay : '[Ð•Ñ€Ñ‚ÐµÒ£ ÑÐ°Ò“Ð°Ñ‚] LT',
            nextWeek : 'dddd [ÑÐ°Ò“Ð°Ñ‚] LT',
            lastDay : '[ÐšÐµÑˆÐµ ÑÐ°Ò“Ð°Ñ‚] LT',
            lastWeek : '[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ò£] dddd [ÑÐ°Ò“Ð°Ñ‚] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s Ñ–ÑˆÑ–Ð½Ð´Ðµ',
            past : '%s Ð±Ò±Ñ€Ñ‹Ð½',
            s : 'Ð±Ñ–Ñ€Ð½ÐµÑˆÐµ ÑÐµÐºÑƒÐ½Ð´',
            ss : '%d ÑÐµÐºÑƒÐ½Ð´',
            m : 'Ð±Ñ–Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚',
            mm : '%d Ð¼Ð¸Ð½ÑƒÑ‚',
            h : 'Ð±Ñ–Ñ€ ÑÐ°Ò“Ð°Ñ‚',
            hh : '%d ÑÐ°Ò“Ð°Ñ‚',
            d : 'Ð±Ñ–Ñ€ ÐºÒ¯Ð½',
            dd : '%d ÐºÒ¯Ð½',
            M : 'Ð±Ñ–Ñ€ Ð°Ð¹',
            MM : '%d Ð°Ð¹',
            y : 'Ð±Ñ–Ñ€ Ð¶Ñ‹Ð»',
            yy : '%d Ð¶Ñ‹Ð»'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ÑˆÑ–|ÑˆÑ‹)/,
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
        '1': 'áŸ¡',
        '2': 'áŸ¢',
        '3': 'áŸ£',
        '4': 'áŸ¤',
        '5': 'áŸ¥',
        '6': 'áŸ¦',
        '7': 'áŸ§',
        '8': 'áŸ¨',
        '9': 'áŸ©',
        '0': 'áŸ '
    }, numberMap$7 = {
        'áŸ¡': '1',
        'áŸ¢': '2',
        'áŸ£': '3',
        'áŸ¤': '4',
        'áŸ¥': '5',
        'áŸ¦': '6',
        'áŸ§': '7',
        'áŸ¨': '8',
        'áŸ©': '9',
        'áŸ ': '0'
    };

    moment.defineLocale('km', {
        months: 'áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼'.split(
            '_'
        ),
        monthsShort: 'áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼'.split(
            '_'
        ),
        weekdays: 'áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ'.split('_'),
        weekdaysShort: 'áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ'.split('_'),
        weekdaysMin: 'áž¢áž¶_áž…_áž¢_áž–_áž–áŸ’ážš_ážŸáž»_ážŸ'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /áž–áŸ’ážšáž¹áž€|áž›áŸ’áž„áž¶áž…/,
        isPM: function (input) {
            return input === 'áž›áŸ’áž„áž¶áž…';
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 12) {
                return 'áž–áŸ’ážšáž¹áž€';
            } else {
                return 'áž›áŸ’áž„áž¶áž…';
            }
        },
        calendar: {
            sameDay: '[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT',
            nextDay: '[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT',
            nextWeek: 'dddd [áž˜áŸ‰áŸ„áž„] LT',
            lastDay: '[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT',
            lastWeek: 'dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%sáž‘áŸ€áž',
            past: '%sáž˜áž»áž“',
            s: 'áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸',
            ss: '%d ážœáž·áž“áž¶áž‘áž¸',
            m: 'áž˜áž½áž™áž“áž¶áž‘áž¸',
            mm: '%d áž“áž¶áž‘áž¸',
            h: 'áž˜áž½áž™áž˜áŸ‰áŸ„áž„',
            hh: '%d áž˜áŸ‰áŸ„áž„',
            d: 'áž˜áž½áž™ážáŸ’áž„áŸƒ',
            dd: '%d ážáŸ’áž„áŸƒ',
            M: 'áž˜áž½áž™ážáŸ‚',
            MM: '%d ážáŸ‚',
            y: 'áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†',
            yy: '%d áž†áŸ’áž“áž¶áŸ†'
        },
        dayOfMonthOrdinalParse : /áž‘áž¸\d{1,2}/,
        ordinal : 'áž‘áž¸%d',
        preparse: function (string) {
            return string.replace(/[áŸ¡áŸ¢áŸ£áŸ¤áŸ¥áŸ¦áŸ§áŸ¨áŸ©áŸ ]/g, function (match) {
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
        '1': 'à³§',
        '2': 'à³¨',
        '3': 'à³©',
        '4': 'à³ª',
        '5': 'à³«',
        '6': 'à³¬',
        '7': 'à³­',
        '8': 'à³®',
        '9': 'à³¯',
        '0': 'à³¦'
    },
    numberMap$8 = {
        'à³§': '1',
        'à³¨': '2',
        'à³©': '3',
        'à³ª': '4',
        'à³«': '5',
        'à³¬': '6',
        'à³­': '7',
        'à³®': '8',
        'à³¯': '9',
        'à³¦': '0'
    };

    moment.defineLocale('kn', {
        months : 'à²œà²¨à²µà²°à²¿_à²«à³†à²¬à³à²°à²µà²°à²¿_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚à²¬à²°à³_à²…à²•à³à²Ÿà³†à³‚à³•à²¬à²°à³_à²¨à²µà³†à²‚à²¬à²°à³_à²¡à²¿à²¸à³†à²‚à²¬à²°à³'.split('_'),
        monthsShort : 'à²œà²¨_à²«à³†à²¬à³à²°_à²®à²¾à²°à³à²šà³_à²à²ªà³à²°à²¿à²²à³_à²®à³†à³•_à²œà³‚à²¨à³_à²œà³à²²à³†à³–_à²†à²—à²¸à³à²Ÿà³_à²¸à³†à²ªà³à²Ÿà³†à²‚_à²…à²•à³à²Ÿà³†à³‚à³•_à²¨à²µà³†à²‚_à²¡à²¿à²¸à³†à²‚'.split('_'),
        monthsParseExact: true,
        weekdays : 'à²­à²¾à²¨à³à²µà²¾à²°_à²¸à³†à³‚à³•à²®à²µà²¾à²°_à²®à²‚à²—à²³à²µà²¾à²°_à²¬à³à²§à²µà²¾à²°_à²—à³à²°à³à²µà²¾à²°_à²¶à³à²•à³à²°à²µà²¾à²°_à²¶à²¨à²¿à²µà²¾à²°'.split('_'),
        weekdaysShort : 'à²­à²¾à²¨à³_à²¸à³†à³‚à³•à²®_à²®à²‚à²—à²³_à²¬à³à²§_à²—à³à²°à³_à²¶à³à²•à³à²°_à²¶à²¨à²¿'.split('_'),
        weekdaysMin : 'à²­à²¾_à²¸à³†à³‚à³•_à²®à²‚_à²¬à³_à²—à³_à²¶à³_à²¶'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[à²‡à²‚à²¦à³] LT',
            nextDay : '[à²¨à²¾à²³à³†] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à²¨à²¿à²¨à³à²¨à³†] LT',
            lastWeek : '[à²•à³†à³‚à²¨à³†à²¯] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à²¨à²‚à²¤à²°',
            past : '%s à²¹à²¿à²‚à²¦à³†',
            s : 'à²•à³†à²²à²µà³ à²•à³à²·à²£à²—à²³à³',
            ss : '%d à²¸à³†à²•à³†à²‚à²¡à³à²—à²³à³',
            m : 'à²’à²‚à²¦à³ à²¨à²¿à²®à²¿à²·',
            mm : '%d à²¨à²¿à²®à²¿à²·',
            h : 'à²’à²‚à²¦à³ à²—à²‚à²Ÿà³†',
            hh : '%d à²—à²‚à²Ÿà³†',
            d : 'à²’à²‚à²¦à³ à²¦à²¿à²¨',
            dd : '%d à²¦à²¿à²¨',
            M : 'à²’à²‚à²¦à³ à²¤à²¿à²‚à²—à²³à³',
            MM : '%d à²¤à²¿à²‚à²—à²³à³',
            y : 'à²’à²‚à²¦à³ à²µà²°à³à²·',
            yy : '%d à²µà²°à³à²·'
        },
        preparse: function (string) {
            return string.replace(/[à³§à³¨à³©à³ªà³«à³¬à³­à³®à³¯à³¦]/g, function (match) {
                return numberMap$8[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$9[match];
            });
        },
        meridiemParse: /à²°à²¾à²¤à³à²°à²¿|à²¬à³†à²³à²¿à²—à³à²—à³†|à²®à²§à³à²¯à²¾à²¹à³à²¨|à²¸à²‚à²œà³†/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'à²°à²¾à²¤à³à²°à²¿') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'à²¬à³†à²³à²¿à²—à³à²—à³†') {
                return hour;
            } else if (meridiem === 'à²®à²§à³à²¯à²¾à²¹à³à²¨') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'à²¸à²‚à²œà³†') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à²°à²¾à²¤à³à²°à²¿';
            } else if (hour < 10) {
                return 'à²¬à³†à²³à²¿à²—à³à²—à³†';
            } else if (hour < 17) {
                return 'à²®à²§à³à²¯à²¾à²¹à³à²¨';
            } else if (hour < 20) {
                return 'à²¸à²‚à²œà³†';
            } else {
                return 'à²°à²¾à²¤à³à²°à²¿';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(à²¨à³†à³•)/,
        ordinal : function (number) {
            return number + 'à²¨à³†à³•';
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ko', {
        months : '1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”'.split('_'),
        monthsShort : '1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”'.split('_'),
        weekdays : 'ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼'.split('_'),
        weekdaysShort : 'ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† '.split('_'),
        weekdaysMin : 'ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† '.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYYë…„ MMMM Dì¼',
            LLL : 'YYYYë…„ MMMM Dì¼ A h:mm',
            LLLL : 'YYYYë…„ MMMM Dì¼ dddd A h:mm',
            l : 'YYYY.MM.DD.',
            ll : 'YYYYë…„ MMMM Dì¼',
            lll : 'YYYYë…„ MMMM Dì¼ A h:mm',
            llll : 'YYYYë…„ MMMM Dì¼ dddd A h:mm'
        },
        calendar : {
            sameDay : 'ì˜¤ëŠ˜ LT',
            nextDay : 'ë‚´ì¼ LT',
            nextWeek : 'dddd LT',
            lastDay : 'ì–´ì œ LT',
            lastWeek : 'ì§€ë‚œì£¼ dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s í›„',
            past : '%s ì „',
            s : 'ëª‡ ì´ˆ',
            ss : '%dì´ˆ',
            m : '1ë¶„',
            mm : '%dë¶„',
            h : 'í•œ ì‹œê°„',
            hh : '%dì‹œê°„',
            d : 'í•˜ë£¨',
            dd : '%dì¼',
            M : 'í•œ ë‹¬',
            MM : '%dë‹¬',
            y : 'ì¼ ë…„',
            yy : '%dë…„'
        },
        dayOfMonthOrdinalParse : /\d{1,2}(ì¼|ì›”|ì£¼)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + 'ì¼';
                case 'M':
                    return number + 'ì›”';
                case 'w':
                case 'W':
                    return number + 'ì£¼';
                default:
                    return number;
            }
        },
        meridiemParse : /ì˜¤ì „|ì˜¤í›„/,
        isPM : function (token) {
            return token === 'ì˜¤í›„';
        },
        meridiem : function (hour, minute, isUpper) {
            return hour < 12 ? 'ì˜¤ì „' : 'ì˜¤í›„';
        }
    });

    //! moment.js locale configuration

    var symbolMap$a = {
        '1': 'Ù¡',
        '2': 'Ù¢',
        '3': 'Ù£',
        '4': 'Ù¤',
        '5': 'Ù¥',
        '6': 'Ù¦',
        '7': 'Ù§',
        '8': 'Ù¨',
        '9': 'Ù©',
        '0': 'Ù '
    }, numberMap$9 = {
        'Ù¡': '1',
        'Ù¢': '2',
        'Ù£': '3',
        'Ù¤': '4',
        'Ù¥': '5',
        'Ù¦': '6',
        'Ù§': '7',
        'Ù¨': '8',
        'Ù©': '9',
        'Ù ': '0'
    },
    months$6 = [
        'Ú©Ø§Ù†ÙˆÙ†ÛŒ Ø¯ÙˆÙˆÛ•Ù…',
        'Ø´ÙˆØ¨Ø§Øª',
        'Ø¦Ø§Ø²Ø§Ø±',
        'Ù†ÛŒØ³Ø§Ù†',
        'Ø¦Ø§ÛŒØ§Ø±',
        'Ø­ÙˆØ²Û•ÛŒØ±Ø§Ù†',
        'ØªÛ•Ù…Ù…ÙˆØ²',
        'Ø¦Ø§Ø¨',
        'Ø¦Û•ÛŒÙ„ÙˆÙˆÙ„',
        'ØªØ´Ø±ÛŒÙ†ÛŒ ÛŒÛ•ÙƒÛ•Ù…',
        'ØªØ´Ø±ÛŒÙ†ÛŒ Ø¯ÙˆÙˆÛ•Ù…',
        'ÙƒØ§Ù†ÙˆÙ†ÛŒ ÛŒÛ•Ú©Û•Ù…'
    ];


    moment.defineLocale('ku', {
        months : months$6,
        monthsShort : months$6,
        weekdays : 'ÛŒÙ‡â€ŒÙƒØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ø¯ÙˆÙˆØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ø³ÛŽØ´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ú†ÙˆØ§Ø±Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ù¾ÛŽÙ†Ø¬Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ_Ù‡Ù‡â€ŒÛŒÙ†ÛŒ_Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ'.split('_'),
        weekdaysShort : 'ÛŒÙ‡â€ŒÙƒØ´Ù‡â€ŒÙ…_Ø¯ÙˆÙˆØ´Ù‡â€ŒÙ…_Ø³ÛŽØ´Ù‡â€ŒÙ…_Ú†ÙˆØ§Ø±Ø´Ù‡â€ŒÙ…_Ù¾ÛŽÙ†Ø¬Ø´Ù‡â€ŒÙ…_Ù‡Ù‡â€ŒÛŒÙ†ÛŒ_Ø´Ù‡â€ŒÙ…Ù…Ù‡â€Œ'.split('_'),
        weekdaysMin : 'ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ù‡_Ø´'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ|Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ/,
        isPM: function (input) {
            return /Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ';
            } else {
                return 'Ø¦ÛŽÙˆØ§Ø±Ù‡â€Œ';
            }
        },
        calendar : {
            sameDay : '[Ø¦Ù‡â€ŒÙ…Ø±Û† ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT',
            nextDay : '[Ø¨Ù‡â€ŒÛŒØ§Ù†ÛŒ ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT',
            nextWeek : 'dddd [ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT',
            lastDay : '[Ø¯ÙˆÛŽÙ†ÛŽ ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT',
            lastWeek : 'dddd [ÙƒØ§ØªÚ˜Ù…ÛŽØ±] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Ù„Ù‡â€Œ %s',
            past : '%s',
            s : 'Ú†Ù‡â€ŒÙ†Ø¯ Ú†Ø±ÙƒÙ‡â€ŒÛŒÙ‡â€ŒÙƒ',
            ss : 'Ú†Ø±ÙƒÙ‡â€Œ %d',
            m : 'ÛŒÙ‡â€ŒÙƒ Ø®ÙˆÙ„Ù‡â€ŒÙƒ',
            mm : '%d Ø®ÙˆÙ„Ù‡â€ŒÙƒ',
            h : 'ÛŒÙ‡â€ŒÙƒ ÙƒØ§ØªÚ˜Ù…ÛŽØ±',
            hh : '%d ÙƒØ§ØªÚ˜Ù…ÛŽØ±',
            d : 'ÛŒÙ‡â€ŒÙƒ Ú•Û†Ú˜',
            dd : '%d Ú•Û†Ú˜',
            M : 'ÛŒÙ‡â€ŒÙƒ Ù…Ø§Ù†Ú¯',
            MM : '%d Ù…Ø§Ù†Ú¯',
            y : 'ÛŒÙ‡â€ŒÙƒ Ø³Ø§Úµ',
            yy : '%d Ø³Ø§Úµ'
        },
        preparse: function (string) {
            return string.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function (match) {
                return numberMap$9[match];
            }).replace(/ØŒ/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$a[match];
            }).replace(/,/g, 'ØŒ');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 12th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var suffixes$2 = {
        0: '-Ñ‡Ò¯',
        1: '-Ñ‡Ð¸',
        2: '-Ñ‡Ð¸',
        3: '-Ñ‡Ò¯',
        4: '-Ñ‡Ò¯',
        5: '-Ñ‡Ð¸',
        6: '-Ñ‡Ñ‹',
        7: '-Ñ‡Ð¸',
        8: '-Ñ‡Ð¸',
        9: '-Ñ‡Ñƒ',
        10: '-Ñ‡Ñƒ',
        20: '-Ñ‡Ñ‹',
        30: '-Ñ‡Ñƒ',
        40: '-Ñ‡Ñ‹',
        50: '-Ñ‡Ò¯',
        60: '-Ñ‡Ñ‹',
        70: '-Ñ‡Ð¸',
        80: '-Ñ‡Ð¸',
        90: '-Ñ‡Ñƒ',
        100: '-Ñ‡Ò¯'
    };

    moment.defineLocale('ky', {
        months : 'ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ'.split('_'),
        monthsShort : 'ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº'.split('_'),
        weekdays : 'Ð–ÐµÐºÑˆÐµÐ¼Ð±Ð¸_Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±Ò¯_Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±Ð¸_Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð–ÑƒÐ¼Ð°_Ð˜ÑˆÐµÐ¼Ð±Ð¸'.split('_'),
        weekdaysShort : 'Ð–ÐµÐº_Ð”Ò¯Ð¹_Ð¨ÐµÐ¹_Ð¨Ð°Ñ€_Ð‘ÐµÐ¹_Ð–ÑƒÐ¼_Ð˜ÑˆÐµ'.split('_'),
        weekdaysMin : 'Ð–Ðº_Ð”Ð¹_Ð¨Ð¹_Ð¨Ñ€_Ð‘Ð¹_Ð–Ð¼_Ð˜Ñˆ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Ð‘Ò¯Ð³Ò¯Ð½ ÑÐ°Ð°Ñ‚] LT',
            nextDay : '[Ð­Ñ€Ñ‚ÐµÒ£ ÑÐ°Ð°Ñ‚] LT',
            nextWeek : 'dddd [ÑÐ°Ð°Ñ‚] LT',
            lastDay : '[ÐšÐµÑ‡ÑÑ ÑÐ°Ð°Ñ‚] LT',
            lastWeek : '[Ó¨Ñ‚ÐºÓ©Ð½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ð½] dddd [ÐºÒ¯Ð½Ò¯] [ÑÐ°Ð°Ñ‚] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s Ð¸Ñ‡Ð¸Ð½Ð´Ðµ',
            past : '%s Ð¼ÑƒÑ€ÑƒÐ½',
            s : 'Ð±Ð¸Ñ€Ð½ÐµÑ‡Ðµ ÑÐµÐºÑƒÐ½Ð´',
            ss : '%d ÑÐµÐºÑƒÐ½Ð´',
            m : 'Ð±Ð¸Ñ€ Ð¼Ò¯Ð½Ó©Ñ‚',
            mm : '%d Ð¼Ò¯Ð½Ó©Ñ‚',
            h : 'Ð±Ð¸Ñ€ ÑÐ°Ð°Ñ‚',
            hh : '%d ÑÐ°Ð°Ñ‚',
            d : 'Ð±Ð¸Ñ€ ÐºÒ¯Ð½',
            dd : '%d ÐºÒ¯Ð½',
            M : 'Ð±Ð¸Ñ€ Ð°Ð¹',
            MM : '%d Ð°Ð¹',
            y : 'Ð±Ð¸Ñ€ Ð¶Ñ‹Ð»',
            yy : '%d Ð¶Ñ‹Ð»'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(Ñ‡Ð¸|Ñ‡Ñ‹|Ñ‡Ò¯|Ñ‡Ñƒ)/,
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
        months: 'Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays: 'Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa'.split('_'),
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
            lastDay: '[GÃ«schter um] LT',
            lastWeek: function () {
                // Different date string for 'DÃ«nschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
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
            MM : '%d MÃ©int',
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
        months : 'àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²'.split('_'),
        monthsShort : 'àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²'.split('_'),
        weekdays : 'àº­àº²àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²'.split('_'),
        weekdaysShort : 'àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²'.split('_'),
        weekdaysMin : 'àº—_àºˆ_àº­àº„_àºž_àºžàº«_àºªàº_àºª'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'àº§àº±àº™dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /àº•àº­àº™à»€àºŠàº»à»‰àº²|àº•àº­àº™à»àº¥àº‡/,
        isPM: function (input) {
            return input === 'àº•àº­àº™à»àº¥àº‡';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'àº•àº­àº™à»€àºŠàº»à»‰àº²';
            } else {
                return 'àº•àº­àº™à»àº¥àº‡';
            }
        },
        calendar : {
            sameDay : '[àº¡àº·à»‰àº™àºµà»‰à»€àº§àº¥àº²] LT',
            nextDay : '[àº¡àº·à»‰àº­àº·à»ˆàº™à»€àº§àº¥àº²] LT',
            nextWeek : '[àº§àº±àº™]dddd[à»œà»‰àº²à»€àº§àº¥àº²] LT',
            lastDay : '[àº¡àº·à»‰àº§àº²àº™àº™àºµà»‰à»€àº§àº¥àº²] LT',
            lastWeek : '[àº§àº±àº™]dddd[à»àº¥à»‰àº§àº™àºµà»‰à»€àº§àº¥àº²] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'àº­àºµàº %s',
            past : '%sàºœà»ˆàº²àº™àº¡àº²',
            s : 'àºšà»à»ˆà»€àº—àº»à»ˆàº²à»ƒàº”àº§àº´àº™àº²àº—àºµ',
            ss : '%d àº§àº´àº™àº²àº—àºµ' ,
            m : '1 àº™àº²àº—àºµ',
            mm : '%d àº™àº²àº—àºµ',
            h : '1 àºŠàº»à»ˆàº§à»‚àº¡àº‡',
            hh : '%d àºŠàº»à»ˆàº§à»‚àº¡àº‡',
            d : '1 àº¡àº·à»‰',
            dd : '%d àº¡àº·à»‰',
            M : '1 à»€àº”àº·àº­àº™',
            MM : '%d à»€àº”àº·àº­àº™',
            y : '1 àº›àºµ',
            yy : '%d àº›àºµ'
        },
        dayOfMonthOrdinalParse: /(àº—àºµà»ˆ)\d{1,2}/,
        ordinal : function (number) {
            return 'àº—àºµà»ˆ' + number;
        }
    });

    //! moment.js locale configuration

    var units = {
        'ss' : 'sekundÄ—_sekundÅ¾iÅ³_sekundes',
        'm' : 'minutÄ—_minutÄ—s_minutÄ™',
        'mm': 'minutÄ—s_minuÄiÅ³_minutes',
        'h' : 'valanda_valandos_valandÄ…',
        'hh': 'valandos_valandÅ³_valandas',
        'd' : 'diena_dienos_dienÄ…',
        'dd': 'dienos_dienÅ³_dienas',
        'M' : 'mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯',
        'MM': 'mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius',
        'y' : 'metai_metÅ³_metus',
        'yy': 'metai_metÅ³_metus'
    };
    function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
            return 'kelios sekundÄ—s';
        } else {
            return isFuture ? 'keliÅ³ sekundÅ¾iÅ³' : 'kelias sekundes';
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
            format: 'sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_geguÅ¾Ä—_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄ—jis_spalis_lapkritis_gruodis'.split('_'),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays : {
            format: 'sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis'.split('_'),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡'.split('_'),
        weekdaysMin : 'S_P_A_T_K_Pn_Å '.split('_'),
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
            sameDay : '[Å iandien] LT',
            nextDay : '[Rytoj] LT',
            nextWeek : 'dddd LT',
            lastDay : '[Vakar] LT',
            lastWeek : '[PraÄ—jusÄ¯] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'po %s',
            past : 'prieÅ¡ %s',
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
        'ss': 'sekundes_sekundÄ“m_sekunde_sekundes'.split('_'),
        'm': 'minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes'.split('_'),
        'mm': 'minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes'.split('_'),
        'h': 'stundas_stundÄm_stunda_stundas'.split('_'),
        'hh': 'stundas_stundÄm_stunda_stundas'.split('_'),
        'd': 'dienas_dienÄm_diena_dienas'.split('_'),
        'dd': 'dienas_dienÄm_diena_dienas'.split('_'),
        'M': 'mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i'.split('_'),
        'MM': 'mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i'.split('_'),
        'y': 'gada_gadiem_gads_gadi'.split('_'),
        'yy': 'gada_gadiem_gads_gadi'.split('_')
    };
    /**
     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
     */
    function format(forms, number, withoutSuffix) {
        if (withoutSuffix) {
            // E.g. "21 minÅ«te", "3 minÅ«tes".
            return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
        } else {
            // E.g. "21 minÅ«tes" as in "pÄ“c 21 minÅ«tes".
            // E.g. "3 minÅ«tÄ“m" as in "pÄ“c 3 minÅ«tÄ“m".
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
        return withoutSuffix ? 'daÅ¾as sekundes' : 'daÅ¾Äm sekundÄ“m';
    }

    moment.defineLocale('lv', {
        months : 'janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena'.split('_'),
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
            sameDay : '[Å odien pulksten] LT',
            nextDay : '[RÄ«t pulksten] LT',
            nextWeek : 'dddd [pulksten] LT',
            lastDay : '[Vakar pulksten] LT',
            lastWeek : '[PagÄjuÅ¡Ä] dddd [pulksten] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'pÄ“c %s',
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
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._Äet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_Äe_pe_su'.split('_'),
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
            lastDay  : '[juÄe u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[proÅ¡le] [nedjelje] [u] LT',
                    '[proÅ¡log] [ponedjeljka] [u] LT',
                    '[proÅ¡log] [utorka] [u] LT',
                    '[proÅ¡le] [srijede] [u] LT',
                    '[proÅ¡log] [Äetvrtka] [u] LT',
                    '[proÅ¡log] [petka] [u] LT',
                    '[proÅ¡le] [subote] [u] LT'
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
        months: 'Kohi-tÄte_Hui-tanguru_PoutÅ«-te-rangi_Paenga-whÄwhÄ_Haratua_Pipiri_HÅngoingoi_Here-turi-kÅkÄ_Mahuru_Whiringa-Ä-nuku_Whiringa-Ä-rangi_Hakihea'.split('_'),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_HÅngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'RÄtapu_Mane_TÅ«rei_Wenerei_TÄite_Paraire_HÄtarei'.split('_'),
        weekdaysShort: 'Ta_Ma_TÅ«_We_TÄi_Pa_HÄ'.split('_'),
        weekdaysMin: 'Ta_Ma_TÅ«_We_TÄi_Pa_HÄ'.split('_'),
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
            s: 'te hÄ“kona ruarua',
            ss: '%d hÄ“kona',
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
        dayOfMonthOrdinalParse: /\d{1,2}Âº/,
        ordinal: '%dÂº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('mk', {
        months : 'Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸'.split('_'),
        monthsShort : 'Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº'.split('_'),
        weekdays : 'Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°'.split('_'),
        weekdaysShort : 'Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±'.split('_'),
        weekdaysMin : 'Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT',
            nextDay : '[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT',
            nextWeek : '[Ð’Ð¾] dddd [Ð²Ð¾] LT',
            lastDay : '[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Ð¿Ð¾ÑÐ»Ðµ %s',
            past : 'Ð¿Ñ€ÐµÐ´ %s',
            s : 'Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸',
            ss : '%d ÑÐµÐºÑƒÐ½Ð´Ð¸',
            m : 'Ð¼Ð¸Ð½ÑƒÑ‚Ð°',
            mm : '%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸',
            h : 'Ñ‡Ð°Ñ',
            hh : '%d Ñ‡Ð°ÑÐ°',
            d : 'Ð´ÐµÐ½',
            dd : '%d Ð´ÐµÐ½Ð°',
            M : 'Ð¼ÐµÑÐµÑ†',
            MM : '%d Ð¼ÐµÑÐµÑ†Ð¸',
            y : 'Ð³Ð¾Ð´Ð¸Ð½Ð°',
            yy : '%d Ð³Ð¾Ð´Ð¸Ð½Ð¸'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-ÐµÐ²';
            } else if (last2Digits === 0) {
                return number + '-ÐµÐ½';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-Ñ‚Ð¸';
            } else if (lastDigit === 1) {
                return number + '-Ð²Ð¸';
            } else if (lastDigit === 2) {
                return number + '-Ñ€Ð¸';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-Ð¼Ð¸';
            } else {
                return number + '-Ñ‚Ð¸';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('ml', {
        months : 'à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼'.split('_'),
        monthsShort : 'à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.'.split('_'),
        monthsParseExact : true,
        weekdays : 'à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š'.split('_'),
        weekdaysShort : 'à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿'.split('_'),
        weekdaysMin : 'à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶'.split('_'),
        longDateFormat : {
            LT : 'A h:mm -à´¨àµ',
            LTS : 'A h:mm:ss -à´¨àµ',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm -à´¨àµ',
            LLLL : 'dddd, D MMMM YYYY, A h:mm -à´¨àµ'
        },
        calendar : {
            sameDay : '[à´‡à´¨àµà´¨àµ] LT',
            nextDay : '[à´¨à´¾à´³àµ†] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à´‡à´¨àµà´¨à´²àµ†] LT',
            lastWeek : '[à´•à´´à´¿à´žàµà´ž] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à´•à´´à´¿à´žàµà´žàµ',
            past : '%s à´®àµàµ»à´ªàµ',
            s : 'à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾',
            ss : '%d à´¸àµ†à´•àµà´•àµ»à´¡àµ',
            m : 'à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ',
            mm : '%d à´®à´¿à´¨à´¿à´±àµà´±àµ',
            h : 'à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼',
            hh : '%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼',
            d : 'à´’à´°àµ à´¦à´¿à´µà´¸à´‚',
            dd : '%d à´¦à´¿à´µà´¸à´‚',
            M : 'à´’à´°àµ à´®à´¾à´¸à´‚',
            MM : '%d à´®à´¾à´¸à´‚',
            y : 'à´’à´°àµ à´µàµ¼à´·à´‚',
            yy : '%d à´µàµ¼à´·à´‚'
        },
        meridiemParse: /à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ†|à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿/i,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'à´°à´¾à´¤àµà´°à´¿' && hour >= 4) ||
                    meridiem === 'à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ' ||
                    meridiem === 'à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à´°à´¾à´¤àµà´°à´¿';
            } else if (hour < 12) {
                return 'à´°à´¾à´µà´¿à´²àµ†';
            } else if (hour < 17) {
                return 'à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ';
            } else if (hour < 20) {
                return 'à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚';
            } else {
                return 'à´°à´¾à´¤àµà´°à´¿';
            }
        }
    });

    //! moment.js locale configuration

    function translate$7(number, withoutSuffix, key, isFuture) {
        switch (key) {
            case 's':
                return withoutSuffix ? 'Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´' : 'Ñ…ÑÐ´Ñ…ÑÐ½ ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½';
            case 'ss':
                return number + (withoutSuffix ? ' ÑÐµÐºÑƒÐ½Ð´' : ' ÑÐµÐºÑƒÐ½Ð´Ñ‹Ð½');
            case 'm':
            case 'mm':
                return number + (withoutSuffix ? ' Ð¼Ð¸Ð½ÑƒÑ‚' : ' Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹Ð½');
            case 'h':
            case 'hh':
                return number + (withoutSuffix ? ' Ñ†Ð°Ð³' : ' Ñ†Ð°Ð³Ð¸Ð¹Ð½');
            case 'd':
            case 'dd':
                return number + (withoutSuffix ? ' Ó©Ð´Ó©Ñ€' : ' Ó©Ð´Ñ€Ð¸Ð¹Ð½');
            case 'M':
            case 'MM':
                return number + (withoutSuffix ? ' ÑÐ°Ñ€' : ' ÑÐ°Ñ€Ñ‹Ð½');
            case 'y':
            case 'yy':
                return number + (withoutSuffix ? ' Ð¶Ð¸Ð»' : ' Ð¶Ð¸Ð»Ð¸Ð¹Ð½');
            default:
                return number;
        }
    }

    moment.defineLocale('mn', {
        months : 'ÐÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¥Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð“ÑƒÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ó©Ñ€Ó©Ð²Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_Ð¢Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð—ÑƒÑ€Ð³Ð°Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð”Ð¾Ð»Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÐ°Ð¹Ð¼Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_Ð•ÑÐ´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð°Ð²Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ð½ÑÐ³Ð´Ò¯Ð³ÑÑÑ€ ÑÐ°Ñ€_ÐÑ€Ð²Ð°Ð½ Ñ…Ð¾Ñ‘Ñ€Ð´ÑƒÐ³Ð°Ð°Ñ€ ÑÐ°Ñ€'.split('_'),
        monthsShort : '1 ÑÐ°Ñ€_2 ÑÐ°Ñ€_3 ÑÐ°Ñ€_4 ÑÐ°Ñ€_5 ÑÐ°Ñ€_6 ÑÐ°Ñ€_7 ÑÐ°Ñ€_8 ÑÐ°Ñ€_9 ÑÐ°Ñ€_10 ÑÐ°Ñ€_11 ÑÐ°Ñ€_12 ÑÐ°Ñ€'.split('_'),
        monthsParseExact : true,
        weekdays : 'ÐÑÐ¼_Ð”Ð°Ð²Ð°Ð°_ÐœÑÐ³Ð¼Ð°Ñ€_Ð›Ñ…Ð°Ð³Ð²Ð°_ÐŸÒ¯Ñ€ÑÐ²_Ð‘Ð°Ð°ÑÐ°Ð½_Ð‘ÑÐ¼Ð±Ð°'.split('_'),
        weekdaysShort : 'ÐÑÐ¼_Ð”Ð°Ð²_ÐœÑÐ³_Ð›Ñ…Ð°_ÐŸÒ¯Ñ€_Ð‘Ð°Ð°_Ð‘ÑÐ¼'.split('_'),
        weekdaysMin : 'ÐÑ_Ð”Ð°_ÐœÑ_Ð›Ñ…_ÐŸÒ¯_Ð‘Ð°_Ð‘Ñ'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D',
            LLL : 'YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm',
            LLLL : 'dddd, YYYY Ð¾Ð½Ñ‹ MMMMÑ‹Ð½ D HH:mm'
        },
        meridiemParse: /Ò®Ó¨|Ò®Ð¥/i,
        isPM : function (input) {
            return input === 'Ò®Ð¥';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'Ò®Ó¨';
            } else {
                return 'Ò®Ð¥';
            }
        },
        calendar : {
            sameDay : '[Ó¨Ð½Ó©Ó©Ð´Ó©Ñ€] LT',
            nextDay : '[ÐœÐ°Ñ€Ð³Ð°Ð°Ñˆ] LT',
            nextWeek : '[Ð˜Ñ€ÑÑ…] dddd LT',
            lastDay : '[Ó¨Ñ‡Ð¸Ð³Ð´Ó©Ñ€] LT',
            lastWeek : '[Ó¨Ð½Ð³Ó©Ñ€ÑÓ©Ð½] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s Ð´Ð°Ñ€Ð°Ð°',
            past : '%s Ó©Ð¼Ð½Ó©',
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
        dayOfMonthOrdinalParse: /\d{1,2} Ó©Ð´Ó©Ñ€/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + ' Ó©Ð´Ó©Ñ€';
                default:
                    return number;
            }
        }
    });

    //! moment.js locale configuration

    var symbolMap$b = {
        '1': 'à¥§',
        '2': 'à¥¨',
        '3': 'à¥©',
        '4': 'à¥ª',
        '5': 'à¥«',
        '6': 'à¥¬',
        '7': 'à¥­',
        '8': 'à¥®',
        '9': 'à¥¯',
        '0': 'à¥¦'
    },
    numberMap$a = {
        'à¥§': '1',
        'à¥¨': '2',
        'à¥©': '3',
        'à¥ª': '4',
        'à¥«': '5',
        'à¥¬': '6',
        'à¥­': '7',
        'à¥®': '8',
        'à¥¯': '9',
        'à¥¦': '0'
    };

    function relativeTimeMr(number, withoutSuffix, string, isFuture)
    {
        var output = '';
        if (withoutSuffix) {
            switch (string) {
                case 's': output = 'à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦'; break;
                case 'ss': output = '%d à¤¸à¥‡à¤•à¤‚à¤¦'; break;
                case 'm': output = 'à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ'; break;
                case 'mm': output = '%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡'; break;
                case 'h': output = 'à¤à¤• à¤¤à¤¾à¤¸'; break;
                case 'hh': output = '%d à¤¤à¤¾à¤¸'; break;
                case 'd': output = 'à¤à¤• à¤¦à¤¿à¤µà¤¸'; break;
                case 'dd': output = '%d à¤¦à¤¿à¤µà¤¸'; break;
                case 'M': output = 'à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾'; break;
                case 'MM': output = '%d à¤®à¤¹à¤¿à¤¨à¥‡'; break;
                case 'y': output = 'à¤à¤• à¤µà¤°à¥à¤·'; break;
                case 'yy': output = '%d à¤µà¤°à¥à¤·à¥‡'; break;
            }
        }
        else {
            switch (string) {
                case 's': output = 'à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚'; break;
                case 'ss': output = '%d à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚'; break;
                case 'm': output = 'à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾'; break;
                case 'mm': output = '%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚'; break;
                case 'h': output = 'à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾'; break;
                case 'hh': output = '%d à¤¤à¤¾à¤¸à¤¾à¤‚'; break;
                case 'd': output = 'à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾'; break;
                case 'dd': output = '%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚'; break;
                case 'M': output = 'à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾'; break;
                case 'MM': output = '%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚'; break;
                case 'y': output = 'à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾'; break;
                case 'yy': output = '%d à¤µà¤°à¥à¤·à¤¾à¤‚'; break;
            }
        }
        return output.replace(/%d/i, number);
    }

    moment.defineLocale('mr', {
        months : 'à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°'.split('_'),
        monthsShort: 'à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.'.split('_'),
        monthsParseExact : true,
        weekdays : 'à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°'.split('_'),
        weekdaysShort : 'à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿'.split('_'),
        weekdaysMin : 'à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶'.split('_'),
        longDateFormat : {
            LT : 'A h:mm à¤µà¤¾à¤œà¤¤à¤¾',
            LTS : 'A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾',
            LLLL : 'dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾'
        },
        calendar : {
            sameDay : '[à¤†à¤œ] LT',
            nextDay : '[à¤‰à¤¦à¥à¤¯à¤¾] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à¤•à¤¾à¤²] LT',
            lastWeek: '[à¤®à¤¾à¤—à¥€à¤²] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future: '%sà¤®à¤§à¥à¤¯à¥‡',
            past: '%sà¤ªà¥‚à¤°à¥à¤µà¥€',
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
            return string.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (match) {
                return numberMap$a[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$b[match];
            });
        },
        meridiemParse: /à¤°à¤¾à¤¤à¥à¤°à¥€|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'à¤°à¤¾à¤¤à¥à¤°à¥€') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'à¤¸à¤•à¤¾à¤³à¥€') {
                return hour;
            } else if (meridiem === 'à¤¦à¥à¤ªà¤¾à¤°à¥€') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à¤°à¤¾à¤¤à¥à¤°à¥€';
            } else if (hour < 10) {
                return 'à¤¸à¤•à¤¾à¤³à¥€';
            } else if (hour < 17) {
                return 'à¤¦à¥à¤ªà¤¾à¤°à¥€';
            } else if (hour < 20) {
                return 'à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€';
            } else {
                return 'à¤°à¤¾à¤¤à¥à¤°à¥€';
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
        months : 'Jannar_Frar_Marzu_April_Mejju_Ä unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_DiÄ‹embru'.split('_'),
        monthsShort : 'Jan_Fra_Mar_Apr_Mej_Ä un_Lul_Aww_Set_Ott_Nov_DiÄ‹'.split('_'),
        weekdays : 'Il-Ä¦add_It-Tnejn_It-Tlieta_L-ErbgÄ§a_Il-Ä¦amis_Il-Ä imgÄ§a_Is-Sibt'.split('_'),
        weekdaysShort : 'Ä¦ad_Tne_Tli_Erb_Ä¦am_Ä im_Sib'.split('_'),
        weekdaysMin : 'Ä¦a_Tn_Tl_Er_Ä¦a_Ä i_Si'.split('_'),
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
            nextDay : '[GÄ§ada fil-]LT',
            nextWeek : 'dddd [fil-]LT',
            lastDay : '[Il-bieraÄ§ fil-]LT',
            lastWeek : 'dddd [li gÄ§adda] [fil-]LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'fâ€™ %s',
            past : '%s ilu',
            s : 'ftit sekondi',
            ss : '%d sekondi',
            m : 'minuta',
            mm : '%d minuti',
            h : 'siegÄ§a',
            hh : '%d siegÄ§at',
            d : 'Ä¡urnata',
            dd : '%d Ä¡ranet',
            M : 'xahar',
            MM : '%d xhur',
            y : 'sena',
            yy : '%d sni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}Âº/,
        ordinal: '%dÂº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var symbolMap$c = {
        '1': 'á',
        '2': 'á‚',
        '3': 'áƒ',
        '4': 'á„',
        '5': 'á…',
        '6': 'á†',
        '7': 'á‡',
        '8': 'áˆ',
        '9': 'á‰',
        '0': 'á€'
    }, numberMap$b = {
        'á': '1',
        'á‚': '2',
        'áƒ': '3',
        'á„': '4',
        'á…': '5',
        'á†': '6',
        'á‡': '7',
        'áˆ': '8',
        'á‰': '9',
        'á€': '0'
    };

    moment.defineLocale('my', {
        months: 'á€‡á€”á€ºá€”á€á€«á€›á€®_á€–á€±á€–á€±á€¬á€ºá€á€«á€›á€®_á€™á€á€º_á€§á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€‡á€°á€œá€­á€¯á€„á€º_á€žá€¼á€‚á€¯á€á€º_á€…á€€á€ºá€á€„á€ºá€˜á€¬_á€¡á€±á€¬á€€á€ºá€á€­á€¯á€˜á€¬_á€”á€­á€¯á€á€„á€ºá€˜á€¬_á€’á€®á€‡á€„á€ºá€˜á€¬'.split('_'),
        monthsShort: 'á€‡á€”á€º_á€–á€±_á€™á€á€º_á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€œá€­á€¯á€„á€º_á€žá€¼_á€…á€€á€º_á€¡á€±á€¬á€€á€º_á€”á€­á€¯_á€’á€®'.split('_'),
        weekdays: 'á€á€”á€„á€ºá€¹á€‚á€”á€½á€±_á€á€”á€„á€ºá€¹á€œá€¬_á€¡á€„á€ºá€¹á€‚á€«_á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸_á€€á€¼á€¬á€žá€•á€á€±á€¸_á€žá€±á€¬á€€á€¼á€¬_á€…á€”á€±'.split('_'),
        weekdaysShort: 'á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±'.split('_'),
        weekdaysMin: 'á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±'.split('_'),

        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[á€šá€”á€±.] LT [á€™á€¾á€¬]',
            nextDay: '[á€™á€”á€€á€ºá€–á€¼á€”á€º] LT [á€™á€¾á€¬]',
            nextWeek: 'dddd LT [á€™á€¾á€¬]',
            lastDay: '[á€™á€”á€±.á€€] LT [á€™á€¾á€¬]',
            lastWeek: '[á€•á€¼á€®á€¸á€á€²á€·á€žá€±á€¬] dddd LT [á€™á€¾á€¬]',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'á€œá€¬á€™á€Šá€ºá€· %s á€™á€¾á€¬',
            past: 'á€œá€½á€”á€ºá€á€²á€·á€žá€±á€¬ %s á€€',
            s: 'á€…á€€á€¹á€€á€”á€º.á€¡á€”á€Šá€ºá€¸á€„á€šá€º',
            ss : '%d á€…á€€á€¹á€€á€”á€·á€º',
            m: 'á€á€…á€ºá€™á€­á€”á€…á€º',
            mm: '%d á€™á€­á€”á€…á€º',
            h: 'á€á€…á€ºá€”á€¬á€›á€®',
            hh: '%d á€”á€¬á€›á€®',
            d: 'á€á€…á€ºá€›á€€á€º',
            dd: '%d á€›á€€á€º',
            M: 'á€á€…á€ºá€œ',
            MM: '%d á€œ',
            y: 'á€á€…á€ºá€”á€¾á€…á€º',
            yy: '%d á€”á€¾á€…á€º'
        },
        preparse: function (string) {
            return string.replace(/[áá‚áƒá„á…á†á‡áˆá‰á€]/g, function (match) {
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
        weekdays : 'sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag'.split('_'),
        weekdaysShort : 'sÃ¸._ma._ti._on._to._fr._lÃ¸.'.split('_'),
        weekdaysMin : 'sÃ¸_ma_ti_on_to_fr_lÃ¸'.split('_'),
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
            lastDay: '[i gÃ¥r kl.] LT',
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
            M : 'en mÃ¥ned',
            MM : '%d mÃ¥neder',
            y : 'ett Ã¥r',
            yy : '%d Ã¥r'
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
        '1': 'à¥§',
        '2': 'à¥¨',
        '3': 'à¥©',
        '4': 'à¥ª',
        '5': 'à¥«',
        '6': 'à¥¬',
        '7': 'à¥­',
        '8': 'à¥®',
        '9': 'à¥¯',
        '0': 'à¥¦'
    },
    numberMap$c = {
        'à¥§': '1',
        'à¥¨': '2',
        'à¥©': '3',
        'à¥ª': '4',
        'à¥«': '5',
        'à¥¬': '6',
        'à¥­': '7',
        'à¥®': '8',
        'à¥¯': '9',
        'à¥¦': '0'
    };

    moment.defineLocale('ne', {
        months : 'à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°'.split('_'),
        monthsShort : 'à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.'.split('_'),
        monthsParseExact : true,
        weekdays : 'à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°'.split('_'),
        weekdaysShort : 'à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.'.split('_'),
        weekdaysMin : 'à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡',
            LTS : 'Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡',
            LLLL : 'dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡'
        },
        preparse: function (string) {
            return string.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (match) {
                return numberMap$c[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$d[match];
            });
        },
        meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'à¤°à¤¾à¤¤à¤¿') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'à¤¬à¤¿à¤¹à¤¾à¤¨') {
                return hour;
            } else if (meridiem === 'à¤¦à¤¿à¤‰à¤à¤¸à¥‹') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'à¤¸à¤¾à¤à¤') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 3) {
                return 'à¤°à¤¾à¤¤à¤¿';
            } else if (hour < 12) {
                return 'à¤¬à¤¿à¤¹à¤¾à¤¨';
            } else if (hour < 16) {
                return 'à¤¦à¤¿à¤‰à¤à¤¸à¥‹';
            } else if (hour < 20) {
                return 'à¤¸à¤¾à¤à¤';
            } else {
                return 'à¤°à¤¾à¤¤à¤¿';
            }
        },
        calendar : {
            sameDay : '[à¤†à¤œ] LT',
            nextDay : '[à¤­à¥‹à¤²à¤¿] LT',
            nextWeek : '[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT',
            lastDay : '[à¤¹à¤¿à¤œà¥‹] LT',
            lastWeek : '[à¤—à¤à¤•à¥‹] dddd[,] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sà¤®à¤¾',
            past : '%s à¤…à¤—à¤¾à¤¡à¤¿',
            s : 'à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£',
            ss : '%d à¤¸à¥‡à¤•à¥‡à¤£à¥à¤¡',
            m : 'à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ',
            mm : '%d à¤®à¤¿à¤¨à¥‡à¤Ÿ',
            h : 'à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾',
            hh : '%d à¤˜à¤£à¥à¤Ÿà¤¾',
            d : 'à¤à¤• à¤¦à¤¿à¤¨',
            dd : '%d à¤¦à¤¿à¤¨',
            M : 'à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾',
            MM : '%d à¤®à¤¹à¤¿à¤¨à¤¾',
            y : 'à¤à¤• à¤¬à¤°à¥à¤·',
            yy : '%d à¤¬à¤°à¥à¤·'
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
            m : 'Ã©Ã©n minuut',
            mm : '%d minuten',
            h : 'Ã©Ã©n uur',
            hh : '%d uur',
            d : 'Ã©Ã©n dag',
            dd : '%d dagen',
            M : 'Ã©Ã©n maand',
            MM : '%d maanden',
            y : 'Ã©Ã©n jaar',
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
            m : 'Ã©Ã©n minuut',
            mm : '%d minuten',
            h : 'Ã©Ã©n uur',
            hh : '%d uur',
            d : 'Ã©Ã©n dag',
            dd : '%d dagen',
            M : 'Ã©Ã©n maand',
            MM : '%d maanden',
            y : 'Ã©Ã©n jaar',
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
        weekdays : 'sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort : 'sun_mÃ¥n_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin : 'su_mÃ¥_ty_on_to_fr_lÃ¸'.split('_'),
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
            lastDay: '[I gÃ¥r klokka] LT',
            lastWeek: '[FÃ¸regÃ¥ande] dddd [klokka] LT',
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
            M : 'ein mÃ¥nad',
            MM : '%d mÃ¥nader',
            y : 'eit Ã¥r',
            yy : '%d Ã¥r'
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
        '1': 'à©§',
        '2': 'à©¨',
        '3': 'à©©',
        '4': 'à©ª',
        '5': 'à©«',
        '6': 'à©¬',
        '7': 'à©­',
        '8': 'à©®',
        '9': 'à©¯',
        '0': 'à©¦'
    },
    numberMap$d = {
        'à©§': '1',
        'à©¨': '2',
        'à©©': '3',
        'à©ª': '4',
        'à©«': '5',
        'à©¬': '6',
        'à©­': '7',
        'à©®': '8',
        'à©¯': '9',
        'à©¦': '0'
    };

    moment.defineLocale('pa-in', {
        // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
        months : 'à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°'.split('_'),
        monthsShort : 'à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°'.split('_'),
        weekdays : 'à¨à¨¤à¨µà¨¾à¨°_à¨¸à©‹à¨®à¨µà¨¾à¨°_à¨®à©°à¨—à¨²à¨µà¨¾à¨°_à¨¬à©à¨§à¨µà¨¾à¨°_à¨µà©€à¨°à¨µà¨¾à¨°_à¨¸à¨¼à©à©±à¨•à¨°à¨µà¨¾à¨°_à¨¸à¨¼à¨¨à©€à¨šà¨°à¨µà¨¾à¨°'.split('_'),
        weekdaysShort : 'à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€'.split('_'),
        weekdaysMin : 'à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€'.split('_'),
        longDateFormat : {
            LT : 'A h:mm à¨µà¨œà©‡',
            LTS : 'A h:mm:ss à¨µà¨œà©‡',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm à¨µà¨œà©‡',
            LLLL : 'dddd, D MMMM YYYY, A h:mm à¨µà¨œà©‡'
        },
        calendar : {
            sameDay : '[à¨…à¨œ] LT',
            nextDay : '[à¨•à¨²] LT',
            nextWeek : '[à¨…à¨—à¨²à¨¾] dddd, LT',
            lastDay : '[à¨•à¨²] LT',
            lastWeek : '[à¨ªà¨¿à¨›à¨²à©‡] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à¨µà¨¿à©±à¨š',
            past : '%s à¨ªà¨¿à¨›à¨²à©‡',
            s : 'à¨•à©à¨ à¨¸à¨•à¨¿à©°à¨Ÿ',
            ss : '%d à¨¸à¨•à¨¿à©°à¨Ÿ',
            m : 'à¨‡à¨• à¨®à¨¿à©°à¨Ÿ',
            mm : '%d à¨®à¨¿à©°à¨Ÿ',
            h : 'à¨‡à©±à¨• à¨˜à©°à¨Ÿà¨¾',
            hh : '%d à¨˜à©°à¨Ÿà©‡',
            d : 'à¨‡à©±à¨• à¨¦à¨¿à¨¨',
            dd : '%d à¨¦à¨¿à¨¨',
            M : 'à¨‡à©±à¨• à¨®à¨¹à©€à¨¨à¨¾',
            MM : '%d à¨®à¨¹à©€à¨¨à©‡',
            y : 'à¨‡à©±à¨• à¨¸à¨¾à¨²',
            yy : '%d à¨¸à¨¾à¨²'
        },
        preparse: function (string) {
            return string.replace(/[à©§à©¨à©©à©ªà©«à©¬à©­à©®à©¯à©¦]/g, function (match) {
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
        meridiemParse: /à¨°à¨¾à¨¤|à¨¸à¨µà©‡à¨°|à¨¦à©à¨ªà¨¹à¨¿à¨°|à¨¸à¨¼à¨¾à¨®/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'à¨°à¨¾à¨¤') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'à¨¸à¨µà©‡à¨°') {
                return hour;
            } else if (meridiem === 'à¨¦à©à¨ªà¨¹à¨¿à¨°') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'à¨¸à¨¼à¨¾à¨®') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à¨°à¨¾à¨¤';
            } else if (hour < 10) {
                return 'à¨¸à¨µà©‡à¨°';
            } else if (hour < 17) {
                return 'à¨¦à©à¨ªà¨¹à¨¿à¨°';
            } else if (hour < 20) {
                return 'à¨¸à¨¼à¨¾à¨®';
            } else {
                return 'à¨°à¨¾à¨¤';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    var monthsNominative = 'styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„'.split('_'),
        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia'.split('_');
    function plural$3(n) {
        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
    }
    function translate$8(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                return result + (plural$3(number) ? 'sekundy' : 'sekund');
            case 'm':
                return withoutSuffix ? 'minuta' : 'minutÄ™';
            case 'mm':
                return result + (plural$3(number) ? 'minuty' : 'minut');
            case 'h':
                return withoutSuffix  ? 'godzina'  : 'godzinÄ™';
            case 'hh':
                return result + (plural$3(number) ? 'godziny' : 'godzin');
            case 'MM':
                return result + (plural$3(number) ? 'miesiÄ…ce' : 'miesiÄ™cy');
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
        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru'.split('_'),
        weekdays : 'niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota'.split('_'),
        weekdaysShort : 'ndz_pon_wt_Å›r_czw_pt_sob'.split('_'),
        weekdaysMin : 'Nd_Pn_Wt_Åšr_Cz_Pt_So'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[DziÅ› o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W niedzielÄ™ o] LT';

                    case 2:
                        return '[We wtorek o] LT';

                    case 3:
                        return '[W Å›rodÄ™ o] LT';

                    case 6:
                        return '[W sobotÄ™ o] LT';

                    default:
                        return '[W] dddd [o] LT';
                }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W zeszÅ‚Ä… niedzielÄ™ o] LT';
                    case 3:
                        return '[W zeszÅ‚Ä… Å›rodÄ™ o] LT';
                    case 6:
                        return '[W zeszÅ‚Ä… sobotÄ™ o] LT';
                    default:
                        return '[W zeszÅ‚y] dddd [o] LT';
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
            d : '1 dzieÅ„',
            dd : '%d dni',
            M : 'miesiÄ…c',
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
        months : 'Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b'.split('_'),
        weekdaysMin : 'Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [Ã s] HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm'
        },
        calendar : {
            sameDay: '[Hoje Ã s] LT',
            nextDay: '[AmanhÃ£ Ã s] LT',
            nextWeek: 'dddd [Ã s] LT',
            lastDay: '[Ontem Ã s] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Ãšltimo] dddd [Ã s] LT' : // Saturday + Sunday
                    '[Ãšltima] dddd [Ã s] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'hÃ¡ %s',
            s : 'poucos segundos',
            ss : '%d segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mÃªs',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}Âº/,
        ordinal : '%dÂº'
    });

    //! moment.js locale configuration

    moment.defineLocale('pt', {
        months : 'Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b'.split('_'),
        weekdaysMin : 'Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡'.split('_'),
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
            sameDay: '[Hoje Ã s] LT',
            nextDay: '[AmanhÃ£ Ã s] LT',
            nextWeek: 'dddd [Ã s] LT',
            lastDay: '[Ontem Ã s] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Ãšltimo] dddd [Ã s] LT' : // Saturday + Sunday
                    '[Ãšltima] dddd [Ã s] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'hÃ¡ %s',
            s : 'segundos',
            ss : '%d segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mÃªs',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}Âº/,
        ordinal : '%dÂº',
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
        weekdays : 'duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ'.split('_'),
        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m'.split('_'),
        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_SÃ¢'.split('_'),
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
            nextDay: '[mÃ¢ine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'peste %s',
            past : '%s Ã®n urmÄƒ',
            s : 'cÃ¢teva secunde',
            ss : relativeTimeWithPlural$2,
            m : 'un minut',
            mm : relativeTimeWithPlural$2,
            h : 'o orÄƒ',
            hh : relativeTimeWithPlural$2,
            d : 'o zi',
            dd : relativeTimeWithPlural$2,
            M : 'o lunÄƒ',
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
            'ss': withoutSuffix ? 'ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´' : 'ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´',
            'mm': withoutSuffix ? 'Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚' : 'Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚',
            'hh': 'Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²',
            'dd': 'Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹',
            'MM': 'Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²',
            'yy': 'Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚'
        };
        if (key === 'm') {
            return withoutSuffix ? 'Ð¼Ð¸Ð½ÑƒÑ‚Ð°' : 'Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ';
        }
        else {
            return number + ' ' + plural$4(format[key], +number);
        }
    }
    var monthsParse$6 = [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i];

    // http://new.gramota.ru/spravka/rules/139-prop : Â§ 103
    // Ð¡Ð¾ÐºÑ€Ð°Ñ‰ÐµÐ½Ð¸Ñ Ð¼ÐµÑÑÑ†ÐµÐ²: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    moment.defineLocale('ru', {
        months : {
            format: 'ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ'.split('_'),
            standalone: 'ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ'.split('_')
        },
        monthsShort : {
            // Ð¿Ð¾ CLDR Ð¸Ð¼ÐµÐ½Ð½Ð¾ "Ð¸ÑŽÐ»." Ð¸ "Ð¸ÑŽÐ½.", Ð½Ð¾ ÐºÐ°ÐºÐ¾Ð¹ ÑÐ¼Ñ‹ÑÐ» Ð¼ÐµÐ½ÑÑ‚ÑŒ Ð±ÑƒÐºÐ²Ñƒ Ð½Ð° Ñ‚Ð¾Ñ‡ÐºÑƒ ?
            format: 'ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.'.split('_'),
            standalone: 'ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.'.split('_')
        },
        weekdays : {
            standalone: 'Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°'.split('_'),
            format: 'Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ'.split('_'),
            isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?\] ?dddd/
        },
        weekdaysShort : 'Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±'.split('_'),
        weekdaysMin : 'Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±'.split('_'),
        monthsParse : monthsParse$6,
        longMonthsParse : monthsParse$6,
        shortMonthsParse : monthsParse$6,

        // Ð¿Ð¾Ð»Ð½Ñ‹Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ñ Ñ Ð¿Ð°Ð´ÐµÐ¶Ð°Ð¼Ð¸, Ð¿Ð¾ Ñ‚Ñ€Ð¸ Ð±ÑƒÐºÐ²Ñ‹, Ð´Ð»Ñ Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ñ…, Ð¿Ð¾ 4 Ð±ÑƒÐºÐ²Ñ‹, ÑÐ¾ÐºÑ€Ð°Ñ‰ÐµÐ½Ð¸Ñ Ñ Ñ‚Ð¾Ñ‡ÐºÐ¾Ð¹ Ð¸ Ð±ÐµÐ· Ñ‚Ð¾Ñ‡ÐºÐ¸
        monthsRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,

        // ÐºÐ¾Ð¿Ð¸Ñ Ð¿Ñ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰ÐµÐ³Ð¾
        monthsShortRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,

        // Ð¿Ð¾Ð»Ð½Ñ‹Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ñ Ñ Ð¿Ð°Ð´ÐµÐ¶Ð°Ð¼Ð¸
        monthsStrictRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ])/i,

        // Ð’Ñ‹Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ, ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ðµ ÑÐ¾Ð¾Ñ‚Ð²ÐµÑÑ‚Ð²ÑƒÐµÑ‚ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ ÑÐ¾ÐºÑ€Ð°Ñ‰Ñ‘Ð½Ð½Ñ‹Ð¼ Ñ„Ð¾Ñ€Ð¼Ð°Ð¼
        monthsShortStrictRegex: /^(ÑÐ½Ð²\.|Ñ„ÐµÐ²Ñ€?\.|Ð¼Ð°Ñ€[Ñ‚.]|Ð°Ð¿Ñ€\.|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑŒÑ.]|Ð¸ÑŽÐ»[ÑŒÑ.]|Ð°Ð²Ð³\.|ÑÐµÐ½Ñ‚?\.|Ð¾ÐºÑ‚\.|Ð½Ð¾ÑÐ±?\.|Ð´ÐµÐº\.)/i,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY Ð³.',
            LLL : 'D MMMM YYYY Ð³., H:mm',
            LLLL : 'dddd, D MMMM YYYY Ð³., H:mm'
        },
        calendar : {
            sameDay: '[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ, Ð²] LT',
            nextDay: '[Ð—Ð°Ð²Ñ‚Ñ€Ð°, Ð²] LT',
            lastDay: '[Ð’Ñ‡ÐµÑ€Ð°, Ð²] LT',
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd, [Ð²] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd, [Ð²] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd, [Ð²] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Ð’Ð¾] dddd, [Ð²] LT';
                    } else {
                        return '[Ð’] dddd, [Ð²] LT';
                    }
                }
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd, [Ð²] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd, [Ð²] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd, [Ð²] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Ð’Ð¾] dddd, [Ð²] LT';
                    } else {
                        return '[Ð’] dddd, [Ð²] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'Ñ‡ÐµÑ€ÐµÐ· %s',
            past : '%s Ð½Ð°Ð·Ð°Ð´',
            s : 'Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´',
            ss : relativeTimeWithPlural$3,
            m : relativeTimeWithPlural$3,
            mm : relativeTimeWithPlural$3,
            h : 'Ñ‡Ð°Ñ',
            hh : relativeTimeWithPlural$3,
            d : 'Ð´ÐµÐ½ÑŒ',
            dd : relativeTimeWithPlural$3,
            M : 'Ð¼ÐµÑÑÑ†',
            MM : relativeTimeWithPlural$3,
            y : 'Ð³Ð¾Ð´',
            yy : relativeTimeWithPlural$3
        },
        meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
        isPM : function (input) {
            return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'Ð½Ð¾Ñ‡Ð¸';
            } else if (hour < 12) {
                return 'ÑƒÑ‚Ñ€Ð°';
            } else if (hour < 17) {
                return 'Ð´Ð½Ñ';
            } else {
                return 'Ð²ÐµÑ‡ÐµÑ€Ð°';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                    return number + '-Ð¹';
                case 'D':
                    return number + '-Ð³Ð¾';
                case 'w':
                case 'W':
                    return number + '-Ñ';
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
        'Ø¬Ù†ÙˆØ±ÙŠ',
        'ÙÙŠØ¨Ø±ÙˆØ±ÙŠ',
        'Ù…Ø§Ø±Ú†',
        'Ø§Ù¾Ø±ÙŠÙ„',
        'Ù…Ø¦ÙŠ',
        'Ø¬ÙˆÙ†',
        'Ø¬ÙˆÙ„Ø§Ø¡Ù',
        'Ø¢Ú¯Ø³Ù½',
        'Ø³ÙŠÙ¾Ù½Ù…Ø¨Ø±',
        'Ø¢ÚªÙ½ÙˆØ¨Ø±',
        'Ù†ÙˆÙ…Ø¨Ø±',
        'ÚŠØ³Ù…Ø¨Ø±'
    ];
    var days = [
        'Ø¢Ú†Ø±',
        'Ø³ÙˆÙ…Ø±',
        'Ø§Ú±Ø§Ø±Ùˆ',
        'Ø§Ø±Ø¨Ø¹',
        'Ø®Ù…ÙŠØ³',
        'Ø¬Ù…Ø¹',
        'Ú‡Ù†Ú‡Ø±'
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
            LLLL : 'ddddØŒ D MMMM YYYY HH:mm'
        },
        meridiemParse: /ØµØ¨Ø­|Ø´Ø§Ù…/,
        isPM : function (input) {
            return 'Ø´Ø§Ù…' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ØµØ¨Ø­';
            }
            return 'Ø´Ø§Ù…';
        },
        calendar : {
            sameDay : '[Ø§Ú„] LT',
            nextDay : '[Ø³Ú€Ø§Ú»ÙŠ] LT',
            nextWeek : 'dddd [Ø§Ú³ÙŠÙ† Ù‡ÙØªÙŠ ØªÙŠ] LT',
            lastDay : '[ÚªØ§Ù„Ù‡Ù‡] LT',
            lastWeek : '[Ú¯Ø²Ø±ÙŠÙ„ Ù‡ÙØªÙŠ] dddd [ØªÙŠ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s Ù¾ÙˆØ¡',
            past : '%s Ø§Ú³',
            s : 'Ú†Ù†Ø¯ Ø³ÙŠÚªÙ†ÚŠ',
            ss : '%d Ø³ÙŠÚªÙ†ÚŠ',
            m : 'Ù‡Úª Ù…Ù†Ù½',
            mm : '%d Ù…Ù†Ù½',
            h : 'Ù‡Úª ÚªÙ„Ø§Úª',
            hh : '%d ÚªÙ„Ø§Úª',
            d : 'Ù‡Úª ÚÙŠÙ†Ù‡Ù†',
            dd : '%d ÚÙŠÙ†Ù‡Ù†',
            M : 'Ù‡Úª Ù…Ù‡ÙŠÙ†Ùˆ',
            MM : '%d Ù…Ù‡ÙŠÙ†Ø§',
            y : 'Ù‡Úª Ø³Ø§Ù„',
            yy : '%d Ø³Ø§Ù„'
        },
        preparse: function (string) {
            return string.replace(/ØŒ/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, 'ØŒ');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    //! moment.js locale configuration

    moment.defineLocale('se', {
        months : 'oÄ‘Ä‘ajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅ‹omÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu'.split('_'),
        monthsShort : 'oÄ‘Ä‘j_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov'.split('_'),
        weekdays : 'sotnabeaivi_vuossÃ¡rga_maÅ‹Å‹ebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat'.split('_'),
        weekdaysShort : 'sotn_vuos_maÅ‹_gask_duor_bear_lÃ¡v'.split('_'),
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
            future : '%s geaÅ¾es',
            past : 'maÅ‹it %s',
            s : 'moadde sekunddat',
            ss: '%d sekunddat',
            m : 'okta minuhta',
            mm : '%d minuhtat',
            h : 'okta diimmu',
            hh : '%d diimmut',
            d : 'okta beaivi',
            dd : '%d beaivvit',
            M : 'okta mÃ¡nnu',
            MM : '%d mÃ¡nut',
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
        months : 'à¶¢à¶±à·€à·à¶»à·’_à¶´à·™à¶¶à¶»à·€à·à¶»à·’_à¶¸à·à¶»à·Šà¶­à·”_à¶…à¶´à·Šâ€à¶»à·šà¶½à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·à·ƒà·Šà¶­à·”_à·ƒà·à¶´à·Šà¶­à·à¶¸à·Šà¶¶à¶»à·Š_à¶”à¶šà·Šà¶­à·à¶¶à¶»à·Š_à¶±à·œà·€à·à¶¸à·Šà¶¶à¶»à·Š_à¶¯à·™à·ƒà·à¶¸à·Šà¶¶à¶»à·Š'.split('_'),
        monthsShort : 'à¶¢à¶±_à¶´à·™à¶¶_à¶¸à·à¶»à·Š_à¶…à¶´à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·_à·ƒà·à¶´à·Š_à¶”à¶šà·Š_à¶±à·œà·€à·_à¶¯à·™à·ƒà·'.split('_'),
        weekdays : 'à¶‰à¶»à·’à¶¯à·_à·ƒà¶³à·”à¶¯à·_à¶…à¶Ÿà·„à¶»à·”à·€à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·Šâ€à¶»à·„à·ƒà·Šà¶´à¶­à·’à¶±à·Šà¶¯à·_à·ƒà·’à¶šà·”à¶»à·à¶¯à·_à·ƒà·™à¶±à·ƒà·”à¶»à·à¶¯à·'.split('_'),
        weekdaysShort : 'à¶‰à¶»à·’_à·ƒà¶³à·”_à¶…à¶Ÿ_à¶¶à¶¯à·_à¶¶à·Šâ€à¶»à·„_à·ƒà·’à¶šà·”_à·ƒà·™à¶±'.split('_'),
        weekdaysMin : 'à¶‰_à·ƒ_à¶…_à¶¶_à¶¶à·Šâ€à¶»_à·ƒà·’_à·ƒà·™'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'a h:mm',
            LTS : 'a h:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY MMMM D',
            LLL : 'YYYY MMMM D, a h:mm',
            LLLL : 'YYYY MMMM D [à·€à·à¶±à·’] dddd, a h:mm:ss'
        },
        calendar : {
            sameDay : '[à¶…à¶¯] LT[à¶§]',
            nextDay : '[à·„à·™à¶§] LT[à¶§]',
            nextWeek : 'dddd LT[à¶§]',
            lastDay : '[à¶Šà¶ºà·š] LT[à¶§]',
            lastWeek : '[à¶´à·ƒà·”à¶œà·’à¶º] dddd LT[à¶§]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sà¶šà·’à¶±à·Š',
            past : '%sà¶šà¶§ à¶´à·™à¶»',
            s : 'à¶­à¶­à·Šà¶´à¶» à¶šà·’à·„à·’à¶´à¶º',
            ss : 'à¶­à¶­à·Šà¶´à¶» %d',
            m : 'à¶¸à·’à¶±à·’à¶­à·Šà¶­à·”à·€',
            mm : 'à¶¸à·’à¶±à·’à¶­à·Šà¶­à·” %d',
            h : 'à¶´à·à¶º',
            hh : 'à¶´à·à¶º %d',
            d : 'à¶¯à·’à¶±à¶º',
            dd : 'à¶¯à·’à¶± %d',
            M : 'à¶¸à·à·ƒà¶º',
            MM : 'à¶¸à·à·ƒ %d',
            y : 'à·€à·ƒà¶»',
            yy : 'à·€à·ƒà¶» %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2} à·€à·à¶±à·’/,
        ordinal : function (number) {
            return number + ' à·€à·à¶±à·’';
        },
        meridiemParse : /à¶´à·™à¶» à·€à¶»à·”|à¶´à·ƒà·Š à·€à¶»à·”|à¶´à·™.à·€|à¶´.à·€./,
        isPM : function (input) {
            return input === 'à¶´.à·€.' || input === 'à¶´à·ƒà·Š à·€à¶»à·”';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'à¶´.à·€.' : 'à¶´à·ƒà·Š à·€à¶»à·”';
            } else {
                return isLower ? 'à¶´à·™.à·€.' : 'à¶´à·™à¶» à·€à¶»à·”';
            }
        }
    });

    //! moment.js locale configuration

    var months$8 = 'januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december'.split('_'),
        monthsShort$6 = 'jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec'.split('_');
    function plural$5(n) {
        return (n > 1) && (n < 5);
    }
    function translate$9(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':  // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pÃ¡r sekÃºnd' : 'pÃ¡r sekundami';
            case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$5(number) ? 'sekundy' : 'sekÃºnd');
                } else {
                    return result + 'sekundami';
                }
                break;
            case 'm':  // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minÃºta' : (isFuture ? 'minÃºtu' : 'minÃºtou');
            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$5(number) ? 'minÃºty' : 'minÃºt');
                } else {
                    return result + 'minÃºtami';
                }
                break;
            case 'h':  // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh': // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$5(number) ? 'hodiny' : 'hodÃ­n');
                } else {
                    return result + 'hodinami';
                }
                break;
            case 'd':  // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'deÅˆ' : 'dÅˆom';
            case 'dd': // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$5(number) ? 'dni' : 'dnÃ­');
                } else {
               ;Âœ4›Ã³m+8©²"\îä)ÈIˆÂ”y„ÅG¾ü‰ì,Y)óÅe?‰¹¸&ÚÕ»;"Š-¹OÝzvæ·×#œ°"ÅêˆV”0ÆRáKªé*÷[ZëSy®k¹Ç»`ô&š]Óþç6IŸ59>¼y*˜ñ¹•¶ö¤ñl¦Bé<T¶o²G³{Cê•øÁü~ÚÛ”¹‚Þ>©‹»ûLÚ”Â0þ®=ÂCø‹'1î@>
º‹—mºt091è±ºœ’ÖÖN£zÒuÆzföTxýpo½žƒˆìš&ÈŽüá ‰Å>b:+Bm*äqbïgš”ñ, óJ+Ø8OÂq;‰8'?¨
8ý†ÊN±2ÇårŒVrªºð“Ë‹ÙqÒ•ÏÔ‡Ÿžw®º9{(d§ÆÔúQç‘*ª S	“Ëšm9,^¦÷Ë$	Bä`L6B"	ªwß·¹j¥¯NEöÄºZzÅ€
UJ¤“nÔmŠzèÔgQ¨±f(­:³$!Dl4 U°®LìBŽ	­ ªsz”Ûƒ(ní_ÝM¤_&*EQ¤…¾)ä× 	•wÚ±¥+‹°ÂV°l_T?ð3d;@cía±Ú~³{ÍT„­ÅR7$Øø»õ§ý#¤£Ì“\ä/Bhä%ðiG¿ôôem…¡’’©+AQ™×`|Àq~yéÅÏÍz|
fv;š¿æù:ix9RH:mkkÙCBìÕd#ýžÎƒ¹9¹ä+}ØÄ»“©'‚ÊÕz”u‘FRn°ÐvJîýW´MÜöX@ R‘þ&¦¦÷?ëNú)-´QýBå°tŸEMê8ËMË}°M!Õ6|#Ú9Ynf$<wÅG6Î¸½Øsý~61¾¾à‚Çt/ÍŒÃµíog$U¥lægÍX_;èM¹ÛMJ¥QÇ/ø’5à‚Ý‡t®‚`–”g`òãþÂ&T+¾¾ïÄS«­Ö¨Û£4ØœJ ž–ýVÖ¸Ç¨'Õ(á‚ïô xÙ£‰ª‡ž¿!o)ýCðã²ºàZ¾eüz»ll²‹ÝúcVÖ.Ôýök YrenuöÓ1Ø‹³5×üSy½O-'áò°!¦F£/Lcî§Õ]Î8÷ä¦ÇÀo]ú9ô‹x¿;Ðê{{L;Y±g<Úz,h/ïÇ›XÖ–v(YÔˆéóéÏéý-ÛËi¯|-V[q0B.WÅÐJž?p²uh&Bœ¯ :"dÛQ…D²WïÂt½L³º8ÕÆŸúvM‹~uà^Øº±p[¨Ô¡{SY±+î¸]ê$CÉåìs$&$Ó	l ÅZ17G½­•ã¿êL·¶øÀ¿9 ÜHôïž÷;¨{ù¢eb~³˜À4›ï7R(†¶ñI0iék¡ð9+†ãÐó’h, Â•K(ô·3ydÊúõ'\_#E!Œ&ôÑŠ¦Jva¿Ff©Vþ”»®kVcàm‡ŸHª*Qìr°Úy	,èLiKð_™EN|‡JVoIÂÇ\Z¸.üäUI4-\ÜŸß‰Þ§ÃÂ¾K)ó¬oW´¢`õ¿©«0\™ðÙ:@5˜ `¥¬l@â\äV¾Ó&ÿäd9íâhÐiwoÿ›eÍ2Q¢*áÈBÞs(¿p…G¿Å*ìFüZdŠœ ”»NàØ•¾Fìxºe·s‚Ç›¹Œ÷Äg~}†–*ï“²è?ßrãÎ3ót2lßmsô’æW¿4NMH¦iz\‰*ûÜþx^áÌÚ\D-À¾€õVU#e \´|·ÃïÀeâµVøgºòðÖ}’ÍHÝý;–vÍÉ	–KòL¨¹ä":KVóZ2S6#\nIü¿æ+¢g5]êoù—ÿº¸íòýÜ8¡*`cà¸6ž/œ@Yé*•‘Èž°p¦ÇÐ2Ž=ñ„lì7IšÜ%~/5s_Öš»ô
qKtb«Ê0Å¦YMí­"*«sÛ~áÔy[£Ð¨TœÎÇ¾@Ç™1’¼Šwy_Yå%•°û÷Ð?m½%K†F³¶ñLÁð<©Ç9\ yÝ™\ãQûHËW?33µ—–Ñ¯› ¥²z•;øÑLÙá Á¤”iUeÆªe@ê˜)¡Sñ–ªª•¥ŒZÙ”!ƒãÅï¾Šv;¶pð2^	UÖ'ÉÕG©{ÆBöB¾þá¤‡›=K›L¨%áÚàÄ³a–¶dé5üçæQOì!Æw
þ,¢·§r‚¬{}C!Ï¥o&ð_Ù‡©3ì´qØ;c–¦†<+ù9´«Ì–²SfXZ…p(T¨±ƒ™¬¯aYgLUÞ]ŸQÝ~‘Aò&N<ÖŽé¯šÝ¬¯amëPå×2³°”„\9Ÿ(Sz>¼å¶ß·P+6ª˜$b²I\)3£š?äe˜Ú4üÌ—”ÑVSì±:[ØÎ²€ïúû›…Î¯s—"@Ç7>€d‚©wSÚübÂÈsEòîß¦\Ý*#üAèÙMWBÚT
~C´pcl–›%
»t^¨Ž|¼½˜ÆÔÈ™öD+»éräo*PðBì’E¦—Í=È5n9al7Í–7vßáÊ;<ë©´µ*„´'ñ6:þ†k‘¸´:	¬€ý1ÒwÀ3—"ö®ëžaåa×ÔXciÁ3Åh/«²Ç„šyö®_NjÌ‡yæTö#œ±»^Snj<æ¸ÀmÕ>ýÎÙ‡àÀcˆOËVz‚î—½ÝTÀ¥lBõÔôÒ×ŽÝ§™²¯ÿê•7œ«ff)8zÌzª~êAã’øk9]mÍ1jJ`ºÂŒ‰</ïsê|˜Ä}´>ì‚í*ƒ)ÅÃû•@+ND‰2õÄÑU\°z±µÙ^jeÉëöHÐ°º<â…F¦Ùg±<6¥JkîT½œnð@vXÑlÞ’ôÜiZ+êB<ï0V²ÔÞN—Ò%ðN^ð¸‘”¹ÕÕÆïµkfdð´†õ¢š²+¢÷Í¦TÚ·OA¹ìÃÃtãbþfˆâÃ™!ŽlZå­j¯8T{N?Ÿ¡€L.Þ©…œ(vzïÊªÊm-qÞfüœžHìsgVñïÛÄæÑc#Z%+ýCm<aRP©M/D!ø/ÛœÝÜ­ÔÌf_+}ÁW%4â½¢9$¾ñãY@8‡kx~%þë´@«!P«ôóÖþØe´bj1{’õr³×àéÔ¸u›!'¢Ä!oë&y.²ß#!eˆªÛKŠ·ðmí6xCIHêBUjv=Ú)./%6L–‹šæù0ëè2ZA¯=³ãJHšûo†MLŒa{T2’®Üù’…JÝøQÒ—ûã Cp:¤êIñƒâÔÅÕ¯ÓîK=ª*%y)€ýíIÁÀ·ÅxÏ¥®Ñ¼ˆö02‹ßdÓ\]Îj9õ|ŒÉýUDdr|õÆŠÅ(6ˆ/7¸²âñè‹ýI]>†1¾¹x.¬r+ãÊ|¡è8O¿dÅëËÏÒÓ|“Âf|Ö'XÊ†;ç1	F%s³Šœñ}º†o;.aÕÕ2é<,&Q	]i¹°Zw-;Æû¡j®‚¹ËïQ¡A6×&÷Ì
²-²Ì·™5'õ…—hùC;'gm)Ûªvf'ëšC0Ãb ª÷ª|>F;Ÿ%’‘KÓç«»‹ˆ|‰Úð9:x÷n€Ãåß¸;Œ?¾£Ï¬émvû­·8¿°+k&èz>
0½ý|XêÙ#¡íRÅÝOÃ³iæ*êÑp…G;„xÜ{Dí‹|<åØ™s¾fÿ;¸å;ÄêSxâ­û”H*/º~h(EÔš-˜­DœÂŒP³îB&µ¢ƒn½ æ ‘‘H½n²îHþ «¿ÇGJ6¯X~"éÃ=æ³Ìb¼æ ü¼¶z¾ËÌo*Žz<Õ…)l¥@Å eí»ŒãøØJ7î25p-—›¯Wy
S›€Sð›Z†í`“g}Ýòé$`ÒÎø²Dr›}oÅQúêÛ^
Lå’YpÙV{
!˜8ÊÆ²žö1fÛ‹&
1îÍú-ª~,	‰TÏ^Ü]ñ+¶¤šBVì$À÷o/ÑÃú1:*äÙïú?ûuÕ¹s!…dž0.³×¤iØ²îÅ‰ÌQ4	“l¹”üž¸hd–I>ã‡²ÚC:‘w·lñ–ƒŸZ6(<G°/_9MƒÔiUøÅ4óáøeÃÈfYEdï_®²Ö‚õø²}áÚü¹”ë]—ŽZz¾ûÆ„ÏgõlÊ:ÆHÇÖ3¶ŸÏj´è	Ö]fW@—Úm{„”rù Ü¨­x¯•‚?„k¶ãósÿŽ ¢.µm¼ûZ3íŠyþâ5h0¥ÆçáR{¦LpGš³Õ‚ÿ»ãOÿ¬u»¥r3†{8™2ÙJ¬M%®§1ß	ú»/úe ~¦˜[ÎìaôÜvÈzÁ ö¤¤ŠÌo°¬+ý£´ÖÑ3^ãZ[SØØ`+ùÉãÛ¾]ìFGkÞ¢{”Iâ¶õ?ü‹H·JmcÉtn‘¦yŒ!MZ
ía;e…«<)?¡Lùa‰ögvÆ+¥ì.ðb3„Yã™OÀbí^3EO ÞŒaÝ– <YQØÚG?öWÿ£Ã_kÀpcç-ÑC«ò‚¹¬ –©µÉnÞ\ïnÆåzÙö°”h»ÞÞßJA…l »9e)ßùOÏkƒ#¿ßØ8Ð©‡+aáá¯A€fÖ	´…¡?º„#‹–;ÉoÀ{}´õ®€1ñ}‘‚;.úF³Ö‚=ƒ™›Mó× /âÐ‡]F Ý¹Ëû@èqå2›­Uö9BÂVêæÈõêçã§XÇƒŠ©±Tÿéå‰û#QDyŒ—¬5¬ÊWtjÕ¨®9e<”F9AK)NH<dÚ`nëÁßd<°‡2„5˜zmÿ•TñÚ¸cj˜\¥ÅÝº4dT X6rÏu÷šªµ(šk}Ö!LŸ]ªÚƒm(ËÏŠëfÒµYOä¼jŒÝøÝ'ˆrz^ ó¥èOùXímÈM`ŸÃÖ0ÆÖ·kC•šÿ&ÎuÚ“ÊÈÃžp¿<Î»‰\8@ûxK’É¸„Cys˜ôH)$Ìƒ(@³|!SC”ÙR ªÎÎí“)PTÏpËG&:!Q Í-?qdóõ®•Ê—.=òÕJ~#Únƒçdå½þòœÏ¯Ìvæ(ßGªäÜ?Ÿ:Œ‡:Þ{±‘ì|xåÛ>tÚlõe†ª¥x²ÎñEŸq4•S4D?+—¼Ç%ËîAÙÖœK¦JŸk!Û!LS>;8WÏTEþi(L\Fí‚n½ÑAß×PõfÏÛÎÝÄ šx¹p|DBðobŽqcÖÆÃ‚˜ëåÈ­U½ 6“Ä¸®á	¹hº1k?üVÖÈÍä‡ì}#o¶WàmÐ‘! Xø®û»nl=2(0¿÷8Äê‚ã¬»	0,î–˜“ÞVR ô—ÀÑhŠá8I')¡W³N
v]>EA:ÜúJÆc5i&Ðah¯›Íæy¡BõzåÁ…–R<þŒ’ô8EàÔŸª0î®AœîžŠ³ùCS	ÔtjžÆ/ÿª¢„¦ãXƒ¬,H[úu â6µ€=©A»_©tJ//ë¾3[´øPÆ»5¥í°†<ìtPáz9˜°ÄhÓÂÈ†ø›z=X@„aâà¼C*)¤éûUIœO|@± y¦èO6U›ƒ)*ý'ã3BêTæ×asTæËNiÙ@ÏÛË%JÕgMlâg¤iÜXÉ«©‚rrlÞòw;yž:Ì9XuÕq3íR•¹ Ub¡Rza—Ë<`RêÔwVõg•¶Ê~‰Z-œ¼ëQn¢¯ÛòFH–Ü˜›-g#Ç+-¥‰ŽÁ0ô1Æî^fãâqáÏ	P@6cFªñÜÁJTÈý5a±GS˜Œç€#SBÿhâp
ÕýÃøx
õ›Âü$uÞ‰ôZ){Í
¥^°B=mA‡‚œ•”š>Œ€£\IgïŸ
@¹GDÁ!dÇÐ5¿«I*×bi¨+®aoÇ¡†­hpíÔŠ¥Þ‹(ƒ…å5Œ„2Ãl­oKÞ·à‚«X:qÌÇª»mê¥ª©Z¡DU{)†õa9fkqšÄ–IZW%g+,Ëð;úl#ôðÖ„¬eãv¿ãfkŠ×BIüM†Z*ù<Ù^è°C±WómÓ÷ƒ,.j|&X»;ÿPU[VR›;”)µ{×”49ì¯á$±·ÊÞ)BË®ñÞ–=aK»ÖÒ]âpÕfxÝ£ÔõZVì‚:[yõ<±Ô[S”ð`o	×<øFN~ÞeŸY¡('›^©Ä³%7þ0S«–¨oy‹^©|fËÝ£Æ_a#÷˜hx°åë¦É;kZÓC4Ïªˆe³éäZ9t®@aMÁE¹¶®2V—´Q•ÎXµ(ä¶2û”hò;EÔhž¨0Š£nv/ÕÂ»×doedÅ	jb…:£[§÷*c&´³˜¹c€[Fïr[¦º½tj|bßÜèÖ¯ä•Û(bã3S¦ëÉÇ\q=ú•ê°Nò<T}ë"äyÎÑFxVi–zÙ†¬OŸí/'6{¼–ÈÍS˜8IŽë,pôÙ^Þ;%l†èqa¿bkÖÚ†,ø[Œ•íužù¥ÌJ‹ênÃ‹×¯p»ÊW6Õ½ÚbÐ-ò¹ùÞì‘Þgœ…ªÜ÷ª±¸Ù–8a–Ô§‘Åf³|.ö~ùüW5_}C×‚:I¢Ž{ñ1ksÐQyŽ›ôhwOéPåf«ç°)›„_Óµz÷J®òÓ´Þfxee)Ú¬ä³æ¤`}Ë¦‘Ï‹Çv@ÍƒyËÛSO¯_¨ìŠ¡ÓÚh¯tu£‰fqíÑsìöñbÿY0‹µ>AÜÉ‹ÐìºPªFc%Rÿê>*|ñŠ­ùÜ¥* ÿ2ì#Q£¸äý ˜´G¤ŸE P¥¾Oô/£¡ã'$ÓrZŠl3p9°t­«‘}ZÉBùáì¨8óØN˜¢XfGöô“^å,a{Á–Ü†=!ò¢ÝÌ†+'Ò®2TLÑÑ­5¯\q^-…üG&B8p Ê’©¼	ˆƒ.Fp…’~$¾?c¾ÃäÈÛ!À‘ÿìOHKhæŠzGØßŒh5(l¦èŒaýÅðž§U»²£<áŠñèÒÜåk„´¬¯x¨u¹—”Pßúß±H§+	ô|§2³Œ}’gá£ˆ(:þ„úKXð§xÎ6!Ý…äá…ÇEí²M0h­P‰(`x*R™7.<9M2ÊA1*Íž9j1-áÔ\«+Ì(f!5Qu·èFÁÕõ`Ñ'Ðç^êßäKäàz}ÂmE¶žlZ~Èª”7usñug=>GË,ª“i¼ÄO¸ ¬£óZ®àýT6Z ®´&*PÜ¸n$Ì¢½=Ùºi°gÆnŽ+þÃ÷ÍÚ|ùYu1Z”‹Ûz©‰E{EMŽy
ÏWÈýMäyFûîÖPÈ÷q\+s(ü¨fh#…ž…W¹·‹@ 5Ç²ª™Ï›Zi¬ìû’Š“¦¥ÅJQ=žŸAQãÙ,p%K`XV»µïÀ,£¿â2üv€dVYjù£ü˜eTØÇu^3=$átª´QRz
QÅyuÅ¥õY+ï^(ãÎ”ÁÛD,¦jþ[;àlÖ0qêP.ŽWíÿñæ±f×FQÇ5Ù„¹;F¨šËÆ"œY,S½øŸ…Ñcx
D‰Oí¶9Ý
ƒ7t+PPnžíDWØ¾Í´»¥ÿÌ¶\ˆXS¨²28ÝØR&»—Š‰d¯Níq
h<Ñç‘fÆ,¸¨,RE$Ù3ý ¥³'´ØW&ÓüØ´êÒÉlÝXˆhÏä7œÕäM²"ÕË!HÛ|xœ’aM" %á*D'ó¸[ÉŒWR0î@¡(aÅJ${Ïy'ÂBý@Þ´óH´oÃb`„u%4Œq}‚ï`¨åÙhýk ®Í}Êæ¸MÂŸª9lbc×¿?,%Ÿf•¢«Ó­v¹çÖiÉ*‘òÔz¹ø|ÎÓOTúÈV5èEkîZZmßÍŽ5™9oäCè\6YÎ™9dlU³ÔXúZóð=ù$\y=ž ¹¦;JþcE )ü"±½Q<ÝOônºz–ÆDBHñD*Sq=P¸dqDOÐõº3rKÃ}rhEüFk,+èŽ‰ƒ+}Ê>g7Q¦»ŒW°‡–¢@zd>üo*	nV\ÞÐ£·‰“ê§¶mÿ
GîìU¢ykþWÅÎcÌõ„¶š ,qÛ9éåžŽñQ,Ä’ª@¬.@°f¢ï€_(üÞÌ“ôeÅêÇÚÞV$D%Lø	jÅŸLOµr§7Ó´*k+CµaRÌæ×ù“P.7,–”q•–eëîÉ‚”ß+ã.JœH¸voà|UÔpÉãŽêbe÷g »ú×Æi nk&¸RÃŠ´¯.LM=ÁO+oR£r9zÿ£÷—Ìw¬v®Ò~œKuñÈÕuÁÑ2<U«öŠåÈµó®CÌûpu„‡*÷µ‚ãB_JŠÆÅºšÆ7 ƒÍÂ¾ÝXôêÔÒºq°Kû1£ÑÔ¼-ðýï¿5Ýv)ÀQ0;–bGüº.õ×V,GP;½ƒ](ýº Àúó^©›·ÖybË½š	 îØTMqd<2Ýùx9ÃvóÛjOëjm¢‡ÏO9iÛ4¨¨w™!ûÅA;ì¤ÉAGì+µ„üB™¯»ë’‡
e¼×¨]=ãädïÿ3š«R—ñm«ïø4!ñ“ú;FO ƒm±AA·nëDñÍ9úËÕ“LýpO{®Ø	
IB(©BWiáïQû?×¦×¥F?™—‡$ý´©V.òŸcÚ–ðt“ÍZÉy2/dÓ‡s°pkLNbJ†MZ–‹ÃÂhõ$"
5Ÿ§<€Æìö°q{‹"‘ÈW/JCÔ·¢b{°€µ‹+b)aêšKkñh#t”¸Â¼TÁÀ~¢ñ1a‘
ììÁÔêX0Hõ0›ÇGG‰(ÂƒS¤¯J¬gA©íÉÄýÙce»fd	Ÿ,$šP+›ì72ViKU@E†ÍY^\q`ÀË@3Å
=Ü;ÿ4õCüŽ¹Í“HŽÜáÜ%zm³ÿyyÞza®ÈÄ²j§¨[%TÉ(7ïÃµ¯ô÷ö–¯‹0BÝuX¬Ò:qst”+Œ¿Ä²º'=Ý™<4æB •×Léˆ‡f<# „D¶öˆ¶~¢»ä9n-“áB/ãQ¤óRÿ«j¹GìÀ3»Æ2—ü|„Õ¢ á¿>ˆŸ–pèÝ%Oj,l&&V÷Z>ìÃ~  i¢ŒÊÂâÖûFx k±–êG–HÒŒˆÿøØíÜ¸Añ´µ“ á/WóÅN“âÓä%Ë¸ùüŽ°'é0xWŠÉí£tKR¶®#™ßÆ¢uKMw¾RKV·(è(HÌG1¤;Ûµ¸Sw£·Ñ†Þ,~+àà…_Cþ!àx–ÖŒÙøl·ËAÛT¼ªüÛ%Z¡Wžyd&’óµ&¡7ƒ
Hkx5ÿgœ«%|¹9OÿÚQ‘f}ËØ PŠõÆp»JwMnK[Â“]Z±h"õl}{†¢bw£"¼û¿ëSÁMˆòLŸ·³þš<SyšxAcÆ ª60õkcj3-M@dÉ¾˜ifë¤GÈ8^^sa¯÷Ê6DÊåéî2­i}õX;žËâO®“ÉfR"W\D€þ±'ßìgA?Z~jÖ `ñµ±µÌ!*˜xO°)sWV†V
«1«j‹W×’ù%@Å¨B:bðéQÛWŸYOx>M"D0Î—çæ.­Âø* ÂŽŽ†L/Æt`›©HÆ ›'î¬ÚbkÜŽpü[w61djVæèÅã‚É íÜ.Å¯cêÖîÄ}7ùö ƒÜÛ¶©ù?ruíJ›à¢pÐV}‡#uíÔéºÜMtžjD,7ÆTU\1É†eC&:¬ŠúÕU>”IgöÑEbOÕŽ÷B;šˆàúßÚFõÄ~ÇÌóéò ÀjßKµVú¾«œ²‡3íQE  AþG
‚â Ï¬ÂŒñnµÇfª-:›èÝ)øF8´êuE¾Ýø»À|Lú©•¹eG‰¹(¶DMDc‰‘`¤Çá;ŠZøÑC–JÃ€jÚ#Ù‚eÀöp3šŠ~w$›ÓV3T^üP·„Ý5WÁï‚¡m1Z8B+puôÿI&Å¼ªfâ>,)jf}EŽY©E_ ;ø–Ètë±¨Aˆ+)D•¯Iu=`ó‰UÝþ›!û¥r„ž$kÀµÊñåI7)ü1ž	/ÈÂëZ[SÎòe÷!Táý›dtEÌ/ìV~~T¡´–3”ÖÿÆY%j˜Ïš›Ee­-üÛ„•W–öä±â²=iÒ£gÒ›¸<åëãqlß†f´ûˆV[®ŸÓÚLðŒ"=œÖ	œž`I8VoÉ¾gø	èéRJž6ÁnÞze’W ?Ö»‘ÓtçÀ©ÁÜ7J=å`_/•²¨¥Ôòänd¼öÎóôÇú4þ3?ñp‡JL‚ÔÐÂ<hH]%UÖ‘Ñâ×ëø/˜Nxãö_iàÅMÀ#g|ñOÌ=“Ä üÏÓd„TÆïžo~•i“#±|Àûš“‘Éöýovf¹sòý­¤‘}¡çÀÚØ
_q.pEˆ¡ã9LøŒäÍØgÙ8%e™Øt©ß—¨ìñþž·œ­ü”»0}µµ@§ï@ñ¿ã}R>zP2Í®Gé£j÷ò÷ÚuUÝ;l± ä)"(hgrüÔtíÍ`rR€è‚×qÞ`‚7;Â«bWodÌŒh.¼SX.c]¬QP÷¤­”P”%­J[ÖŽ
	ÅÆ TÏµË¦ÿ¨{Y<ý©6),•c<ZwRB&$Añ8É:¨æp}\(E²?Óf#fl£€ƒt‚Âä…Â&/†ƒƒÕ¿ô¾ì¶`*RB.MŠ¶±d
*àh\AH	=êÄ[+¿,nŠ ƒm6ŠŸ:Òf¹ús&‘Ò´¾ÉÝD©RUˆQ`ªúÝñú	µÃÒÈ3Ü"ÊªÎÁ%<TL_nDCNÔ2µÊÈ¨QþAi,s)U‘ésMDÔ ™âãÚêZ••;¸ªšâÒß­íl¶uhÓî {oä,ò¸êø2ùžâ¼Z6}†Z…c#N¶üšÀ|9ÔÏÐ‰@yëê×¸EÀÑ+è®£:Á"à^g~*ŽPÂÃ;=–±L8·•£ù­>nw&[É“"yL·e&£?	„8ªBªx[¬1«™¦;æYif‹ñ_/Ç‚[S@ce­*1þ ÁPqàÇ	ëný¼˜¦)Ñ­ýÙ:{–ä”¥èf§JiÉ
(›¥CþÝò-¿-1¡ìI‡Z¢’)§pQ^ê–*–oFr×½p4ÀnÐT<Ïàp 8S$" `  î~ªïºê•{$å,`2i¨
di«‰i•›éOºÆÕ½c¯äY¾žaŽ¾»;ÛØóco=Ø`ãÇöŒ½0y¥dHuÛ!v·ûçÚÊôÆÅÊ Ffàh  àP»Fw¾ßÞwÍ÷x|ÉI«–|ü=Q’üÔ»/¿¨½úyjµ¹sµÄÎIêj'ç6FjÔÎŽH°H-þÔÙZ×æ j²¶vA*ÔÚkV!à #€Þåo   Ð $w²ãn›xPmPþ¿€Eôúÿ!Å¢=
Àëµ’5 uÅyV°“jœ8FØÂ®9ª|#;x½@ º &âÙn6Æ€ê–Û*¬Ä»#nØ^G8ÍÌ–„ØH/ÐpÛ¶›„¸}ÊÛ¼\‹‘CX`£W¡âÉdwDl3†í±LhŠr~bP8â55âµI‡c×9j}/Èp¡äq^ÆgÖË1-·ŸvxsLa\.§2×`(Cd°8	«”£MF&R7¥0=ÀÍ;1ìø>‰ÐµAk…˜ (hX:þfhà‚ó‘xdbWšéœd«ØˆBnHøÌ	üõ8po#$d9
'èozœ„#/9&r3LÝQ•ßÊLoŒ]Xã“³í‹ÈÜ3à”êÞ¡PKy\N‡J†Ža–ä¼Åä~ˆ6„“cdßv˜˜×Ý»øaèñ·¹Òø9Å'(öÇÝõælì—º±ãYîMuF”_¶Ëiò{ç€Hò«Í„Ý’=w2’éïD3³ƒÍû\G¹·¯¨7¿¼M°<<öAŽÙ˜ 1Ë%$£ÀˆD~‰^¬Uú*½ÇûöK~ü–´ËòŠ½b'/4MRs@kÉÝW¿¡%4µªDÂKfB’G¬©îœó,žÅý›ûù¿TìIiA?!qJN®ãýÞiKßr0¡/áèMÆ%Ëÿëe‹ZZê‰m{ï¼žhŠ%dŽ:ŠÐ^jMÒTRm]æ
ÄšXð—òWÚü#­ÜcTB"5ä¼8.Ž¿Ä‘;X1år§Âƒ¸wñez‚ïb}9ö0Ê˜ÿ™ÛOªNÈ+ÐÒ°Ð‚å¶W
o;)¶á‚«5…†»ž!·»}sóˆÂùÜÁÆŒ‚I¶ W„œ`¬œÅuIf‰Ëäc)ò¿º<7ycMÁ™šu¿Œ_s°è;¦q §úY<¸Bµì%\RÖõK:™>8Ëý6Ãh2§ÌŒ¦
/‡múÞÆÈ˜Ô¤hE<Ç™Ù1Ê’P¤ n"pdÂFí}jw1.¯–›¬ÉŸáNE.®XÄj£oÆT‡œ+pÎ8õ)«¤pÀyçy.¡ÃW?“óì3|²çv¤¼Èu>ôQžSnÌfÛð81DÇ‡FKv0)ÄTäŒC•…pmîÇ/Q¶¡R×ó5ÿ-ÌÿÈ¸¾¼|áLèÐíØà?å§ñUm ÷¯½p¯wÓÿë™Ú½‡çÂÆÐþhÇCÇ™3’c¹IÅÅ"<Jn£óvVŠT»H’&ƒ1S.h	rä39Fßˆ–sû#þ¤bxÌÑcƒ@»j- U~Á1à@ªì^4ÀTóë’è9h4YfFè$/âN‚=¶seiˆz!—G’[î Í¨GÝË–¬Š§±úm’(¡æ1,»|…Û{µc*”æÛ³Ù]ÿfÃìS.›‰ÑãÎe}û¯ïÚ$'e5Çq‘ÒþŠ×82Çò2_pn™»;.–
o€!e#ÁbK21Ü_îuF9Ã×»\g€FÞº¶]Çãõžµä@=LŽ¤bAŠhKN”‘Jx¢¼«fb0NU_„Ñj¤!ÃSÊ-r& Š<?¸ìkÇaøváÀ¤¬)%Æ=wtigÊŸÃÊn¿Šp§Æ	®vè!Þ»Á
³S ´’cg^bGw<B7a†*€lw“à)XJ¦·i”€V8Fp¬Í1kRs¯7'cÈƒÎ¤Œžwf0ÉvÅq_…1G·\…{Aègº×¢õ&`‰ã_E8æ!uYÂ’êKƒsáÑ¬k!¢ïÄŠ³“öãp©'ˆTfÿ’$½š}’®„5zl¿×%2èÕ’ÑYiƒ¿¡ŸT‹lf:Ø¬æ4lÎè˜6W—ˆÓ=Ø×£…®7â©„³C`N¤[:œŠ’sØÝ6Ò®‘e¤â‚ÙiÕèèÚ»lŽ±Š\»LûCÆ¥âÅo¿Lzàã±©åÆÊæ¬UàGGn}5ó‹8Ú´r„fÚ¡-Ü6té·Þ6Êb-! 	6Ü²>“)ÎÖ8ñéVMzå×Zp‹@«Ó?Q´¦¼Øá‚Bç°%,Ï	ÅF%’ªQ)í":#š¸F5e SÛÍÊj¤ÔÔ­np4%v›Ô"«ùI·Ãa•:ÈîP’ôD™tu¶k¦”åÉ•Äóä¦âP§&.I¦	ÓŸb …ÜJÙñá]²¢{®¨Ê°‰2l—Ë3üœ<¾$æ«ì0Ïì’yô)¨Ñ”Žµ7óÏû!ïä’Ì9ur]¶É€¦´,85“‘¼¨ÝiÎˆ] Š&–ça?¾Á'Üf|2|ÀŠã:ô¼¢¦n¹K°»Ô*ñÝN]¥a!fÇPÌ¼ÀÓful ªC
28î†}Ì€¶&iŽ!wïÛÝ¶ÖÊ0âEP8g.ÌkŠ›C-rPZ'%ñ¦¶–—ªæO¸)ÈÒbŸô2ü>cpå©¬»ŽQ1¸ýÅO†6hÔ?¹¶!‰á¢À´¬è”÷¢‹ÿœê‘È÷³³Ñ ÄÝbNÆº3Ñ\¡hî$ŽxKa˜½
nÐÍÑ9Q¿˜yt¦ãzˆ¸³[­ºküªÂx[»£xZ¾e×áamîM4!¤øbÐôò´`ÖÜ(,ßÄVQÞœö÷dðk§Pz×¥:O•:ž|}o³ýÛÁ²²nÓ”ÎqÔ.	ûs¾0WÛJf"Üf¡È>ƒÖOÑØÄÞ+8[rxŽõ6,sòKlG3¸“w\ ÊËXpÏˆ–aücŸÅ=¯Ê¢ù["ÿE÷KÂ¾g—G•E–z,žInR55ÝeÓ.‚õ¼ÖA<5å£4.h0ä,¥ZÊò¤îx>¿ÿ
B–é¹V“q¶ŠÌ"m¸Ô†¢ªe\ºèÜÜS‰:iÉ‹ïˆ—%K§8æoR “Êà•”ÆŽkÕ‡åºBÆfl¦4·©k¨¸b[Èw¬Îò
('’|!oóú¦‘é@7®±…!aoh1LòF*Uk.¯h189§pÃî›F _6ÏÊ%—©£>ÁûÉôÊ?2…‹ç—0³¨E;v(–UòaìŠkñ‡nŸYÇñýQ:y‰1ý=­Ã¤‹Ø%u bõ¤Ãa–.qJzb'#}ž‚ŒÅõ†Fé/ÑpÉlÕ§ø}
Áp"åœœÿ¢÷¾²@š=›zá(B8]•È±e¼‘äÊ;y#ÇØÈžÚŽdwàÀ7«$^ÖÝÆ,R-]_(nZ­GÚËvƒêÐ£1záM0Ä§ïaƒ:œž  qû¥\šÐâ›§Çæ„~æˆ„‰¾7)¤ŽÝ*Òqñ‰¾&æi<¤æ°!Åixk$…2‚® —…:4Ù…z¸áwîE‘º	åÇroc^ýÕ¢Š…¬”æ‚Ó©¸‚í$gâñÆ®	åæJ~dU]Íiqed'Û^q ëOðÑƒòñ4Ã¯³7D›"½¨-à>ÆVc§´wEïÀý‘#Xí¯Q‰ÕF.Ãö A™^ý‰Z±ÏI1ü‡ÏáÇÿd´Û:T_À¼±nŽQÀ·9›h¶±,>¹åd„°/¿±8	´ó&7 7o¾I*lÎâÏ Ÿ÷áÛ4¸‚åó4§Ä8Ë¿r&—6^uÇJÁ—Nk€ŸÄîe×{•œ’¢¡QNZ‘+Ñå…•Å$Ð/'•&¥gC5±ŠàºÉƒà×‘x¼nË'f…ÕUfÆÚ©Uö=Àó¿JbõE7žS&‹þ:3a¼yß’ùƒ²fp…§<,íQ¦N¼F)þŠ†ðÒïa°*ÆO¶Â${®b¹¯haÕÿYŒçè27‘ÊË
»kþ¦6Ž±iXŒµÔ(fB¼’ª—{ìèM¼¨èûv§š*½'ÆôxA7÷ž·—k?µ¼NÇ´aqÄ)EW¡æ7.öN‰ºzÕZwõÕ¢(¹c‘×t7•=rex‚?Ñp;F=	o,’6¦%%Q÷§OzF<+9Õ uÈš¨@1
‹gÏ ±5“F­MÆÐÐW4ç}ô“ƒgÍË|Îk_Äôÿ9ÚsÏÇÚÈnBq–þ"®Œ£xòA—_<¥¬_6Úk xýýÉK¸cHˆÌ®}8Òé+'EÏóýì èÓ¯¤:/2“WŽ¾ž|ZZ ŽÛEhžÁ²â—“Î®ùÓÇPÆ‚÷±Ô~É¶7r9·oÜé¢;$¼›ÝÉ=I)Æ)™6iIŽl·
[ÒÇß‡Àsó³>Ï$:'wZºê}nfxGË3uê»ž2Ñzé”wÓ¥Ñm²OíA¦›ïçëï|¬ ÎÅiòòÒ‡yðçÂˆÃÑrÖ ÃçP‹›UŸ…
Ã6…·™“)^N* |ê¬)à,,O> ²=„™€q_zj+	;"p-ò™yù@{qçaŸ·¸b9«§s‹fêt,h<ô€vã(oÛDgyf‡Ö#‹Îqë)??nnß’1
MXúÝÛ‰R‡ºýzÄþ}‰GàËôÜa.Ë1ï!;UrZª<¢†:ã,HE}ÝÂó¶S¸Ö={¨’?“úÊVTÁ!ìÚŠ†2YCô|Ò×í³üœýEµtf¥ k–…$nƒNÔvåûŽMï¢ÛäÁ?Î|U#h(ç®'’Ôd¿Jô—åÌG¤l ax¤_ÝßW-1&#i‰EÛäRÃGPv%7‡	R½9£!á· …ÍwI¼–œÂƒ·³‚…Ú)nÃ¦¢`”¦Úö ç
	‰+ÄÏ/Iái/nËxÍ4{&4ô&2ÈeÕp€ân²ß8ô‚r& {G|@§äàÊ7âyMÿáÏƒ>Ey)eW@4Òúª¯ºçj¾öã3ý4{Ç©%å¼±¹Tg1sù*þÌ–JjÔÁ¦éÄfäÃIºAÇì¤€zÿáäg»€©èŽy°ÓíÞNøã‚é71Îˆ°¿;zsÒŒ# Þè€™ >XÊ•‹M§)yqF’ÄÜ.òk
LÁéqôËd}´’´3‘fs+kèï'Às²ü¨í9KÿRÍP£:áì)ÅíÒ Y|ë”=ôÙ‚yŽÞxP:æó!ó”§\Ä
³Ûe9¸9#Êý13}´„¸õ23Ÿ”
wFt;:¸Al{g;Šô9'`½Á39°†£¬,6l\é^5t…›×Àk1‘¤Ó>¦$š¹©ÌbÏÊ;µPžãÏ¯Êàk q;tÿ1ãn¬ P¬Û§¸Î3Êö7Iñœ3äl–”Å™ïÝ”‹VAXzÃyÒCfÙë³Ü»âîúfÉnŠht¦½éâ×¯²h£qn‚rªìÎ=‡ï\ïêtÛ8j…èoŠQàÃ	ï—‹˜P[@eåƒh´|ÌÃZ^Š×»<¡‰S$%ùZìV~/0%tè_VwÙ“b§·-kv#ÝÊõ‚áXÿó»èÄÊÞ²ŠÊÚ$tõÎÐÆ‹¬ž°ùéQ¬*7òV¹ù7¢[¥§9W6ÇÑ–
Ãú–.³B¿ÃYX¾ÑÙP°>’š'E¾…Îî lWèe“ Ã#Q¢šÇ\=lÃb[û•¶ö±–82`¹Œ®Ýøýþ35ÍÝ)WÃìF²S(™A?¯½û¹*o'ôÊ¤Ýùô¢Rùyw/Ip¼szNøÏÔHù@Œ»v7Ç‰©¶Ý=D©gk‹¶ÃW£Íªx ¹ü Õ7Ý&~„]È=ãÅ_“ ŸÛ¸¯UÀÁ! ]WÌçäSðµŠÌpí]	×…ÉˆCY4î˜Î/ªJñU;¢`P‡þ¡hC”pÊ]‰%¡—_§î…¹ócíRÖÚ˜VÁçÏyÌpÕÝUÈÞ}‘7çTÙçêeQ>Ù4—þq&¹êYï®C¾4ƒÛËÛ Òœú–&Eò«R]Ú2óÅJÑ!1´7¢¶¨‘šqÍ!µŽ\öÍÿLk9a	mÄÔð®]$Îææ§âƒéC†Þ;¥ìè<’ (P¾+ÖÒ“Ôƒ¨YVZöÈä@ÌZZ/ª!ýHö*h2Ÿh:)#j(	J-¤1¦-ÍÛ;wa<"-à‚ktQ‡kt8ÙâÖ£{™šÂ|fÅßcYï}ë
+˜ÚZTe„cWÌÌ´È	4ÿß)aüé`~T.yÐ‡ÌÚH_­À1N±âŠèDçfÁñP/­õ.R\ðžãõ1ä‚oÀ5D§Z±¨yÇæ¤vçîF2¸e€[©	ˆcþ¦x¸—ƒŠ¥³\.õþ¯žŠ¥êfÎ¡ÔÀîÕ* Oˆ>jæ8ú'º\ÎàYƒí¤{öƒÕKD,›—6äŽ «ÂBÄ³×ÔD[ªïBM‡®ë<{š@üËqU!ó#À‚†DÇ¹‡‚²È2¢
äUøªLÌ²^“š'qi‰RPŸ5ˆ•'MXGKü/ò—¶Óúà[Ms5›…™Î¥ì§ÈNGÿg6îRÌ{°×äÃ§÷K³àáæ[iþH9D©a$GgB­)O`F_hõQ¯YÎ%ò%Œ$BLm5X'êó-9lìèâ¶ïÝØ 7ŒÆ(9Ã`¾Zº0_g÷è­F3„Z]‹œ oç¥ S&ÑC Ã
ÁF“Ù|¶ï­Nx3ÀèN³¼ÎÎþÆˆöAE„AÁT«he—(‡ËNºêC-i„tžÒŸ*ß³=Mi}g™¯Ú|æY–3÷.½ûNÌéÒÂ?\5d0 þ’2”ç×Û·XVábP9åoê”þ8ãMó{Ý9ùµ:ƒHJµ{Õ<ä*wÛñ‡ŸÚVO:Ê˜Í
+>Ðnþñväy³¬Aœ›8AKš(ONéi»Àe˜s]BEÃ[ö|0Í¦YÕlA¹)01o†ÅãŽ­‚·Q\‡dtàvŠÇPw*'%”ÖÌæö‚²K£’Écóu›±äÀKÎ¥Y%ºn"Ó¿ãïÅ².–rx. ôµ¸£	vCztõX5º5o€Ñ¡§&nÜ·xØ×ÖSqNþ¦µ„¢@'Ø½*O³NPŸ'g}'ÿX‘ya;ÊßK4LÖÞððìrÎ˜3uøbšÐÉ*4Ÿx’ò<Í™Sfûh×G'£/˜y˜&0½Ã¾ž(hÊ“‚]@ïÓsÆ “r;qOò­ßLùæVÛ½µ~§ÉO¸Ëûã˜!n¯ªp1J-)f56JU™´¾ûúÚô;>ïpF%µENÄÕÌ…O8 ðÞ_-_û8+|\“+F+ðfGuÙ
“úÏ«AÜm, ^´î–i9‡ìwXUsE¡Ü¹¢Èñ§¢cÏžWLh£O^;€”wÒ†}N¯g?’S_®	æÃ#ß´õ gŸiÈjœå^“&RÞër|s•vE©nµxÂA¸´á^[pgøoefˆIâ¬Ûgq—ˆZFaPß*ÊÌ§P0¹>Óâ ØË#>aÜ¨Žw§Œül~_Ø#î|£{s”ìi	(õh“É†krl>fbÆª	"<_¾!C3¨&:q…×F=,t_EšÎq›
´pã0ª¨}òQ^4ãn¦øÏµ÷Ä¥ëeçÔÄÿõ(º=¹*ïãH•EúB²ÀnH_¸Z9‹œ¨(ÚûH³»wf<öñ¹1s›°8©•lµv*³ãÚ÷ï´î	…†V¾µp¾UÈeÃŒ¬d¯@ZIŠR\u¿D×Ÿñ‘9¦µmT^s H¸YôÓ°)%3oæY’º¯…s74IÀïa$›±¶~Ž¨gfÇÝ–Â‘Ù‚XÆÚi$W“fÖdÍ·ý”c½aÑfÛSí5²öžŒÖvö3&D‰ÔÉœX³dÇ+<öÐ‡aÙÛnb6$ÒÖ¾Kz–ÑN9Ù‰	FObc«.!Âm«T²*6”Ör?*Ró„H˜Í÷yÍÀYJß^"ÌT™L$ôÿSW‰WÚÈ|õo4½ýˆÞ€fÍp8þºN;š-TÐ£>o®«9JPQ
ã®¥Ö=ÊãáûÒñÐ]Ñø7MÅðð0•-,x,º9„ìx´f9ø;S
zöæLÕ
3üÛ—ÇÊyO–èh&µíEÕf5›Q
×?'IBSp:“Iìƒë3¼÷ nj.\…
€ö²B¨ùÂþeXãn’'IÊQ×/ÍzZò'{GÎmrÂ›k8eòI©'u~œ¶Ðy(zÚù¿@°¼·séÑQÆ=ó×&Y×óSòÚºµŽzðR·ð¾‚u°Ú,-úoó?ö©op?Ÿu¥ýp¹æ1J|Âú#Á—ï,Ø{ß²Ççÿih4Ö&=‚iÌep÷‹ QµxøÁÖÔ¿€×øÛb?²ÒwgÃc17y/Jr¶ÛÑC¦úsõøZõ×EbC=‡F±ra9¥p ÆG eHÕË^@‹’è!Üá(†¹8#Çh¥<ÏD¹R6ñÎ?•£l8£|e|¶ o:
nW´È/[tÏôÿŸ÷ÙKž»!îÔåžMwWÝQ.8¨ïOý¯;Å ­	é€+gì¯˜é9•Æe¹ûÎºw6]Ž63ù³ ÷da«üYâjAŒç3&=lIm{ô*õ,†¥„zèò×ír²Q"™ÅŽÂ…y8³ãS|,HuY6¦ý¨fÿó·¼ÒÆ±­Ö4¦?X÷‰º%ë'NXäÒI L˜#H[MÔj‡ÎF46¯Ý"N¼˜Æú©Ù,
Bsƒ0&!ãiQ3|!C_k£€=M£r]¬š	PžBP\® ×¾s¹BƒÏ€šðfËfï ({l¦:• ,x/”!Ç` šÑ/àü³>7½¿Fr6—¡z\†
˜+ªãK`O–GŸÃNˆÆJ¥çÎlÙEŠb¢ÔÒm.€úIšy1Eãhý¯üË	j{š²Ëïñ1Vp|óQ$\½;¤œ]¸ÓÑ@äï‘ç¢÷ù=ô1Óç3`4.öFš²Œß¶”»¼Ûèé¦ÚÔuÓ]‚G©ùüÒ™ÁíWdÿÝ)óÅõ~ÌêGcXâý]Ó›³H·œîÉ»£U•8bè˜søÓ°õÒõ›é‹¸’î÷^ÃÌñ=d>\g–Ç‚xþV±<³×°|,ujUBöjêUÁÈr·
´÷dËèÁ«oÛ-CzÌ„zÍ¥jêƒ·jTƒ?ìøÝAŸOÉlH”×Ûö˜´s*€C.…"ÌTWY´Í
Q%x'Ê²Ëe&Í•cÎ¼ÆÜÌ;£ã˜òç€fò¹œ7wîü¤/"•ÙÿÝ»“}˜v´C³ð] ³ñhè3µAòxÚsD0µ‡—Ñ‡Ÿ…“ƒXcWWk–		H¨¢zØ›%|òüßÍF;£/!ÅÚ°á“ð:™‘ûˆ‚˜rb4øl*3Õ%/ÎQKa{ÞxJò¹ÁÐ´ù%U§Ovq†Ä¹ À,›ÀÏ_•¼Ù†lïm J°\g-ö|7ÇYdží¡–$(;n'Jƒf>ˆ;ƒ5ö6sffàŒMæÎ¤Ê·’Ç¶;Œ©ðÍ…
½?ÌJ{“ÆÔ2ÍÝ¶vÍNµ©ˆÌé+PÌ…}Ê¶™<ì…­¨
»ÀôØ-H3|Ôø[ù¡ÆaãpÒ«˜?¸¾c&Ñjg*}‹úÆ0£¼¾» ­Ï,)ÛoT¾XŠQæZ™»òŒ|Z÷ÎÏloT”rzv“„~!bj']è*‹@R’ÉdŒ7‹Ðx·G€õæƒäãæÁÄ?Ïu<5be{ûA~ìöm`•ëGP»{ØÙb¦¶Ãò"gQÅ}&7·@:wªZV”ÕWÄ(úª¤ÅÛuô71ÍœE×ö0/BNi®2‚i¿bB• ]Aæ±nƒÓb8àeD™wÇÿ±ÇýŠ‡LABC4ðÔ‡ëµáIsíÝßAJ¿9£
Àî.'’¾ÿxÞŠ|E·0”)z­ÞõzÀòÐîWæ9°¥ÃÛ÷I5~ÀKÀˆyïƒÜ€¶(òb&Ì#‹Ç×½~Î/„UV‹ñ3Çò*wpj1!½ÒŸç·AÓ9YúË©6gÉ›gžÓëôt®ÆH5žÍL~ßjLû7ï½ú,ÃÜÁ¬‹ý›$Ô÷ ¢£×ËÒ–‚Ã´×B$ý¬¦!¹D‘Ò²¾$ÛT{°´ß“âí­Þ_½afÌV/µÝæíšk;4Ø°z^À]ó‚1t}#ºÁ½8§`5õUî€¤c#â‡ˆÚü-³Ž=mRËƒÇ£qL(Þ,ÅÌ&´saaþM¨íQÒYmØzlNººH»lÈ˜út"Òl½Ÿ‡ÞHgºuˆ¬ë%,WíÇòÝ’(¯–$·7ª´k<š›®ýÖ.:%¸?pÉvè‡¥å_»ì8¹yÝW »Åâ?ô­ÚŠFï¸¾/štWx§};×ÍŽ’Xl¾ÓÎÝQ
æŠÚ%6Ðí¶0)Á¢ª<®ãíd8½’nY¡J¤+ÛÒ?Æ$±Æ|å¬ûÌåV3Ã“Áîv¯âäþ%6Á*$ÇÃÍ´ï9kS¦ pTuÀ<¨p\çÀ_7Y±?ïzqòzœX“ü~¹L–S9žUœnw#pv«hc!®ÇÚ«i®%qw9OCä"º§ãWýCZî;	í³,æýÔàk¹UM”GIV‡ò«äòDÛêÈŠ­gËr„‡üÿéÏïæåE™þ%5èY0âŽlmýÌ¡UÞÝ›žZÛ]täôò-·Î‹ëÛœvˆK‚ÓQd‚FÜÆo°N>wàyÐÜŸ‡ìcVW¸‹;œè¶”ò
$ÚŒ|"êðR–Ìæ| J §õ½?'Æ¯:gw ÉÜ¹{ûb/G)­ØÞKÜÕœÒZÏî…51T
ÐF‚v?p¾)ï~·Å©°Ë¸Ú7ã]©-ëkÙ†M+f;p¨…]5ö<!<N¯M‚&4Ëï®Äåë!qîúnR=ý1¬Ìp]Ä+0ÃêØbÄ´ša¾póÂ‚*±ãì¦ºDMŸ‘2©Fï$[/vB¹]…ìw
÷¾Ï=Ö…¨g^uÁ‘Lª…ÂHéÌû/^À¦ß2V¬ŸZ¾G›`(ýwlæÊÈ„M=·©è”˜R8VU;•ˆhËžƒëú*6XHx²ˆq’Où\Šá4Ì™ü(<•{;X¿cj”ŽgÙšLl©æáËª.í‹î’&c+,cs³¶\»	ìg±i vDrg8?é$où5n”¨Þöš»a~JG°Ë*óP’ÊEwé(0(Ø´®§ÕhÛ¶ GžWf=¢¦ISG¬d×ÇºjÐ³ØJÎ`ÛÔûKR•üþ2>ò?y>™¯—0üÙoy¬gÿøÆ>Q^vYÒö? j°#uí:
Ã¤¸Ñ-i’Hù£$Š†sÓœº;\ˆê{Ðœ«ºúÓ,7»4ÞþlšÎÆF¥žå½éKÇ^ÃÇ&Ê¶YÀ™zø–ï|¢aËC TÑØþÏUè46¥ûì¹ba·ö_· Ä6‘¯ÊÕ)F—Ùaù¬W}92ZÁâ{e9ú=îéJJ#qòêàs‰«"H­f8Ûç 6l¦Ò6b/¦³»ÊQJºÑÇRK—¸ Š0íÂªJæp§R¥N+°ïBªÁà¤l*Ç;Rk-mx"”ÑÌ…%ãÕ§Õ ²Ú`.0-Sâ[´FºãIKœ/Œ©qÆâyÞñ®´£åkØV®/òÎÊv€3Xñwï~¸úÚùRõo =1\XÇw·ÅÇ¢‡(Ùž4ö ^*ó”Áïb¥º^ý|Yš½'ÁÙõtI…ãÌÛ#Ô´&"¬/•á'Loo†¶¬ÿG˜ü%ö‡&Y–ÄŒ˜^_É‹Ä¿c-†é\íŠLM½½îÌ9$–>L­ƒ{nQ§øl.p¹õð’ÛP/\8™¸Ø]ƒPŠub¡¢+Gð­Dâ6
¿å$–ìdÓB:.Ë!*ÅI†!ÎNã41ûÈÚðXÐAâ”±ckÌV¼u|=Çß›ˆç¹ýÙ ‰OÃ( 1ûL¡…0Ø(‰CÀ˜^Òk”C…Å›¹­8c´.ÇˆÝzLjåª`äòÌ²ÔŽzû.›¬ˆGD¸ÚFAº¤k±ùáY”b,8üMª®¾Ž©LÕú7Äcßç´_‰g4„6§*|`ª–UœcùßÓÐi$f3gÓ›
D”ƒ0iê`+çqê¾	BŽ6i£Ø>õ'x2'TMÛ¥)–ú­ž®è…˜8Ÿah1uÙ'mzS$³m£÷ðñ§b`Ü¯u;ÂˆD åv>rGÎ‰bgqÁ M‚©Þ¾·fÉ6£ßz|BzQ½¢W‚(]d5ä$YQ4$eûÍ¶a¥97¯aOléÕÉ’ÏÕàï[t½jÖö×+Ûä¡Ò{í}	Z1·¶ŠQbDDäL ‹P~ÂŠˆyÙ)\aˆœ1á8ksMU)f5lHE—Ëf:³#8r%’x—ÀóM;}?‡²i:×P
îg˜|ŒRU*Æ?°?èFCF¡¡ûÝSddÛŸeä¯7®q-4”‹ÇÁwØ#^Äûñ9Ã€Âÿ—ð‚Ê³òèB%Ñÿ[Âß•!«,ƒ…6$·=vo¯ˆH!òQ*D†"‰êç1“‘€µJeBñ/TQ‰D?ùE™ùKrGÉ3ñe/Ç{=Ækƒå[nÑç±rÒJCý)fmÁ>¥’Í4_Îš¿¹Öã÷Xþ*ú…ëÓ£Mùa¶NTœÝA.¾¡†ÐKUë Ž½}š×z!ÌñÙTÜ.—âÉyG^TPÇ¦´¸®‹×ûÞ
=ö¬J†¢õÏÿ?äc±Á[¶eÓMÂwÄŸŠ=%3êw‚5ÎÐ;Ç¼w;)ÙfÇ ÉL¦±Iÿ2´B®…ó0G¥v¸0ìéŠÕ˜JUïÝWýœ'´îo¿5£Í¬²}i»išsáiWë.['\âE°¯4.g†&-fÃPYb¢ì¶ ®WvÎÌ„‘E_RÀ{0|xàƒ4/Œ:4(úþ2<|Ÿ±QÞl²;_÷™­]ã65àÛ° À`å¡óí+f/k…Ò mýÙ>S8O82âZHí‚‚¡“S¼lkÉ6n·JD^J—ÛÂ'oˆ/FÁßçkU4ãŠy^ŸÆÙ’n;t­ð˜‘ZÎ^¤AÊOg·Ê t% C‘D—	‡øZ1AŒNµ¢Ðã‹èøâ»ñ=V5w—v»ÄÝ÷;¾Oi¥ïÝ{
›¬‚z¾˜rÒ4P“I£1Á/¤kº~ý"Îÿ¾­³–—
7¨ûCDg¸ÂZ†ÎÜ’r6°¼)ª&VÙÛX0VÖŒÔPqž”øøbD7_Î§•HÜŽý‰xM1sxòVÜf@ud¸í4me¬m±Ö-ASî36Kã2æ+&óo~%næ4Øg¯P½2®!‚qÏ¨ï˜¡%ðJÊ×>¼9c]*ïTô®É:ð!eBÇKeúÊî&Âï?!×yŠëµ‘ÿÊÁS¦|JÓ‰5”dÇûÿÐV·úx¿/ÊèþÍ’k5víÅä&®®ýÏcŽ×¯]Ïg'Á¯&Iç³¹M)øö¢àËo\µï÷Í£.ÃùS'…)ª 9zlÚO»Œ2§\‰$]ÿ«sÑLA®ÇÞ°§Õé¨Ï¬fzþñî6Wü%gyÌÅÂãÆ¥J,Buô‚ÎD‘U49.fgiX_…R‰qöái²%Ç<CäcþË'Fó•pe`	„zyø¦Þúû•ÅãSèôì÷ä'ÃÃ%lt7|G<2ëÒ½µ7ñÿýˆ‡oX Ì,Jõç†5"ì
8*Î†À2<äñ±¸’d>¬8b§ÀtC\P·Æ)}ä$>–_kÝ‚Å»Hx§$ôø†¹UæÕ:t"°2þ½2‘'ù½½jËÚï`‚x„)éjq²œ2nlˆœQ°7G_ZX3Þ5ëö2¿at•&ÍDº*fÊ–@_½µK¾ß_+µ'¡r4ÔS&6
è\7ïÎöþää?`:ù|ºB¡_ütôù$À¾¢pLú=@»UlŒ‰8›` !1Ú/êóÕkàqO(l“œë­vÌ³Ùò¦"âpjõdwZ[Ü35\šPšÏê°ÙŠíƒ7hbß öíß¨OÜ>½D²"SCÑ½®à¤äFJB4 !xàE†¯kí¥mt-/½[6?GFþ\±ÁäA°%Ñ3×2Š»vêÀ/PÏ4q-(}^'ÖtôKÑãêœû¹B©±o!Ø¼Š„RŸô">QÕìäv*0ìë|5Eí?ÇßÊ×ÁƒÌùRÝCèlèÏWƒE‹Áð®²_×W¨§ÍxÒÓ"Òy¹w:{À`G)rŽ#”ÿÜÓ‘àÔxkÐ»|àO§M‰0ê30ú§íK}HÔgq·` Ýt–væ)•®Ò‡¾°‡œæ=±BØ!m×ŽCÊ×¹øÒlëj­2uFcV£ä/=džÞŽÜÑûòÙ¬×*ËùoùùÚ¶QôþCšqÅ?pŒ€ø(ùÉ0.;£,zÂ’­üPòªÝüÜìÆú¶Ò<Íqï»Ò°ý®ãÝAwÞ{E0¡¯¦'~‡VÚjåãˆþUzš-Š~0‰ëä¡kÇh³6ìÖóµ}.&7
ó„Z ·ç«²6Jàã¯TXvR±¿8UDã*|;9 jò°ŠÍ&ïx¿ªÿÓŸ²y¼]5üÄ¦[ûÂZ>Ñ¥‚«‡ä•íÖûi$ßR­)àLÍ¨53FDk²—fêŽÚÄ˜›k2îË*fÑ_ñ™{«œŒÙ©:Î”%¬µÉNÄð‘~9¶«¡!ê—}L²6µ©”pK1é3#~ÏÜËƒ>Î\Í¯¥ †–l|
O°ûùô7,“örÇG]Íë< ºo7Q0?pŒ›€Æ±ý]©pX‡nP½WKèHÙåÆ§toEàÛ„ÏÐ0M¨WŠ%ÛèÌ9èÚû×Ÿõ¥ïÃÞ=¬¨ÃÇG‘q˜ý‡Ñ¤u.²IA‰ýµ×Ÿñ‚üÞÉ
1–7S6™fïW/ºZþnœ…ch”ÃDA¦ä/ø÷†Á†Û~4õ˜Tè@L¸È¹Ž=HFœ¢DDóDE18¤Ö@Ð 
<ek†Ì‚/„sÙˆB4qñy©¾Ÿ5Æ «3q*ðœKŸx^ºX¹;;œGÉ;Òk{™º¾Û6ƒS”qˆf4H·y9áâ2Qób2Gd<¨F°V’É)Â"Œ ÓVÖ—>=
Àjê§L˜Æv¨Uh“·¤Ï«8V§’V-iœ¾SžåqåHH)A™^¦2þuf8ö0$k±þOþÀ¹¾Ôz´Ù>®ùœ×üë
Òë£L§ÂSñP8?M»SQ­{ösiÐÇþT8¤fy«µŽ´˜„¹±p½âu22ó'Ë–aé%ï*[;ÜéØ®Çc2–å9\ª™´-¦ÌJPƒ™±‘¾þ“°Ñ¿ÜÃ¾0lº™zãK\bu9S÷éªÈ	³:™<‡é%„˜­JšÙ‡"…Ž¥Dê!«ÑÒ4ç‘3ÚF•Þ7 ËLhFc{0‰1>TM–Æræ­/øZéLÁd˜”wM ¾†®hYl ˆ/çpjÚïEñá!«w©Ê{e3÷¾“:ÈÐÌ•Ký-Œ×¨@† ‚ñUÑ‘¶ãnßäBÍé±4“-–‚ã¤²\p 8ö1ƒ¦¤IhªèKÇ¨í5Ê••&ÐcÖ¨ŸKP{TX7Pëœ>áØ2üÃ¸¹{SgîaÒ0I„ž)‚ûDÝz~ðª[9}.C`I#p¼<«ÇQLU%YÿÆ™`’Ðò:¼¡Ý2?Èú‘‘?õÐEñ=Îb*&xÒ³k÷öÌn
OöXƒÜãžh|š[²"²ÿ¾ú)Œ°ƒH¦(œ§™'/ë&»öÞø¶­É¿48tÞ¡0H‰Š·îi°hLˆ+$õ„´˜	H3a7N˜í;ôr¦2ÕS£ÎQƒúvUà¡”‚%ñY¹ÄÌ7¯»{õ›¾iíZoµ¿­$(»…ÿîi>6û!þ„¯çP‘¨—ßŒ‘þ.3å•. ×_›ýUþÒ››wÌR÷2ùd‰"ÆPÿ®Ãm3Yã0 SäFEX1N,˜éðf„¼×bùofW­ÁÐáèêÕ€4¨¾ïæMå¬[¦#¶ïBð9Å÷§›Nê#2V`¦ òC”\µ(dï·`h…¬¥hël§†Èãò;tôkuFÝè“‹Ã ¼Á¸,¶Úrcóò¼T¢=¬»p¤nÈY]8  ï	õºWÃ¤ã<ðå‡ßÜ;3lxœ[½5A[Í]ÈsLØnCÑÂI»ÁäHo
k1‰
¤n'mðô…›’£¼ûmµÕÃ„“1ý}ˆŠj|éÝ•9×Ï÷±bkþÕ«ï~zÛæ<Í"E°wAœX>r‚a³\ÖÝõ%Ý»’„æ0B2”~†ûÕˆÏ%ìðöîT½Óiÿ
b1VðÛDxbÈk¤LC’tþV²ÜÐBÖÒë™ÔroúåÜçB?rz
í¾ì‡#a¡k
Š_´Ð‰nì8ÕÝ»G3¡Òj³KnAX¢‡à†ÒÄwQÅ½®\BJ
½¢CÊƒÂ2†Ü¨f‚ñËI¡0“é¨¿Ú!à
¼4 ÊX$]!kÇó…X“V[zrsÒÁ2Z0¬w›®~4óýqçp´úô/VÏÕEJQ-Ó+ùQ/¥›åZÈ0¢2¤˜H(9ßÝ¬"„È@ŠŸ¹NŠöÓé²=¢=;i`}PÀ‡Q—uŽbáµ`n|wÙ5}iâ&&qÕe¹ªZ‡Öj×Ìáfìð8(Õ¥iî}|Ê‚•$£$}©dØ]…àÎÖÝyiîN_°Ï¼Ü2Ví;"°¾¾ÇW!êÿPýßµn]ôaÍñÀ·ehÖQ°k‘²é˜F½ƒ¡&øHtmXðöŒW2©bn3  é—Ñ¡áÄ›rClãäÎæ®q9HÍ¡Ÿ3,¸‰÷ÕÀßq8­ÓÚ¼Y¶Ö‡™`V9žÏ—gñöÆeˆ¨x•;#3ƒÌ VŒÀº…Yñ*n0‚¤*º\¾ñ¡ÁÑ…ååH(Ôêêã•äH¢ðàšÙù…À¼ªuçúæ§Ô5žø‘ÈsZ]#õóùZÊ	jü_	«x–D¯óÿc¾ö0O·“›ø@®BnãÉô$Ôìë.Ô-ƒ*þTr¡ÅñÕ–HÆZlækµö‹V·,9qs…fâÀqó°î	»2œU¦NœŸV9²jìàzŸq´º÷!æ\‡È‡{î\[^ÀS¤‹ÚñoÏq‡‹þybµ.Ê8«›”Ø1¼uÔyàòîµ6èæ—nc•vµÚ=! ‡jØ>ŸA¹dkªÍx|jqöHs'h á+¶;¢7ü­UHàç1ª9‡½RÈ¶Y)=EOw©s×…$x8‹ù¥¼S«,Ë`#/CÈ4íNZáÝXÄ2åÎŠÂÚŸÖi6‚Ö¤eßZ78ºE|çÍûYÎøÛTÔþû«Ö(Žî´T&ŠèÍês(¸ãì·Ëå	Â”ÝzdZýÒÇéje×¹xXë¢t»ïSz…dÖÏ£
	ëP'QíCxf9È{a‡b*£x8×"SDdšØRÔfû&y58ÏoÔAÉL,ˆí#j«¼­‰ÜU·fÍ[+©ÿ¹¼Â÷íô–NüL™×²ÀDò.Ùà‰¬+~ÿoÚña<Ó@þÚ5ÊD¬¦aY¤!*YÔõ¾Ö¤'ïfë.®á¾Íƒ}®M‹rªY·¶„	ó4)ŽgñÝšîÁÄIÓ¶.µ:–T5YÕÕÇ?Ò·:+ó» tsŠj±rø/º¯xû´S±”m£VFìzÈYrÀòwü	ñXín;ï,]6$\¢…ˆ5<Ú:6îKR¥²;¢#ðªä‚ó5zd¾°Œ3H×å<ä‹ÀÒ²!`°pa$l’Ô¢Ø «dÏ4úêñîˆµƒ‹ (ü¬h“‡º»'a¬½Ù?Ë%wŸ¾þ]³ÛµJÕã–$ÖT©ÖÀYÌ<iƒnjäÀ¦®=« ºÄ>@ÏªÍ…7ü¤#u ß°C˜n1s-¬1]

ƒ{Ø@ªÍîX
V4¸¸š ÖþQ|]ÃA’œÕ#œTvð¶^Óyhðwx‘*¡²r:ô%úÛ«=÷ï7:ŠMã²Ž³ùïVÛšÐp…g®hõ5Ù"Ý¬üõ-b©FßJëPFõ®€VÝPü§iñc^tkµš4¹@ò"7V/y
µÍ}ªsbw‰¦/ÛÚª9ë¥‹z®È˜Z<·µÜ¶V†üd%ÜŒ•þ.–ðhBÌö&AL."Y¬˜‡€!ÕÓ[³³€õÐy¤YíŒŽXt×0&ý§Ó>ÁÃ<?œ•¾C5‡#iÁÍ^Ò¶€)H„Z°ß@n!Í#:‚ãï$—@-|	P•‰}œ_›Qðc±V8Œj°7‰¬¶•¬Ÿ¦Å;¬:½«nR—ü/ž_ÐXFáá˜]Ü
dæòêám”ªú[˜2ú:Œ(iÊÉKëÇ±ç5ðÿåJðßbKÒ`¾ô ­[èÚŸ7—·)\8`[pöøø5Yc4g§óP*˜¨:ŒWÉG°‚jnƒ¯-^Þ/ÏkÃS"m8EEs+œÎ[ÔÍc«!Õy½}f%[¶çt¶k„ZU¯5Û$³w
mÛtˆ­ðqÕÖ|ö.¬`5ŸÛÃS"S©ëá©ÒŸZ0"YÀŽˆíŽÎ5
¯Ý¤ÜÌõø°·ÙÃVHŠÈLA5ËòÞVä4xdÿŽ;iÚ[24`Î‘~_0§«iÄm€òöŒœ‰‚ù÷è¾¾Qð§›ë5®+B¼6æ+ºŒ‚Žˆ•mg§Äk‡æ‘P°ªíÛ¶Æôâ$F¨f»ö$ká˜»ZŠI¨”Š;¶Ž<@
 ÃÜ–ûº¸mñ¹®õäð¥¹ö%Pd†ØÄ¸K[ÞESzqžR±ŒÍ“ª$ãB"Ä,&“¬v?å| e—˜vV/‘ãiRÇ’öEŽš‹·¹	Q©æ
Ä+ÕŸxíŠþÍ¸IrœŒ«6é8%¥-½W»Èé8ÆS»Nƒ£,S§Ùu¦ü®LIt¥c÷VsŽ¢ó7hd×Ú½h¦c)–Œ|ëïô¥vã†\yëî™ó—üˆžø¾¼Ö{#g¿ÈªâœæÑ‰sL£µÄP·›¶J½ÊLÅ—[aÍj#ãhÈu4}ì£ŸÝä
équv•j÷ÿ ºŒHvc1=^eY éˆ™=»E5|ù(Üå6XÖœ¿x£Ãöñûd™;Æn×Ô+(ŒWËb³v’Q”F0;X…æ}ÔŠ×ÜVQ¬“Œ-ö¿Ä’Ë†–®Á:vß´»¬!iµ?Æ-—ûÕlÐyB´(ïA%3RÂC€ïÖÑ ßÖpÃ˜p3ÉÕ°‹“Ÿe!Ù%%+X«Š`äÛZ‹œnB‡¡‡)àè\¿e\µ-¥v\ˆRÃýzO@f7”ÙcŒ(cŠì?Ç‰å!ãh«R’IOÚ ž¶ò¾Ld²Òg aš˜*æ¨h,ÇeîHêa{JŽß,êý1*ò0üÎôuÝ›\æ£d²…v²mé|¶Çøæ-Å­cfZ;NÄ}ñ(e{wù›Äšt¿¨ è
?¾a0àó÷CÄþ^†rùqÓù+„‚çå[×zÔÑJÍ»äƒîß]3Äú—µÊÛãÂOŸ`Ý.XLP¤‘XºÒü[Ô€]çÍç¼èV)  íåWm=Ÿò%Þ¬k  2ç¢m%²U…`ƒ¬CéØÚÉ¥pOEÙ`õúê0Í(yÞ8üúƒÏSI1ërVçtÖGðmô…ÕíªG ÎÆÒìfˆÈ9#Â™c€PÀeàêQœ™FÇä‘ùŒëØ•9ÙÝê$„zó$–—……ÿsš¥ŽµªEÙ=‹N\t—oß2ÛGXÌ¨Ê×˜I«!ýÖÍ¡Ë7ÄuTÑ3GèÝ½ïûx^øgC¡Cz©ÍnÕÖˆ@8BwæÚ}«àí!£ë©,Ú¼ª¼ªïBb_Ð6 ¦ê@M;?Lš(U²¥õ§Ë-ËóLˆO™_ºÇÛ3gBÅõ v§ßþ‡8}ÑŸÿ}Œ±2ÀÜJ£…¥ÇO©Ñ±G}8ÓQÜ™t*ë‹;­ävÿkïYÙÜœñÖÁŸ€h_ð½ ‹zœm×´v„'S°s_"\±uÿ°?ö£ð.u× 	´»¸w+6áAÏ”ŽB¹=çæX”)OýíÏwu¨$Høß„è3Z^áœ€‘þŸ…T@ÔËœžF9÷ÂNÿ(¶«÷<ê¡õ­©ZfªE"bÿÀ'õìÎdY@‘[R(êÂüôœnjw¢ÅEQQ¿ÂŸtFH£ÀŒÁx¡uáR‹#Ä”Ÿ¼úVF†âg¬kç;¢$Ÿ{±½ãèP÷Ô2%¼mçòÊù19PÐ<{Zž6mÁ>Waž‚¥Åž~ –±! 4Òti“óúŸøQD#Züu¤“ÇžÑu> 1¡h\´ÞÓ‰—ß–[˜h_9w=QÔXÝ6á_]ôY
ªwÈlâƒþNŸ@òØ¯fÍ„—"^K©ßBIµý­f¦iT÷¨þ¥ˆª¤ó{O–|:Z»ØG:Ù“·Uíù+Ù¤]ETApk‚Â«ì,é)q&%¥ÅhµS²úþžjõx%^Ëf7OùŸ¥üU¸£Wÿœ²2ê¶rˆšÝ÷`Zfw^„ÇkÎçTöqÒNÍ‰xËP!ÆãÖ4ÏÜVEŽE°ñ1Ÿæ™Å@ÝššEhJ.´8š
ß¢ðÃÆÅ-F1«‘´¶û0>{GÍmÿ©jˆ+»~Úæ’ÜÃpTš–•Q`,b§EZGüŠb„n‘¶½¿÷ôŠÁ¦@ÖkŸ~Ò˜O-Ìëo)«Y6+E”a‰ Íj @ú6£òOXT¡y%ÿ†~žhRýÓßÜ&qÁÊ§¤ÜÃŽó:×Èw@V=kåfå7ul"íöa®kÃ¦CóuºµC?±AÊ®öP?®ksº¼°=•œ!Y[Þ^¦ƒ÷ÉEÍf†•ºÇ!e¼ˆk]ËôH¯àTW/ÅËn3;ÊV¬¦_”-÷¬+—Ø·Õy$#—•C\v!º0ö@>Îk“ÄÊâ#uˆ‰=gh=Œî–¹Ðíù¶—9P<D€¶ªþ4nâ“q§?ZÓ¿¹b orü‡îq³ïbì8EÞ9ì;½·Y>iCK‹9"ó_âä@^«žüÞÏM7ŸÌˆÙÜ=áÂ¯ïü#€ñqD=ûªšè†Êò~\_šæRUu$/Dºî¢ªéi.c	r>¨j«
Ÿnu©ñíž]ž!^vwûÁw™ÖÜÏvªe$ö4m‰ðq÷3<
ÉúÚQx¾ìœÇˆ¼;gîõÁ@iÚGW£Úñ•º“K­:w±wä­-°¥xíó¾yœ(õÒæ™\=cBú@}YU-Îy	ý¡J±;+èk%#ñ.\NrQŸÒk¿b6vyL
¼m×­<â
ŸÒ{š£c¿ZL^R_'ÐÓƒû é.â4U™8X;Y+ÖÇ‘aòí¼‚úÀ/6]¥ñêT;ÊO’Éõ{’Ñ$B?)Hü1ÃËIœX0BLˆïöjÆX™ý|ä«aßî€&ªÝ)…‹QËÒÀ¯0bÖb':ê‚—VüÍ°þ8`wÌzï‡ÃÒ@W–,Ü¬ÿÁã×Öž›ôØÀ|MkZ u÷ãƒÈrj]ýf²o7lcâmc&‡È¼z.TÀ6Gh–SŽº7ú7ši%;®²u*; ì³§>"Æh?mB¬÷¹1Dç¯b”ñÓ…3«Õ
Rƒ-Ð>\ú;´Ä¾ôÂ˜ä¼H©ŽðWâü¶ÒÙwŠ½™ñ;˜¼:âñ”‰‰©êuÖDÐÓÑmŽàÚmÍsÎ‚O‚˜MhŽõ©t­Õ^´ªâs‘PÆ”ÞÎV”´
˜…/›® |Ñ:6Ã-šúÀHBÌµš;ƒùÿèCõ—7ÔI]~?âsü~FÜˆ™õâ½¡¶CÝ€‚à|ÄWSÔ/|ýÝÚã¥õÙ;«A²ìÓRFGVX·€ÒÅyÕ¤gˆÜ{²E#uJš åÈÖÔÕr ¶äÈtik:ã¦¹El½Kë–Ãog•Óîˆg­Ó¶ùr‹c\ZÛÅì]º¹žéL4k35ú…M-wè=§ôöñ=Jî³Ió{ÕÄ!ve?sÁ,zë‡‡iNö¢‘aÁH/S‚4žêêQNWcaš¾üÂþç6…abtåŸv9.·>ÇqGAëìï)!"°’ ³0´ˆ:Pe5j/”òño,d.»g{Å^>Ì‹–ïÚ±
¢?óR[ÎqDWË^qæ¬‘$¥ŒÙÂ!·sïU¢Á>Åðßªí\À–ílÇ9¶´å<0_!õ}IPê~=_«¨2j“nH–@'"ÚwU²í3«VÅmê«ì+¥}åÇÇ»¹åØ|ßòœèý·`w§»”§ÛCï3ï#þ“Çáˆ¢m+5l–;7'ŒzÃÉ§·½ôß^3¬‚ÊmR-›˜¦AÚ¹¹i;ð¦vŽ€
5Pú^äÏB| l¶>rUæiqÌ&[‰©sÜ¸­¢Ú}øÄP›§ågÕ¯}Ú@oZ²œ}þ‚€q[?ŒÌÙ'±`ÔBÛjdÌÚŽ´ŒZX_OëgÛ	†|ïÍÛða‚Å…8Ä10“ÙÐ©A6™À±ˆÉÀ.	Äˆ¸ŒÙF[F˜½©K½WFß2a½ñ“~tciûTí‡%,Ò*xhƒ‚l°”t—†9º`2éUþ@z ÑÁyz¿Õ…Õk}_@¦=4t÷¢+Øõ(ßrÔ˜óÊ^9jj·²& åCôc±ò’"ÄÍU.òÇÅDa•ŽÊÒC‰Ä8©æþÒÞ™ fŽšnÕó§Î‚tµ,Öä^PøIUlŸ'-óúúeçÂÛ²²‚
þdÜG«e±põå“Ø’uðAîSÆÍ-ÄÛÜû¸RjS¡s71c­”¯?ü#A_ãWkr'Õ´UÖ,þh"?ó¨–Ôß4ºø%wyÙðQáÇ'œ¬ô…çäÊxÄÅæ£°¥û¡|Wâk7I‹¢§ífô«@…ƒuPd!=íaj#k^dl•XB[NŽZ[@¨óA-šu¾m‘¶‰à*ý<„ä»'$žh½îR¿¡çOžX¨µ´·£NJ	-OJ”Ä=µ	c¯¯¼ äóH_¾ÒÛ4DMú{Šaì5ü?P]ÀÏ)FÕC™¡v [ÖO‘Û’ZS>£TNÙ0
Z¹¼ÈçÜZ‘³«P*=‰}¤>*4Þ¬-†7ðo)øÖgÅ–º9&ƒ èQ{d%ýÓh±þtÿÇv©}é©ßNgNþ¾ ×±zjÑ²âàµ9ò¶µó‰r¹"hÕ„£÷F:ôìÍ°ª~ºÇ¡yœQÈ´ô§éœiUOÖ÷0xÌ¢WAJE¹êg£+Z<³ÑÂ;×á'ò±˜í6¡%ºÎäýy0€ŽCÂÄØ†™ý¨¶œo”Ž¨T°¿6·µÒ‹ÌU¹A“Ô[Wæ ”§Ô/åõ6¾kY<\á ÇÔQêÓe)ëäÁþúÿWœ‡ô‹Í|J­×Ûs-Å]nKb£øUéOW² ßffÂy˜õÜ³¸9(/ºÚXEÀòC¿ÌC—z²Ù|kXÓý[Ü*á[_lgâå/>Â¡à—µkè×lu·¾/2Ž•\`Éµ¼Ã>´µë=Wgë.Õ½ÍŠË$6n€.ö%¸²ÇŒg´'Þy¨ë ~æqÿNš]kQoÂmÈî€srû!ÃäÝº¹Y†ê¬Êîh‚Š+Ô€W×îßmd…<L)5Ýr\ß»¾7ˆñ „(Ñø‡ƒKÄ	¹Ìá„Ø]J%jæ±°Ö\“ßÏ·ªÈÄÎy³e N;h—·Ll1 ‰ÓÊc‘ÅõÄüÌÇ.çR÷sÙüuØñšóJï@ ·='(Â‹ñ¸[ÂDOYßªe]f«r•fÆŠûü±ë$j¥2Z¥Œ¿‡£møþÜzìÈï}ÄóSIïœÞïÏ`¸/Ïµ8é®å«+ÑQ’òÂ•u/ãRczòwDx³Îs¼BÎf êÌE:ì8™´®¥óœî,:SÙ¢˜BB?,öAeô®wRËË~”'êýïb®m}m²# r'Ã‹Æ3X2ÎßáléM)OZí"cæ…Ål=Övaú6Û%­®lýÚ‡†ÿ™ììæh¹„|°½À„6¸Äý¡?ÿiª0-ã¦4éy-þ:3ÛÐY9Û<÷-ˆ Ñ¿Ú/Ï:€.>œEC#ÁKn—QŠ··åÕ[™ 8³]çš¡¨`|–¶Ê{S»ªÍ›×¦ˆòh²¹CèÓ¶®Ð34ÅYMB|,†I¨A”øêFÍØVÞµƒˆ¦`QQ`Žƒ//^ÓÊú7(%aÀ0ªWÖ{<­©ãñòChn‡÷Ûð(mÂ~”´â*±…mVíØÞ­ÜJ¾‡p¬Ë3 üVrÁÜ…1ÿ¨5«œL[¸èûó”Ñ—äš;üi½¿«Y ý!V­A	ù	ªô‘÷ZOVœá•òkÖ±Šð\H;ÜÉ5	Wšd„õþaÁdMìØ3ØPÉëêÐÈt®†ÒÞ­£óØÜ±®«ÞNIì§ ú ©JË¡wàùRqz©ª×ì7ÓOCÌËyÐ4#öüÓÿ²£¥üeÊøþŸFÊ¿™Ò ±¯b4H<4èôa¢G~ïý– ø™ ì×{¸’hvß0	ïJj¨”Jü«c1¹h”ùx7pÚ˜•<¿×ba:œ«JQB:¡µKKê!ø®]Ãž…ËÁh|/Œû%hx›_tFÕìE(þïükñûO¹µT©T‡"Qáÿ{q8/×/?%Kþ’Ú$­àNåÙüÜÀW½´t8ã¸+–¡úzän%©CŠ‹»ƒ'¯Ú]Igñ–!x%1'X³êÝ8ÈÑ/d¸ùñ·ÅÓ³žÝ4hüD{Æòb¨à‹ø•%·Xp^û&_œ$€Ç¤pÆ ¿(á‚
ÑÜMêæø-Ã¡+µPŒˆŸú|hÚÉ5VÁ‡ðiz‡Æ‚õyúÿ‹QOâœ*@=Ò	ó6À8È¬~‚¦-©øÌú'ã—ÇÀÈ\¸èçÜ×ÝH¹ã:d’iê„÷®)Ât` s /“RqhÍ½×lT¯Ã> T~£ÙUbäÔj*ÄYñùNtêZ›¿~bûé˜ªÔ–ôC{ViMúSAÃÃÄòáXpüpSbF‹$>Šª[f—ñXû\mËŽ÷\!ìÅ`Ë· ÂPÄXùÃ9'¹S`þ¸ÛBs6¿ ûÿF¿ƒH´+«¢ŽÍV'yº+<DG9ïa]RÂEg#º®ý£(±´/4®È(Æ–Ë	 ,&˜aE|Zø—E·Í¿œ^ûˆ:¿†Œk¾©¤Ò•O=¦£+Á×9¬#pÛœD”xüû©¥
wôg*
n×Š‘Þ8Ô,Á¼´äÒH²mC<óËúŽqÅ+Š“ÈÒíLÃ“0øS‚èh1äY! ’Î Œ„ƒ *Î61Õã[¬Â|¡Ëñ°`›êRIl3ÌÂe”P•1€ÅAå'_4®wŒÂ>®9no/â±.¢ü¤he7¹ŽWÉU|¬[OFªbÜ¬SªJ{Þ«Kåö,*ô»±{	AÚÙwmê—šeŠØ\Q¤M7æ˜5ç@^åÎY†á€þÜ\ñçhó÷ŸoóåŸöGY\¯“ë >ÛïLÍ:{Šì«¥!üÞTý§§¡4ñÈ'(±ã…k©céÎì–ž¦í§ŒÕ·»‰“™ð¸*×žTj£ECX¼J@ùÑ‡A{Í-ä›Ý­)É\fÅÆÛÁåÁ_ZòvôÌË¦Wti‘ôIJ3™ñÞpOàÅ§jýN¸EXrÙÏ¬ó,GÁ%^ô³s›’‘î'ê'È·‰xsæ$œÅ®•Œ)Ú"Zž•µî@¤ñ1É§Rþo#RÈ¡cz»,©¢Wýhëîk\ýŽq¶ù@ïòTÉj'±·¨«â‘ìU–Ês§|Y¾ü4R÷Ê‹§-ÆÙXuëiBdãA¾éµ6¯bˆ>%º_Ð:á ;¸ èá~¼iZíµÛ´¦žŠ|%:å¿j/!ÁâL\ºt'ÄBðJ½¤úÒŸïÎ•PÜ®§,¯Å•Ôö·Ps=š@îÆé3g­ã×¶-³@×üW{dqŒ/q×Ô´ÃK74çÙþC³àŸÀuˆ0Ÿts”ùß/Î™ó_~ÜTÙHŸGYŠµÚÉfòöèúµôÑ¥|Ø~=ßÂ„küþtN¼?rƒ‚ÎÿðÃMËy`ù§Ö[ZÅà²S‡ë?MÊµm·Q”NîÚœagª#ôQñfÜ®“qø‘ßƒ€Å 7S$" `  »«®å•FîRã6tƒ4š4¦š—B¦«2«µ´q=-2ÝYeŸ9ü<;ðog·ï÷LÛçÙ>„= #®”¥#vàoü8Ýã}n²0¦Œë ŒÌÜÕ =€kÿëgîdl™Ë|ùÌË%ÒV`KwN¨joIb©©=mHédµ}ß±blß»!JííËÊA ¶°U[0JR’­¶FE|l¶Úm>6RÖÚ+€ØHúœ€  “*2*€7‡æÍ¼÷ÆÌ?}"´>TD$hŠ­iªK5¼Kx÷ß¦ËQ×Àgª¨æ",²Ô¡ná¢¢Ú¡Œ[&S{ew1š¸{PEÜƒ{jkÌ†m¶­¢èïHü1\>@î­ëãÇqÜñÁ0—ëW0“ÙZÝ‡@Vj¸u—‚Éq7ÆH@uØkîö;Ã[³Æ\6rÔâãîý%ÂÌ]û$6²q‰3Y×k8êõðíYh@«Jk›y™=¬côþ8Ì2´. Zác–¦$Ü|G™¦vŒéÌ3¡†Ôƒê9e"7Ó¸gs¤Ml°êÈQclNS•»F¥ƒ£•4‰ÊÜ¿ó.Ãí…eX¢b/$
‚¾I|”%ô¢.Ï…P<ð4ä µ‡uéÒ^ïÅÎÞ†+Äœ…l2UÅK,é+ßË8€±<’¯ý­Ô9·‹U«¦FÙ^Ã„‡ö µ‘CñAK)g‚ *iT(¦2ƒ!ê$?Mº°š»¡À…íX¸çÕø£cmeJîåEÎÅ¼£²,ˆ3(9n"NWoÅb£6õ´êâ‹Ö´k5<ÄkL‰á5Ft_Gfò¬ÊýÑuoPOC.XWÄßÕ^»ºÄ;  š§Ê/Ÿ*q¯ó:öŠ¼ª3Ú*¯Ry‡piwƒŒ o×¸òÑw` ‹Kä–Ù¦•"„ç9‚s˜/‡;Ìê-X8ÀåÂ²s—¯NÎ´a}ÇÁ
t	ŠERCË£Ý[(6ê6n3uØP*ë
¥ï‡p1Ð½Ü Àûq‰õJÛz T _cq²¢9šGiUÏ|[¼¼$(x×¯…«‘¨xÑ×@*-,Ö¯j7»£ƒìE¢œÓ×4NJiét“ª™W³¦à¶Eã‰W2ÄäÆ;S4!½–	¶LC#ÒMÅúWQîŸü’Ë!YºÒñÅÿH&¹y&è—rò^ OhU¾‘è‚á‡˜À¿:yà>5R‡	Ù¸’äÍéR/‰w;?k‚ñ.8}¹Çq
™˜å’-¡í-wâÂƒC…3÷HLú%(%Ó÷î¢V,°é’~Žeý\õÌàÒ¸çþ}Ã‘gGñZasŠˆ¡µ{¥¨O¾K)±× äéø´i>ƒ\þiÑ©‹Kt*Î.3lòTÅmRcßÍ/M—fö¦,™óÞŠ-ºöÛÿ÷
1š°Ï½æAR^î9Üq={Eð¾¢ÏÐ¡Ç£©Øgv|}æG	ˆ«·0(®Ø\²Lm†ˆ ÛúSÔ&/,tô@0. Žëám§@ÑÆÈ´l§!DUÇ¬¼¿o™2¶9û­Jq®FjGŠÍÃb‹V¢&ï!“üÌ4ëtyB”zæ
pÉ‹
ÎùËÖ›¹©ÞH¯9‡~Hü›ÈêQ”{Ç™3ãY
¿Sg…HX1c?nn>/&­}“eèÉ†Æ‘€ÑÌá®C8ù/pb†aîó(–sQT½F>(ˆèhÔFí¥(ÄÊ¼ŸÃ£»GÇÖ9-æô¶¶+µÝTA·7óËçç'ŽRL€-xûHO3Â¦’¾|µÉáêC‹8Ò¾¨0"“CÐÅÆ‡^›å—,«®êñA'~´‚ö»œò°ÀRÒ)Ê÷pk¯º²Ñ¶âÙÅûr 1ƒÃQOÊ‰öjœ+§N–3ÕÕ“~*°®"o=iðøÁ²À%½³¹VFU¤æüûÕª×¥:_úlÍ®nrbˆ„¦£´ƒÃ°¿,>ÐËséE©êÆ˜:Ç&·Í«´«0 \ýêßó‹ÿ5ÍÞ-f£›g­Òf¬*“
§Z5Æ"¡HV&êÆatÔÕÕÌCÈS‹-QÕ§	«@9	¹”L©Ï+>6nÙÈš+aÎ0;Ä&¸4£0BE^fò±FƒøA¡c”Ô¥ô*¬Ë‰ò	R™5\¸ü©¢0éµZÞQØf-”©$»%“Åô	•ÿ§}$UÜ¦Æb/û‘tÝÔFrÑˆ`~ÅiqhþK@ó¤Z\¨þwC‚Ÿh.µU	a‡np¿²j%‹Vœ«KîÓØ¡Æ¿²Pš™Þ—ÖÑÉZèðË-¸â¾€°w]x¸©¢‡ÕÃâÉY¡gPâ´Ê¥_£Ïe( (?|½>·Då=÷D*ÕKµ³õ2"â3RÓ 'À°gM;£3¸LÒÞ|Ý‘Éb­b(¸ÏÌ×q–L%Ä›uœwœðxmÜ|Úâ™gžå¦‹8¸ð\¹Õgnö×Èsž[, –>3¦Åt¼S³¤•–î÷èjÞý¾PUµ¬[½U‡ÈFq/aÍ”Úô-!ý@Q!¼tsß‘q(ÿšwI›0ø²	
ƒÊ-^N÷fú\ùñ´KÃÏÖ?ù{¬£|6„Ä.žÅ3‘R9Tß)“'Ç¦¾DŠR®]¿¿}>n¼^º:	ãÞg›{¬`”ûHrI‚	©Pz+¦Âj{ÑÐ¨ÜN²|‘)­b@L—#¾ý6w¨,#ÙXU†T&Œ 
Ù<cË00`¸?V’ aÅ8Äa!8ˆÂ‚pò†º!|*˜r•jëÂ3Lœ¦]2ã
4vbw)oª	¤û[…£ºáfúw2¦½&iÛ¦f¶¡¯±Ñ¥ú¿¦ 0?c]7H¿§pØL è:·éªQà½pVŸÓŽWBÌœ5ÐÈê-‚G1²–3UÔSOåƒã_×óë‡´ ¼1Ï{ö;Ú­óÚ¥(MäÚû£Ç8„Dóu„U.ÖŒj¥iÛ·‹|y€ó ,4xmu|\IèTj­WÕ"žda_°x•#´µ,5zÍŠT	ÀÇlèÉ¾Ü÷sxŒ Æ±ËÑÊíÊ‹…m04sÍß™ðâcçaû“'Ù ;î\tÉÕ­¡¿fÊþæËÅ~E.Nü2=‹¥F1æVjm“{Côòj[¬”ñ5+úÓ*>Ð<6ê)p»cnAŒ#@bÆÊ,>1> c¨vV4vîÕÚ,0Vø"‚·§ƒñMgrÇq™ï óy9ám¾&¹çé’²ï[Œ€¼TÅ.9DË«oî†­FQt©(H'ØÌîê»]L‚z‹šLAg1ÓOà¡'jû”Ô«Äºrªàª½jó5¸X†Tzy¶æ¾+ÐÄðù
ßíŠìe ²€ô<TÌ}ºLÜ„1æ›NãÚN’ìO12-ÐMŸ16kMhx—r<ücšïŒgÃóÎø;Ûê&š†Lë”ò
îýû-Ð˜üÑeÐ
d…SC«U4
ñ†˜!š!"Rˆ¨T$„#D##!qX/ÞØtO¢n«©D“§^“DæááŸÚ¨Þ@;oÝ•Xe%“)ôo¢ôs‡e*Ûqyåöð-Üà—X™xoöBÒÌâJŠ;ÐVêþß>ã„Ñ]·_ 'lFûÝùEÂêç/NJ“CJ9VÔBŒÅeW&“@õ™»Ã^_¬©ìX†ò°šÃ^ù{žV—Ô«!’1a†þÙŽÏÚ«‹âçmsPxº2h¢Ütp’yŠCh4´´ëÏ¸¥ò_ðS!‰†Çß›9iWï"{
” S2âýh 9¶²h‹qÙ0áÔÀÚzÇt0p›¢³ñ‡h>œööKÆb(×‰©ÓÓÙ\	'qR)­ìÉëÎ0w¨M)Ã÷²¥Ÿ_­^©¾Ï*à”è<N÷ƒ·…“P¤N/N
»9ÓÛëOÉô-r½	@˜ÛªÒ—Ýë›Ò‹SŸ¼œýæjg¹ÿ"óÄBëymMaB”>·¬6ë‰ÝðìAð¯˜˜L¸!$Lú%‹zéš^?šãï³O©HõCìù·@3§Èªœ§ÍØcfûñÕ×oþáŽ÷/Ç÷wò‡/Ez”÷JYø—~î÷ÎãUDÀ‡‹u-%ŠßS:ó•ž&¥‡åSþ|Ò¥ÈÕ4vóÃùFT:íHÁòDhœîgýÊÿ9¦†‘¾-SÃo†GÝ–R€â’÷ˆyA’Õþbüþ@Hý)tM¸€©âu‹àôJYž^øbG36xjL0Ç”}y<6ª§uíŒbSèv§º¦§QÀÙdº4+ï”}];ðOñÂüov¨n”ôõmLBÎïÈÍ“Ø?›-XYZ[(¬Ô–¸VÛ²lp¸ß)À\ƒ†Š/‰ãRzÎÿäL&ÛAô¯þbüþ"°!}=+¾èñÞi]¬A[ê;ÆoU¨„qÂgPm‘¿&Ñ¶Á¶tàNþyÈö¹jîÜ+÷ÐÝ{è&ÍÊ5ÙŽ9¦0|û·o²šL8£ ½Å[B‘Ëê×lr@>èóiPª§csóSwCÔôþ	(|Ïd¯óÓÕÌ…K`»šà÷0üÅ²s:lzÆo`W?¬‚cIóÏÞ/‹•…p•à˜±»5.gˆÝäx…õ?¥W.ÍlëÖ)ÆxiMíç^r—Ðï–ûÃS×oHD9hx««Õ fC¿¾N¬?þŠ*i½ LÌÒ&r”ððÉðO)X ÞŸ”¹ H@ä‡rŠNeZ`Ž½q†í—H¤Q_ì!ÿ,³Dñ¹Deê€ÖÚ\ÛÅyBÅîPß÷¥¥K*½_ ç±V)áøv·/¬ãRÿdûf[iÙ0nïp9\N([ÖÒE0úm¨}òð¶tªÐþGÚ5í©„RTZXZåéâ¹Ùðr?:ô}q¥×“õ‰‡žo™›‰9Ž?ÊixuãGÇÙ#†é¹¶ã€Øoü–†ö¾1á¼KtW¥÷@˜”q?YÍÁ†³÷™¦³úùŠ8l\BDˆ4>MÓL5€b"|“ZÕ¨Uò·hÑH8x84Sn~&ì\÷Õ¬„­–Î¶b1ëúÆILaÒ`÷ÊË¿:Mì7d\ï½C/ÜœÊZRKöam8æÕŽ©·ÕIåúNiËñ¿¡¯QÓ¥.·CæñEÄAMöaºVþÏ¥Nj‰Ëàmç>Ë$dœMàÚ‰éŠ¯:†sË>‘‹
!.az­u«²"‘s½4§Š¯>Íörö­ÒEñW‹OæÃ^åÕ2—¢Ë|©*E?-ÐîFQ¤£MÕ›^£gu‚ÑHúsÈ3zÀù™7HNæ·Ï'6
q¥Ë{Uö¿ÐÇÔj‘Ë¸‰îj'xké9^•­ÖR˜þÃ§jï ¦iá|JGÜñ¿sä¬W]Xï¤~fÂ8ìÚ¾õvb©£v3m"l§/ò½‚ýÈÔ¤nf@ÙÇ4Ò`lÛa4±}9ž3•õ1ø=Í¾òlÚ¢æø­üÁbjõ"ß©'ˆò¼=’pŒçÓÕÔÎúŠX"2Ü.,&{^…èÁÅ—´½0R2jkKïJÁçË2oç
ì †û¸ÒÂ—'kÃvz)½’nêµzEóm^àÿ!c¿ßix¿;_W~¯Qþ\SøÖ}œÌäŽ.,ÒS>Ã	 =‘ƒÂóð7ïë/¼ÃW”BÈ¼®R]î6Ñ·¹>÷ùaÊT>Ú«$³í ŸGVK§Jî]š'Š¼×0Y Å®íÏ/VS¥®ýRÞÆ´›ƒgæÑè«²;ÃŠëÜm´¨”™/%Îäø&)¥©Eî®vÑp fN7A‰`¶º#å¿Ÿ7•à>”UûŠ	ïX6í 1­d™Vaeì¬Wla‰¦â¨òó©DÔÈìàØÊÚcátn.c
Ýv^²nª_î‰Í-K¤9qlrq¶°nØ#`7P4œ¾lptf-¹­ä¶ÝVÄ,Ëº¡‘Wupd#/@ÍtCWçVÆ&„ÜsKÈn}ï°Åí—‰X°:Ü‘€»‚.!‹/*Ê8e‹Å.u±óÐ­ó¶0ùõ·«§o<oä¾œéeõÎÑ©Îî€·åætwä‰ã°\¥CñÝÙ??|Û>øãjóÜWécº·™4÷&Vl¸ÎÌ%NÃÒ)IÕ±k,l:qy{&|	vÉ]‚6>&G³w[dô}+°rÉW¸¹3Ÿì’M{·ç\;6ŽßÆqä×ùFu½ž.]gÖ¾5{ÐÏ”ê°=j´Xr³=hÎeÛñ7;Ÿj¸<¸{É±tµ3ðšzsGe¢ßt[8°IÜQ=;Þ¡•eÄ"5“-j{BmdWêäÔcÝuj°t$ÃÙnb’jƒ„÷ÿBÃ¡K8êV`œ nB“	±$ä„´óEL÷+LN*h.1–d‹@é8MÆRÑî¦Ä„	×âÎïIÚ"ee
f_÷¬/ž²jß¥ÕrØd±%H²ÁÈ>Ö¨AªÔJRº°¸=Hm%´ÑÙ%œ1*%ºˆºnA²¥·‘Ô‰µÁ,]LÍKIF”-’$0ÛÖ†eëCÎ­Îèæ²™ÕšP¤ Ýåƒ†Š.ò¹ÑRK:ÓU~*.ðªË»â’ªì¡s]FÃP…å/X·%¥“”}­âücà^Ÿ.EáPØ]fxØ< ¼ Z˜÷X2@-8wàx@H¨¥;“!®±©§¾¥àjqì’å=@$Ù‘5Y,0³€ä‚À`/ìä'‡I ®(”Gº|ƒú€Aàq¶ð|`A ®tJrÉº€Ð@pX¶1òç¤Ï.ò * a€P8A\ íô=ø:èm ‡Ž ª¬Ì^ Êžƒ¹ [qF~ž7ðà^~®œY“¤—§d‰—q‘í{ä8HZ0^Aø0= )ïÄëò8²`Pö@0Ð9®g±„)=Ýø\VšÒûÉ‹07T0Åž§µõzù“ÔN×’GÓæö“yÈuº[òJÂœ‹lm¤´r¾þ½ž2ñ=Àsý{I#Ù©šcïæ¼‚;ˆ¨íÜ²S¤Š
ó%	¼W‘a8ÚŠ+AwVæœj˜n"Q™†–j°‰­dºI=ð<1"Ø›]ÁXÄ…·›ÈØIÑE½ITU`1*UM‹dé™U¥®Qùô£$¨Èê|!&‰¢Äiõß=OàìÇèfž.rž[Ä¬»?2ßÑ*ŽÏÞiB›œ˜—ñVæÁJá%f8ÚÇÅÀdX­d	2û»ÊFVÃæ¨!dß¬[‘.§T?oÑ³õ^ëXû&7é¾‹°­z¸õøÞßLµÙ~¬ø–ýÎ*.×¯}‰Q{*Æd“¬Ûb­.›ðl¶8Üö€q'´é*’&Æ‹‹8±„&F½fçiÇžBªúu9ñÜ½¼{Î%u¹Í¸¿¥¹Áñõ®°}Ö%ÞÊ	¸Ó„#Î½'«õHÉ²ÛÅIßÖW§Æ;ÚÕ-Ñ¦ã¤Ž]}åîa×ƒ=	_—ñz¹9¢Üa/f ¿Ûåw]qáNØäëÖõ;´fYÏÄÎ3¿ˆfÉPÆ(VjÎOì¿î•ÂK©7nÒïîÒ÷@æÂ…Á5w`GuÌó&ÁÀuNz<ˆæ®8l9åõOº¼Ÿùô)ë¦ëš<ÿ›œ$èL…ÓÓ½Á&•Ô%YØ™‡-ÞŸÕú‰ˆ¹5R£¬Ê_Ý‡ÝÜná'aÆÂø$7e…î}0Aÿ`W/85½`b(¤kJÿê‹=ÛA³.¦'¼FðÝ½—Š¦õ‡Ë¶mº öE%ðí/ÏÈH	Ëîòn±¹·(°fŸúü×”˜ŒD¼ù«òa
B–Ç6@y¤X!`Æ½µÑ½7õ„„³ýÒ€?åwyV®åŠ?¹ÛÒ%¾)n»—ýÈ¹Ý
Òä¹nLª2ûao?U–­–$7M>Á¥[Ãößk*Dœ˜Éèe²i/|GPùÛ›V²»L®™ªÀCÀvqéê}ÝÙ]æw¨,Ÿý6zªîªæs}bÏ‹Ö¼—É²[+èzÍNì Æöß6m}±Ó³z
öÚgÍc ¥ñL¦›á-#ŸúDSÔBÿo¿Á{žGüxÍ†õJƒýåŠµ<>Dìá»ñg‹(Düòd×ìMh¸“Xã|qÃ‘††ƒV_¹M¥Gm¼ˆEÇë¿4¨
Ï°ÃlàHÔ®¶°ìÔf˜g¾–yB¿ž‘pm/áØKŸz<W{”C:ŽqéC”‡–àžNßI(Í¤ó°ÜåàügŒ¡ì`Ï¨+¯@@”÷PIŸÍ²"àÆ8¹àþlÆùítÞÅcš´´Èö4¦NNÔ~ ää*JEÞèƒc)ÆiNsÑ+lP¶MüŽìIÏ^1Í×kOmºÍøý#çA&ö†¡€A¥$’fÀÜ„Dr¶rLýŠËÔ¸0ÇÌh	ç§º£m‡(½Kñ
¦0”X4¾|t8Ôà.`ÑPyQ¿;õ;ã€ƒ$L»Ã|XºÄH‹Vé}Êœ¹ãQ—¦.&"…ýÁ„ÊkÍâ¾-è“}ÿ¦Ê<¢îgÖÿÝßj›ÉI¤-m±‰„]ï/s(Õ­ŒÃlV4ô¢Âw\Ä–ñÓ,ÇÁEíc÷x2ˆJ—ž÷k=´Ø1žR~"¡çf~]áÎæþ¬¥oÏÝ¸pÖ~;ÿªqÉ$bLLÎ¢9ËÝ¸×ž^/Ì|—é¶¡ó“\·
ßª‰C®Ùý.kæóíggså‰Þ[©{‘¬ø²±=_õ¯wæéúHìyÀ2ñ€xÆÈI(?\7Ð¡4ÃZ`k.œ!ø¶üa5bF"3%¥ÓK[î0s4ª9%sÙxm1}'D-&fÕnØM“ä3]º&{ŠÂ·O ùˆ¯vo-dTÚñMÚïqW‰_6é-eìèðŒÕ7qIH}ò“ÒüR‚z4èÙ×œäè<D0±e8˜ªÉ m+ ¤\#OZ<§O³›°µx™LÛb¾ŽdùC’`læLS`&Ž÷‘ü˜ð›Fß²%âh»j¡…ÁÄ.†‡÷d\¾šž­Áo¸[Ó_¦]µØØ¬jEP¡UŠ¤tër”ž‘@Á1éFeÅ¹¨=Ÿø8/&Ùø2æ™ïðYxrñ.ÐŸ—6ôÚ¾¦#Ê„ÐcÂz¸¦ùu#cäÎ™Ì²Á—l‹LCtLÒXuîA˜ì<6ò%(ð¼þøQñ‡b½º4´2eÞ\p{LõÔ}	”®N^‡6v<,.ZmS"·ÇÔr…É(}‡_°©-aéÃ|W …ßÄÍS£¾ÞŽA¿>OÀ}ºõ^óè4€É–óÅëaætÓð¡H6áÓÔæ%š'¦sø´<•FZ‚œÄIWŸ¡°€}_û½¡þû¶¼wýýGÚ¿h;T­zz8÷ªÕCjí…éìöfö{ÏÌ™@Q_z7M¿œyGt&F‹®ÚLÙ_Ì+ŒÂŸE>Ð>ÉÓSÕQvµ‘RÎÇ·}‹e\î±¼Ü}<Ê˜>ÄnšðÛñ-2~ØPÏ‰ÍXØ³š*îÙÏë“¦Âó°ãçuéþ¿–O´¤¡`•D"Ùv™FI9°Ð%û÷ñbÎ¼sÔûSr¶ñ¥õJ‚9ZF¤ÚŠ“ËÛz‘©—ËS«ÃR²¾C˜·'Ö¢)XèoÜ…Ì©a†%ÑÝ˜D[ÄŠæ6¯ö¹IÄ÷ÑhD"#¨(’%•XÙøÎ]/‚%Ó$ÉíÜ’T9#_¿OCT±ea tÙc( Î¹	$Ö!öFÕc
2§r6Ž¼‡Ê0úŠ4…¤‚y6ÅÓçÚ(Žäíõe™×Ä{o8 â1 ²µñ”k•ÆvT§0ã¡Ø³÷ÄëV66FÇ^ýxzœ«d5iÅUõb”a§åSúEÍgÍ˜!]kFè	½½Ã6ÿ•°²wô·¶Šº0£À	´èÿNp´óù†¨BÿàE"ëª¨KK™SÎ3ðD%ìŸ¼±~QŒ¿š6:³y2Æd‹þ%±=¯¬0öèÐIg¦¸|ûå¸4sÉ¤;þƒmä:Øõò‚jw_(`¶òýiG˜Å~%¶¯üø¡×ÞQ„LzÊØj›×TÙœövÐ°¦}äš‹råÃˆ¹3ö'¾tö¬²¯Ú©¤Š/^.d‹ÐþÐq(WåÌ;÷ÿæ>¢œ†)È^Êw<–Õ†wº|ÎrðøfÚ7ñôgÕûÿÛÅû”ùoNg®õ´Þ„*÷‘Åˆe¦,/;¦¬»NYP-ÛYÕK¨
%ú–6o@—žsø@Ó}[Î·-Å1$œ$÷Ï‡à‰‚Â¯
˜¹Ì«ðÄœp•Ðãþ;¨[À«‚GX<èvÇŒQf¡±œÚ8‘†2W”•×¹}fçØûl±„Ýø½¤T³CÚèÚ§¼±¾+.ìÚcíè´Õz+Ÿ&7u|–,ƒB—ŒÕÀ³v>zµÙ:mJ¨Áæõ¢Û­}Æó9r^I±ï°´ÓPá8ü)Ó"w E0UÑ÷CD*ÿ}*cœ0…õK ,wÃkÏm@ò¿Ÿ‘Ö’ß6ßú|œ2ZøB‘¼èP|:UÇÿ=ea”-RA—<sFöÎmðB¯ÊðmäIjÌ’%´'¹# þX-I2“‘8æV~.ÐÅñMc¾òYç–VšZÉðPƒåâ< ÷Hí§€ƒê,ÆY|t!‚Ïù€ré÷oÈ«$>­™!áWxHÔ3LÃh0d¶ç?¥\³F;Ù,y1ç$ÞYâà¼é‘}†Ú¶|9§îeK}ôýO>MüßŸ›ƒ6X»ë•˜“¯‚Z|é»µ¯ŒlÌÇ/ãCîu¾nó^Œ0-ÔÓŒBL3L
\gOÔ6?ãZ^(Ö*%wõ”ÈA¥Ûs+°.aÖk`åù÷Ö×ÿ]mt¨ê—²›žŒÕl‹`á;a#©Q!Ô¡n·uÚ”u»(“Ý‚ÿä¤?áòEv"ÌXøÙ#¦V(¨hÑÝÉÛsy5‚á›'Ÿa¦±rl8)nÞHÆdlâ_LŒŽ­&– ì^ÿáøü•ô_“þ§?ûú,¤' ž,`õÑ:ž¾V?=ûáfxîßôxv×ð¶áÓþøÿÔïÆ_‹?|oïÛŸ·&díœ©f¦?rÔ™]ÍÓ<ôÎÔÁ—AãÄŠ°Ldº€— ¨úÕã‰ÃîÕXÞ}»è3ý&%ž©ªGË=ú¼Çr`H^pžŸ#UGgÙê%2ƒ,¬\lô· ‹1@l0‡®™>G·½Æ° EãhÏ’Ï¥ÉºÞH0”™×^.6¢¸].Ÿ oo‡Î6q¹®{ÛÖ­šÙÛéýÿvÌSWçîCç·Á®ûÍY1òÉâÁ+TppÄ)søpþððÏ3ŒÙVöãE×(à—®–¦â×–]Dbp´Xùm¤[W¼Ì'b7íB¯vSŸ7°@›ûˆÿR(%6©¶äãK˜ü¬×°ˆ¾®¸@+Ã)ÑÖ•Çk`¦KQrË¿W>ÇV#nÎÅ£%AQ\í˜(ëü™"ú eê‡ÜÌËµ=™%ãVFAº×5¶UÕ¹ñ¿M/¾'…a¥6À´¥"¥˜×­>ƒÖÕFÎyí…“jõµt	Ûäáˆ!ÏJù3º6Òb;Á×Õ_sWYØ1yæS=Ùoôö@0÷Ð<Gß»Eµz³‹«œ{F˜×¸¯‰jcV¼üN`Ë›	€ÝhP^¦DX8y÷‹€RïÁ9/Gñ¦å*®Žìœ¶@·×wE7£¥G ùA“\È7!H`ÔÁ‡f&Ãr›´æW ÃhŠJÚ¸Ô½Û€ŠË#-ñcLgÜæŽ‚eâ³}6_ìpvŸbuªßÝp‹¨=l ”()5æ˜û¹CÍ>¾]Â®‘g œy}Í¯D{¼é2’n–ë‹`ÿÊVÆŽ˜C&÷—…Ž½L1Ž"rR¯Ö÷ôC›|v02W_ª±Ö¤¥»ÂÓÄ·V[ˆý,ê ßD÷¹ž‘ÓÓÿÿÇZ óõVÀ…õ—ô|ŒÁ?gœ€ˆ`jÎãWí EÜ<Þ6³••Û‚\;Ð5Œ¢s#î¾¡|`«¿ÜíðaçØñÇÉ††ë<-ZèžÛFd.,ÐfO>7Ž¯ãã¼Âü%Ok­^ò¦K.ò(F`Ùqã¼)Î‹} Ö³=ë0eÍwXV¡~jÜïwCÈü1-?Í´˜vXôù(fJEÏóLQ4…¢[r–ŒabâæHiÇj»ééQ<Ðc6ÅD9‹ùà	½êNQªa•î¤¥øb@Cy	}õ’žïÁ}Ví)2—87•gé>ã^|J<$õ©Vò7ÓH³É3Ç|ž¥¥óPO$¬uënØÇsÔ#®	˜äêj_°ûb¸=˜i:Þí¦U‚:¤6+(””]¾Ó«É­;Å©õ«þ tŒ‚*ö¾~ð&à>õúõåôjÅÖÇ ñ½^í¯ÿÊ5þ¹K§'qG÷øü·)Ë•ÆaP×ŠkL	9ãTòÙÊß]Ñ*”fx›ÊˆÆ„I:ÝlC¥“ñµw¥žr¾ÑÇvê:{¤×ã‹¶¹^©ÌÄ)ö&.ÞÀ%'.–&›M88©@®•°#¶¶êö­¡6·×ÈëŽÏÐ{êÝ–è$Ú¢ ôÚr¼æØ_·kÿœ0ÝÅ¤È^Â¯bp§-^z8Rké3™ûØ%ð'½üûÏÿ®Ñ6x™×‚{r<MØ³ã¤ï»]KÀ®ÃŒ×Rºg±"¯C³Ò9úð•£yÈô}é_à¾kÙHð¤¾ð/¸^	
Râç®üv €_~ß§],©B·Å«ÁuA•ä£Ý&¿ÖÊ½íˆ=uZŠ7ü¦ø”õØ
”û^#ì=¯0±ÆÆÞäæœ’
ÿÕê)¿ƒžæÒC äŽV J¿S*]ê§^Ú†ÇÀ>Z²ìm2Ý#Z»x¼~&qC¯hØ
ïcZìíüã"µ¼å‹E‡Â‡ûñ<¥
w•ßoXÇoŒO]Áb™!l`bmcæýkƒb£Š÷c×yóSÈnœ·Ö:2Õ™ÇwAÕº“N×§–žO¨`úýÚ”º	q&7>¸¶l;‚wT~ËXOž:ÇX7'Ï(vèìYÕÖ›~–%¥K“ˆ…£±óû^‚¬wíCŽÎT.<5HÚº²^Jkl²Ò: ÈAã}‰›99³8ÕÐ+ˆe ,‘Èø÷üÊþ+œ®Ç-™ø,aåàCdnµ2o`Q‰ßØY’$+HbÚÖ°.Wå+A‹ePkP”Îè“ÑÆ#i½IXrÝÕë„&Z›ÚZc•ºÕB¢}:¬¤9'ºÏ¬;·>–PÙ*Ÿ,Dr”G¶ 21I›Ä@š2Ú$ÿýF!,‚Nn,Ûm¢€ý‰°VŒ±:wØ‘d¥ZÙ¬Ä‘‚„eû	}>!ZY®899µÙ]°É…g·öKcicLvÎ¡r&ÑÀÿ‡+£Ë—ü¤Z“6ØaËEu…ùž›–í[MºÍ»UT0ÍÄ»ù¯ÌÇ†ñNP¸ÑãO)÷¶7äf|””Kkõ'¦å¾=ÌÄØÔýLÝ*Õ‘1ÃãèOÍå?PÊ»|ï|H¾&JI»Ú°¡Ù·»VFO•Ø‘C¹˜ºì3KvEÅÈÆ'P„ˆ¸Î €Ø ö!'çEõ¥ÅGé²3	w)³ÇXÿ5-CèMçm/húÂš~”÷B-2*¨sá+€wÛAîE§â²™†b6õOUV·ÄPÝï1&‹—f'dQ‡†œ¿½“¤c´r*ç]~™¸f°Oê dÖ›@”x³f'¢Ôt'ÿe¨ìù©Ò©wLhÓÇ\½ÐÊ(‹Ë«rM)ÎL…ÓUFd¬ÏÚe…ºfë‹Š99úÌ$Æ†x4˜„Š12Ç`ÓEnÙ6ÂÇÆ2žn–ic=:šTª#|Ça4øÕÛÊè¼†§•hFpä³o x›“ª4²D5êŽÙ>…Ë¶ãad£”Ü¤XtüßëE›AfnŠ8šçfÚ¥’|dvP™¬TE.WÝ|Ý—ï¡•C& æ11
MpNÅ…(O5™ TMÆk÷[ÌjrÇ7i·8Ú'òä_Ã¤P§%E
Y'úƒa!û$9…Á;4–"ýÅ_]FJi&~‡Ú ]+´cJ6S3÷îÏIâ_ávÑ]u~mgË±ËÅÛÒµ6ëXM0T3çRiËå„âm¿¤@©;O;?ZT ìØN=1+'þ&ÃzhªŽ÷Ñÿ™›“Œ…û`ÝŸÅÍÑÁ0»}y©6ÚÔ5£jÕIbs¾Ï‘…šâ54Åb-ŽU÷$çÞ¤báé.Ä§¬þ’õ±Whïiš^7—÷K*§^v^–¨©N}(¾ü\h{i­W)uêwá	µöËÑùä3µà/ó¦Õßƒ%Kêlóó|ÔeNÒ±¬Æ2q‡àÿx(|=Øìä÷ÀOíÚÑª!%±)€O
192(ÚDWúÍ¡n’/;_ ÒX¢%VÂÚk¢®“éþqd7¨Ë;q‚ÒçI2h»²@›ßüêÏ&­¸ñü[?D_g¼¬¤p:úÀNÃ¶FP?´
ETu"Zð,ÝÆ¿å§Äµž»ùé'€%2e;ñ[ÈZŽË$‚âê&;é»~ã§k¼n—eÙ¾¨Ä~ekÛ¢t®ê#Nƒ+”0º…mg‘dÂæ•³;Íåuã)g³Šð}éÞÓžn@P;>êâ	ýoW²Õ„úM˜¶§¿\élm)^"|MË^J#y.Zî[þt»êZçglÚ§<äj?Ò6j0;‰"#2¿Å€P÷1Ñl…2™’UU$måõiúú‹Yv˜\¸‹&£f­Ú•þ³;?§C!Bˆ"DB„!Dˆ"„!Bˆ"DB„!Dˆ"„!Bˆ"DG„ ‚¤$    #a V  µMUª**©’•Ú_)Þ÷Ûöm{J)*	H¥ŠU; *©t¡Š ˆ.¢„‚I‘.—|	Q ™(   0kwëIC¢ ‚5X°J€M@CA¶(·gu-A‹Ú¢¶ÜËèÅêE/¹]ÇACLDÚ)ãå„«X@€À¢â—(‚ó    ˆ¦À¬jÛï™¹æÖ`(oŒ!+	— Y%)dIT¹âßïOCùðá|ø>‡áÃøð>|Ã‡ðá|ø>‡áÃøð?|Õ´·èÛXþüD©)¯±?û"Ú½¢~!?Ã]¢=(1
Ûú‰^X¸Ía£ŸKÖ5J#úKAFYIŸy4ÞŒû’ZÞüµ·"$¾ˆßðÛÁ~ëð¾ÏPY®´oÌžJ ”?(wQöîÛëC%O=vž©ƒÏGw*`×e”‚üczE—Ø&êYOŠž”>ûrzE îéåO¾knQöóeBÖ¾Š?½?örtd÷èïW=õ*Ô*{ýý|Yô·K“¼øïÛëg‰åþ@=÷ÍvaHûQ¸¥´¢¨˜ïê×¯‡¾
îsšÖhÿÈ>~Uúü»*¡ïïÀ°Pû9^°«ˆéìÙ§§çh,Ö¦~º#o _và´ÀR¯P™ûý@=Ûñûü<g]à~B|±>{ú´ÛAãî#»bºëõj·ý]ÚôúËköì ÿØºoí‘‹¥ƒ½ZÝÍÿg-öÿÏ{í ÑÉ¿¢žîs€¨îðÍ"¦^õ|ç%ÂßàŸrR
Æû"ïqtŠ*>úÎ_¶áÈcëg—Žä1¡dË~úo{Ò\öðóŸ"–Õõ§ËÌ·ì/8`\ÆÓmüˆÕ‘MÎ4ÖjjLÖ×Ô|ßìÿpJJÁ‘¢8ÅbÍ5v7b7Ì%eá Ù"’?˜0±ób‹PŽ†’M‘œ1Ô9s@wrv€ê”äAÆóY2ÆžÈÍžÞžç(žìÅÊW8,È@5ƒÝ˜« ¡¸È+°Y¡¶„Sšñ°ç!mD€1y1*'Ös¯öJà,€Ø˜ð1a„OÛ¦ä1Ä©å'ýKÎEÀÍAÃjÐ#‡DÉ:bäàaÆƒÁ„?XßßÞæ5 ä ˜À-áJ†Ð+‚®ßâÖÈÎ›Ö%éâ×,¿3Ì²PÂäxÉßH(ôw XB ÉLhŒ0Ë‚âQDb‰_Žë¼žÞ#)·î6ÊÐ}´Ø„¢ˆ2áöãùGõ³ÅTÄˆ9Ža‚qQ†«Ìf™3g©d“¥Pf±†´æ·f¹ÉÖ'iN.šÌ”3§h:Õï:cvÌwÎtœá±f=ä<Øyßó´vîéb'±[ÙEæÎ`P|h­B¤„P€Z¬¨ ¬=Â‰¿&J½J¬ªÐŽ"o/1Ç¢qÉ¦-j¼P1Gº±1£¬Œ47Ügð!Ôƒ¾éds—s:s=f(”,À5k(kJjfÕ„› 0yõDÉ!ãóÇ³—ç§3N(ŽqŽuÿ*)Æ®³kœ#0¬„Àá±#‡"=°}ØË@ˆŒà\â¿„Œ‰`-G¥!“½/&ûc`S6f-_ÌàÌ3œ3¼gJ2Èi˜ÕtÓÄ¬©po#J]fM¦øFùê“ &]J¾+¡Ø$ ‰b–‰Z&nKæ/™Þ¿‰F“LOé›AÎiÎ¡ÎCÇ3ºó¼ž£žÏ=—z2÷€­ñlü+¥^Àà ²>dnïA*ÆÛ|sÝæIMà›Ã7“7¦6­4ÔÆ’#sÕï8×w²vTï„ï@êPä	ÉsŸÇ`©}»p}€–wD“Ê°H„ V‚›„¹êQ 5A‡
ðš¯€ÏšFŠL˜N3@2µkÝCiÅ7»6¦ÙÄ%ËæÍê<^æÛã¼¿ŽjgÄdÁg¡°†ðOh¡°Ã‚>p0>À|áùûõ«º¢ð#ba	Ì&*IŒøž eÎœwøDXk1Ø‚_E´[q·…^Â´jL®1ºCìw¢b(b´o¼o2mz–4T²œÞ:Øu!ìiÜ™Ü)Ý³Ù*¿‹Òw¸il5°3øÂ
qïë4ÕÀÀ-uÛ‘_ `ªERb+Ê¶8o‘âBÆ X.Ø\¢²»èšðg±ÙÀwž8¾X½@kQ.ãnú<7!dÞ1H1£a2ÌÌ¡žA’‘Æ.6àjíj[á{gØ@àmÞXÞÙÜºfuÉÐ%O—x`¢0>±,R:„z£8TqÀä´È™£Š3E'f;Ø:3v+ßà!Û¼£Lï<ZyÐöÔö<ôîÙït– Tù¿ëE¸€Ô ‚"8‰È ñªÒ®Nœ	+£¿Pà~À4ÐZá¶S
Î$°Ò fƒ¨x;@wðâÈ˜=`x§XÕbh$"˜‹€Z‚o„ï…&8MxO(Ãa·‚w<ôI<#(ð6Hn#È®iwäïáàcŠ@è|úƒôÎ·ásã¬G ²„ˆ!^‡ r¼
‘9D"È"‘ÈF$xIo¤éHcx³
&,0ÅtÅœÅ¸ÃÔ‹ÙŒÙŒ	‚©xÆDFi5ô4ôjk\n Þß9Ý™¾/´õÀƒ9´~,Ó.y¿¤~“
'8N©œò9ätÉë“Ûá3Hù”°=&þ¥Ê4Lª¡4…Ö"¯x¡7roDàˆO‘Üîß`Ò@Ámwó–Aj†ª²kà€áC10±!eœO;ãumh¸Á`w‡9w7äàÐ„Cø0!qáŒ<4q`äá‘ƒLÐ<rËî¢Ôâ4¸Ð9Ãç r:ðø ÒAL/¿ÝSXùA‰ZDð®ñD„UId+ÿ&rJð8!^ÁŠ

Z\¨Ð¬â¹ŠàÇÕˆ&àn[À® ~‘ÇE_[°àÄÂø#ïGì’‹D?YÚYPþnÀôº…f×,:´øî×{…(á-H7 ª‘ZÅj¬Å RÆTže²ÿÀøœHkCÍø6q@ð5ahF¢Â4Øh£ÁÉÆ"˜4®ÙôøÚ°¦!Ô4¸6ÑiÆ§ ßs¢2„ 5ÃÔÆr¨j¤«±(q9CëŽ£:”é`©ãªÏ:Q}p|(æv$ì!³£Ù÷‡mw¸î¹ƒ|Ÿxx0óÑÊC,ˆ>yõGîÞ?DzéAå‡PH=}õø„´"9B$.@¾ƒHZ!j†´âºæÜEá‹ÄøDó'FPÌ(TÄÏ¢þò­À@	Lxª€.ˆ<pÔƒ^íd«>»&ª\`³Ð ññ€'ÃwºVX )á÷ð™=$~	åñÄ#—gT£Aª;£³ûi“¦SÇ‡sß:V) â„»KF>ìQLå˜e3gHgngœg°fÓÉ¾Pö2× Ò0´gã±j›„7F7 o´n™J-¦™ WR/N)ít1½`Ù ‚³Ö<0wÒdã@ã’ D+tV@œÐ»ð÷	Œñ‹$Â"¼`Í\{ª6@.1h"â©íÞv½ë"›\6¿m	‡©?b~åPIˆ8!ÈÊÜ;€ãGOŽçÌ0àÉ¶Æns1é0Êà11|cb
Ä4Œy†ß5iÒù¡Í1Ž¡Žƒ„¦*ÌV™¯ÉJ&vMGú˜ì§ƒõ˜ÿ¼”Å¢ŠH!$TKŸ	Ñ•­-CÚ#^+V•T,H¨DÀABH^,@‚ P$täU¥"ÄÊ[	÷ð 7®OH¢”
U‘ØÊ¾!‰æµý¥¬¤ÔGþÏp–x>ìï[VÛ˜.¶ñËÜy\ê<Ër¢‹´ŠtÏŠê±È+‚>óq#-ÑêÜ^®ÈçEýëí­@þª¸q?ˆtzi$tÖ²ÀÖÁ’þ\ZçEK¹·]@ÞÝ Ý_JÂGÐ§ÐÒÝÚÞM»+Ì 8½–Šj›»w¾?>@À:²ª?>ù¾(·Š´TÀPòÓËþk“Ó»¥²éÉUõ’©Èz¶8 0M¢ý/L$òƒ-ÉkKF=°;²Ý¾ÝlÕŒ­¬ª­¬&1ƒÆ‚eÉóeV¶"C´„áýH=[‚Œ	ûÐU	þ+U@ØTíž’)b8o¤T[­@]'U)¬µ¨O-ÏßVn¦w²)‰,*k•\Ì‰¦üj>0‹Q±›=0¼äË˜X"n®½E-ú•ÛL^.AÍÄo–¸*:Q}GÓ8›mD…Äë’£ë¬qj¨Ëp(ˆÐO)ÛC\Îe½:ÍÿB{,bm‡èÄÛñå<î†|œ
Š¡÷z×.mšÅö—EÛª`¬K®ZÂYÖjñûFkŽ"†®¯ãKaÒçéÄqZúqœ‚§y7ÙÉ¾Ý™¸‰b]œK%¥D`¡¢zªw¾èŒq:·ÊÓ%—vu=¡NZÛ*^Ñê@wß°mèŠ&«Vu·ýÑtW?­éÝ73~S½Ä75së»eûÑrkÒý ‰îSSÕ.H]œ'3ÍˆÍ@Ó±ì§jÎyuªm¹Â€|»êfkÀÓ°˜^-­õõ™˜ÔÅê‚¯KkK—FIøoP¨½€H4¤ÙpY—LxÓ,L
?–G¯*ú»`=>¾0ÞÀÿr?gíÍ;Ú‡iâò?ÿ‘ý8–øYÜ@Z…B^ð•!^*ãÓ3=}ÿ¶ ŸŽôêzù?º{ûr	Éêºh8Ï
TÐ>=T’\¯t¹È_S9—D8ãËv®Ñ([ð™]§{åJuÓhÎÙpt›U†TŸ£rÔ­MË23SŸÇ_â gnJ\°LüÕÙÆ)ë»Ó]ô´6™­8ºêz¶71˜EdžìÅo>;˜‡´“aÑ_M:úý9wE!/µ=®E½¼_Š“íÉ‡P¤º¯ãRúÖG=oî¾]åöÓmãé|ðé§*HlªPfw$«`%t’ð.gV_/µÌv¾‡îqIM²ØÕ®zíý®ÔôÄVÓJEÒÛíì»Mï7:m–£ù]¬{6ñˆw¾ÑFÎbÖ‹åž4ÃhRS`ñçs<:­ZX,¦CrÇBÕÔf³ÙnÕl\Ñ·¬¹{ã7‡¦­¢¼Ý%o’ˆ ÇAXxï·°ûëJþæ’!ýüáX/þwê¿ÞçïÞ[ìä­á»îìöë¯&~f¬ü>³öw @2½’/ÿñô[Ó7j/µµ„5 àÿ¸Ò<~Ê_#j‹[O-;áÀ)H“iˆ`ØnœóÓfÜË6Fr§y~ÁÚ§#æÅu+~VZÎ½ŸìºsÙ‡Û”ò–‚¶°ïáÙS,dû*Ñ„çí×ŽýhzÕœW8Ä}bà0±5ûò–¦íÆòzr!X‹È4Ÿ+!KÎê·×ïò™8\äíÐuÒÔ·Œ%ÏË#½?ÙÈò¤5ïf©!ïâ±¾×¹À‹l´BªJðLz·güT©ÙØžÕ1K¼“6È× ¿ e¸3(06zkÛ-ÆÜ§èÅXòÒ¸ú•íÇâ’qÞÜûŽ>·ºl7è59…°k4AúygtGxÍ;I“®“Ña´™W1Uñº.yyÌG_EÿÕLÙ$Yqæ­C?y­•>Õvú¢‰ä1u©”®´—Ëg]X?˜±hRFˆl¡¹ü¡pxÃ×¦‹e®yß.œn–Rj°µÔÑhÄœ	‚³éÀü/²/r!8ïOËÞóË¿2Ë³Ü$~fþ”gçÐöøÐÚ‡ þ×%ÃK½êgÌÍ"!Âkh gûÅ,å;UÞÞïÐØâ>R½þaÏL?¼Þ`ë€±íÀ¾úÝÃiJUüfEðþùÛXø›Ý¬Wo×Èæð×y~êq›¹Èôœ•2™ÑLó†,‹WªéŒ·Ò3dª°Ýc^™…ûNÅ…ö™…ÅdØÂ°$”ZvÌ¶'ßì j¢&ð¸»øfGEW…iƒ˜|]sB£NØDÀîgd­·ö‹‹K3kÁ*Ð‡\!ù_ÄiŸÚ–}¯®òdž÷&+»b„™Ånèj‡~p¿Ì%Y°ÐÎ•Ü½ýë]¸KÕÞføZW5+èZçu¦BaµÐ¤Ê•§FJë¶“wìu“àæ“öË‘Ë‰½ÓzhÏôÜ8óêîŒ[º\tJ Ëùí»»k;Fû.tÒfuÃJÈÆV’gýäRtª3V;i§p&(øeR3[¼j2W¦nä’¸‘úŽHˆ„}o'ëÅ]JúôGþ¹Zg&*Ã*‹/ç•¹§¯w ¬_ë{¢ÏM|+Üf¾É*k÷||¾ðí{5ŸÑÕÉVy¾»»?ÞÀ÷¿Š!ag ²Þ_‡>ÿú»GÅsŽ{IRAç¿GÅg¯X†—ÿ
SâÄcÎ‹íY§í=e¥Ÿ&™mZÛÐsU r®èq[­©Å<~VÀ=Kñ4Å§.—“†HÑ/Q©>²gÎ!v©_R…¬áãùv<´œÚ”dÃöË¦Dµq  •c–•/féqÛnÊµf&lÉq™Snkµ¶Ò£/ õc#÷@çƒÜÓ!n¿¥£•é¯£{Õ¾tk}ØJ×ôe¢Ê”3Ù³kk‹¹®ê¨ÂM=îŸ'>\3&³D""e–yNØ\±›‚kUQ(ÍÜ/ša]gmcJÊ!Ø,ÏAhäàÍr1ENj´½ug#G+¡W´6´úõ:HbÝ7ªì÷ÎfJ“@éú,ÅñY+XÑ_úx-®^	.'ô•ççãkþ<Œ o¡á“"%Œ.åVî¸Ò2e]†‹ÙŠ¸IR]ÉÜ¤N¾1ôW	ò¬•tGžž/À´T7¥¡:°«õæ4ÌYI&ýñËþÿO»ù–·ù§í8Ó<<-?âÇñ+ô·ZDñ»7*¹;p­²@ÀhäÐ³ý{ê¥jÙ +`¸~#½ç¥šv\¨ÃDæ•»zŒÌºË[šlRU±ÚüÛß*3ÝáRü©å/a&Ñ9te³øi¬š*BîŸP‰›ØµÀqçœT3|ÅÝ43.„œÃä@lb*K½ï…N$e=&·‚CÑ>âêdÚ÷0W„lü‘Ä“œŽµØrÉ‘¸ºN‹=UCÄP>¥ž#Ï‹Óè—¼Ó
|]*±ËQ˜»r¯bšóï/ƒå8|µE­õŽØr­þ	NÙîŽŽäµÄT¾2ù¨>3t«½‡ÀÒ§à–íiêÜÌc›¡çNz¡çÕïUwnÞ"W*º×…rbôÀ©P_°Ú™K²ºñ»\î'‹šaq¦bùa»F‚®%ù1™½3‘/Q-/vjÊõ1¯áÐJ4Ù:Ð1Ó\×'TjrÔêœî…ÍD<Kþúxç5Ã¦gb¹Yò·ÜmÇÜ<!óiS·\…‚§ÕVbäÖ&tÛš‘ƒPRZN¹'¼$mÇ5uE«ó…Cç£ÖN¶,Æ]l2ux
ë:c™9–‡[Â[‘£ž–h»¡wPF6©dL^¶;#/¼Žo¨Xq»4»ÊyÓªÜ1ÆWkÍ#ž‰ÝV¬r½BŽ£Ñ…è*ù}w¥ä{cæ¶õ.'Ò..ËŒRó–Ã¦<“mÁ¼NRlÝò_K6^°õ+Ë}Qc$Fþ†ŒÍ^(CPO€†H'}ô>
†{%'m1¶4æzŠL¶ÈòNÌ–»³*/­7³KT%
6+~)bq~VL]¼¡mÃw/}$¬_›èè•·.¸©«Ü».·‰Ø ®i•ÑØøoþ¨CÙ¦œãÂ_ý»èo"QÌU÷^H¸¢¬]‘²-=ŽÄÖ-Z—»H¸Í×±c“˜­êk,ÒÕª7"‹œìn‹€S—àÀ¯/ÂD])ÚÃ*Úw‰öƒŽáY¦ÊúæÌ‚wêÈM_€?5g=8»ì4:cQl—X©Ø%Ïë­ H)†ï_½nu¡’ÙZŽÕl¤‡‹~Áå/ì3ÌÐ+-Æ®èÌvßÔ6l¶V>•B†ÌT7¿©çÿk?²Š¿?ÃtE-þk+xà|ÿ`xhýo÷zA ó‚Kô»Ôý9vÑçsNÕ´w“¯%Ã#¯ùÒ¡Ç2åŸ6s¦ô¤È§ZòÝGjj©õ4MÓR<n)]j÷÷1mU.;ÏRßË¢°íWnœ~`‡uÀ‡kêúÚ­¼B|Ó&Æ`uýI4Œ{ËxºÙZykwª6aC=Ä—ŽUÂõ×tFŒÜÒnù²š+ÐÙ#YTxê27LyKúÇËÁ+hç5ø&½¾a£¦‹ÇzÚØBÄÊâ¼t0üWuF	3…@‰£T¯¨'á¶ÙsÈÄv­¿ÆC`ä¾&R¶±–R½ES¿ÎÖilŸ»ð>¼BÚ-E÷¢Y,­­¦f€WcÅãºÏ^îp¹XÎõ0r:PLwökŸýµÃ"nl¯ÊùšX×<iÏ,¡ãu½ T7öÉþ7jæÁ¥ç0UŒŽ6Š.ÍóB‡=hwÄJaBY`Ètx˜4ì0öÝÝ>zNsÉÛ²=”Ê™Œ%Þs7ô·YóžÎ’ÄÉß³4U46V§•×lGÌ§/ð3Î’v;Ðw-¾B]27L³9»Øqlß_ÂÁt¸¤mÁ\Ó¯­þß^ù'6ôck+C¶d]†sc-%­sö×™i)ž9üçeb^5n/GUGç›×¨Ú·Ë:
/ˆ›VN3÷é2jKhÐdÓ®·åÆï‘ù¦öË©š&5=3`rŽM¦ ƒC–õz·5Ð ¿´“+fŽÞp1þ-+ÛøåƒzªuC°o…ÿ_3éXP©ÆCÿüŸK¦ôG¯#§ä$l Dÿ‘Tº¾Á$Èì@ö±ËÞá…Ë’)Jß¹ÏøüÜÜ9X¶«>•˜®wÿ•¶/Nÿ¹e˜Ë;Xôë/•Ÿö’2¼Š¯ˆÃá?çŸ¸Í°_&RÄ6¼ªvv¢¦Šð×ü¨/lO‘›zæövL=0îŠtGœ˜WÎb (9Z­UÏ£¨ÉÇ]ÕV°ìòªr*j:5‚²¢³TªY­œRO›ÍÐÚ¦*ØOí/YtUãˆX}^i“¥Šß,ÇI2ß&bâSo}º‰•m‡hÇ°D²ÙÈoªÅ×ÕnÑ«©•†¡æª·X©õ
Š#&¢ƒ+ÏxrÝ¬2k?ü=ªq½‚néHpeüÔMù’zÄüZ„”œ-¶²Æ†uºîª‚fPÿÅ‹Õ[3é±„£ª b¯–UÌØENdˆ8—ÍÊµ®Ó³~nß‹ûNöI¹Ýziy³d‘ô\a%7 ¼îM‡N& J˜²ç<ªÄ¡(Ú•¾øB°ã£?GÕ¦úP„’ÿFä’ÿP©ß©Ö)Pó~Ä’Þ:d(þ…Uä¿ü‡ðTƒ°„É´ü«¾¤iÖŽâ‘;Ë‘ñÝ {¬8ê	ôê¥§}ËR‰?[å¢m¨Ö£^Ž.¦øô£ËK›|þ'ßØÐÙ×wæ;j)õ(5–Æž©we˜¶Jµl;ò¸¸õ1ø¤jêÔÜâõ³‰¸œTwq-®jcðdk¢f+ØNwñ«ÆKS½!õðòXŠ6ÊÞbrºv­NÖø;AÀn–HtHÕY(0nh½äB‚—¾—ƒ©¾mÝ¸ÕoVSL4•V¿<íCž·H¥¦èìAw÷jN¸¦ÀCç§¶3hGÏÙl;TJxº\ÔÍí{­?sçÆ<Fk#èð¯,5í–&’º«ƒDNe¹Ze×=¹ÜW[6¼
¾TÎå ¬V9  Ìt  †¶  ¼Æ   8S$" p  oÝÕ/W²r<ï‚,-" ÕLI 7&Ñ°Ëù“s
SßÝDŽÛüwdÆ¶±}ä½ßË jL0J;û¿/Å­c±Ï“ ¯ ª» €ý~î÷Ê_„;¿z¾éž9=áïôÞ“¾ØŠîw–´²Ï¦Óz(e´ì²—ük)-”ì>ç 3 F!
e’ÍRŒLÚ1 FÉm)Ó™y³Bk)¾…Rï   U3 F_d3sÎ>¾÷’ó-[–m1‚D"ü#ˆàûw ýí­1uEC;ì	 W VÕ'ë6¶dÄiEË‰p3_hS³ûÛKKãI)n¥Ú^¶•rûv›îÛÆ=äkO¸¥÷7v/´ö–û¸ßRkbÉ‡Zi`Çjôß>âÿÉÇä=9ÚeÿÛ;­c“CDž“š¢trS„T4Çcn½9â\qœ-HZ#®˜€¿lXsE˜)-©×·ŒÂ~eP˜¬[u¡`jÔ¹_›þÆ„‹a“ï—‘;H·üûŽóÑ¿EëJÿ6½ë¢¿uÆ}d<jøÒnÌeüZèÇÿ·Ëu¨õ»ÖõÜ€ )T;o–sÆ>ñ–b=¶•jí·m p¡ÿBÃ£¿Ûµìu­)rŠÅWÙ.{Ýš"ï¶›J´É®Ü}T² ±¿ùííötº6+]énå0a”Ûµû9–ðõÆ…[r#¾{– w|wäe¯Pÿñü‰*>ä‰ÑˆZT:Ô?îû¡™Á¤<’>mËfÔ^LHØi™|bi;tßØ‘9‰0P†µL"çl@g!$:úGCöLÝ”i`e¢Y©^Q…+r€¯=Wï%òå·¶bdK“äK¿—J.Áë@—ó>¶2‡?_l¸@ýÆiÚ''¬€3ý$5øô÷ž0æb+ˆé¦Œÿª®8pxÜ,4¨õô§âé¶Ð«Œ@[ºØ@;¶Ï‡vZ(KÝy
¢ÅªºBYmÓ(°8/ð³AãSàà%b-Ã›¨ágÞ\É\ˆÏ\É¦ò…&‘X…Š’OŒZQJû|€ÎdÊ÷ÃúUƒ„cSTXm3æq·œuÜÖÍ]U“ÇFcV¸Vvó~kKW=uPÅ=]hÄª—‹“¡)aàá 4yÒ€îÛIç§Üà€ÑãCSànÓÐPƒá˜&ÂÕP¡ 	¸Õ;Tv¸ß;ÃT¤:z¢£ßþå2=øã‡â¡°ÃD|8-x<d`*>àNõ¡/aøOÿ†¬ìÆÀ¡M‡	ÁW\½ÂCIÐÜáñò¨yHê0Ù×¯W–„ë 1_„ÿ97N¿†BVz“³¡ïTùB9Ò?‡èó¥ 	×ý†4Éëjíœ•$”Â^Á'!q¦aÛ&­)8â1)E›4ˆÀ‹hÃî}ïüæÞMÕ¸qOÝj½½›«öö½­ì.ôüÆ†wOy‰¸ûM˜ÞÅ½þ?§¢‹»è¾ÍŸêj	¹_Uju[ú©•“.÷jKõUµy>qÔîp!wL¥UÆWö.Ý”w2èäômÀôî†88­Èð ¯‹o0(Ñ¥µ’ŽdÂÄª»èBÆG:½J¶CÄ
Q¡A7S{3Øú¨ˆ+Ÿ+ŸUÖ#‘Šßcö7hrÓ$Ù„0zUê÷|)V©EÚÌ›I‹x9ÎÆ3I=B¶Ž%/È„F®†‚ŸNÓ),Æs2GÇŠUuÝÐ“iÆvÁ¬y)|ñ;ë4²é)‹ —[f'kæZ÷&Ï°o&¡¥YGþ…j^ÃA9]‡ac¾àïNÌvê_®6t÷)Å«CK3´=tð³QmnëFÕo]íuÀSŸ(€'©“¡€ê^W~ŸùùÄÄš×ásÁæ€®–ÉÈ¸$©æ”nË ;É‘®™¼ÉršŽ§í"å Ú˜k†Ñ9‚N‘ÉšÀQpš¶$Òiõã‰$÷<›êQ§ToˆÜ“€-=…¶¢Æ$&ÍF©”E2ž||';`KéöÀ¯;Í­Ñ‹ê7òM˜˜¶Ø¯¯´ÃLûE3tŠµË½/‡u„g}Ö¶-„sK!O€‚0r*õWÿcxx\Q%°ñVÀþÁ+©ãƒGVgXÀ€™CÁa,2Q5÷»7½¤–äÒ1ÔLë¬ØÒæÛÑÃÝôîMe”ª¦ b¸ÊÍ»° ª_Þc{Þ£Š¿ƒ[¼õh4Ç¸óa¶ülaZC)¼ÁhI—4ž³EC!+^"ÃicæÏ:
Â»Ç]ýR<Ëá»®èÃá¢.Ä"+kË­/s½@›%ûªÇÔh"W¿7ðÀækwT¡÷mdPèñkº×ÊOñêï`à ©™,wjVL×ÆÎòÑéÌÂ+=j|5´;K¼N¨Ñ¬"³vÿxy¯		nýÝ¤Šô‰ÕÎ£07¤m%X3¸‘ÙzA$ªU ¿¡›ÿ<á·‹Á×ŠßDz«ôCñƒ¦ƒI OlwŽ¨¤6ao¦ð<9Ë	•xém1æ›ÿÏ»®LŽÛ2}KÕÅä6(ð3ê¯êÁð
Âž¾°Ú6 ,ä	p4"}Ëp«ó(Ù[›ä½‹ÿò±d	†§ŒRí´Õ5±òî=õhdî—0›'ÁfŠ³0N`:‘*Ïª«5À“ž€4Û@%qŽQ""±ð“ÒôEz›0ûñµ±ìéúÕm»êçŠ¥å2,7X3À†UgÃ=F
Ÿ2Ø;Ó {Ïî…8|]àžµP‡à†ð¿ ’ÂÝ	Ža`† ú¼ÐKƒ&‡Qmü³U¾$w÷)È2¯¢=AåC™E8½žt
„Í•¢1m	¨Š™…•å%Á^† ˜Ú	d‰*ñ œ§
ÿ^A2G²B~ºÍÎïmTnÜcTãtïNÂ^Uu¡ÇÝë¡¥ˆ]ÀJ%ÞŠ»Ÿv¾yƒá3ø¶´üÙK|©¸Qì¾nlàBU_±F‡tj£Nà1‘œžhÃƒmÖ…:Œ„	Z?G'’‡ÐÄwµv8nDúðA:¤+JøšËš ?95Œñãïèâ>x]nßßIëÌ½GUù¶ŒŸä³0’WèU¨ïø«Úáµ½ó½S¦kÎ‹¶tv¤Ù©KAçïÖê{û|jS¤ÈKm¬D("› ¬cQXþ\ëä1ÈIÈ¦„2érÉ3šÄG–€DŽ,÷9T…¹§ÚU1<¯´¤ìÜ^ûê\›?u2j(ªaéÍ2s3\Éwû›óF<»¢±ÖàNŒÅØ¤,hõ‘½øÛ£¨­¥wp0ÌÖiÓ‹ýòi³$4ÎÕô£piô‰®¹¨%qô5ª~˜x®ä·wë|6=šk}ï÷ª*Œ$·:AÁ­9gmb(mÍH+'™O+»g~)°dÄçö«™qsãö£gÄãª¾š¢¶Ø Û^ÆC¼.Kc;|\íÌzHð
ñ!m¯[^š ¨äWþcÜ×û*A—.o3þPÝ	¨Ú„ j‰¤‚)éq[F›t%õá!·­˜jº¢3žl	¬¶ª PÛ›˜ÄMØ?Ll¶.FGïN[‰ƒ[„\ÕeAô×¸uÍAdˆÅ„£dß2Þ(!Ó&¿Ð¨ Ã\y¥5iÀ‹Ö·Âö9À—ršDÏ¥e¯?®Ææ îÚX¦‹±+ UdÁêMGòfäTZ5¡iïé&‰­÷·+tMQ(hS"'ºN>_UËê]9f:&P?ùí&¼ÜÆ'ákFŒF3è²Óz‰«u>ÍsÁô€é#™y”çy_!áeç[øú,5£Š,Àoû§«tsÙ~ßpûl•ö3»Ì—¢cç>ÑiXÆË [—H(´4WK‰]6pGœ¾À‹ßöC|C;dFXõS¿Ej˜Âžc!y bÕÉ$ÞG+_×	fu/ä9³K@;8QT-€¬âÜZ°©Â& µê€x
€¥*M€ÚWE ãWA àT•¢uó³Ü/€ì‚åÂ]
n<"m­÷…Ÿø½÷5VyÞÀ÷Åô‚@}‘Còûb;YU(aËmO¢Üøµ+	ˆóÕN$ˆ…QZå·ÙÕA”œk1€\étù¤-ž¿Ô 9rÆ°ó¯&	C“‡ØÕÉ¢F_T¿öàä£§/héòÌ],N±±›õ;ÌD§rî8b¬¢9ŒŒáaáCò±WWâe¯Õñ[Ç|Ÿþ²bý¦uEw‡e¯­ëdý½‘£²×—Õ§á}‘K+`«º¨âk¢%Ü!à±Ã«Ý„¶#ýåo/Iƒ³¡9…~ÏPÿªT{3!(§ÉŠ»açÜHRùŠŽïrŸfâ@&¬nÊñ×È­nÕp°°&d"Z+0î6Pe¸âäøøzaTŒ"OlÞf:<XóÞ®ßh×n n¬=	¤øNÝ¡’ù´íµ{@±@cRÉŠ©ÿ‰Œ÷Æ<4[Ã»žÔ.çrçp,ïuÆÕØ¨þ	;_ÉÜ`Úûyž!Ut;ëŠ>ùT'2½™³³ˆØœˆ–€Ø1òqŸSû’ÇR¾Z,þA©/y9•zë‹kH…
RÈœ¾Œ6âÓ}X™yzd˜=ÐØ£àï/¬àên6¯þ'ÑÃ—£¦*"ù˜*ÚÂcÏ{&ÓÓBÅ6Õ¼4Î° (Å¶…çGx&—1h(Oæ*yÎ2šHÎØ±{Ç™ä·gåºÒÖt; 	Ç!–oújÆiç—4]%L$$×·Ýõ.’\ÕÀ%ý×³šu§îþu­›jB<÷@s©ÍV&¬¼ƒ;·<U‚U`n¡PŒbÂxbìºRñk©ÉÍWà³WƒŸN¶/¬ÂKÀÎÑ'mOäÂQQ¼¬Ñ X¸OÝ%&çvÝ¨XwwâcA¡ÖÒ¬~µ›‘ò©oWSÑ'ñ¼U›—qÔœ4§òÅÛQCyŽ”&6{¢çîåD~¡bÕ$’É¿&7…sä¯Ë)Uî‘‘6£d‚™‡Â@†l:JlFYkð£$´W³ÖzøSÍeŒ5±O|1¨¡‰Ù¶cbšÿ¿"y—ú“ÌÞ9ÀPE@+xõtUØ}i§20yD-˜UßŒäæp:u¶‘Ee¨±ÝØ*•mœ×—Ðçü#B§"£%.®^ÊŸ3¿–ÒŽ
Fö³$IËsYÑäØÓ—M3³Y$N>*'w0ÓP,fXÙ9þÝÛÜÑ”wžQp-Ø°—qåf;[w,ÔrOÇá½€[ÒÊ¯\õWA¢V['íGM<³.ºÑ…_“´@2á¨Ÿf fŸH"íª'\’ÛîîÜ¹5Ž+_N‘lB¤®ºð4ö™¬“Ætqi/%)ºª	Øòp˜½e=g~£þÒW˜ íâµŽ"$@Rsã¸Ò7_š+ÂÚŸzßL¿Þç”Þƒ´}$‰$Ä‚SBû¦vÙá˜ólAlñÔý„I|ŠÄ eOZiX8«)`lÒ„mÎ<—?º"ie ÛRòÌKC2DÔg9ÿOÕÞ—~rê@ï¢BŽJŒY}< PŒ˜@9êÅb˜ÍË­%Ëwš‹-ámCÓ÷´-ö:qÔYp¨¢5V«§¬,‘ì`âG€<—ôÕ‰·â³¹R)hSÿ¢»Çoä¿Ç°d^ýüJhWrMJâŒ…‰0ŒKÒ¿jU/dŒvØýÚwcÖ…ïN­üá®‚`	âg‡üBÖ¹©ŽÍ5l¡„žbª1`Ø^³õ»?ã'ÿ‚aæúbúëµŒ/§y>ûEÍ§tIžÉ 1ÂÛÃMìçq4û¤»bÞ c´Pm¿0GZ»ÍÀ5ƒ9ƒ\ØèYE¤Ûéi-#æï†^ñ/Æ‚+ƒ©BÿW¡L7fÊ8r=q¬±±Æ%ËôG-@ÉžŽöCèP¦Ië4Ñ0Ž1ÄHíñäÁòGÕHˆÝ§ÈÑÜ^žÖ·û|aõÀieûyµœÈBsD ÎÓxô½?üôÃ°ª%ÀðÈæºÞvyGU¶ý¡6%Â->¸~™æ.ö”	½õ0±—%/"Zúþ™¬BP6xn
R+«üv„sÂFlcŸ…L*²ƒ;ŽèÙ®ò/›tQ&§¬*	5c|iòÜ{@,OôÁÐ#Ð³[ƒ'“>­5èFfê¡.MðZÈÒ EÊ™Ø«vqŒtz]Ës~ú”,r'¹åîîÆK:.gºŠéI¸²3}ý}±íÐø›6$}6“sÛ•±WäTnIcÉæ;¾Ë>R(Æf2AcYð#¶[xìÔòv¹†èÅFË_á2È§zy*åô ŒPÄó«ß‹Ãi0i(ÇDsšEnuD3$]•T½F!xäÐq˜+Óš¡J—40{ö´Žú_?g‰Ú e(â^ý)ÌïÛŸ'Ä%¡!m»%…I+1´¾9°dhŠ×Ye m."Wþš×¾Ð
9HžÈþ—ÉÂ[fNSN¬£ö^…à2zZ¢É*kÑÊ´b x
sÌ\n)WCþ@+”+Ž&–U+šÂ—nlHRŸfFmÃo—Ùí•8ÿà³­lqYi˜:ÜT¤é-§`ÛÁö%¤¸Çö¢¾ðR§ÿ¨Sƒ¿PQa…˜›KDb‰Ý¨­@ „Õ²…e¢–
òÙtr.BVå!&+¶’s\6°kí|!5‘Sþ¥ÄÆo•D,íèqí°&¾ô…‘Iúš˜ò{ˆðý†HŒfcD÷óã[¼½4Ì&Yž†AY¼Céä>Æ³ÏsÕ“^iK@¸íÔ¯PgEÿÊ¥ ½©è
ËHjR—ï®ü5'±M´ß‰$ëáQ}myü\¾80ñ‡GkoÓ=ï½
Þ;>ýˆ¨ºiw—ñBïDãÍï¢æÜ(Õ­HûýÌå¤ûš¡Ìgaª¨…~\çºcm(Îœ&Že	ž"tŽ5“w.˜74@9áôñ¸ÄÍm—€4õ@4ŸžužÊ' ”GyÈš'Øç5ŸéAÅ6?0]í{i:äC;ÒüÈJC‹©ÁÏ `O7~³-¸“ž6"ú*¶uÛ'Có‚Sä¼èaïñ´õÊ³Ñküü/úá§Ë±1Nº„0è˜VeªŒ«5¶ ðäâ!bë»½ªM‘“ž¯Ð¥©"Æ\G<Ï{çÝØƒ6û]ž Öš™I8Ê>}ë O„»Ì¼ó)ŠùÜ{»V¡3Ðìß_ƒqÁ=ëWà_wÚéÞî+¢¼)Â]ð¦;ºPæ’úÄ½ e¨vï4äuqI›SèO¥Ç²±yÝ)Ð@"H¦ÉóßÌø~úujf¼òúÔñpâÞžxhVCoãX2aw4šRÖWŸÞ¸á½¸OÇZ$—ºÿC’…Ñ/
]¢{õ€Ð«p!º&ÂC9è)Vb÷xŒ[óÉ–"F ê-tZÓC"ØóÅþàcš*:hñÈ%…xgwhß6g¶ï‘!çyÊúˆŒ€Þè„¾L7è€X ¾ h˜ˆ
ˆÃfÐ\¶@ƒg ²á‹4NÆdVÛb5§™ìlßC°_Ð³ÝAŽ1¼A³›žõ|Ã8ÐA	úè+éÒÇãâ¾N÷·b8$±›jäŸe%ˆgíóÿŠˆßÑ×·F*³LÊ/©9ƒ÷àœÈ½È#ªæ}UÊ>¦}2|åQÖ^Ø˜Ñëè—¦³Ü¡ÖÇF~i¾£3sd'è©"s+í/Ä'²š×?EgT,ÁÒÄ©Î´¿Îé›ò=È¿ën{Ìú`8*‡ 8ÃƒLÆLàp_}bÕôÄâ²;‹h¶ÕÜf
ÿ^Cx9=aºQ„//Ü/ëÕ”¤Ú²vÂ\¯ß¥	f‚ž (J‰?Á6q‘£\­ûíËç½gä(<¸¬x†¢ŸÚ°/ý'.fjÞÏRêïD“Â…­‡º!ÅŽÂæ®›jPIÇ®È‡@DÈ>¤Ô½XCR™9Í^ÝÕÄb5ÄXiN®“ýy;	dïU,Æ*k±il|°KÊù‚›ðkˆ‡^”«zt;AëÚð2÷œ?Å®a“mŒ%«!ã­ßîwMâW„ˆ-{GžÁYûØAÏ„ø!È¢îÏ*-×BŒ]Á—íž"V-×ÖT´Ø=ÆÏgé5Âqþ[ïo£%ŠYóÛ²Á Yß%.Â²>Ž•ßh•_4“(ëNìÎ³XmŽöîâ®F&¬ö¾#Õ¾d´œ1cÉÊ¤6Y†k[;,„jˆ’zoÐÛ®t5¥·wªjFNÓÎ®Ål”­±¤¯ñ«ðxß«Ýãc^\@–Yg¥ÀsôX!<B0+”+‹çÚÇÁÛÛZðh´ð¬¤d¤"Ú† ÌñbªÇ´æŸ©E¾Û-ôÝñÃo—P.á‰.¸Lkã7É`W—ŽŸcC‰'Ä¬5'ÇvªüÐ|)6
G§¦­ï²Ëñ	Hð@Ì’»Çx±ÑU1+ˆLýÌ²ã/r\,Ü¼Z¤®8?¾ÿGå¦®>½1ïêDPÒ9ò{#Ëõº¹Æ‰.äC,K²Ô<DÈ\¼Ô FàølñYqLºQc¤Ÿ1Ip±Dú±^~-Yïá‘¯žòÀÝJå¶~ZÈT½.ÝxD¬ØL‚_~ÜôZ´i«ÕxÑïÊ&4R3V®ý¬T7„­"†kzy0Ž1¹J
qŸ-±¨éÎî1”2·k‚KöÈE¯¾aÎ‡	Huiµ{Y–~db[%¼¤ùr24`à©^yqkÂÚOÎ•ª¸Ww8…’[AåfãÓ­ž_ÉÍœ Tm°ãz;³/Ë[)æföŽ†´5¿ØÏ°ÄcìEUÌC³.Ç§—9ár:{èÏYk=—¾åp¹B¸[KTÏ"ÜGa:Ìý•$æN/Ò7º½1´éä•|r…0éÎ.>];ï—Ë ©`j7Ü1ðØÌyÀÕ²oè…™|P;Æ²Ÿmñ
‹ŸŠ»ŒÍŠ“hÉšÜÑ¿ÌŸ$ÇÄ¥±ö?Þc`‘64á®¼…®‚%/Ç ÀùôRx#°.¸6JA¦º8¸†Ïåà;D9^52#CèDK‘Ÿ>}º]÷Ž€ÝD?¤y«5¢WÕÏÊÔÐ¢t+n"¬ ºnWÏ1ÂÅoî«À+å¿¦kB Ð›TvÐýþ:|¯¸ÅV&{­c‰U¢ÈDWâªäÎð…œÞÿØ+<t‘N"éç?ñÓQZYöÀ‘…ñ•ÂŸPÏ’át:¿¨ŸÅÓSDªf@fné¹I¡UåiÀ°¼Á]Òï	¾F¿Ç¿,î'J3__ÿŸë‰ò³t»ù=ª6ïÒ/ÅÇÔ¯äW)Ë^Ç¢›"ÙâuÅ'ò´þò`¯
àDŽ¼ÑÐOßšF`©Ä«Q)å~Æ9F	Çˆ4‡‰o1£ß;›ñS`ŒbãA+¹+6nãZP3r7€Ù·ÿY10z2’Ë"Æ±ñÃô°ñ ^¦Ñ°D+³/šDÎ]Å$=«yŒïŽ¶ÊVLÁw qFÇaÁf<áåÓñJÛ-xÛ¶á{ÕV&`žÖ3ŒIÉZàÈ ñkÚ:c²-—ìÉ¿µJbæ8B‹-†ó«$Bvw>IÎeÁÌ©—<‰15«äs“¹ÿ¸ÚYq™H¦\?tTE´	£ç{kf`-Þ¨Åƒã#6Üh4L]/1Š·X	oï•NßPûºx ÆõñyðÿU?,’kð”Wâ 6é˜BwòÈƒØçiü’ºâà 8\Ñ+M¤Ùk³ON7ã?Ÿ¥Â‰Úˆ.ù/V«ûV–9ûP}cíÿ" Ø˜“Öøø!„•Äø¬$­-õÚã§ÊW¢×%&/es)‚ÂÐrõaçû´±@¨´IÖá—‹cM¹û‹ÏÝ½éˆö_‰£” ò«:ˆ¼”wŽÏ8n #©Ê©Éá¸Ó°íì%ÚÑ.W3;Jýw›¯n8¼?ÚK¯ñ{\Vz^ðŸ$IE%kOí‚ŸhhR\sc•Â!ì	ã“àbBôvI„ÌWòŽtô’‰Ä]¢ý"•À<ÐõË%é¯Þ ¦Jõç&·e¡úô‚ã2ì§3~?ê0‘kÝ€žûb¨¬nÕ%âP¤"ñn-Áb;ÉÐ+>žŸžšG)m¦aõ¡qrç"ÍP£
†^o4ÇQf¤ÚþAV¼í°Äª!ØGÕ«*Y.¿[K;„F ýãøj‰É+9âÙ¹eÅÒ=ÎY‹óò"Ô•=‘Ó¤ñå=÷$æ¢dŽ”EµÃh’Zµ5…ëÉ†j™Qú'%3ô5IEþFÊp{V½Íòâ¿LÎ½à•xäÈ5Ïi;ƒÐ›Düï399ç©TA¨(œÏ¨ý“Ù·†O>Šûócœ÷}6Œ"cÒu×ôi»f}5æþ	)g¨#p­€>Á¨2ÛÛCKÊ\éã¬Otº'u—Jº—”}yøS“äRYÒ<_¶¾yJû°=ßæ¨À‘Êº+ºlöÆûlK—q€Æ’óÜ44ìª8zfáŸÐ1…šñwß¨ñ±L–Ez#1ÇíXæ ¸Qu­Ìbòûl•¼Õ½†¦ ¢.|™ßè×/×ÍY0ªý¡%’5+÷•È6‰ý®#ïÍÒÏ'SØ	!KzƒMßyÇ»–ò_1bQP›“RŠapœÀÑ38ÙyÕ˜«Ä'cÇ_s(¡iû´Öâî´kŠþæyÃ‘Ö;%RÞ³¹_ÜIsîáêMò¤Rô]ˆjh~êÈt4µIº]R¹×¢[¤ÞF¥JÕiü‡Ôñ#žye:ë‹#ži}#Éyª -˜_­ÎÊ¹ÙÑ%nªºàØSe’_ÞöË‹x\Ï`ëTER¯h†‹²Oó¬´QÐ´Ž×ùŽCXÕ¬	â1÷8âAÀdWv.8ç‘¬`$‰­ÿ~¿Tü®—¿ÛÞ;7µ%_Ð‰¯ÍkÿB+#ÓÑYbÅ^:ƒ¾í•kðE¡ø’7¼újIHñÂ'F@=OE±)’žY¡ràMaÿÏIßÐ£Èjr|xrwª®/T:PÄïPý™Ñû¥ÄÅm:È/Y¶Ì¾în˜âÂhß<³¿^mÇ+Ã¢ðà{Ó¤¼/žœÇ%Þ‰r¼Œ4rR¢KÉ“½ŠŽªÝÆqÉ•OÉñ2b-ýdÖ´ÑÞ¥ßÙ|*B˜ÀýFªå_¿Ž‰üŒ/Çï‡å¶Œoå%PÔŠ[¨Ð$ÐÏ/½ëœuª‚_;}_›æ²§µÅë­7æñ´ÉÄùMYQ&fŒ|Û¾k6,‡‡Xàþq$w’6Ÿºþþ±HSò[ä¡NxN’©"ËÈ 0zŒ…Ž,“¿¼šå¬›D‘“‰TÇV6<¯|îôïª[È©ýþäÑÏ‚Šâº‰ï3ˆ¹g+áãîÀAóV‹œ}õ¥œî`Ü¸þ@žŸlI¢fÄ¸G ’´Á#=Ô®½›´IÀŒhN¶'ß;®ïpØ3Ðìç¯+5ï*-líÒ¼{»5dL…ßg-¸™¸&m*©»;Mœ¤Üú8`9¸‡U.ZÇClVLúämE%w¬9×kûÄ+Qqyž§fCÜãÁ1»Ý«?”t[©ˆ<`ƒ9éÿ²ÂzõxèÕtˆL~PªËø…éq‰ ‚Ñ«uOóAh
ÔîÆ$UIº¢Â×ýÇ£¨‡x®Ivº”:ŒÓÁÆûÑ¯Ö«<+<ß¦„&¶2çÝeåº‹ ãùcž\Ê®5òñÅQÄˆ`ó§¨eÎõÙ¿f«È÷¹õ5²FÚLì¨R²êë´#Pžg‰ÖoÌ`Iü;­çVvP…nXn	ˆ¾vØWG‚Ztx}[	dÀš'6E‹$-—¿Mzvúp¶B§y•šAˆoúº>Ý8§º$EcT"Ã…¨pÃ¾¦&²‚:…ƒüÕ`ê‡5ÔMA51fó¸áqmŸ<%s¿¡à5§‹ßºñ·s8§P†4…¬00Ñ–7+uùþp.}jÕ.¶¯¤b(+fnCœBî-ØÀÙSt^xtz[~pY!9ý/tz[âpXúÜi”jáîþa="ƒ Âw&+±ç	5@²Ê¸§Áó”:‹”_¬©á-@Ãi³•g„ŸžÞ’V>¾‚7#[²c»ö8‚ý	-¿€„ìë¹v	Ÿ¸¤»Üt;£â ŽeLÚ”; p÷ÞÕ÷mùÃu_Ü‚í8Ë)…î”Ð¿^&£¶?á² Ââ§‹h¹TûWs¸.8!Vùà.øÇýkØ’x:ß{æleÂ!Ë þ$ÿ(žcÏÙÓx-Áuà´ÚA'ìlhÎáKí|hŒzçºÙÅ?È”l´_A“.ÆTìÖ™Ò©Úß78ãW¼ÿ M7ž——Îƒ²<s2emâ`êl§yâ Va(h“	H¨¹$ðë+zõBÜßD>jžÂ€¬˜pÍc®ÆçRšœ¯UIÓžªˆ{í©†U5ó‡¢»ÆGæëç9,ƒÿ·VÙµÌ­"Wª™TO‡–Å¶ ß7zÌ(^Áí­Œ_´É~	ûÁ´Q§•ƒ£ÄÛ»[·Ô`“¦(-Uš‹ØŽ]àœÆ'?ŸGZEãû9Zƒ-ƒ¡Tíê³]ù5Ùnú³4ç„ã'iœ,xkßhÍ¼ûÏÓŠÉG§JýSx0çÁd%Z²ÃéŒ“áNjV,LÂŸ_>p©“\ RMD„9¿y¦y{†e}ÞK7º5æL’²W´ÓÇTÌ>ôFz±½Ff³|dùßDá¼¹@\†› Ó@NÃ4jK˜R×‹øí$Ù@’PtÁWéèœ¯‡øtµœfÓõµÎŽ4`l±Æ-Üiž!èI¦¶û#Y|9D}oum6&H»š£³¢5A{Â·Ì/W©‘^Ë†ue¤p›J•5ëÉ›6ÜèÁU6_³¹’éÕo§ä/õ„E·¨q§åƒxÓ‚ì@ðà9,|:ê¥‹^•§ ¶aÞÆÈ&Â`ö!¶¢2¢Á’¬‚ƒƒ$X®Ï—¡ç¯©XMÇHÐ”ReN<zÂü‰DQ »ýa{‚KóÚ{Gæk»hžm=­‰ÁD<ââdB?ÊÀ!’œßNÕ¸ßôÄ
“I¾•Ä†2AA¹±~òÄ®I¨ŸÎ
Íö„ì”¸`l™Ñž†ÜNétî„¦ÈA	™B3ëãù@³Õ{¢‹n»f*ëaŠ“N]I½\¯:Þ`ÉÚç¢›dÏ³éd:úÙ{ÍO‹Íª­q†VÓ¶k¡ˆ<Ð_[ÃÌjòJgé¯#Q$oC«¡¤[s3KvG±tç\M[„éxc‹z„¥œ5#êýiiû‚bÜ3cvô“‘öx%Ï°Ã´ä¯ÝÖp’ÏP´Òï}ÉŸµ^.×QšTrLŒÄtoI+MnS^6}Ï‘ëÕdÑúÙž‰yªØ4¼ÒóGkÁòé¯é"CÊmÌùIÊˆÉ*åqÛ-A`¹Òã;ÒEÒºb •Õ†–ÙZ‡ímµò¯jja'ÍTx¼¡‹àU’_*¶ÏÐ.ÁƒÃ ôcMÑ³èì|zyæ nYqå]yé½!ôñ±$î¦ŒK¹pƒ.çØsdÂùž!¾|7!°•Y3zHe]æ_©3œXC”V¡)‚T9Wëës!;w–Î£¸<ÖmªPÛŒp
¦£OÂÉ]À¶:ºæŒZ÷¹%eø¯Jbî¹Â½‰–«æ\Nþsxš”\äb6¬ìZ…Ö<° ~öîâýô ×¸2£!¾LþóT²¦oÇmj—%Lg¾9Ðçy#EspYÑ–ºÓšË•ÑÂnó,–ØˆÒ7Ò	tˆœBÔ¸ûÚÃù,*SÉ\áÊõ1L\|\iùehB(!R&×ÂH®ì ­,‘?ÇµyŸç”q¸«õæ:»8i["¨A$ý9†s¿[Ã¬9dºîèÑ¸Èv}òÍ—ÔÉ±UÅ›OæJË1ÁP¦úâ˜†Q³2œ-­Ä¾³ã†¸žb*N\
:â}ÐÒn€s¦>M+•–ÌùVŠ«ž6XŠrñ¯‚ÃBÿYü &¢#Ñ­ƒÔ]M,„&‹ó
(mçËõUþ=ç1SL‚_œ\Ü.²(‹D3b¥û\¢ÒûD…öÄxØ÷,ª¥Z8ç¹—q¥¬k:)ÊKË¥£5`Œ–õ\Åö¨ [ÿQQ=GŠ@­±†¯]¿ ƒSsjh†ô#	hù/|\t {?¿1à4$—E¢ Ô_ƒt<ä•FðÂRõÊ¶ã}©Sòö#t©»©ñ'Pƒ¿­n¿WBG–h±})–^‡+°ZÀfÍT¢	‹èç©=ÎÌ¯þVèýæ"L±ng=º¹;9éKÀMßDÙ^m!2oú;ù ¹à`á•jg/5èxLÓƒƒÞ4VŽ\¬,ÖÊÌØ[ìùcÉ/ö«¶.®:ù,9/(µrL¯mÚ:§K£ °&å®½j )MÔmê%ÀÈ0	ÙÜH|yÕVOØâ°>•+}a—ÓdÒú¡#P¦
s«*É>aÅE”ÐWh•M§®ô2ÉzPKÓýxˆ¦—&úXpDr“vø t½{¡¹f°â4êkHùêKÈú×jæž“N¾£ž!l¸ÅtÜ¶Ø°ÓÐ‚’ÏP™ú%"¨G¸S ÞÓ¨Ô´“ˆGu¥hE/´šl¦%Dæ
'HºÒÚº‹Ó·9Í{§Òú*,óŒW¤,/Ñ)UÃË$y¿ÖpËÀÒæœ¶;¶Ûw©YÁ¢.Ðâ›“áæ/ðƒ/N‘òÚqÙÚƒ+¾7äYºë“½Õ<ÏÓH¤ÖÉIBPüÄ=ús(!ìTªak‰¿åÖ3Ú$ºã5½©{ièb±gÀµ *×i²btô¹Wº`ÔvŒøæYÞß•wë+	×ÉÅ Ÿ˜aSoI}MæÉÓ”;0¼›÷‰'ñ­¨¦Ó¼Ï«'óÎ‡¶pDÇBÎP·Îà
”ÕS7qœƒùÅ’x@ySÇ(ƒ? ‚c|ƒ{P+þàbÚ´Ž»5B‰µÙË³?mg.ÉUQå%jçÙ=9ÜTXzî¬Ë™cô¡ÿw¡Ž¹0Ø®Éì·w?DcGl˜ç7ÇÃæÁ²çë®cu%oM…ÊY‡ö›å˜fŒ¬j:§ðZ¯~
=ì{Ö†dó‹Ôôx#^ò§õ\%,Ÿ‡ãÊoIÙ³|`QðfRtF_¥ø¼TÚ“ù' d«-×Žøýx7'"ýïMqÉÈÜÉÖþÊ»x|‹Þq¾<FMÎ­?K¹¸ÀÛŸ$é×äû«LÅ±DôzShÈDÂL™†îîûµHÝ=ØÎrÊM«Î1þ›šŒ4}ÙO³8ÇÝú2ÖÐ*Éf^$ý‡t1ÇF‰‰®°ƒIËºáš®-Ï¿ÅÙá,¬ ~kÆ'Ž‘¢5b¥±À©è¬RþqžÃž^s‚ cVH"½áù›“a›VŠ#rÍ—étréîÙµýP¾[µYõps×çŸ?Ž€Ö­Þ^	•÷èçþ+„£C££yòó‘Ü’Vý”o\D]·Õ×-þªàR5ñ»œ½çÈgvhÖâ¦‰%q,ê‘³šžá·Ø•Zx1&n$ÊbhJë'f®áŠæ;Ç¡•æ+rWåk¡ï…–§xaJxßí¬„ú8ž@¶­Ñ%+qèHÐÿ"g‰FÈQÁ~í;ÝoJM;Î!K|M“(q7e;ÒÁî^ê.W¤cuºÚªJ÷'`´f‘œ”–Â–÷D$Á£Ã &¸t+¬`9©oU©íÚ¦©H6±
@–	Û|3W1ºK²ÑÅÊûÑ¢À¥;OÁ”ds#æï£ÚÈº©š-¸6 ÒÙ®¡ÆL\ÏçåR‚½®@âwù×ƒwùh‹ç6™AE»œLÂáÑ•’‹ZTã0úJœRÚ4ØgŽþ“*EpPÒ;ÛóQ¬r‡›Ûœ‡Õ )7Ëÿ2“í»õ0ÚJ‚]_´=h)ÓþWçs«N„ùw¾AìÁ«–4OA}Çôei RñÏ€ÇÙ `{¸{ÞD_éP»±£ÌÌíª!PWðôòzÖð=³²ÕA Ù^-Ýn	ÛÍéGaÝÒÿ¦è
Ö¸-/-ý9)¸'ÿ(±zbŽª·%Éölw0Œ\æï²1&˜@Ú–©ÝÎórÜ(¥ÇLd.nÖKóõ$å}ÐDW]Çl¾fEÛC»Ëg00Cr-Y/SB;5×J™
}åfKí_ÌZ6š"åÅ—rTÓ¹‘ìG(wfQÁ1{mÈ”š¤7.¼]-²ÑL0´§Ò2QF'õÍ·
^n•¹¶¥e¢"ªä/ò×iú¼SI9à‚Bf×Ê^t~ö|D¬8ÛiÁ(_ßìê”Î´›t)(yšÅ>ÇñæÑµò\$nBœ	‚ôã;Ká¹Ù:Uø¯Ö˜-<d~I”NŸ¹ÏÞÙ«§é&–e¯˜oË•óY}~Ts[CQ3V&WÁq¯Šƒ9:TbÑg!¹þš÷8ý”ò‰“Ø”âÖpú}žÍKÛª¯úÂažlÙpÌóÚ"'+{[h3ê~ŸûD×wn{T¦_84¥ ÌN‡ZÝœQQû,açz$àÀÿ¼Q²ÝYZPþà¥Åž+j¡¼ÆuT‘Å³ØFnÉÖcV…2&s**Ýs¼ÝÁ-Ä_%ú /^M®åræ­èKðŸò1¯!«PÃäòÓ4¢»Ÿ[™?j ¶xý)ö.%{*1àãÙë×ûwþfòOëTíúh«ÏC/ë
uÄ ™Ò Uƒ{ýx¦Y!´m_9I?r­fþ_ŸkLM$É¿¡v}É+Çj™ÆV±ÞMâ8µÀ¢	²¨fú¦‡ZrmÿIFòYÖqºªô,} å…â-†kÈZ/£ßÇ°\V6b”9½%A½Ô^2yhRF¸èV4°ûç·`!°1²Çz±Uö:	7³_\!ËÃY¢5K=°æòdº…ŒÚœìÈ?Ç’ärP¬ Ã÷…ºƒÂübv¬ì®_ŒfàÄˆ‹?3å5˜Ì«x«á
èÑÂªð”½x5
4j'%<úÎ±•êán\}?ˆó-\¸íò3^ÇîˆºM¿®L¦lœÉàgÇ°èäC5u\Ô@M½UÜº}á	Iìt‡ZPÝZ}í íQqg1sb¿ß²›¯X:Aïiwk» f˜>à²ÀÝÝËO+ÙqÊûùÅýøÿ—œtV©eØoFÑñ•Bl¦1xmiG‚™ì•éžsðð•Ñ~ýä8ãî?¯4ãòo˜œr Ÿ9®Áù8÷o¥Óø<·‹Iõå±X6À,¨‚JžÖ»
ð‚xzdõ±g{iú rPF<áÙ|=j“Þ!ã‡hvíò˜	—]¥Ï¡÷ äÛÇÕ˜Ãsr"ðcˆà]£›ID„×Á1£Öÿ¬;RÒ£÷â¿xy»°\Ë†oß‹ç²An:)SY.ÇªJè {µŠ¸V)ý®Ýn-Ëk…leXná	‹O'ägˆùÞ_Åë—œc²Ç¶]tã=e’å©ˆ¢7?Í²È
eAó/Š› d­ü;†úÝ1ïc´0¸ðÞ¸÷·çbc½xÒ—·™0Ôb“+ž¥|/1•ÙáÇË­¬K„Œp²Ù>;¦ñQløà–\gÇ3øÆ†ž½úôÙ‹¾Uy³4ñC´u3ÎAðÇL§²ƒ+ÞGè	ô2'%ƒw’.ðnXcõ‡pÈáŒàãl²Ë½MFÞ7zª?;Q^¹ùƒr0ïôˆ‘Z°‹¹”¸ýÐèÞ²Á…µ×ë¹l»ën°Œ$–'ûí†­ƒÌv	ezQÃ¿ÿ9øúŸ}[öG±æ¶ê~loWœm'Äïýo¦Ò+¹_=húeÈÍ^õDÇq)ºH>è¾-G°øÿ8‘rgÑ³Ÿs1á½0N8ãŸô*£ ÓýRv£ƒ¾¯ÅÚ"º²fM£‡2žrÑz¾WÐÑ=Çš[BýF¼ŽÄkK|»·>òæ¼+ D¯GlÞ•âáíuóÆz[
7Œ¾ú¥[íÉÕaÂƒåk„¶™A—æ/<@:‘2	zÌƒh–Á•IôõŠ«¹g¹~#Ã»±ák§ÞBsÍc¥tçwÿœ\Ùk{„4©‘Ë
d’¤ Kë‡ ¦ÅµDãŽ^H³$xGx\šLJ©›ioCc‚Ö;ÙÝsÞyÛø[Œ«ÞÎtd%$EDÞø:ÿëtÞ#Öí{¥15e¬Œ¨ÛÊOY¶º8ÇÁÈV–®ÐT‚½¢ò÷pwG½ö±—Êšyq`÷ãNgÐO6µžÐ²Ð4K…`ÎìõõP>¸/ÿÞÂh|M1˜Q¯ª÷ÜèÔVÐÖ|£Ý)5NW:‘;¶Ø˜çA1sßnË€lÞñMÈ8VÙ†‹†£pt5Ã¼\S·OSm.RI}O±fž•[B~øÚ}Òc*˜]6×Ç%ÇW™ÿ\±ß3IejÿõBèF.P9¡ÙÂå+À\k×”+L® %Ž±Flè9‹ž®ã£y”1üH‰ƒºõ¡×DRLräŽËæ;ÙZS}6©fHÂš€¾æâÞ„2/»aÀÑ‹†>Ø¦Ô?J’3_Á©¢YöÝ¯.³eô8?‰ö®^býš¯žOÌ[ø²haÞÞ›?ãü+_Ès‚™à@2ßrm¤U±a0°qÈ,)¶â\0)ÆQü)+^¢ì×¿Ä‚B£_›a¤ä1 tBl(‹Roí‡'±‚¯PÀæ°RÒTÕæ ŒÇ0;zá(æÞK½FP7·O›S)"Oð•Á*Dç‡‘£'ö= ÀB<EôÐ`J¦ñœ2—¡4¯*‡§trë««}3–8aî¾JB§æ³vÿ©'R}`ï˜Æœ%`„MÂ~¥~;+MöRoZË`:´:Öi`ŸÞ½ .…zuë;tC¾¥¡]©‰ƒ¤±Dø‡ÈÛ»}æ)ØÉÂLÈ?ŠðÒøG÷ƒxŽ·$â:»°Ý!Rs)€˜üþùô²[Æ6í“~¥@mˆrª^ZÒaé°W©=ó­Æ³ö8öxñfJ«£µèM¨!Eïó‘!x…ÛÀXæ©d¡k8„ö   0C%" `  ï¯zòªÊû!Î<`™Œù@b)¦Ì!z¤à¤¹÷Ó?¦¾
T×ûÇ{ý€Û·;NnÙÆ26œ É´¦TáŒe{¹yôlÁc:ù È\  ½÷ýTd3#o¦¿;åðð›§evoMVËÞlB*jaš“Ãê¨ùHª‘PRõRÏ@T$Õr-I£¶¬r-Üª@ªkË*ITý›Ý   Í~•w÷Îw2s·å%²È¬$ @$ˆ
à/€  ¢øÝÛZR•ƒ¹(@57ª–…5Tºò½'·Åé‘U" ·Æw† ÅªË….b®ÛÒÊ—ÛNwÕ‡¤§rXÅ}­´JK‡xrÿ±½(9·GÚ {c©[v
[}œî¥jÇ¡þ{ëÑBÌ
˜Qï¸q×¶,A×pDÊ›Û%H*nöi>{£Öoè¹¯0	y‰²”ò¶¦“vúš,`u¿a-è#t	 n‹Îp5WÜ"•°Îô_]Ž‰»;Ç}aº qjdKŠÕéxšK³ÅTÿ†Ò§pÐ›+‡?Š)¼z€s„/ªvÄx”ÿ=!¹ºÍž]–<ðÓ£Þ ¬“î×.j
Íº)ZAíjeŠ—tj²Ïô£@I}†WnêðŸÁxïT¶fBI°Ð¡E¢˜/(·¶¬†ynCM\ÍÒY_ãÞX…,Ðñ¤.¹YG¡Ã!/th@Žü%/´¥zÐ‚ÚNYV-…Þé”…2Øý/‹Ü;äj4l7‡Ë)²wŒ8¿jÕ¶.º4ì¨ø
Àf£ÛF6U ëˆ ùBÐ¶·€sÄo¤xR¹y‚>O^šŽ¦{n€ÕšWV ¨Ú’ù9[ØÔéßuG´Ì}Eï|81*U¨¶ñie	uw–°m²nˆDâ˜šÚ·ñg>¨âsÂÝŠ”>ÍÎÒÔkh:•|¾cŒx¦ÎxLÌ/a6RYüžïJàáÖ1óÐ"Ü•TãßdŸòXÙ10H´	Ç:î·Á±0¾%©}SûÚd(RxûInlTÝq†ùk%ZÌ‘CÀƒ·Ï3PöÃ¬mò|{ë/L_M\«&öl¥&¦MŽèup—1ßïo(âÇ¢|À
u¶ƒÂÑxquÍ©A›" ?ÃÏ2á@›Ð õäÈUiYšã˜†wT`x¹ê±f8Ä¶Æð!àâa]¼S!.×.vvü$Z‚0NM°ŸýMÉ´²&0xÂ zC=éîø‡kh•(žf”"ßrY_ºj¯`|ñ}#¹jsUXàÉO'¤žû2AzxzöÔIwž@ˆ0Å•†ŽT‘§;‚ÒRS«VÈ-èÂ)/úì,»( \Ýýærò}F§×žFh4Èµ+eîx+ÚÖ‹‰x†y™Ìãº0·Øhc•ª&û5–¦ukŒ…=}íÐ á	
Ðp’1í‰ñgñÄoÝL»‘'ˆ\$»blXD<ºˆ@52/ÂÀÐÆ	âÍ-€hö4MþÜ®Éç»Ç®UˆðÁÖžÂXöK<“bY¸"’pX4ŽLIÈ8Â%áK4ˆ#"éáH|«ìw…`KfŠ‡æö=¤HTû,òWzü!¹¨ÉårÄyw«/ocC£ªæQ‚”uá£0Ã]ò“W‰N”CQÌãŠM©Ê¤Ê½Ú"ó:ÏX±Ó2Xô“x›¡±@8XcWâù¾NÃO­É“Å8~“KÀP×ìD²•ì$Ÿ¶B5ö!œËØhã$¦´³Ý¥h7|}’]MWnBùž0›|Xé¥[áŒÃ)WÀ·9ãkáŠ¦u7ò6ÔYOaòÜ§–3ü›.VÂ•Þ*ÈŒw
ø/Èc.Z
h(waßŒëb‘Â-VJ­¹5ò!akeÃQ¨š×Î‘½@o<
­lë!wè!'¥Ž%ñL]nƒ»ÄðÌ—V&x¨NèõÐû“Šfÿ@tÜUQ@†k™èÍŒ½í/§Ì¡ÃªøÆ½Úea˜|§úùa‹C0òT­,ã€š‘æ‰Ý8ËóžÑ%V‰<Ò…)l¹ê‹Otj‘È°gB èvbyó¶ýîgWÑî%%XÓï(´S\~©N2íœQž3V%Ð˜œ½ R6tÐØðÊ‹Vìsyë‡|»ÙPÏ­|0¥ŸÿtÆ£KÑðV¢ Ë¸Ú•Õ„H+^aC#2å±£Ä^¬Ðëk) 
ôI\>7púµ8r¯Á×öÅ[ZŠJæi[fAÄñïVŒMs	Ï^#¡[£ÔiÏû\"~fUè99}ß>)‡D‡?eº­¦ñI5cÂì°„ë@‰d%‹"3PºA¶GõmAŠÏü>Õ¨ÆQ8¾Í×0:}/]z_iÈžÂ´œen¼Iq @ÄÒÍºC€Q×Œ»;ïgàaëƒäµ|+Îï!Æ]÷™¿rËÌ¹MÅèísj¥F+o(z.ŽÞÍÇ6ÁÅE|z* kÓ«ºôéÆhÜ1ŽR#B8€5ÆëÄE<ƒ÷í-ž>Ix~Ìç¼rB—Í0WºÍEHCëÛ‡è[ëÄ‰6óë¹{³Xk.^X»º0>ƒéÆŸ˜vŸÛõÊ&1w'ê_½Q®o=<,òƒ°P
ÆañZMxFdÓ2Îå¡KÞ›hÿv­þ°1{âZE6ZjCæ¨Ü–‚Ô°v¬Ë{‹GÆÑ©˜ú Á/|º˜”äsïC€ù½„W@àÇ­ßèãÆ€®ãbÿø6]{Ðwÿ¶‚2á¹ûæJVÅ p¿§h(VT¨‚Qø¯"^Ï> þNAÆÞ´F‚*:ƒ›F"ÙG¶©Æ VíÊ*Éªˆ;»ã#$Pg(²P$§¢ñKšžÌ¬±õYÐgTAg l˜7¦ŽlŒSkßfÓ"ˆ2KÏŸ…•Œç`.nãÈñd?ü/„pÅ‹DÂ>A’nŸ›|½™ŸÍ®FÜÜ”¬“àÜß:6[ÿ?„ÈP_YÈáLYY+á»kË<‚R]pDÊƒWÎküb+®Yj‘Ïm—æfãs]Ò¸¹JMk]dÿw¥É¥vj,ˆñ¾^ƒ²µl{Ò9)ƒüäW‘Mz¥Í¥évØß±ÔÙ÷ÛZ©ßÑ2¹)`? 2+qÏÎ
ýÏsr_wŽžªuÔ)Ï’´tÎŸð\Ý…›zwœÕ¿RëNZ]’x­)^æÆ(œº4 Ó¥r„I…½g,ŠcÛ4›Ïy …:¦FRéùßÈ;p´YÈþ‰†sDªü€‡ŠÇÞ$õdOà–NvPz¹RvÊÈ]Ø©áÉ;vÈhh,n3)doä›ÇTHûý'8ù_«‰.Þ
‹î©|…ºYŒ~ETâh1Ë^¥a)@_¡u BaÑÉ×¬þ>‡}ÚÌ6ƒ»ù'J¾Ü„‡ðà5–³–%Õ€¡Š®ã‰ªXF{‹P©ØÇæaÕ{ó{›KA>êúàrÆM±®Ógáâå¼ñ{¨ŒrÜ^ÔIÍ0}Ú§xU2Ñ¼¦pÔâ¡°MêmúŒmTàÒS§ mÓ¦Ðx)S@©¦‘@ì¦0ÿS ƒZì¦(¥Éüƒä^Ál~4(	uÙŽ]‘ÞŠ$üO3S"’FúRïõ6$ïcªÊe›‹]ùˆåC‚§RÇáÔ’$(!âÎ R×ÎRW#‰¶áÃÝ®g†AvŒW^åÔ$¹¦CŠëé¹¦úZ2S±/f.õÿ¾»¼K•Š{V¿K´qjy_#$/öÇkóÁ G#Ñ2y`„ì%yBÿKš!¦ðCÍŒÊ÷‰Û½Ðä‹‘V­Ï©[_É…à`htP¦Ê†h”³Â…nNÔ	Ê¹â¥ÕR„‰4Ì©ÝG7µ¦Ó‘iãËLƒ"ê¨A®fœñä”ÓÌ++‹¹l&—•%b;KÔbÆÄ“å’L‚¶øýW_ã‚a|†¯™[þ½®Ž˜¶Ñú<›ò‰7Š•žKB†'z@Nnˆ¨\Ü¨Âšgˆ]ÿ†úz<[è|høêÚó™mPl¾dÏxÖA’ƒGø	J¾vîqB@¿o:Ä]rØnÉGÖ|¸}ëfŠÒD£”5rP<Ö¸=zôCdµ y;þCÖÆ¯Ò7IÂå1R®=4X:^;èt˜}@tR¼(ó$ ]w6+‘BÃõ‡kNà!¤õ˜ÆS}G<Øè!+½ð\ä‘kœ?¯™<}\zè8¥’U;e{÷kàÑf·’žüRííB¹ãØ”nMXŽÿÙëàŸ½ºv«‘ó"Žöåt#í#ï« 9ývÀ:”(z°ŸÿBŒºeYžì"­Ê#£razÔåš_¯¹À[sÒ¯Ç§$qÊ™HNþùR)1©©+tŽá#ãUt[Â!siè¨W)âº^‡[×oi>¿¶SÖ]5Ò×SF©ˆòlY¨Â¼_™É}má6-ï†d£»©pOÞÎ¾À²5™X$þ §ù”‡‘Í|HÉA †nÁ…d\¯wyñ‹;“Ñƒ¨Ã€h%YÊŽšTŠoK" øùTÁwrBJ‰yå‚–Ác.¡æ·7ëý8â-}Kk7r:Ì¶Í®ç.HÇ$ŠhUõí3é(Z *³WÃ›!…ÞçÇ›lÊÈÍ¡Óåô°)
V•Ñ§…§¢k9“óJ’D8AºŒôo”«4˜!n7	Åw¢‚BŒmB¹£7jûv¿Ø‚1væðBÇR<MžéÝ€$¬V½lƒÉ¢Œ5AAÖèf,!æv­t	å‰.ÝÓ»[†-
Fí¢âÖJÊXUÛ¬Í_‘¨å,°¨^TyT·õîÏ®Î1®2›@©-Ëtl^<–0ÑL€¯³‹0ëØ‘£µN–ð-{ýÍD–³(šf’™Á­Î1ŽÓ~¨*XÂ‘«*5=çH–ìR`÷b{¹w”òz}/$C<ï\ñ^™×pOÆQÊå!‰\¾aZÅˆ®dËíüó‘lªNä<•sÙ’FŒ%–_ ®Ï¶Wœø¦G÷¸Ö—rüÙ€d«|ó2ð³G×D®ÿÌ}.ïé1ŒfâA©W²â‚C±WOŸ	Ø×s?Èd~¹DÓºDˆnëyßå¯jü½‰åä²HuXE‰ØšÏmpƒÿn¨-Ù‹Qƒ¦äpÝê¤WÛ²sanä^3ƒ2ˆèÈ‚£NCòÖsn«êNÆêO"QNcÛ¨9%Â—¬Ú€nHì1‡Ÿp?TK®Îc…ÛµáOÙ,7$:ÏZ‰iãÀ]nvjk&,lfx:9*¦Û±ÏåQNð†Eü“<|©ÿ¢'ž,ƒ@*?„GC¬Ì|ö„ðQƒW´EüÅšmÊ2¸/à"jLÄÐ@š›“fŸWj~ëQ‘Ñ¾àf‹¼„´dšžufM¢†yw«Å‰uÂÍ˜7¢ÔD	&{]·,i×}àÕ<²‰#1Ã(VMÙ‹‡ÐN´<Åá×Aˆ2ÉRO±q\Tn …{™½Ÿ :
?bÈSµ°›´ƒº=%«²n–ÝýƒÀG¥õ/Üû 5û8LvÛÀEæŠvœí=wZbxÎAœN™
wµu|Æ±£S°hŸh0Aäï ïïfýßŽõîR)T ²Cá ŸŽb(o?ÖòNUù)è;bBnøßpü†çò	Ñäå£¤¹Z¬U#ève~²ÖMuBú1ökís0I
2eTit4”]Ò¥rÒ-üµ`øçi½Q×sÚÔPÁ–«ƒIÆ7€87ü9¨+½½‰~7þŒ™|®ðkk·eÈ‹ƒ§¬¨}ÊüÇ¬£¼	ÏVím)ååú…¥(p.ŸäžŽ¢æVÑü­Å2þÈ›êW¹š?ƒwª&ì;&òðö|ePÈî©ŠÜ)®>šd)c<!-R¼£¼x÷è÷l0	9âR\­þáÁ!\­#«F¿†š0¿ØgYõLac¢ôµ/Ç6¤gRdŠ?åXþ×	iÕÃ†Î§Þ”†)+CÕØånýËòXä#½íŸðp‡gœ°mx¨Úèç!›oæŒš¢ÛYúÌ›Ó²7ªŸ”_l
eä.*#±ü_<½0ŒÒWUÌÄn"3U`#)p…Ù¼{´FJFÑLIðŸ¥“íNb­låði…ºh>åãÜ™QîšÙÐ³émÍŒZ0Å“9³jÆ¸oÔ80&h0ù¥9–fíéºS‚[Z(¨*á1ŽMN
w# ÂÖ!A)Í„Bh	8Ú,:rŠƒK]üû_<2RÅ_ þvÑJŠ°Y)>j“g3Îk£W¶
z:æñ4»Ê[“]E¤Õ™·nˆoÜöáX¥áêo­É{LÚ=½h¢GIË.¨3=Í“‰óÁª˜ŸB1TIÍ•âÔúÄæŒJ¾MÂJ‹AìO#§-¥žÜ®tM¶×ƒ×è”ÏøWƒ]`-^<ÔHg†^á†ë£"È‘.Ô4Þ$XÊÆª´kæU{å¡—ZxuYôèdÃÊ­ç:¢ÁFq Ìt:²ÎPhÀi³ÕÇaí3K±’d®¢×P½J+ó¿Â¨›Åq´ñs \³$w×rÖ;ím®eä‚_ñ‘’f£¶×«/ƒ´g}ð4þƒUh¢†å¾w¾þˆ)hn}Ò¿Žä(ÓFÅF¯Û"ÐWŸ«K–!%V"·:þ¯¨Ï6wBÈ–ù@½Â6rKÔf²ËÐÒ– œˆ4<®¥høì§%PÒ”8QxŠN.
-r ±ó„
EÙÑ>eqOnf7•	‡ó1ömSïçÖÛÛÄYÐw_8ìt ¸ÆžZ>½Ë6jh×¿™†Õ
P®ùùÒ·'ìîsâø&f-
!IUyýk&…qG™ñ»‚¹š—|ßpcä AòqÃ 8x·sB÷QDd`é¹²åP¼ÿ§inÓã–¼áP»ºÏŠä­:Äˆäà¡ÙV}V(‡½\…æõY(f:ÃwX‰B·/’½–àŽ»¶#á´·÷Ê¨^„Jñ|ªÌBŒÅRg#‚C1ô<°-®Dœ«º`˜ß,¸ät@\¹²[0n.š
1šúÍñŒ¼¡oºªÈÅv„ç¨äé& â‚Ð9½OJ Ã¦ßŒg«I+Ë‡?¤,—>‚'`»iWz3`¬°Ü.2ÊH•¿î
5¤U‘îo|&ÆÆÆb°ö)Ñ>©Í3þÈ·]»à1l»R‚ÁáåûfŠÉ ðí qžî.ñÃ‚é‹:ŠêîØ]›lU”ý"…¼¦·zÕL]— [pÇû9ÉKÙ‚x,Èo<ÔR¶¡_c¯8wƒ„,ïê®ÂH°ƒÁfòâýªé ©'üAÉÂ*4Âð¯aI†hrs7ÚCžž‰kñS)Éò}…qˆx)B—ø#rß÷7®Ü+)CæÅüEp|9Æ‹õb^EŽJh¶üfär¹ýç›ÙN<”Äíi¥-¥œ¬Ç¶Q…rèýohÇæœµšéâþ§sÉb^ÁË¼â¥BÚÊ?RPnI‹&—€Îuõ	CI1<CÿŽûéö*h½®|Â'EÈ
2¶±íäã,ÌÚnßjÐâö¼ªÌi	WE¥	[8ZÃn#¼Y{üÚÅÄÞ_Ì6mÚQ-qÐóÐ{Ûœþ¸¼¹“}0ù#v(×,ÜL	Pzÿ Á0 ¡ì0«–øàÎÀé˜Z1³%½ƒtÝæ‹3fÃdŽ^ad§AÈ’ÎâvØ¯àÔÒrÌØ=KvGÝÉ‰hŠ^ÆêhgRübýB¢›Rƒ‡,öwàa'Ëò¹Ÿ=ëöoFŽÉ*È‚ó7²)ê”ž¢ßB}™Õ?üuXÐ‹×y“K6” ÉóÀýs­Æ“ðíµŽ -Ñì7ÇÇÊŠƒVš©ïÈ%œ7ÍèU‚Ëó`šÎtF+ƒ„y<?OáXðj<­iÏJ™å,Ú€MóŠÊt°×‡Ë$ÎBêy$	!…1ÞÏc¿+’œÇ	OqíSÇT†iÂÉõ2±÷w©á¡¸™`Šz§pøûçõëË½RGÆƒ8s8è‘®‡RãG0Sü?²_K¶‚8ÒG-ÍmKÎ‘Ò]B³‹øžJ–î)UÄãYZi9,µžmè‹·…‚­Ñ‰±IôEûh·o·Œ*ab½4¾å<ZÉûAÜ÷ºR‡øëj™ìîE˜i‰5r˜«E„Æ9²1‰Yì}`)Üì–[•°.â0¢‰ÇÞñVÊ¡áI÷•°¬àSZkú‰ú.Hˆˆ»ôÆQÀ®2@w&°SF'cãä9)4ZÔÐ¼  ÈkëViö«·ôj‚ñ¨*Ž’8wºd;so ¼ì¸ŒýUÿ—Ì'êýD²Y9˜jG¹pP'D£ƒæß©©óIëwÀ¼6Ä G2ø 4Mø6!qùªŒt¹…HH²’¨ìâI±Ë¤‚áo—/Ãÿ¨Î©12ê®OóqN˜™ó|è8.þ/¾#I'zŸú&	îxNÝã®*,¤ò¯ÍÙ)ä†G—úõ¤pfæø›w\1·»š«Zþ]DÏ1ò°ùÚÁ…;ib»Wräøù¸Ï“|¦!‚»jŸ²U#=¼c!Wbfs|ôÓKÑžÇ™x­™}Ž§÷ƒ%ÍvIlpÙë·kÞ‰—+ g¬’ì{¤£ßæK/ÓÅ´%ß¾
l›ÂSÝª\ÔÀd75b?öz&×!ì+¤·VE‰Z=Å3ÿ´ËÕc8¢ˆùúuiJçüÇ&»”ôÀ•¹)®ž×V‰uõìX¥ü_>I‹ÑøÙû}(‹P‚™ž“àJ¢¥’íÙâÐ™$ì{ŸãL!%“JCÜ[Í^ÔhùP‰ÃutÅ´îžP{—ÕJ—8?-yZn¿ºIDøýS¾™¾†›¶4¥ (ŠßA¡¨íÌm_^µÄÜÐTsa˜’øPhè4îIãùáÝhÏ*fÂµBÒÑônþ¤øóÿ!¶ý‘à× ·~k•ËÓ‡ÇÄ—AçOã=±¼¡Ýä›!x¦SÜÉA%àWÊ>‰mQiíy”ÎÊ¡,^Q	Ä¼ÇacA\çªŽžAº/úD,ÊÑu&äö	1ùg©ä¨öh«ïŸÒRªafZT¥€æ®Un08‹ÁA&-ŠJˆÈBkÿdŸ$ŽOLâ¡MâBü‘—G–ÓcVKóu‡gôÏ4Ò†ºíæ†½Ä?ùëAŒÆI”eµÁ]ñ$ëÏtW½)À„°Ð–ÆÓ‹É‡ßÌÔ?S›¡”+¶ßçÚ·î/ãšr{Õ¤ý°¡é{+N„¢Äƒ$¨èžSzÝnUkÆhú£Û¼””ˆE‡âa³Ž›ìþIÐž6$–>+Ü¹%´œAÖyç±Ïuàj»I‰Z±©RSãÄ{ä¹¹Õ:<±§¦¹ÍR$¼s…Š¾¿rŒ6ÞŸÌuL°óAªŽµŽÔ‡½.2ø±_oË|¶1‘õ;~á¥ü3ö$`Èõ@iÃ§»ÁCÐ›j?s$»¯s!èF×O‚3Î]³F¡ß–´€2¦eE¾ìŽ\,&¼¾#Ô dH+ÚØ¿úÁ¦XÌ”ÈâHJ²û´®Öý–EL9£I”û\ð·N*b!Z~ÎŒ#G¶kökß ÓåT¢­ò*$ÞWœýÕw6—C¿¶2.v±–ñë:n‰•{6ë[ÒÄÆIjô–˜É,I¯]\¬e$N$
ŽÅÅ¬ìF‚5Ýû8lâkÎÉmã„ï¢¡	î^¬Z™|åêDV}ë­@b7Ý™i*òméæ"&Gô¼¦Œþ²¬ª<ÛÕr.k\¶×j_Ëÿé¶ùEvÞ·ÑéUÎhg#Ç™wfâ¸cÂnN8¦ž·‚¢weìÌ]9œ÷7–‚júH{±T£ó@ù\=1ÁôqY©¥Ùà†Þüú+†€eìMXŸ{º·Z™òn
-B†½Qï3ßðµ²£ÖK¼ :›243˜DwØ ç#+ ‹ÀH­ãÓ^íiðu;3Ž8£¨/¡@RV'—¸(ç®y¤ªzlÂ'¬°+Ê˜zÇ<’²I×ÄX—"“5äñùÂr¨~uIryZ†¹E½üÁ‹«È»àÜ³A«^vÏiä»éê_Â}óâÑ±/ˆ÷4ýÜk÷D+ÜœÃ
çz¿.»Û	c…Šû^êùòqÏwI†è6PcíÉe±¼ùØz%ÅÓ»öyF"„3Â¬~b€DµSFE˜öVÝÄûujÜ÷÷§6#°LFÔ¤1lNOVtH{œÑHâÎTÚo³æCÿ›¾Pž+¸„”½2ZÕœ“Òi29(ŠtµfjúEgä˜èÈ…Ò­1ñ%ÄÅŒ Ž*¿f´´¥¯‚_ú 0oÇ0ÿÓm@[èùé½ß_2~Vè6ø™eëOëŸ=É!º}€-Pëùæ˜Ä&½Œ¸GmÌ¶/åÚFqDÌÍÎÌ×tÐ|¦ñÐ¾§¹pj’„&5ß£Ã“/³Ì®‚<¼îìTÓçž,™–Eš¾9™xuS¦ 7w`!!­Ì®…rº¶»Ç.6	\‹ héÈ1Ü"‹ªÚËh0oDŽ²¶'5ýŸ×wéaT&,€ÜÚ§·ŠÕÈÍ˜ŒOL`R¢jÞM+‘p
ÝìÂz1D(,9	ºÓ¥B†å°vôàž*”–Q$›æ|¼*ö+©ò¢Ÿ¨â^•]Ð+ ©šÎGžIÚ#=Šl(øÝäÜ„ÎËgljqgvØè¢,êMY]±šMÃ„x B¶oœQî‰_ žöþ<¨]CS,•Ÿylp}–¡–Ë¿7t´M³súYgèiÃÛe¶t2 ÙþO§Ú.bÞÕ§}µÀ9î{ù“kÈ*.
HÓ3@OEåRûô+å¾³`™{4Úç®®Þ„jè…çZU¯]Ë
•ªÆwD?^?¤Å¬ÉÆ_´—×¬j ©z-7ÑUoÓb8iq[®iÒ°}¶%ÑqK(p¬÷ªè–1	Á›L¼ë•‰ïhÀéº¿Küd4¸$ƒKÝÖ—F
7Ág‚#q<¹e3a8ðÓgs¸ÈÿˆkTQ=ÐEt‘b¢FUv‹ÑvÏÃA‰L<È©àÊÑMj ‚p1½ùgd'F&é%“1ì™q˜¾›¹åƒ´kgÏ æÂgþ¤mAs<Ï/¾ÚÕ*LgûæÑ¼ßiæÙÅ³¼:Ü°þ¯:;Í7 â û\l«,àØ 
sC¾y‹h´×¢vªo-
éh_µ(GÃ–Ås³åÑ*	;\£XSn—)ÛŸÎ… FRG5<[(~ÐÑÆ”S”]\ËˆNÒ¾úóï%íáÁFÉ_‘”íƒ~ÒF¶n”ü-ÚTv0ÔÛ„ú=,9®s¹Æi~ï¼½ ·­ÁÌbZUuüµ(Â}Wo¹Î¿Â_¦ù^àœ—â<(@Wrù¸ŒíõuMAé(ÓT]©£/Oƒé#‘ˆ’EÅÛôÃ²OïUÄœG¸WW3.i$	)üÇŽ8Ú§ÑAÅ}¼,R§¿ÄîB1a}¥/Ð‰Ø±ál}ä£f åáf?Š¡B.u]ø•_’üRuÌ²JEn—«Œ!×vêG"_iÀÝï"„š÷Üe¢æ—g¯7õÌpÇû/êR§ŒtrøîSVM×sèº›°¥DÝèôo½9£/ˆë(¹fn
00;à^*DÀì¶U<Ï‘ XaMØL°Ò7òêó\$¶¥äáo‹æƒ6/JM‚ù	w˜ŸžÍ#åóFÃÿæ†O‰à ÒVðÇ×ôKR`Ÿè£µ´*×O¢©{ÊÃ­Cè—’goÎ—(ü‚,¸áÿ™{í!á4lª—øNÀ­À‹_>Â¹b>:`1qÏ*Ú;ƒÂI÷¸U£L•é)ŠÃ5Ã_ƒT¦”^úziÀrk}|½ÉE?¥ÁÅY‹iÐgPá]þB³¤Gv•eˆÌc÷IÝ_‘yEÿî-¿fkñºïšïÚÿzÊÄp‹ÅÞ˜?Ô÷ ºð3=J,·Å3©:¼<Ö†–Õ#b\·•£ÿüÙd\z›ÂÓBµà‹pBp˜žÄ’M‘WÔÔÕÛÏ'ÀŠÞx”¨_?³Bñý²å(Êw›ôÃ+»÷Z1ÊDG=·t‹!j+ìƒãØënÉ@vvK„ ÷©ÃÐžÏVöÁ“Ùâº­éu…§	Y‘Å[7NL†™Øqm…†‚œón­(Ç?ÒøR‰#¤Šì:eö±åj!š'$éØÌþª²Ó/²Eäl×¤[ÜL†î‹ª?É}ÑŸò!¬¥—Q§âú˜¬ÁXDìy^5õDàFÓÞf(šsÉíK4—ó“ñãiç–-#^<–ÕÃ.lK2 Q½È0Æ7õy:ÿÖÿéPÙKeT¶™²M5uÄ4\ß;É²ÌF½pÖ®¥òD¡Âàÿ×¬¦Aw,Ö·š;w™†¨¼uãäy¦É/úÅ•b-0¹*Õ²œü{§Ê¡{oa¨îˆÇG4Q„oWÍá–z£]ýøŸ	dL‚‰ññŒúÅ‘b¨ÆŸ'¦ª x­ú]?€½º™!Éà±;îyDxï¶_ƒ.`93–ðoßj‡ò­ZCôzŽÓ *óŽ€qgIeågFe“5ÁÂr“~Fç0%´ø‰\¹´·pêlóœþ»ü_ºËõàëXUŸs·÷¾žâ:aìÈvÊ˜šñ¯+?ÎäÓ°RËY÷8øsà×½tP^]Ã5C/árSC –ÍÎo,—râÑÐóQõ­"ÌÐ
"†4†=	@3¼ûEÂ4vöèJç qË}Æ·?ÀÀÀiÀ…qÒ-ÁIã=G%Y}¼-DP~÷ …`Õ¸Éœ¤aô¤z‡T>¡)¯HõÉ¢Õ9‡;²î±VÚGÐ)´Ù”A0¤ì¦õ¯t¸?ìj*SÕ•`ÕëI6ã!Ó®I¢Ò\JM?ZJµ†T»Øµ~v`~nû³ÅA¹Dzt¸»çáõ¹"0aÞÜ:®)µ0¡Ý÷|JÂ¢”XNTå¨G°_Ï%¦Œ¿	~:4g!þºQëÈ‘Ã"˜Í	ç
Ä7j¬ËÅhÓsöô±¡èéÀv—Sbd9Ç­òÍÌ³$ØÝÁZÀ‰é|ãÉ¢Ê}v_b ÆuÙ‡È? P4É“ýkÎ„Ñ`íÄ<J!’%€RqTÂ1|sŽºâÞÍùã‰@ë4Î8«1ð'*pþÀ@‡¸]…üåŒd "ÎBÎ' {{Ò·Hµ5„}tŒ3ˆ'p9ã¹Å‰ävI…"Ì SõXiŠÖÛ‡¹Ð2=5ó>šÛ‡“ÏXcNÃæ#IPZ>-£Ž“§J™‹gòõ€Èˆ_“‘ºp×!RÁ[ŽF<x§€¬n
Œ£Ô^Ê@>V¦U„qv[ùX¶Ñènã‡KmÀæñ?’f›•M•zD¥"ûÌÏUµÄö[ZÖÆß©«šxÈ384'Hw&è!ÒÐ³Ï+1uÙSˆS¿N¼
jš@òÑ‹¬y0†Á11£ÁŠŸÂTzY}ðŠ–£í¥e="k¦$çJ2ÌªGsõ[ô±òí_ éJÝú9{¡­Šë„œ¼xÞfÓ8üªjsde&A›HxêÒÃ¯¨I0•šsüå¨Îï¦	–gÂžçÒNÍüg0dü%Ý>ø\°~‘¨™ûsDj/¹Ù˜éIlêF¯ªÜ|ïÊÛP2Ž¸K¾qQ¾ŸôíM=ÿhß÷ã¢èï2,ûß™î÷¥h-eàbOëD{>q_z7Ç”(ºZ(œ¢JÊZ ZÆÖùsb$íFÄè%?Í½0`Kƒ^ÕN|UZZ˜cî§@Šð»\ÍŸi
¿=C›ýmZýqèªUrOçM„i]Ð,Õ¿§Ðô‡‹c-‚F†LÛ:Òº<ZâÕBÀž`#¾,Æ“LQn Rp³oC¹÷Å’üh1ÌBÈò¢0 ºe˜T Ë·àãsË5Á¼ÝÎma÷£—QüT#Ö›AWêKdCÐV„Ñ^þ°\ŸPg‡Ð¦
—ÝŒÛP¦ðùª,f_‡àd÷%v³~>øÃÏ=ÄN”<dÞÏ©/	¹R5¡Lu£¦½ƒSëÆ¾$Ù=ð#œü“ôÙ4G2ŽÄÐ	~+3aSçÌ½6½zLÌ$/©ÖJÅ&¼È±hB•¸~C8Wq£T¦Ž#†ÚÜ;eGøŽc
å¨OÓDÔ¯Ýëz/¤ÎN «ÔÏiªsÌâøm#ÛÕÍx"te½q÷mÖ*Ã¶J~Ô¶:ØûLl-+Xäné¯†ÕE$©Ó­+kjÐÑŠ:w~dÕº¹6kª0ü¡tÒ-í¢Ø—èÉÏ (q«K<#ìÕŸ`«:¬Ò‰ûÍzÉµt^ éz°À}*Àˆ}¹œõQY
tÊ¶:ÃfåÍ|3	TÏ:¨´ÈB«wCÖvGs‚rú
{Ç(•*.B ²©>ûjŠc€Œ}þE-¾‘‹†Úl~7"6c×qeê’"ÈHxÙÅÅ-ä_¹N9QØU+(!ÿqõ,µÓQ½ö>S	žvÇi°/ab’ÀÉ§gÖ¤šŒ²ø;û¹ÃJ¤˜çËbº¦~×êo¦>Š›¯'Ñþ!J&}BzÈtqV„yÉÉý|ÔÆr¦>3`1nÊŠ'ÑOÝ|]Ì4†èæ™´ë'1Lq˜ûì:	d]Õ\¯Ø¿Mm§£ßÅ½) Â4+À~A^ó œmø*UïÆv¥¸Fš!5ªÞg³WŽ5y¹¿èíiøíÅ 9ûâ…ÏÀ=x]ÞË\þU÷DÄ=½‚V”â1s×GùWã)”üÆÛ¦”!\¦{nT¥Éý£çìk2›Þh
…Ç„pbÁ›!Ëý
x‚éê¹Ê!«—‚Î¨8bà-j³œú`½í›qzÝ¿_Úù€h»P|Æ‡Õ‰À¸ÎßPkÝ…Ò''sÇ­_L;=žÆÆ_ýNüÌuµð÷JCßŠPÒý®2È‡ÊT­Æe887³$ÅÚž2ì¨‰ýi<u*¨2ùž]¼µ’º*ä%qqÞú'HpžÊÞaÁ¬çÚ,1ñ.ÃÝà†î`õê…áÂDÐG…ï$kØöax{#Ñ7këChÜP—ßîYœPÜ°ãaÇÃŽ†Á¼±ZƒßÉ]Da³È=gõêß.àþHl*¥›Y¨»M­¸$>½õ¨\ƒö
¡åõF7„o$ú`jºÓËf~nÔƒ{…Zi;Ð5GeggPÔñ¿éÔJãÅóm5§§F›Âpl•ôcî?8ÉÛÒGƒvö€î›.ÆÄ6ªÏþ=àæ$ØÏè€£Í×Ÿ‚Ç1>‚Î(öyïý „ÊYCO\³Ge÷ñ¦	ál™µüpu´/]RLxy2§án”škÄ)@þÓìó3Ô¤ß¾Æ3¢ñ2Ý£Ã´žÃi¤žºôÜð-yè‡ÿM‰c¥þÄ,µ+ôKNeÉµ­Ö
`BÞãÊµqbg@y—3"Í4¡=ç]Gw½/î‰Ä––agV¼]}ÐQÀÄbñgpÄçñþ°[­”÷	lÉh·œc¸,à%Øù‹¾;ˆ¾irtá×üß&§Ác…Û¹xŠ¢ÍSÚv÷Ý†‚eãøæÅÙ˜×,ƒ¢F±}åñj^§T‡ŸóûÜÌ(±Ä‡J*9”£ÕõÁó£Äç,Œ'XÆ
ñGùe8óå¶NNÝñ:ã$|™‹F•ÙºàSþßC ûo…_UZèQk±ewË X»»3ºÏèc¯ËF`ãäŠ¾IWŸuQ#Ð—Æ»zQÆ^±ÂìŠ²]b÷úv¿ÐtIÛ½?»mø9^¿#v@ìäûÒ_> ÛzŸíû è+hÐïŽ]:×¿ø”ïØÐz•‡ùÕ§&"í)¹a0Vr
z,¾äçûÙ7åŒÑc¾ÚÏð‘ÅA?bëx±è€€'Ë×“K°Ë—Wúh$ãtÞ¯éìƒçïw6jŽÇ¯lú+ÖÙräƒ¿?ŽGÏøŠÇ(0ìÁö¦Vƒ®ú=mï¤ïÐ^ñ5ê¼cÖ-g"ÿ·ŒIj5àÀ §B7U™…XÌ¨9g±íº1BX5§÷¸ÄÇnšjv™ñ>â~ª9írÓDíW
ÃYôƒ&ÅÑ¢–…¹Î½ ”ŠfbþŽµi]`:°kN
\Á\ÏlÃca³NXaÀ	kï²pŸM˜†gLGçŒÿD
Ï¿·6îY„LJ,hõxÝÒÖ¨fä› ydþxïÖæ±÷ßñë/¦
ù¯Ïâ^©™C÷w±íÚ5áfnueæ±©n*Cl#·k:gs·8ëFv* lœSÐlÔüÎfyCÅßÀw·—êe–
}ý”á]î‡ünvˆ–àGwîÇ¶oÖ2îÇtgY€‚8ÄïÛþcŠ×ÈÜ~4ÃÜÈ;ëD>fZï .¬ÓÛ`µ|ë†X/òãª˜ðï‰{ñ§qŠeo­ÀÙX>ŽnSý¹íÍƒ’]œuÃ:YË§Mƒ˜
ÂÏÇk³Å°Î6ôõ†ÂÊB†W©‰Ì÷¬óRt\ëpkWÛQ¨oP“d|#o^À}šà5®±Þó×ðÛqÈÍ–rA2=ÒZrè8›\6jˆî;©°žâ`´úm¢ŒÞB×¢sg$­#1Â"m¦ö°(œ­m1—«ú¥Á¶¿!`é•Ž´•HL¬å¶«˜¤ÈÇƒ"–5ÊyËôkÂÔË£<CM¶#¹=õÈ2ë($%ÀÕ=¼OïÕøí~:ÕËê7ŠzÂ>Br®4ÖkÜÎ@]&ïäØ‰>¬þ¡çPÛZ€êôÖ‘*y¬hì={dêØsœ)h'Mö•¥#qŸöU€r½<í6ˆò1§ž’ÿw¿hÉ«údïkÉŽµÈsÊ¼V¨’:G³èé”=`d'ïxõ@j}<xnÑ<DðÝšXÞy²G?ÕW›ÏåÿXH—T#rêT›êjM9±—`:7‡xØ\š·\ÜÂ¿y›põÜ·ýáö¨ó•Øs¢†Ó3¤X>öC¡J)–
Xû4®š$ÎééŠHµ‘±R‘6£WÙQ_;þ¥¤h1»?4(˜;M|ÖŸ‹å‚CÅfa¾îjGf]{æ­‘'ÅŒ®4×ÿ{+K60Ï#q­aÖ8ÌBÆ;¤
f˜’H_¨:©W¶§,0œÎÂDõÈÌ‹1MMäh¿Ñ¡Pƒs¡zô(™VMQ!Nî‹RédjR³\igG>Oí%f¦©?×ÝP—zjÒ¶qQ9@Xì4µÇ¨x§Ñ‘­R¬uŸ+Yxº´¬$ÔÙÜˆ-[¦½}È€úÛ|EØIÉßÎÿÞ(e§-‚¥!îí©ŠÁÂ¨’PÑ	:[<Dì;H~mÅê¯â5¯04B•‹‰-$zqÇíÕ¬§ýÎÇâÐü‡JÔ¬æˆòÔ1K#J¦Æ‹ÁwÙÆ¥ÌA’S†®èœ°z¹jN2FYqö‡‘¶òº³YRÞÒ?äÞÊåÂbÚ)E¥³<v_È·m)e©_ÍöÀÀZý©vÔ ïb±Ü…“]ÌØSÄoé(<Ž,î,<2f˜N¸²µU+ßÏŠsð}úšt€Ã}³ì3(Œu[PVaØÌü` Ä›âc7“0€•I
%¨¾†¶ZÍ6¨3Kµ`+”ÒJ9áÊ”å°è$eÚAO™Ž6 Bém=¿5tÖ¢ùžAŽË»Z×‰³;ˆtûwõ
¨V.ÁTÑhÖ<È÷‰$­“©½¢(¿€VÛÄXûJ‹ØÁV…[zkFc\SÖ¢€wå¶CªïmxÉõ®÷?©kõ=ÝKÊð¡M¡>ûÚÕ´é‹Ëm*f²®k Äyå¼2ý ³ºø: zþ«Òãðº·eûk=íöÁ!^ñ‚ÿö}=°*ð&ÊLåàP;¦#"I)É/ÑOzëà 0u†*-	ÁtpSEcÚä‡¨’ªíÛÏTtè¥te5”úÑR,õ¯‡Zb‡šî¿ÿ1SëÎÆWÈ1›jwþaäÄ>ß/V°Üm‡IœÝËâ~.	d–•ð!0)ñ_t•¾§€á2S/R§€ÐAD¤YµÐIœÄ,ƒöŠùûgËÉq¹¥`Ž3˜5Q8AM3NI¤T¦
QCë”Ci!Ñ@Ç¤yêAÒ‚G&NÖ¦t"Ðy˜A#à5íyêGÒƒS'“Gé#vÌ¿¨uËî\Ô\¬®(W<ké×ÁíhP—Ým_ü#Lzß0Óä£4ô¢¬·ŒÊxìÒü/ýÑMFïÁÁAƒÝÙ›×e[{¸š0šM@Ã\ÄÙŽ¾Iµò™éA*«|ŠwœRÈq|iV“¥ ¶M]ñ0>7¤
°ç­ Ÿ°·W^ÝCÓ´5jC;P¶ ²Ñ<ø>Ø=°{»ók`60šÌ‚©mÊ Wê;¥d¶Öó‡AÓD÷(ßù-ïì-´9í¹NcvØÒ¬’”«ˆ—âúÅ„Ms¾e„¿ŠÎÝöô|ãÝ„©£ÙÛh77Rs©ul€?Â,dÊö—›+l 9Ôq¤=œKïÒ0Ð_xŽI•¤¿q>ˆC¢*£x†®*Ù'¹2g ùN¦$¶¢…š,ŽøBP~IÁqúeTÁœ_?ºµXv L{Z·(Ç—P)3H¤OÐbQõ'5u
ïÕeŒH¶e!Ìæžþ°Š`üXðràzLþ=Úï«ÇD±,l¢8Ø £ƒn”u*ÕbƒúHÍ–("¢ýF‡›6¯xFúZ2øe>+ŠFÉ”Ü^‚NÊ-û7,qÈÆükg¦°ž´	(¼õÛ/OÌ°2ÔÊñÐ=8Vø#<%WG¨‡H{títH^jÝf
=ýMüƒ^:6ÝPºÆ+g‰ÃI]¼áå¯x‹U÷^?ój¦NhÎí­z:™±šºe]T“¨P÷Õ*þ£%ÌK	ÎõÖH)›
 C¿4€ø ­Vðèè‹à*Í5[êÌÖƒ³~Ðnº[Àã‘S›3ØFDXy·ýû¹èáçÿw`rT)änÚ7Í¡£³é´Òäy¬è6Q8«:/ŠúI¹ ‰Xñm`6 >{êÉ9Ü­	G^4Â´ÑöÏh—Hi¦nr5vâ€¥}Âå;(,"™ô›T,,0%£®ÔŒ4¹“6t
Ù†Oæáí%â:ßuÀŽ‰éÕy	”£ dL…˜QéóZ·åV§y±™É;¡XgùSw,.Y·L8ËÝ ³ŽÌ/dÏ¬¿r’Ö¡ÁäÁ`às¹®|®Ù¹:²3Nèò¿òYrÉr6N)€¶ÿí„8u¯ZSY™¥ßgÝãîsþ¼~—På{ö^h”É•¬Ú¦€?óßhaF©/
**.¶S‰M¿™å±å{î¸³û.iX·A;‡¹c›á`0ø NN/¢—Ä­IEc0²#Ë"Xo[‹Òˆ¹×¢$Š€öO3ò°¸°IPòx!(åuDÝ«ÀGAûC¦Ç_/nª©u ¶Óp‚6QpØÔO)Mh1šÃnÙ5=sC;½ÂºÀ|Qü•LdwEÚö9éøóoÿ0ÌSYµ¨,ŒLG‘¾ìc6&¯†3¸;»yÕü–pn¡„Œr’|kë3ßŸæP—íE&ÉB’Hf¹Û$ˆ²ø{‡ý¥ýœK®¸QÕÅ‹p¦¿ò†Í=JÇlÚE§ñ½ßnEïÓ„ùµ,ÿ#©Ñw¤·j¿ºß\#a8Ô¶´ùGµAºKs¿›·ûM‰	q8rÌ€6âÝ¼…_YP~øËL½U ƒAüDÆG g»ù~qCíní‹øXû¤º=ÿ_ydJÅ·©Ë)¢ÅM·Ú–!, Š 0Sw$" p  î®ë—›Y¹NFBEBYB‰BYBºé%¹—dEXØ/·Ä·Ü_¼‘Ñ©=Õã×0M†yŒ›0½ã}ÂÎ¶%¦D(5°‡@áéCÑ±ÂÎ¦B@2Tv#   ïûUßƒú<nº»os·38þ››–™»i¹·7YÕª4ig¡úµÑ$P$©D-H?t„Z+?2$Ã©;•-ƒYtRÖ2O!¡Ò–*GLªœŠ°™öî»ãÍ   4 4C:½I¦»ÏÀ4$‡Šì_Ñß\ è«(q»Û	Œ˜³#êWn•G±:Æ_¦‚Û	òä· 9iÒÐ%Ží0þ¶#×S•cP§…¶p¿úE˜óÎÉä&fÉA¹ü»
B…(aÖ>aR‚eÝÃ´öôÅõ¿$L8Ú³#ã¡!oIì¶!iÞM“˜ú×*N7(9*)Þ`™™‚Œp÷-lŒœ÷Pn=1ìDòz¹°uƒr&‚œDtÌ¿²‚s‘‘‘¿?a^áU©¿œvœRö6&¥(²Ø¦‡­R;‰wœqz='˜'ÍøÒý¢ÿƒËË}-kZfÉ‹@¼“->Gb7[zˆ•"¥w8[©˜IcÆ®Dû]•F‘¯\§îuÁªØÀÌÙå¢HxÆjW™¼	~O—gÅ‚°ò°¾Ò‘\ÎCRø¹„¿€¯Uÿ½w€(Åk*€jlC‡1ICnD5‰þµö—õîŸ£~J1ºªvA…ì‘9®Ñ'.˜,”‰u‹÷€¥<©§ç‹‚½àÈDeñ;Ê‰ [¤6îTvÁ¸¹*Us8sý<$a‹[‘îýd#è>œ†Œª0<E,×÷í&º' odHš€1¼0¬§ hˆDÇS¢‹ˆ#…É¶è/¥>y7Oê¶ÁK7­EæÈºÞÀš§©àõ†+ÛÑvd¨¡ÝÔÿNý_ã­ ëN6Ô) »Üe¯ÛGGÃµ7ýãª‡¹aY&Í@ÃÉØ²!ÕÞäã„Sš]öWxV˜õ_âß‡å2`õâ¹Ê4Ü«·.¶°Ý:¸#«Ý5ÿ­¢¬YRfhûÊÉT‡§35p”çy ?q='$o”ãÞ2£“I¦Ö?;wðÈÉUW ÊNH®ƒ¹
	R;Çº/ù×²ºì:%²8îæA9ëv…7¡p‚Tœˆ8Ý:1u\6ÜWîëØèXS›Óh
ä]ÀÀirÓJ‹‰ãº:Äa§ÉÔ+¸ƒçr ÕÔÁÕ;¢eÂ'Ëb#Jj‹DÛD¨·Îç‘zJ@$C‘ó°];çè÷¨ñ&b›Ïv¥Q2Jjêõ.ëÌËø[%#Ý;Ÿá˜Ï!º·úB2-Ñ¨Û¤¹ºdó@$6È2ê³d8dž„	Ñ4–ð‹AÉá½'¿IØ¾¹ˆÀJ˜Î×ã!]†Ð·ÞkŠ–bÉX‚ä‰"Í-Ç¸}t‡ŽÔ¿"LÙ¥3Þ'
ñ;àÇöîƒ!DÇ¨3LO'¤ŠdPÊå"³¸~ð’rhÆpÍb>Ÿˆš¥oJP•¸Ñ )×Íø{Ê·«²Xz2ö(Ç®'Æ}X‰ÉD®XÙ(1Ø¸³RS®ãý+±»Ð3±Ê£ÞÞ<¯q‹f”Y7Þ±…ˆ…†Ëä¡J<²‚‡CÛì§ŠJæÒö:vÐéÂ}•5T·­úüöÊáÕGˆÀ'éd¬OâBT”ÛžûMÄÈ•4>f­
ò¨¸Á&#®›å9løYªú±®ˆÀMÜ›aJ«èñGçå)ƒ8ÒÑŽ«‡EâÄ»ˆâ[ oAU«à-ö³C#¨ÀZD×ÃkF¨¿
ç¤jfÃ}óÔÈ²lTŽ1F›•âí¾Ò`ëÀ$·¡ÏÕ‹^#U	élÂýŠ¥ žŠ r2ùì‘Ñ öhh ¨¨‚DV@˜Äž¦Èžìjð+C[—<ïÇ ÆÿlõIf,±"fŒ†ÅPs£0k+kSLÕ‹øÐ±o|•çËÞB¦QÅÿ@<®4+…l:SñÏ	/9·S%qî•šŒäŒìÊŸAx–Ãã±ÄK6Y²Í0×}'À˜œ(¤cGÔ¨9»cg `Œ[m1¶¸²å\‘Zó‡h›s$¦Mà”M£–pv$ü;ç'þh?¼ŒT\OÎù\íÁ[×Zr…Ž5 Ø ½‚€"$hÐLtÎƒÂNRòAAR}N£r+àèÓ$mˆQ0øòCMÜç‰*OÁ}9É¥Ÿ*Ž|«QìÎ.¹AS#yê* Œ€‡#Ðû ûE§žÁqo§£`Iya	}ôD›ôÈZ³ƒ<·ç+ì3"™\°•ž
Ü'ÐóšäðÂðViJ2„Oæ±±’.
7CO±ÊAXÀ¯·ˆ§¨RW¤EiÐZ|,öÐÀ"¼šÇƒn¢‡ÊvlŽŽvwD»Í…AV aØdTÄH_÷ÆÇ£lËíù¯ERC$s”3À³¯JÉÔiwTÍ +lÌkoú©ÐÃë†_´¢gy>d²¾„„ÉÒXž.‹oé¤š:XùŠÒ)hg…qË(,ý"H´ˆÆ¶äÙOàé6³æ<™M!WT]Ò9ÒEì±'ÙØæÎ”ÕÓ[Úv’¬Ã™ãS¢¸Á©‡ª)Q}½.I°¥‘Êý9Rýt$Ö+VB.A
ÄCÂöRyò`Ny^‘KJF06A§TŽ(5í·šg}^6e‰pNéUA2äsÕI ú2TàKí¥jPÙ¹¡Èzn•“!Ð~yØ>bYnhÃ‡--ELÄî(ñWˆYëæ‡<ö0d8O™c×ìXÓI*&~¥¸>r1ÃDêò=Èj¾Žî\|%²•“±²‚&Ñ;«¢ÌgÿÍ6óâ _hƒ4kÞy…ŽH˜—}ïsˆ£×^+ $v%+‡»™”}†µ)¹% â¹Ü&6ÕØ–“yz2ŸüáÔ¹ô÷×söE
…8}4øá@Ë2ª¹O›#& ˆ‚¦õ¦k
UæE÷ü:|Ýj¹7ùfù6¿ÝX‚®ÊJSlÓÐD©É€Üj<AêïO¿ë‰Pðáˆ?–©Ä…Æeà'¯ §‘ç/_Ê N¶e¬¬Ê
Oò[Uü¦/¤^ƒsœòù‰‡;{”\ˆŒ¤@9ßðˆ©‘ùÂ@ÖC{ú‰)+ý¦ƒ¨ÈªHPÜ!Yºˆü8»Y']	9Ù5>³4ÝàPÒR£K®ì›9!Ç£ÆM"P­êr}¼æJÈôB©ª ‚@#hÿ\^¨ßJ+“<ùÊŽ˜WÊü,½Çpšó¬ADÄÙ½löKÔwàÁCÓ½	±ßq6B\™A˜"m"Âv°qñWèÀ"ø|!‹0«Z¥ÈCpé}K
.Ò—à\z$ñ6„ß†¦#ä M@?¸Mq`JX;,•„Õ’­ª`ÞáÜÄ£éíAkÙj%^%ª‡®	µ^ ž×kDþb©Ý’ÔßÚÑò†—Îx‡¥`Ö0ÜpV‚íZT›ðÒÓ“{!­,ðmÉÿA»k'ò‘¢ŠÙ–ç¶Ô¼‡ã;‘oÄ GíÏx©Ñ°õa#çsgÈœ54«KcÇ oº%Ñ$ðýow·ü³€9ûD	 Ÿ>Æû‡Ë/,‚j*ÂV-”¤È¦fNï¶	ùúÛOÜ:Ii'‘†&î…õwD‡BØÛ7cB$g­cdƒkj'ŸP9fó¬2ï;©j=Ÿ¥ €a6C2Êx«Ä÷JÊØú®®ú3J$6§–ïí!GwHÜ/ùkÎ³=Ž–Læ™ašó&†Ý|÷ã·c9Dw¼IŸÙH³¶½"|åÚÍÍÂ5Ömda
–rØßêŒ¸§ªéóŽÓT«{mØ–V¸ñ¾OŽž†(²x¬âÂÖÊ<ZßoDÚü—/>ùèŽÄì_}„|V§â-þh§ÙYBÕ´€&ë¥¥ÜMµµB„Þfá[Áa9¥-q„ã«·ä'ä:å
mŽ³èÙÂaÄðhH÷¯	b_”…=¶9QéŒÌ­3TjRÄÜTº¶Žß9`ù¯&ëãÚ¯ ˆX÷Ú:B†ÆžsI\ý>ÙMê(Jjøç#¿Ÿ¹Î¦¯ÜÁÆEÝœªiWa˜çðbºsˆaè\"Q\íÍ¹J4‚Ûht¡.å…ÝÜ|@y]Âà:@è3±…ÿLB’gh*]º—èW€÷¸S|L†‘œtÔBïUÀ¢¶h¬‰s‚’awýo¹êÛ.™EA[\Ò-ùãâC[w¬<¹FãpPxôvZ1n³kÓÆ©n@øT%Ð5\·÷ +‘ÐAj´èJ{àUâë MÐîaXÙƒ;O›6ÁB‡ø‘t€7aèƒYDÙ‡³
DÐ'¾‰–¯æZ‚Ùƒµ‚ñ†%¾Cá
[Ø%2:´N(Ý!·D¸†¢naqÒ¹÷zx)×àºBô$'ÐØ;·`é€^aøC.˜6hè×–½‚Mö
ð%°='âì=„¶Y2`b@ˆß	Bt²aT¡6ƒ‚Û,EDÙpXB€Eáé-%¶:'‚v.à!Ë¼;Ïˆc[h©ÉGK4Ì¿dù*€²XˆF¯d?>TºR·ÊµV3Ÿ£Nzël¹ÖæJ±xn%i†¸(=i¸¦b«Ú¤O¿bC]¹)[ïÄ¤¾&©.l¢éEŒd»¥C³‡êî’w®Jpú*øb$[(kHà¬&9>ùIªÇÃE"ÚKðkoý,u²ÆH;—RµtŽz?æ’¡-²±"ÔÁ%ˆ‰º]’í¯6µ¯¿ÑØóh)­Ñ¤Ú¦ü¿åÏÎ|d¿³ü.®Ñ=hBîÕÈ³^èëD|m]Ú?RW¸ê·\Ng¿oB±ô´8gÓë‰åðÇì®ËòëÅ'‘ÄÛ0Übô¶¿yL$^› xëU9ÿTÞ&HŽ$Bu…fø„Ä"*Bê¶NþJU™íJèëp«¸ÑíËO¯]²~uUÃs¹vŠ Î•úÈS'N *æ!ÍÌqfVX,†_aÍ†ñåÞ™°jÑm¨Æ›Á0[0f4©åNŒGf½¯ò#|+úÃ	+0-‹§ú)å—Ëe¨¹h¨¼òn½è/–RõW`™	Vô¯VâÌ`3LÜŸü§¯Šq#Y5JX¯×ÉcÑ£ñbÓæ¼¢ÿq+cëc‘˜ÏDW:æ´žaL`„Å
a9Ø|\åèd´º¯ùÉì^$'ÁkVDéƒ¥S79ý3£=†
Kð÷']›·.eÿâ0ö’Kèq	1(ÉYÍ£	²ô²Éc4À#keÖ­¤x³ÿ6>¶¥8m}v¯±ÄcÐÎâ©íh@hcõ­k4Dë)V’Î¢hTìñ¡gñ±¨hìºÅ‰gGdÌ¬Š ÒÐ}Íq'²8ŽÊóé–£Lñ]½+ËÈÎ<]/HùbU”3;4Èw”äÈ•;K3cjYÝr²ýÝVÒ/EöùbÊHv»+{¹Ã£ÖÜÃ`Ñ!ÍÍ£¦øvgÙ:ç²¾ùjÈIºáØ˜j7ÃuY’þÀ{*0Í¯«ìñ¨DT;˜—Y¾]jjå™
wÝåk9ä
¥nòh0ƒ¡ð:½Æ;¹4Æ§ÒæŒXzƒc€™üQ­ý7WzwB¿Õ Í:Ê[£¨ñ#9Éô²šô’Iˆ£ÊÄ,I”Žƒ'TºDLÂæ'	 ¼¸!ž)Ý¨0˜‹Ì‡‚ñ:–}¤‹æ×y&ÌXÉ7ÈÜÙª óàF†–C(®¹>yÓ§gŽ‘ßÖ§i¡?u˜{Óýüv÷Ê²RK·Q.[Œ†¾èÑABBæ76+C™Ï*¡R«ô	3åô˜sÎÒ
¬pC!‚ÚŽÎî·ÿäÅíïf)œã7JG/ÚoÂáed#è}åL{žÆÍ%*xÖ²lr½#'h,{^´§.I$`eàiKD2â	dº„—®KÈ†¨«UÎËj·DÄí”S,FO÷©T[$ÓÐÐé©€d
é]å=O
1‰T‰0RöRpùUTÿáŸ”]Îi‘Ä©±d»:cyVW‹›­îj5$,b‘² ð\l'¢ƒ8-Û5†Ï¼Ú¤ùäyÂi¦’og!hl$Hn·Q’nÂ¯Ÿç`,(M(9#r\ÛkeD¾Š-ïZ‚y- ³¤“
abÎ·8k 5†Èù=Àç}À
èóö—ÞÆGá„ÛCùñbÓí”ß	‰sÔ^ØØû»~\9Û,óPÊëíš4=‘Ï²òð­oÑyx–v™/fä¼u@žC…yçoH+=§¨T•ØÅQx”.°Îè§æx•hrVÜñnuÀ¾¤_•Ä}c³heæ„p—ÅÅšóÙ”s:¤¼¯ÁÛÐè¾È“´¶š¶ãþÃIŽö¼¬äDáïü½lVÈØ\;øi°¼š$©jŠœ%={MÐÞ+
þn|ìó†` !—çn÷’Ú-„%M‚%
‚B)+W“ÜRšE3ÎOe‡ŽÏ]ñ«b°DgÁVöÊÛKp‹n,­¥´P!‹
,¸«š*9VØ(alé.âh‡ŽØ€«ZÀ`ÄÖ
5%
/ #Áv¡)
0¸­à
uÁvT5âãT%ò#H®k‡²e'~sÄÌdw5LÝ47AJÙôZÿKn—›àvV+ÂHbePïÆ×ÿØ$)ó9Áîöý¨ºCC|4„ó³{	³&l…O§auƒ<z6íþQƒ?r†ï$#,Å[a¡¥˜=:žvºÔ	Ø ½l´+&f¬ç:ÐMŽ|›Ðº'AÉÇÐ¥ËzÇr¦°åú¹,l“V[öû´64_ ‰fh« Ç7ÐU´ë·³Ãÿ8üß¤E—L9zsíÈ®íDk¹0ÕÛhÈNø„kÎ
›·2gŽ´¾Èàˆ_1‚›!fÈxÄ±‡Ð“YH	þ£ïÇÝ‹âC56Y7è±£É”a"K…Y¤WW»=â+šì°‘Ê¿&ù<kvÏŒWúÝo=Ø—³!hoãÆÂÑvùy‡ÝotuË¯ÝaÐ*Äï{¿Ò7åËpn¢åŽkì½æ)äáäg0YnÏ(åâ\h±(œð«9=:÷Ä§‰O*q½|0ÍPªŽÔ;Uã~ÿÑô~´†ÐÊ€¹\iü’.Rî‡MC\¹eK²œâ_KKqã_\lÝïÅ¿Ë¤ÎÕ¿ª7!f%Ÿ²}Æé‚YÕ=ïH{1Ãê:«ó_1Öb«†«1~ü¸$BàISa^„ÊŽEz ^€20=+~1,|@Ë;¼SÅ„C?ÅÀ8D°£ÿomô·½³$Ôÿ7Ýœ:œoâB¹FóÁÎŽ{Ñ¾PºÄà•=´ö›åÚ# éõ/ûü>ø..096z‹=Hy[L4gŠ…cø½z‡ÝÐHìµ©S¯'5Óy$140QÃK	å´ñéŽ.úº«¦ûe~©b¯´/V* ?;”²~Î¿Kh—·Þ]Còõ7åÀìÄÖ©_V•¢oŠ¼‘;·áD+Û¸ä­]—%3Òebžz¿Â±v¤]½þE93ù³À{„N^Ý¡I í•HCÆ'¢Y7@ZbÝZÃ=•ü•kK¾‡5ÖÉ¾›ÐnD±r$S›ûé01€“÷›£•ö•F/ö_s(™ÒÇu5ôŸLt£ÿL£æ¤Êe·ÛîÑ¼Çü|û"ë4Ô/Us1
ù¾)îÁ(´{jŠ®Ï+
`ÞBì¯ƒ¢mïƒÀ{Ì¢g÷ZøEî¥(Ô½µ¢ðc‹´ÝâPo÷9ñ=‹bß“(=ºBò³‹àÝyQæ{…ïž‹BÝÛPðöòõP•"80	&žó+é_`’>¾éóà,>_•¶PG÷.A‰Cå»-¦— ÒNúÉ*¤qÒÐQÞcŸ4>
ÖDŠµsc}ÆC ‘xTûOÔ9G½RÎk]fÅ×Âll€º‹ÚL¥ã=¦#_ÅQMÉÀ% ÇÔÙý»;Ã-óÕ\ÿŸ{¦W‹Aé±÷YÎYÑ|ãuéàdÉ¦ïÔ!vÒü‡Ôôšœ.ÍcR7(€FX£ÉXçÕý¤¯:Gÿî/ØËþ Vwž_j Rwå+'áW!fðÏ8Êâ”g–+ŒJí»@H©‡q(R‘œ­®ÿÌ#Í=‘cÂSŸÎœHõÍ
C—’<0.Ï4”°£ÉyM®ÅØüí™â'rCºj%x<i•+ô_¸Š&y>£¯éÊý(™K"¹ú•ç›rY½üû]ãu&L¢ëàA¦ÝEåÕ™|&`ÿ[S^sÏ4ÈåË¨&=÷)³îbgÝõ@gÎgË-jƒšÎPJ¯ßCiÑY„)4–ÍpE7Á“¡V~¥ëŸÏÊ,:e¤s$uššc¾þ·ùl•	|–ò''¦?o-qJI³&È(’ËžDq¡^¦kä¬—P>g ¢R†Üy]Œ9XØÔ¬ïœA3ˆíÝ¡c}Ê®ˆ+Z_*n3iœÑgæèÌQ,úI«ÀÌ=é½ãß‘dŠ`Ó´Å?Èh 3_é)g×€HeÕbKx,ÔFÁ€½$-$¢õ÷£ß`"¼±ê‚V‰…+ýÄ…1iÚHRÄ·#‡šÒÂHPËopÑW\¹XÈ2í}»ü˜KûX,äØ=Âæ°•gÌMQä`yÂÆ¼9LÞ#»çM˜Ç§7üÔ¢vcýË¸¶´än¸¿@t}³êÜ×lÎÉØ-‚®í`É±íñAÅzlî]0–q»øè¼õCõçç^P%IÔñ‡‰9ü)}-$Ç¾bLC+’S^\,C|ÁÐUûh_/•V¼›:Í°CF.³Â'aj,-³°·Ö3\À^RÿòBž¸e:A{ÞÛw Ã)¥íE9‡Ûæ˜£¦—®&=þŽI›0œ§ŒÂ±¢Dì*Ü¥äÔØð°êß;R¤EŠŠŒë±ä×›51ŒÕÒåw“—¹¥5?B,ÊÉ‡˜îþÔ=™B<˜Kç{Yõãü{újÍv:›.%J9o7ò€ÇÉdÍýŠÚa†™%¶ì†ï	á/sÞû0âõŒ\Q§µôX?€)OOù˜6ŽDiPÂµÄ¡pþ¼,$žÛG<ï5™Š·n§z\RÊQiµô\û0±ÃˆÏÂÐÇi–jb- ¬âpªÊ=r˜Åï¿¦²O²tå-ŽÄ†n]—©ÇJõŽ2¸÷ôëšü¦Kþ•O‹UÉä‚ùçé4"r6^©SA¦½ˆOîbaã\•–‹‚ô§Ùi¬ÉÛM-OÒk„)@$§fƒóôoÝ_ê¯pdéçÁàÓ£BK9§ø€w¨Ÿ”ÊuÌ93æ;"L<øY¿i¤ˆ±Ú¢+˜Ó±ã¿ô°á±LèTaÐQæVMïª\Û.ÜíUŠ·>þéK’æsl;Ä+F•Éù8eß'–)È9ºÛgEf‚pÜŸÇúwíòÀœaÎ0K8
à—…³¼cð TÃ±$Ò¤¾ƒ0h°®¿#pÞ¯ÿÐè(GªKKR'€©ë×x¸îÒqöLí–²E½ÉÐrç•…>Šé7™0o+c¿²øÀéÌ*€Ó>ÇT´ïvï¬€?¡tÒ™w¹ZÉ¿$¦“¾š„‡gž¥­H!ôîµ7 Úx3)À2H‘Š¶7­Œõ¶G7â[Œàë7*ˆ{œà`f¼^`f~¹ªë ¼Ä‡Šè,ïD°ìÎwD‡kk@¤¡ò}|7G-²ÝGm¿p°·³Ý^"ÿ_ü( °ùðÇAfbbüé¼ó³ØÝÀX³@»ðÿŽ_É/Ìvþ‚ú1±ÿf:…ÜV³ø,WÌøï~Yá`î'¦²‚…ÞŒ‹yfÆªÅF%™³GÃÈžë8AÒíÁ:ç;]áò‘ R¨Îo‡äšM0á’Æ1m£Å²»àÜ/åY'»Ñbq€æ3ØöÉ7F„É{Û¯‘Ö¬QÕ<x:ÐVRúÒÕ+ŸF>ÉŸu‘ŸIà?F›ø·uåŸHøíaø©L41P«vv—tW8+fÙmttëGêi}[zÈ•‘/a¸ÍÃcïõJVîE‚‡\7Xw¶œ?‰¤nvÓ0ýg(]1¥ÂÄ+ÿ$9¼V…®”üÑXÕvs_Ýe 3»Cä™Ï£á€œpæŠ-P«;4ùB£Áùaó¢°~Šîkå	aÓ¢æ‰uhüÐ«óïÖP¢÷æŠæ"_(½RRr*„½/_81UZ\TlèÊÕ‹¥¡txm¤[tVQ½?ŸðàO8à~qð÷ß³Á'ôbæ'ýðÍ‹xd‡¾Wùk¿-€‚ðßéx¤ð‘¶@Ê8U|	âÍf¼D¾w]Þv…{X\!öú
5Ö@ù
‚`“ãþU²JÒë¹mËúo7wËªøÎçmº5×±¨3VÈ¸o]ƒºÊs‘qS§pÛÔdÕ–>-r~ú­mð„›dŽ†¶WDjje;9˜ðâ¿´¡^÷ä´~þ/;þƒÃñÙƒüE²ž]°áÓ »d,9e&sm
}÷3QëA¦ý‰ñ…»W=D•ÌÍ5;›=´W¹:F!—ÔçÌ¦ƒA8opjÕ¡Ž3Ìîÿ
ÂB;ïô$XÛº+5)çºm»0 9¶}Æ»N¿Jw0l˜c‹üh(Ëo «ÈñßÖ‚@öçCÖGR†¯EÉ`œ#6LF¨1ÓÈ1µÈºï<Ü¸ Æë@%÷CNKó5ÃPƒç)ë›Ñõ0ÿ	ø¤SžX¡„è))%‰ÿ£•pR?:¶e2 ðˆ6ÏÃùeÍ¹¦*ZkIn¿Ý¢J+ü¾“H®Ðk:á°‰ƒ4Ü½ »˜ Ö'„½‹;ÈÚ[|ÄÞƒà[Ï‹Cè'd[ÓÕ©'©f,dÁZ}éóÎOëüŸÁR\";YÛzújw'Âq£jtÅŽ7æ©†¡±ÀË¤ÃÌ<O¡ˆS©OðÏ£°<Jµóz~°žC#JÝª€2ìÀÔ•yq£z3úÉ­ZòÏùaú,aódÅÊ¨¯•³è<l®T•ŽÐí–pY .oån2P+Ýo'£×…ípÌ÷ðò«€±8Ý›#W§ª]V”{1õ„Õ9!¢ì"àGïŽ„!j‹Iœ’šŽyéJf$™L:xÈKr|T.Ô}å$¾k25Ó•ÌZ‚…ºÃN_qˆ3r,ñ		·¼@ß¥ûž?e*˜qÙÐIIót»*ú¤u=Áb™î•Ô4À+¯{Õ®ò\eÕ÷ä¢tÓ×¿¦%X½ÑÍëSæàèycç·˜˜‘6¬qZ"5þKæ–È‚U›Qþ~”wà¥±lHJõ·hû#s·ž«µ(S×\Qúä|dÆäÕô!G©ìI²fW©{ý£CªÛ¾q©1ip³eÈPº5NÄµÍ› °D{œâ¸ÁS ”kà¦‡ä‡Ö‘Ú{r×UÀb$õ—G•üÔ^n¯¨D=Åf#’‡-=ýƒÏ3;x¶ôÍFÍæUæ!úqRŒ$1õßÃª†åö©G	ô_xhü´Õ}ÿ%µ¾aðGé&5,hØ6O=¯·Šü]{
j\¬­òâ”b–YÆó¢%©îY¾¨/œ« ¢¥&7à¹~ö½&%ˆ®¬/Ÿ·KÚÄôÙâðÙ“±HËÊ'¿õ
ç©‚2ö½i_°s)\·‘Í‘lçx•Ö–4A2¯3?¤ØbÉm*[}ƒS%ø¨~òÒ4ñä7ÅäÜ,|9ar%Ì0­!‰"Ÿõ›Ã’H g×V¢âj¯äN¤¶»fÍ— £nÆåuyê8e¡³½H,[H…@©”ÓRG>ôS[£¡ >Ìrž[^>úˆás¡ltÁl_
[üö]í˜²˜,Ñ>JF>ù*Ð9ãPS&ÉYÀXýû¬J ªðæaìšGx`º²Ëñ•y5¨1¸ºnfBYP¿+McöAà7~‘ÁŒôä“º,Å§¿ž,ÎÝùFÊ}]…CÙx$¿Ë9Ø,øpœ4ªdÏf¡^XY007 ¬·;ºFÛ  c»¤³¤ÆêSù>‚|(¡-9OŒqfb†`¨olR¶Ház*sÈ¼Ðé*n;ã*Bq™â†ÉìI–â9râ¯*Mq¿«„kp*ÿ«ÀûûÚ	¬·ÿ)9<rD¨,•KË{@=±Â˜
¹ô2	oñæàgï{¾Ê0—`¹À¸p¹Ð¸!¯Áq!s}]W	ñLnáÌn}ìI~0»ªØ£,£:€¸oE­ÙhÕ¡I’É³ß‡ïSÓô%?®%‘QÁægàê³ˆÜS¶ôÀ°§–Î•V?–.º‡Ò6?
r72õZ Èªfs‹4RágcMULC…þeªfg—ÁEßRÈ*téæDNá*‘è‚òœŸÙQÈÔM½í,_u_Vmr¬Õ5´å©ÃI´»æýÅàAd‰eóÔPÐ[—d“¿—½gK.‰Å}XÈ
¾GH+Šñ÷¢ñ¥§ë$µß@Ëh_){F–;mL·T²ÇT^)’’‰Ý'É—+v2† lTcà@¬+JÛŽ§ðJ~hÚ˜©ì•ÜK[ d‹p’YÓpñÄÎp=@ÎSqˆóaðØP‡¬pUŒR÷µ 	8í»†4âS”S] ì§qúçW7ù˜:rT'äZ™¨’Œ·ÈèUWA:V”N-ÿ´µÉ Vc2ë†3c˜#WÕõ?ü;‡#ØxÁš©/Ê³:³yÄ¥¶AïãÁÊÓ]žXŸrU0U„LaCÆKäf^NÎ´«XóM1Ó&Ènÿ/_çî©Íä«G(:êS*úÀC0Ø'‚…uò‹*nïD«²±iôq…š2D·zm'—léyÒ•¦Wk.<3TÒEÅw¨
£³t2B¬g¶pØDhÖúi§Ž¥×Šz¯jP¯GqÎN?}GG2ŸÖ:>Ò@ŸEžÄjê™u#sŠ®ãÎ­ûØz.ã²ÿ4 žX_M­¦ûú‡SòDÊ°¨#Çè·’¦
¬ê¼á_äº\9Óeé¶¡«±sÏgXõ;É§X‚ç1ƒU&©BzVÚvûJ˜¾¹Ën)2Ä/ŽÔ¯ y…™Ü´’v³tß¨j°^ožŸ8~r~¨¼$³þod¨fcÔ[ÒøñØwvø\})ëŠKú›ãš\ ¡Rtœ8åôØÍáªŽÏ£*öÂzRø—ë“U»?ÔëÅ¨#ZÔtŒY5AÍª7¸Þîå“ÛPx(™\4qµ¾2âc*wà.Q
ð{<Êžñ~í—&
OÇÊ«bÃž+SÕØP;8€|2b)(MAÛÁEp7x!>¸B,ÜE°~6Ä_ˆ[*®­#<¤B«©«ÉëÜCEÁ¾ËrÓe)µçaZhÅÛù¬ë"¤¶Q{Ï. ^	ð-Ú‘õàÿPîAèã:ƒŸbýïEqœq×iç›>ÞTèRˆ‹Â^âyRÆ=GT{XÔà«øè½Ì®t%´¦+¸rš<PòLÁ)‚rÖ¥½Ù¥=0ª£Á>_\YÓ_,qÜô^ïvû¸ê,ê°Ã:ØÏ«&.úûùõÞ¨ùe±·›Ù†C'c…(8*¨,‘#ƒ¿ÕÈR}“Ž¿åIk)t2É(ìNZO´_<…k|§q¬Ì»¦}Ø”¶!ÇA!]à•Ë‚<eò

Ën}`Û2vŒÎ²!Á’b“t¡ºF·Ñ½ðê;½Ò.C‰¾•îV<Ô|xþÕïsþùw’5ëö™M5‘%Ç…Ç[ê‡_’šÜw‰ââ¡×seÍý¿‚Î+k÷1X]
NI´¦&:#ìGÇwÒ?Ë9ù]®ÛmÖ#ë›@_JòÏ©Eg1ÐKÅÖO1Ðê×Àd&oÆé‹Ð}Ðç?G%}y}((AÑ1’:›ñ+ Þªfz4Ÿ.wO¨sy2 Û§˜ø9¡+$éµª__9wXÇšwÎÈ&¸m`œ¹P¿9®Òí¥µj¼™§©gïC+XMÏó«UñT½ä[áÎê¾nûÍjþ8L)¨ö/ž¦")­qË•·š­E“ÕŒ¿c½º+§×ƒ‘œP>õêÏÚûHiØšÉ—4äb.–@r›f°ƒ²! +“ÝÚµ—ÐfZÀ@§ûaê¤"åm§º­WÚó´öÌCŸ„ÝH*@”µÿÂ/ÕS6"äzpª¦¸¹1OÖÏÔï¦è¿›Òh"‚ŠÐ»*²è¶:àÜ/X<¨NÌBêÐa1¹b¦dù‰/š¥mê¯<r`õ†•Ø…ÃŠr¡H?õ{Ï‹Ñ@‹ €™±0-hÏÐíü­éjÐ•ºËB¬Ž1é^W’¥ì_™š9««²cÎS‰=ÿaÈ“.)öÙRŸ|“ñ&{±)šž¶Ì^;TLÚCñ#ûò˜×§Éq²hô!NÚ*S6Ê§Š>ÕÃœã8¼oý„æ•tûÜŸ‚u^¯*ÝŒlµŒ+2 €b|‹OäâŒ?e_¬'n`ÏûµØIø
È(?
ãäñ§®·,ü½¶Ï<ãgã5óŽÓèŸ~Ž:•\¸ˆû‚…ëÆápÕNQCò;c|ÉU$[Gk2<¹°¶ŒnrÒðŸ…2ðŠ}o„–T|m¯kMRÕ&E¿0KümÕœ”©·1SHÔR¥¦1¼ªÌø¤W¹òRÊ³	´Cÿz×;@bÆ”)b¤Iþ-a	ò\©\Ñ¦¥ÕÄú_cÎ%P\JÑŸ+ÛÞ¥…ƒœ æÔ§a?•ãþ,xlõfSÇÿH§7,X¸9òšlÂ¨Íû1¸™Mi×@²PYÛÌ©–.YêN“³€÷VuÉQÔŸé·P4&	‡ª™+ÔÊœG8è‹‡‘ÜW¿ƒÏÊ\¬ëP"I±ÄÃ`ÃYÇ¿¼š,% ³lQ«÷mìL®›¿±F¤hŸ¤ç.f¼
—OÅTG ¥Ú_Èú£’ÝjAD"ìBJhîüv%Lw16e—*°Ó;þ„›.ªçsÂ¦´çX	½"o;Ó¤ä›ÍÜîÇ)¦eul°Ó¹	OÏXYj#YÍj²¬Ú"}÷u:[É<VHšz~„YïU¦‰<ª©ÀíFú,[±e)¤ ».óxÕX©ŒãçiÒ—\ÎŽ6Ó+qäŸ.‡#óôÝ—­‹vl2Þ‹­cÞƒY­CF_1mßÆ!ú¦·\ƒ>kkÂlD.¬µ±†ìäôLÿzò±k0lÒJbÑYÌœùM‰â™]´&VfH•ü?L+ài ý]7;=žgï÷ÿ’öÔöõø×Bîñáa®¿ZhŠÑ_ô†!°Æv&™gÐ¦´Ç`|ýrüª|Ü¨§Y\7Sì{¼¹G¸Ð; ¬¶Apê9óÕçuÜ<49ýEÌ	·#3²ãÌî/?ßóÁˆ³¯þ^KT¨³ÐŽYb
§Ÿé/ÔEâÛˆÝƒ^ G{ˆ½n^k/òB÷¶²—ÆºÜ¼èžèbÙÔ.D÷µ½×^”ž×aözØÚk½¢{Ë‹²,ë‘ÊpßËúÏÚÞe(:\[v,6è
Þ¼Åy±
¾EœåMQ› ð¼¸
´»çmó‚
Þß6¦¸ÝFé‹EZ½ÇjñS[l¸ñ@h@CÝÕ§ e`ýÅ¯¢Í¤Õe–3HŽKÊŸ+¯éìÅP†];lìè â³Ÿ•¹ˆ]åé€±M',‘Ê6ÓÍxXœÚé:?c´òXu£ÔV2A¡¦à^Ò/ù¶ºé¾	h‚{60(SªyˆNÝã"îBK(=÷€téjW¶Oö™71¿½†@"©k°?!å–Î§Ä³žÐTPˆ/	)Ü‚˜&‚XàáÞKýŸ÷±˜ðºæemÂ>÷?Ñ²	EYÓO»w¡†=Ù9Z“Vfd»‹³ëÑœMQg^„õ¹ÿoéŒ²Å€Fêù”^}`êŠè,Ú&¼¶K{;âøl‹?ø@çº\¦Ð—iœ®BÂÛ2×ŸCSµ‘€Iqñ>è]-n?Q®@àsIÿœºªûE¿&Ý”¿Ý}à­Þ¸þ2ŒŽ¢I¥ô£Ÿ„Î§?mw¥ÆÚ¿€)®äiŸgÝxUYÌ}Ò›¢¸9˜âMëK»m†õÖÉ4`Ú˜’F¦màÎUôM7°t÷*tOyûý“x¾—E$»g“€­¤  <ô>½w rÕªûeˆŠ—Î€ûÿ¡1kƒ5G,Ô9{HùhwJÑÖQDóL[—«»àH§Yˆ`ƒÖx1—˜„)/Çæ¦cêU­àÅvVMÆBÊ¾ó@¸H”:Ga¶Vç=ÐÊzHïè!ï|ê1ÜÊÍqåýØæ 3€SÒ l¢“‘™e7ÿÖw‚3º]lëZ°¶ð´¨¾úö˜n5½M/Ó>ªEOPuñµÞ^À«+°«+>…´?ÖYBîP~-ÐWˆBíÅØˆ{BKÐºTl]-ÒV¹WC˜ð æ¨®;²…ëŠlÁ°Â[µE…Ø£‚¦#ÿmÊ­s´m8Jø¬Ž”SûÙ·K°½¢Jì¯X‰ÜL‚ïŠ0âìESè{BŒø½âBt¿#Ð® #¯œ÷+mb¿‚&xàÛü¸› Nw"íô2Ôî<%l\áu¶<¡¦ÌÓxˆ,h)N‡5·yöà!ßŸ¿8‚AZR`yfYsÓ?ƒóêÖ.ó¯:*E4†ŽºÊO¡Ð?‹¼Ì ;ˆÒ¨|b^¯Ô¦+)'áW›_Ô˜?`tœÝx¾	ÖWPPŸ{l7Ÿ4‘ñ„KŸRVË:”`—}Ô¥Ÿ¹ý§É¦ä7ÃÎÚdš¶´ÞÌì(	S»?\ê!á² ÝÌÙNd?DæWA4Nåà×ª×xbä¢$ l*üÀ»PS¤îŸÃÈ'W3ÂÆp/Þ	}!(ûœÕé§<uHÌúÜÜ©°¾žØ%LÖ°v¥õX·½„×§Rú¡zdýkk¤ÂÊŠJ…«µÕ
ÚÂeÅ`‚ôÀÇ"–^\[´œ¥©ÍëEœ¹{ª¸âuÔc:F.´ã	˜½z.òÒR½û¶£sWÀðaAÇ9—ä­µÊ”®á­*¡º½²Ô¦êx$Ç=D[Á+¨¡ãAµÆP9‘ÁMm)ºâì*ìÙ'+á÷2
­ºÀÒ–Š\Š=SòðÔ*‡•ãVSK¤l£5¿#~dÄÐ¢äC2@£ßIï›yrØ¡Ëï/àÚ©®(RJéU£%0ïºZ=cù¾ØÙÍ›‹»=Ðv¿2l>¬#2ÂÊ¡<›_¬ <³ù³–ÎŠ˜Ô(ì­è•š,{rúÃÃïj§EÍF‡Ä0;Qh¶©¤m
‘ÑP*šÜ!œ¢¦&ƒB½~Š“é:HBÖ3§9¼‡{™[GCûù‡¢ ¦dO¯éÄÙiL±á)äØ?:¨†û¥ó­oÙ†_—zŒŽ2¡N“øÑÀóªO<€ÁJUR4 }ƒ&exáÑp¤Y¬õœnêIø† å'ÒV—®´5ö¦¿¬w¾Š¸~‹ºø\¡	yæ¯ÒÿI_¤ÑO…ÿ°œP¥xÛ` ’>EN~ï>¸§Q©³rù)¯7|­”&§ÎÇ¯@iöQïpefÿ=ÏF­m±øjHNþ”†,¿…hÒ­=û%œJyðËJdû“!ÑpóÜ[¦zN²Us*!>ê»Ç|uêöh`šò™Ï“[ë_½PÆêï®a¨Õ¡Ÿó‰3¢Nå's[Ui«\Š‰;åÎK¬žÇžð»Ë<ÔhÁ»¯?h¦	œ¬r¬>4£ÏÿSpÓÑÍícÖÞê¡’8nA±V«I÷ñÚÊô^f-
ô¼p$„i!‡Ãp>¶•rùþ‚„ìjÛ'C	íëÞÿ
cÁ7xð¼ …ïºKê—?ëà‚s®&ßû\Ü·}ï¤¨®ÎÈ¡íø"ßvOYz»•j×=…©vùŠ&Ã¼~lµeË’ëet‚¡®õDº¨}º2§§’íoq  ¾ÞËÙŸKjŒ«¬âfû0xnjœ›Ã•)lñ(FLñs¶K{l!¶×£XÏÔ…Ç!$Óþu“Îõ³Á‹õ™´b‡›ZB—à¹71ë¢ÙcÒ7Ù§}9ñ¼dY]ãq’óøè}²­ó¸53Gâ‹xì=‘y”XªYK×eÅ”€m¥‹yýWÉŒÈ7óìU`›ò#_sQ¬ê›ÙèÞO‘Ö@š¾¾4næÔå¶OZxGàÇ¬,º