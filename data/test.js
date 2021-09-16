var jsondata = {
    "1st Semester": [
        {
            "Structured Programming Language": [
                {
                    "name": "Programming in ANSI C",
                    "edition": "7th",
                    "collection_credit": "UNAVAILABLE",
                    "path": "UNAVAILABLE"
                }
            ],
            "Electrical and Electronic Circuit": [
                {
                    "name": "A Textbook of  Electrical Technology",
                    "edition": "7th",
                    "collection_credit": "Rakib Md Osman Faruque",
                    "path": "UNAVAILABLE"
                },
                {
                    "name": "Electronic Devices and Circuit Theory",
                    "edition": "7th",
                    "collection_credit": "Rakib Md Osman Faruque",
                    "path": "UNAVAILABLE"
                }
            ],
            "Calculus": [
                {
                    "name": "Differential Calculus",
                    "edition": "7th",
                    "collection_credit": "Rakib Md Osman Faruque",
                    "path": "UNAVAILABLE"
                },
                {
                    "name": "Integral Calculus",
                    "edition": "7th",
                    "collection_credit": "Rakib Md Osman Faruque",
                    "path": "UNAVAILABLE"
                }
            ],
            "Physics": [
                {
                    "name": "Physics Part-II",
                    "edition": "7th",
                    "collection_credit": "Rakib Md Osman Faruque",
                    "path": "UNAVAILABLE"
                }

            ],
            "English": [
                {
                    "name": "Advanced Learners’ Degree General English",
                    "edition": "7th",
                    "collection_credit": "Rakib Md Osman Faruque",
                    "path": "UNAVAILABLE"
                }
            ]
        }
    ],

    "2nd Semester": [
        {
            "Digital Systems Design": [
                {
                    "name": "Digital Systems Principles And Applications - Ronald Tocci - 10th Edition",
                    "edition": "10th",
                    "collection_credit": "Shakil Mahmud Sumon",
                    "path": "Digital Systems Principles And Applications - Ronald Tocci - 10th Edition.pdf"                    
                }
            ],
            "Discrete Mathematics": [
                {
                    "name": "Discrete Mathematics and Its Applications - Kenneth Rosen - 7th Edition.pdf",
                    "edition": "7th",
                    "collection_credit": "Md. Sarwar Jahan Sabit",
                    "path": "Discrete Mathematics and Its Applications - Kenneth Rosen - 7th Edition.pdf"             
                }
            ],
            "Linear Algebra": [
                {
                    "name": "Linear Algebra,",
                    "edition": "10th",
                    "collection_credit": "Tasin Mahmud",
                    "path": "Linear Algebra | Theory of Matrices - by Md Abdur Rahman.pdf"           
                }
            ],
            "Statistics and Probability": [
                {
                    "name": "An Introduction to Statistics",
                    "edition": "10th",
                    "collection_credit": "Tasin Mahmud",
                    "path": "UNAVAILABLE"           
                }
            ],
            "History of the Emergence of Independent Bangladesh": [
                {
                    "name": "History of  the Emergence of  Independent Bangladesh",
                    "edition": "10th",
                    "collection_credit": "Tasin Mahmud",
                    "path": "UNAVAILABLE"           
                }
            ]
        }
    ]
}

for(var semester in jsondata){
    subjectList = jsondata[semester][0];
    for(var subject in subjectList){
        bookList = subjectList[subject]
        for(var book in bookList){
            console.log("final\n\n")
            console.log(bookList[book]["name"])
        }
    }
}