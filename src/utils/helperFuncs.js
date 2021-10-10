//
export const zeroPad = (number, length = 2) => {
    number = String(number);

    while (number.length < length) {
        number = `0${number}`;
    }

    return number;
}

export const parseEnglish = (input) => {
    const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

    for (var i = 0; i < 10; i++) {
        input = input.toString().replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }

    return input;
}

export const getFarsiDate = (timeStamp) => {

    const days = [
        "یکشنبه",
        "دوشنبه",
        "سه شنبه",
        "چهارشنبه",
        "پنج شنبه",
        "جمعه",
        "شنبه",
    ];

    const months = [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
    ];

    let time = (Number(`${timeStamp}`)) ? new Date(timeStamp) : new Date(`${timeStamp}`);

    const hr = zeroPad(time.getHours());

    const min = zeroPad(time.getMinutes());

    const dayOfWeek = days[time.getDay()];

    const farsiDate = parseEnglish(time.toLocaleDateString("fa-IR")).split("/");

    const farsiMonth = months[Number(farsiDate[1]) - 1];

    return {
        time: `${hr}:${min}`,
        dayOfWeek,
        farsiMonth,
        farsiDate: `${farsiDate[0]}/${farsiDate[1] < 10 ? `0${farsiDate[1]}` : farsiDate[1]
            }/${farsiDate[2] < 10 ? `0${farsiDate[2]}` : farsiDate[2]}`,
    };
};

export const getDeviceTime = () => {
    //

    return getFarsiDate(new Date().getTime()).time
};
