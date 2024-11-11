# Event_management
Event management using angular and asp.net 6.0

This project is an Event Management application developed using ASP.NET 6.0 as the backend technology.

To get started, navigate to the BackendC# folder and open the solution file.

Run the command **dotnet build** to build the project, and after a successful build, execute **dotnet run**. 

Once everything is functioning correctly, you can run the application through **IIS Express**, 

which will allow you to access the **Swagger UI. **

In Swagger, you will find all available operations, enabling you to test the API endpoints easily.

The application allows users to create, update, delete, and read events effortlessly. 

For database connectivity, I utilized Entity Framework, which automatically generates the necessary data tables.

To install Entity Framework, please run the following commands:

**dotnet add package Microsoft.EntityFrameworkCore**

**dotnet add package Microsoft.EntityFrameworkCore.SqlServer**

**dotnet add package Microsoft.EntityFrameworkCore.Tools**

After installing these packages, ensure you have SQL Server installed and create a database.

Update the connection string in the application accordingly. Once everything is set up, 

run dotnet ef database update to establish your database connection properly, allowing you to view the data tables in SQL Server.

On the front end, I employed Angular for a dynamic user interface. 

To get started with Angular, ensure you have **Node.js version 18.18.0** installed. 

After installation, run the **npm install** command to install the required packages. 

Finally, start the application by executing either **npm start** or** ng serve. **

This setup will allow you to efficiently manage events through a user-friendly interface.
