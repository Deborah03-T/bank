const responseData = [
    {"name": "Access Bank", "code": "ABP", "cbnCode": "ABP"},
    {"name": "Ecobank", "code": "ECO", "cbnCode": "ECO"},
    {"name": "FCMB", "code": "FCMB", "cbnCode": "FCMB"},
    {"name": "Fidelity Bank", "code": "FBP", "cbnCode": "FBP"},
    {"name": "First Bank", "code": "FBN", "cbnCode": "FBN"},
    {"name": "GLOBUS BANK", "code": "GSB", "cbnCode": "GSB"},
    {"name": "Guaranty Trust Bank", "code": "GTB", "cbnCode": "GTB"},
    {"name": "Keystone Bank", "code": "KSB", "cbnCode": "KSB"},
    {"name": "Quickteller", "code": "QUICKTELLER", "cbnCode": "QUICKTELLER"},
    {"name": "Stanbic IBTC Bank", "code": "IBTC", "cbnCode": "IBTC"},
    {"name": "Sterling Bank", "code": "SBP", "cbnCode": "SBP"},
    {"name": "Union Bank", "code": "UBN", "cbnCode": "UBN"},
    {"name": "United Bank of Africa", "code": "UBA", "cbnCode": "UBA"},
    {"name": "Unity Bank", "code": "UBP", "cbnCode": "UBP"},
    {"name": "Zenith Bank", "code": "ZIB", "cbnCode": "ZIB"}
];

const bankList = document.getElementById('bank-list');

responseData.forEach(bank => {
    const listItem = document.createElement('li');
    listItem.textContent = `${bank.name}: ${bank.code}`;
    bankList.appendChild(listItem);
});