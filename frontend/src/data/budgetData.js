const budgetData = {
    users: [
      {
        id_user: 1,
        DUI: "12345678-9",
        Name: "Juan",
        Lastname: "Pérez",
        Email: "juan.perez@example.com",
        phone: "1234-5678",
        Password: "password123",
        Account: {
            id_account: 1,
            number_account: "1234567890",
            money: 1500.00,
            id_user: 1
        },
        Services: [
            {
                id_service: 101,
                name: "Matricula",
                amount: 50.00,
                date: "2024-05-19",
                isBlock: false,
                id_category: 1,
                id_budget: 1
              },
              {
                id_service: 102,
                name: "Servicios",
                amount: 15.99,
                date: "2024-05-19",
                isBlock: false,
                id_category: 1,
                id_budget: 1
              },
              {
                id_service: 103,
                name: "Vivienda",
                amount: 30.00,
                date: "2024-05-19",
                isBlock: true,
                id_category: 2,
                id_budget: 2
              },
              {
                id_service: 104,
                name: "Mensualidad",
                amount: 180.00,
                date: "2024-05-19",
                isBlock: false,
                id_category: 2,
                id_budget: 2
              },
        ]
      },

      {
        id_user: 2,
        DUI: "87654321-0",
        Name: "María",
        Lastname: "González",
        Email: "maria.gonzalez@example.com",
        phone: "8765-4321",
        Password: "password456",
        Account: {
          id_account: 2,
          number_account: "0987654321",
          money: 2500.00,
          id_user: 2
        },
        Services: [
          {
            id_service: 201,
            name: "Curso de Inglés",
            amount: 100.00,
            date: "2024-06-01",
            isBlock: false,
            id_category: 1,
            id_budget: 2
          },
          {
            id_service: 202,
            name: "Gimnasio",
            amount: 25.99,
            date: "2024-06-01",
            isBlock: false,
            id_category: 2,
            id_budget: 2
          },
          {
            id_service: 203,
            name: "Renta",
            amount: 500.00,
            date: "2024-06-01",
            isBlock: true,
            id_category: 3,
            id_budget: 2
          },
          {
            id_service: 204,
            name: "Comida",
            amount: 200.00,
            date: "2024-06-01",
            isBlock: false,
            id_category: 4,
            id_budget: 2
          },
        ]
      },
      
    ],
    budgets: [
        {
          id_budget: 1,
          total_budget: 500.00,
          id_user: 1
        },
        {
          id_budget: 2,
          total_budget: 700.00,
          id_user: 2
        },
        {
          id_budget: 3,
          total_budget: 600.00,
          id_user: 3
        }
      ],
      categories: [
        {
          id_category: 1,
          name: "Mensualidad"
        },
        {
          id_category: 2,
          name: "Matricula"
        },
        {
          id_category: 3,
          name: "Gym"
        },
        {
            id_category: 4,
            name: "Servicios"
        },
        {
            id_category: 5,
            name: "Salud"
        },
        {
            id_category: 6,
            name: "Gastos Estudiantiles"
        },
        {
            id_category: 7,
            name: "Vivienda"
        },
        {
            id_category: 8,
            name: "Personal"
        },  
      ],
  };
  
  module.exports = budgetData;
  