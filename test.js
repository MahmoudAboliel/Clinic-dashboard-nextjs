// const patients = [
//     {
//         patientID: 1,
//         pName: 'Layla Ahmed',
//         bloodType: 'A+',
//         reservationType: 'Advance',
//         gender: 'Female',
//         age: 28,
//     },
//     {
//         patientID: 2,
//         pName: 'Ali Hassan',
//         bloodType: 'A+',
//         reservationType: 'Advance',
//         gender: 'Male',
//         age: 7,
//     },
//     {
//         patientID: 3,
//         pName: 'Omar Khalid',
//         bloodType: 'A+',
//         reservationType: 'Advance',
//         gender: 'Male',
//         age: 26,
//     },
//     {
//         patientID: 4,
//         pName: 'Amina Khalid',
//         bloodType: 'A+',
//         reservationType: 'Advance',
//         gender: 'Female',
//         age: 24,
//     },
    
// ];

// const reservations = [
//     {
//         reservationID: 1,
//         patientID: 1,
//         date: new Date(2025, 3, 4, 8),
//         available: false,
//         state: false,
//     },
//     {
//         reservationID: 2,
//         patientID: 2,
//         date: new Date(2025, 3, 4, 10),
//         available: false,
//         state: false,
//     },
//     {
//         reservationID: 3,
//         patientID: 3,
//         date: new Date(2025, 3, 4, 9, 0),
//         available: false,
//         state: false,
//     },
//     {
//         reservationID: 4,
//         patientID: 4,
//         date: new Date(2025, 3, 4, 2),
//         available: false,
//         state: false,
//     },
// ];


// const data = reservations.map(res => {
//     const patient = patients.find(pat => pat.patientID === res.patientID);
//     if (!patient) {
//         throw new Error(`Patient with ID ${res.patientID} Not found`);
//     }

//     return {
//         ...res,
//         patientInfo: patient
//     }
// });

// console.log(data);

const x = ['a', 'b', 'c']


console.log(x);
console.log(x.splice(0, 1));
console.log(x);