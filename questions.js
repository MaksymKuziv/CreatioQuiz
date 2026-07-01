const QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "type": "multi",
    "topic": "Application architecture",
    "question": "What do you need to do to start using the customer portal? Select all that apply.",
    "options": [
      { "id": "a", "text": "Create contacts for external users", "isCorrect": true },
      { "id": "b", "text": "Create a user with the \"External user\" type", "isCorrect": true },
      { "id": "c", "text": "Create a user with the \"Company employee\" type", "isCorrect": false },
      { "id": "d", "text": "Configure the providerNames = \"InternalUserPassword,SSPUserPassword\" attribute in the /configuration/terrasoft/auth option of the web.config root file", "isCorrect": true },
      { "id": "e", "text": "Distribute the necessary licenses to the user", "isCorrect": true }
    ]
  },
  {
    "id": "q2",
    "type": "single",
    "topic": "Development workflow",
    "question": "Can two or more developers work in the same Creatio configuration?",
    "options": [
      { "id": "a", "text": "Yes. When publishing settings in a common development environment, users will not interfere with each other", "isCorrect": false },
      { "id": "b", "text": "Working in the same configuration for several developers is not recommended because one of the developers can violate the configuration settings, which will interfere with the smooth work of the other developer.", "isCorrect": true },
      { "id": "c", "text": "When submitting changes to SVN, only the changes performed by one of the users will be recorded.", "isCorrect": false }
    ]
  },
  {
    "id": "q3",
    "type": "single",
    "topic": "Application architecture",
    "question": "What is the purpose of the \"host\" attribute in the \"redis\" section of the ConnectionStrings.config file?",
    "options": [
      { "id": "a", "text": "This attribute is not required", "isCorrect": false },
      { "id": "b", "text": "This attribute must always have the \"127.0.0.1\" value", "isCorrect": false },
      { "id": "c", "text": "This attribute should contain the name of the computer that the Redis server is deployed on", "isCorrect": true }
    ]
  },
  {
    "id": "q4",
    "type": "multi",
    "topic": "Application architecture",
    "question": "What is the purpose of the \"db\" attribute in the \"redis\" section of the ConnectionStrings.config file? Select all that apply.",
    "options": [
      { "id": "a", "text": "This attribute contains the Redis database number", "isCorrect": true },
      { "id": "b", "text": "This attribute must be unique to each application environment", "isCorrect": true },
      { "id": "c", "text": "This attribute is optional", "isCorrect": false },
      { "id": "d", "text": "This attribute indicates the name of the SQL database used by the application", "isCorrect": false }
    ]
  },
  {
    "id": "q5",
    "type": "multi",
    "topic": "Application architecture",
    "question": "What are the architecture components of the Creatio platform? Select all that apply.",
    "options": [
      { "id": "a", "text": "Cloud Web services (Global search, Machine learning, Bulk email)", "isCorrect": true },
      { "id": "b", "text": "Version control system server (SVN)", "isCorrect": true },
      { "id": "c", "text": "MS Exchange server", "isCorrect": false },
      { "id": "d", "text": "Application server (IIS)", "isCorrect": true },
      { "id": "e", "text": "Session storage server (Redis)", "isCorrect": true },
      { "id": "f", "text": "SQLite server", "isCorrect": false },
      { "id": "g", "text": "DB server (MSSQL/Oracle/PostgreSQL)", "isCorrect": true }
    ]
  },
  {
    "id": "q6",
    "type": "multi",
    "topic": "Access rights",
    "question": "How users with system administrator permissions are different from the regular Creatio users?",
    "options": [
      { "id": "a", "text": "Data access restrictions do not apply to system administrator users", "isCorrect": true },
      { "id": "b", "text": "There are no differences. All users have access to all basic system operations", "isCorrect": false },
      { "id": "c", "text": "System administrator users can view data in all Creatio sections without restrictions", "isCorrect": true }
    ]
  },
  {
    "id": "q7",
    "type": "single",
    "topic": "Package architecture",
    "question": "What is a \"configuration\" in Creatio?",
    "options": [
      { "id": "a", "text": "Configuration is a specific set of functions, available to Creatio users. A configuration consists of client modules and server elements, distributed by packages", "isCorrect": true },
      { "id": "b", "text": "Configuration is a set of objects, system files, shell and core components required for proper functioning of a specific Creatio workspace", "isCorrect": false }
    ]
  },
  {
    "id": "q8",
    "type": "multi",
    "topic": "Database",
    "question": "Which of the following tasks can involve creating DB views? Select all that apply.",
    "options": [
      { "id": "a", "text": "Creating objects for adding new files", "isCorrect": false },
      { "id": "b", "text": "Connecting third-party data sources", "isCorrect": true },
      { "id": "c", "text": "Creating non-editable lists with aggregated data", "isCorrect": true },
      { "id": "d", "text": "Creating lookups for manual input", "isCorrect": false },
      { "id": "e", "text": "Creating dashboards based on the existing tables", "isCorrect": true }
    ]
  },
  {
    "id": "q9",
    "type": "multi",
    "topic": "Database",
    "question": "Which of the following tasks can involve implementation via a DB stored procedure? Select all that apply.",
    "options": [
      { "id": "a", "text": "Processing tabular data in the database as quickly as possible", "isCorrect": true },
      { "id": "b", "text": "Displaying charts in the section dashboards", "isCorrect": false },
      { "id": "c", "text": "Data selection applying the business logic", "isCorrect": true },
      { "id": "d", "text": "Data preparation for creating reports", "isCorrect": true }
    ]
  },
  {
    "id": "q10",
    "type": "single",
    "topic": "Package architecture",
    "question": "What is the purpose of the \"SQL scripts\" in a Creatio package?",
    "options": [
      { "id": "a", "text": "SQL-scripts are section and lookup records that are part of a package. These can be the base lookup values, system settings, demo-data, etc.", "isCorrect": false },
      { "id": "b", "text": "SQL-scripts are arbitrary scripts performing additional actions with the database before or after installing a package", "isCorrect": true },
      { "id": "c", "text": "SQL scripts are basic configuration elements that describe the structure of database tables, and are used to create tables filtered by configuration objects", "isCorrect": false }
    ]
  },
  {
    "id": "q11",
    "type": "single",
    "topic": "Package architecture",
    "question": "What is the purpose of the \"File content\" component in a Creatio package?",
    "options": [
      { "id": "a", "text": "The \"File content\" component stores section and lookup records that are part of a package", "isCorrect": false },
      { "id": "b", "text": "The \"File content\" component stores any files used by the Creatio application. The file content is not processed by the web-server and is static. It is recorded in the version control system along with other package content", "isCorrect": true },
      { "id": "c", "text": "The \"File content\" component stores configuration elements describing the structure of database tables, pages, business-processes and their elements, reports, image lists and modules", "isCorrect": false },
      { "id": "d", "text": "The \"File content\" component stores *.dll files used for integration with third-party applications", "isCorrect": false }
    ]
  },
  {
    "id": "q12",
    "type": "single",
    "topic": "Package architecture",
    "question": "What is called a \"package\" in Creatio?",
    "options": [
      { "id": "a", "text": "A Creatio package is a set of executable files stored on the application server, implementing specific application functions and interface", "isCorrect": false },
      { "id": "b", "text": "A Creatio package is a set of SQL scripts, procedures, functions and views in the database needed for the function operation in the application", "isCorrect": false },
      { "id": "c", "text": "A Creatio package is a set of configuration schemas implementing specific application functions", "isCorrect": false },
      { "id": "d", "text": "A Creatio package is a combination of configuration elements (schemas, data, scripts, additional libraries) that implements specific functions", "isCorrect": true }
    ]
  },
  {
    "id": "q13",
    "type": "single",
    "topic": "Package architecture",
    "question": "How do you add a column to an existing object of a base Creatio product?",
    "options": [
      { "id": "a", "text": "Create a package and specify the dependency from the package containing the object. Create a new object and specify the necessary base object as the parent object. Add a column", "isCorrect": false },
      { "id": "b", "text": "Create a package and specify the dependency from the package containing the base product object. Create a replacing object and specify the necessary base object as the parent object. Add a column", "isCorrect": true },
      { "id": "c", "text": "Create a replacing object in any custom package and specify the necessary base object as the parent object. Add a column", "isCorrect": false }
    ]
  },
  {
    "id": "q14",
    "type": "single",
    "topic": "Package architecture",
    "question": "What is the purpose of the \"External assemblies\" in a Creatio package?",
    "options": [
      { "id": "a", "text": "External assemblies are section and lookup records that are part of a package", "isCorrect": false },
      { "id": "b", "text": "External assemblies are primary configuration elements that contain basic functionality, which is necessary for the page and business process operation", "isCorrect": false },
      { "id": "c", "text": "External assemblies are *.dll files used for integration with third-party applications", "isCorrect": true },
      { "id": "d", "text": "External assemblies are special files installed in assemblies on the database server", "isCorrect": false }
    ]
  },
  {
    "id": "q15",
    "type": "single",
    "topic": "Marketplace applications",
    "question": "What is the purpose of the \"Data binding tool\" Marketplace application?",
    "options": [
      { "id": "a", "text": "Creating printables in Creatio", "isCorrect": false },
      { "id": "b", "text": "Executing DB queries in the cloud", "isCorrect": false },
      { "id": "c", "text": "Creating the data binding elements in a package", "isCorrect": true },
      { "id": "d", "text": "Uploading data from third-party sources", "isCorrect": false }
    ]
  },
  {
    "id": "q16",
    "type": "single",
    "topic": "Marketplace applications",
    "question": "What is the purpose of the \"Excel reports builder\" Marketplace application?",
    "options": [
      { "id": "a", "text": "Executing DB queries in the cloud", "isCorrect": false },
      { "id": "b", "text": "Creating Excel printables in Creatio", "isCorrect": true },
      { "id": "c", "text": "Uploading the report data from Excel files", "isCorrect": false },
      { "id": "d", "text": "Creating the data binding elements in the package", "isCorrect": false }
    ]
  },
  {
    "id": "q17",
    "type": "single",
    "topic": "Web services",
    "question": "How does one create a configuration web service?",
    "options": [
      { "id": "a", "text": "In the \"Source code\" schema, define a class that inherits the Terrasoft.Configuration.Service class. Mark it with the [ServiceContract] attribute. In this class, implement service methods and data types. Mark methods with the [OperationContract] attribute, and data types with the [DataContract] attribute", "isCorrect": false },
      { "id": "b", "text": "In the \"Source Code\" schema, create a descendant from the Terrasoft.Configuration.WebService class. Implement methods, use only standard data types. Mark methods with [OperationContract] attribute", "isCorrect": false },
      { "id": "c", "text": "In the \"Source code\" schema, define a class that inherits the BaseService class and mark it with the [ServiceContract] attribute. In this class, implement service methods and data types. Mark methods with the [OperationContract] attribute, and data types with the [DataContract] attribute", "isCorrect": true }
    ]
  },
  {
    "id": "q18",
    "type": "single",
    "topic": "Web services",
    "question": "Which HTTP method is used in the OData protocol to create a new record?",
    "options": [
      { "id": "a", "text": "PUT", "isCorrect": false },
      { "id": "b", "text": "CREATE_RECORD", "isCorrect": false },
      { "id": "c", "text": "POST", "isCorrect": true },
      { "id": "d", "text": "MERGE", "isCorrect": false }
    ]
  },
  {
    "id": "q19",
    "type": "single",
    "topic": "Web services",
    "question": "Which permissions must a user have to be able to conduct data-related operations using the OData protocol in Creatio?",
    "options": [
      { "id": "a", "text": "The user must be granted system administrator permissions, as well as the access to system operations, system settings and lookups. Additionally, the user will need access to connect the EntityDataService library at the file system level", "isCorrect": false },
      { "id": "b", "text": "The user must be granted permissions to the CanUseODataService operation", "isCorrect": true }
    ]
  },
  {
    "id": "q20",
    "type": "single",
    "topic": "Web services",
    "question": "Which class simplifies the work with the DataService web service on the client side of the Creatio application?",
    "options": [
      { "id": "a", "text": "DataServiceClientHelper", "isCorrect": false },
      { "id": "b", "text": "EntitySchemaQuery", "isCorrect": true },
      { "id": "c", "text": "EntityDataServiceClass", "isCorrect": false },
      { "id": "d", "text": "ServiceHelper", "isCorrect": false }
    ]
  },
  {
    "id": "q21",
    "type": "single",
    "topic": "Business processes",
    "question": "How to pass data to a sub-process and obtain its result in the primary process?",
    "options": [
      { "id": "a", "text": "Use parameters of the primary process. Set the incoming parameter values before the sub-process execution and use them in the sub-process to get input data. Map the result to an outgoing parameter of the primary process. After the sub-process is complete, it can be used in the primary process for getting the sub-process results", "isCorrect": true },
      { "id": "b", "text": "In the primary process, add and select a sub-process. Set initial values for incoming parameters before executing sub-process and read data from the same parameters after the sub-process is complete", "isCorrect": false },
      { "id": "c", "text": "Use the sub-process parameters. Determine the mapping for parameters to read data passed from the primary process to the sub-process and set values for these parameters in the sub-process to pass them from the sub-process to the primary process", "isCorrect": false }
    ]
  },
  {
    "id": "q22",
    "type": "multi",
    "topic": "Server side",
    "question": "How to add data to cache storage?",
    "options": [
      { "id": "a", "text": "Store.Cache[CacheLevel.Session][\"Key\"] = \"Data\"", "isCorrect": true },
      { "id": "b", "text": "UserConnection.SessionCache[\"Key\"] = \"Data\"", "isCorrect": true },
      { "id": "c", "text": "Page.Cache[\"Key\"] = \"Data\"", "isCorrect": false },
      { "id": "d", "text": "this.Cache[\"Key\"] = \"Data\"", "isCorrect": false }
    ]
  },
  {
    "id": "q23",
    "type": "multi",
    "topic": "Server side",
    "question": "EntitySchemaQuery has the following features (select all that apply):",
    "options": [
      { "id": "a", "text": "Caching mechanism", "isCorrect": true },
      { "id": "b", "text": "Access rights restrictions", "isCorrect": true },
      { "id": "c", "text": "Additional setup of select queries", "isCorrect": true }
    ]
  },
  {
    "id": "q24",
    "type": "single",
    "topic": "Business processes",
    "question": "How to modify a task parameter upon the repeated execution of a task?",
    "options": [
      { "id": "a", "text": "Task parameters cannot be modified upon the repeated execution of a task", "isCorrect": false },
      { "id": "b", "text": "Map the modified parameter to a process parameter and modify the process parameter", "isCorrect": true },
      { "id": "c", "text": "Specify the process parameter value again", "isCorrect": false }
    ]
  },
  {
    "id": "q25",
    "type": "single",
    "topic": "Server side",
    "question": "How to set a column record value?",
    "options": [
      { "id": "a", "text": "SetColumnValue()", "isCorrect": true },
      { "id": "b", "text": "Entity.Columns[\"columnName\"] = value", "isCorrect": false },
      { "id": "c", "text": "SetValue()", "isCorrect": false },
      { "id": "d", "text": "SetTypedColumnValue()", "isCorrect": false }
    ]
  },
  {
    "id": "q26",
    "type": "multi",
    "topic": "Server side",
    "question": "How to obtain access to the object manager instance in the program code?",
    "options": [
      { "id": "a", "text": "var esManager = UserConnection.EntitySchemaManager;", "isCorrect": true },
      { "id": "b", "text": "var esManager = UserConnection.GetSchemaManager(\"EntitySchemaManager\") as EntitySchemaManager;", "isCorrect": true },
      { "id": "c", "text": "var esManager = new EntitySchemaManager(UserConnection);", "isCorrect": false }
    ]
  },
  {
    "id": "q27",
    "type": "multi",
    "topic": "Server side",
    "question": "What actions must be performed to add a filter to a select query through ESQ? Select all that apply.",
    "options": [
      { "id": "a", "text": "Create a filter instance using the EntitySchemaQuery.CreateDataFilter() method.", "isCorrect": false },
      { "id": "b", "text": "Add the created filter instance to the query filter collection.", "isCorrect": true },
      { "id": "c", "text": "Create a filter instance using one of the ESQ methods.", "isCorrect": true }
    ]
  },
  {
    "id": "q28",
    "type": "single",
    "topic": "Server side",
    "question": "What special character is used to denote the INNER JOIN connection type of joined schema:",
    "options": [
      { "id": "a", "text": "<>", "isCorrect": false },
      { "id": "b", "text": "*", "isCorrect": false },
      { "id": "c", "text": "=", "isCorrect": true }
    ]
  },
  {
    "id": "q29",
    "type": "multi",
    "topic": "Development workflow",
    "question": "What are the specifics of working with version control system repositories in Creatio? Select all that apply.",
    "options": [
      { "id": "a", "text": "The list of repositories is common for all development environments", "isCorrect": true },
      { "id": "b", "text": "A package can only be added to the repository connected with the workspace, in which it was created", "isCorrect": false },
      { "id": "c", "text": "Newly created packages can be added to any repository from the list", "isCorrect": true },
      { "id": "d", "text": "Each development environment interacts with a separate version control repository", "isCorrect": false }
    ]
  },
  {
    "id": "q30",
    "type": "single",
    "topic": "Access rights",
    "question": "How do you add a user who is supposed to customize Creatio by creating new sections?",
    "options": [
      { "id": "a", "text": "Create a contact. Create a user", "isCorrect": false },
      { "id": "b", "text": "Create a contact. Create a user. Add the user to the \"System administrators\" role", "isCorrect": true },
      { "id": "c", "text": "Create a user. Link the new user to a DBMS user", "isCorrect": false }
    ]
  },
  {
    "id": "q31",
    "type": "multi",
    "topic": "Development workflow",
    "question": "Which tools could be used for a proper transfer of configuration modifications to the testing and production environments? Select all that apply.",
    "options": [
      { "id": "a", "text": "Replacing the executable application files", "isCorrect": false },
      { "id": "b", "text": "The \"Export\" action in the \"Configuration\" section", "isCorrect": true },
      { "id": "c", "text": "The WorkspaceConsole utility", "isCorrect": true },
      { "id": "d", "text": "Replacing the target environment database", "isCorrect": false },
      { "id": "e", "text": "The \"Install from file\" action in the \"Application Hub\" section", "isCorrect": true }
    ]
  },
  {
    "id": "q32",
    "type": "multi",
    "topic": "Development workflow",
    "question": "What schema types CANNOT be configured using the third-party editors in the file system development mode? Select all that apply.",
    "options": [
      { "id": "a", "text": "Process schemas", "isCorrect": true },
      { "id": "b", "text": "Object schemas", "isCorrect": true },
      { "id": "c", "text": "Schemas with a source code", "isCorrect": false },
      { "id": "d", "text": "Client schemas", "isCorrect": false }
    ]
  },
  {
    "id": "q33",
    "type": "multi",
    "topic": "Development workflow",
    "question": "What settings that must be configured in the DB development mode to enable debugging of the server code?",
    "options": [
      { "id": "a", "text": "\"IncludeDebugInformation\" = \"true\"", "isCorrect": true },
      { "id": "b", "text": "\"CompilerSourcesTempFolderPath\" = \"C:\\Src\\\"", "isCorrect": true },
      { "id": "c", "text": "\"DebugFilesPath\" = \"C:\\Src\\\"", "isCorrect": false },
      { "id": "d", "text": "\"EnableDebugMode\" = \"true\"", "isCorrect": false }
    ]
  },
  {
    "id": "q34",
    "type": "multi",
    "topic": "Database",
    "question": "Which of the following SQL operators are needed for selecting the order amount grouped by order customer?",
    "options": [
      { "id": "a", "text": "GROUP BY", "isCorrect": true },
      { "id": "b", "text": "SUM", "isCorrect": true },
      { "id": "c", "text": "HAVING", "isCorrect": false },
      { "id": "d", "text": "QUANTITY", "isCorrect": false }
    ]
  },
  {
    "id": "q35",
    "type": "multi",
    "topic": "Package architecture",
    "question": "Which types of elements can be included into a Creatio package? Select all that apply.",
    "options": [
      { "id": "a", "text": "Configuration schemas", "isCorrect": true },
      { "id": "b", "text": "External assemblies - third-party dll-libraries, necessary for implementing integration with other systems", "isCorrect": true },
      { "id": "c", "text": "SQL scripts", "isCorrect": true },
      { "id": "d", "text": "Other packages", "isCorrect": false },
      { "id": "e", "text": "File content", "isCorrect": true },
      { "id": "f", "text": "Data binding elements", "isCorrect": true },
      { "id": "g", "text": "Files in the XLSX format with dashboard templates", "isCorrect": false }
    ]
  },
  {
    "id": "q36",
    "type": "single",
    "topic": "Package architecture",
    "question": "What is the purpose of the \"Schemas\" in a Creatio package?",
    "options": [
      { "id": "a", "text": "Schemas are arbitrary SQL scripts performing additional actions with the database before or after installing a package", "isCorrect": false },
      { "id": "b", "text": "Schemas are primary configuration elements describing the structure of database tables, pages, business processes and their elements, reports, image lists and modules", "isCorrect": true },
      { "id": "c", "text": "Schemas are section and lookup records that are part of a package.", "isCorrect": false },
      { "id": "d", "text": "Schemas are *.dll files used for integration with third-party applications", "isCorrect": false }
    ]
  },
  {
    "id": "q37",
    "type": "single",
    "topic": "Package architecture",
    "question": "What is the purpose of the \"Data\" component in a Creatio package?",
    "options": [
      { "id": "a", "text": "Arbitrary SQL scripts required to insert data into database tables during package installation", "isCorrect": false },
      { "id": "b", "text": "Primary configuration elements that describe the structure of the database tables", "isCorrect": false },
      { "id": "c", "text": "Records of database tables in a package, i.e. lookup values, system settings, column settings, etc.", "isCorrect": true },
      { "id": "d", "text": "Executable *.dll files that provide access to data from third-party applications", "isCorrect": false }
    ]
  },
  {
    "id": "q38",
    "type": "multi",
    "topic": "Package architecture",
    "question": "What packages are NOT supposed to be edited? Select all that apply.",
    "options": [
      { "id": "a", "text": "All packages are designed to be edited", "isCorrect": false },
      { "id": "b", "text": "Custom packages, stored in the repository version control system", "isCorrect": false },
      { "id": "c", "text": "Packages with base Creatio products functionality", "isCorrect": true },
      { "id": "d", "text": "Packages uploaded from *.zip files", "isCorrect": true },
      { "id": "e", "text": "Third-party packages", "isCorrect": true }
    ]
  },
  {
    "id": "q39",
    "type": "single",
    "topic": "Marketplace applications",
    "question": "What is the purpose of the \"Telemetry log\" Marketplace application?",
    "options": [
      { "id": "a", "text": "Receiving application log files in the cloud", "isCorrect": true },
      { "id": "b", "text": "Executing DB queries in the cloud", "isCorrect": false },
      { "id": "c", "text": "Creating printables in Creatio", "isCorrect": false },
      { "id": "d", "text": "Performing calculations on the side of the application server", "isCorrect": false }
    ]
  },
  {
    "id": "q40",
    "type": "single",
    "topic": "Web services",
    "question": "Which web service you can use to launch business processes from a third-party application?",
    "options": [
      { "id": "a", "text": "ProcessRightService.svc", "isCorrect": false },
      { "id": "b", "text": "BusinessProcessService.svc", "isCorrect": false },
      { "id": "c", "text": "RunBusinessProcess.svc", "isCorrect": false },
      { "id": "d", "text": "ProcessEngineService.svc", "isCorrect": true }
    ]
  },
  {
    "id": "q41",
    "type": "single",
    "topic": "Web services",
    "question": "What is the purpose of the DataService web service?",
    "options": [
      { "id": "a", "text": "Providing service methods for creating and processing metadata within the application", "isCorrect": false },
      { "id": "b", "text": "Generating HTML pages with data to save in a file", "isCorrect": false },
      { "id": "c", "text": "Exchanging Data between Creatio and third-party systems", "isCorrect": true },
      { "id": "d", "text": "Implementing the OData protocol in Creatio", "isCorrect": false },
      { "id": "e", "text": "Building analytics based on system object data", "isCorrect": false }
    ]
  },
  {
    "id": "q42",
    "type": "single",
    "topic": "Web services",
    "question": "How do you use custom types as incoming and outgoing parameters in the web service method?",
    "options": [
      { "id": "a", "text": "You cannot use custom types in configuration web-services. Web-services can only accept and return parameters of simple types (int, char, etc.)", "isCorrect": false },
      { "id": "b", "text": "Implement a custom type in a web-service class unit. The type class is marked with the [DataContract] attribute, and the properties of this class are marked with the [DataMember] attribute", "isCorrect": true },
      { "id": "c", "text": "In an arbitrary namespace, implement a custom type class. Connect this namespace in the source code schema of the web service. Create a custom instance in a web service method", "isCorrect": false }
    ]
  },
  {
    "id": "q43",
    "type": "single",
    "topic": "Web services",
    "question": "How is the OData protocol used in Creatio?",
    "options": [
      { "id": "a", "text": "To perform user authentication using Basic-authentication", "isCorrect": false },
      { "id": "b", "text": "To build analytics based on application data", "isCorrect": false },
      { "id": "c", "text": "To exchange data between Creatio and third-party systems", "isCorrect": true },
      { "id": "d", "text": "To remotely start processes in Creatio and transfer data to a third-party application", "isCorrect": false }
    ]
  },
  {
    "id": "q44",
    "type": "single",
    "topic": "Package architecture",
    "question": "Is it possible to change the base object column type? How?",
    "options": [
      { "id": "a", "text": "No", "isCorrect": false },
      { "id": "b", "text": "Yes. To do this, you have to replace the base object in the user package and then change the column object \"Type\" property value.", "isCorrect": false },
      { "id": "c", "text": "Yes. To do this, you have to replace the base object in the user package, then change the type of an existing column within its subtype", "isCorrect": true },
      { "id": "d", "text": "Yes. To do this, you have to change the column object \"Type\" property value in the base object.", "isCorrect": false }
    ]
  },
  {
    "id": "q45",
    "type": "single",
    "topic": "Development workflow",
    "question": "Which setting must be set to enable debugging using Visual Studio?",
    "options": [
      { "id": "a", "text": "\"Enable remote debugging\" = true", "isCorrect": false },
      { "id": "b", "text": "\"Suppress JIT Optimization on module load\" = \"true\"", "isCorrect": true },
      { "id": "c", "text": "\"Enable edit and continue\" =\"true\"", "isCorrect": false }
    ]
  },
  {
    "id": "q46",
    "type": "multi",
    "topic": "Server side",
    "question": "Specify the data storage levels (DataStore)",
    "options": [
      { "id": "a", "text": "Request", "isCorrect": true },
      { "id": "b", "text": "Application", "isCorrect": true },
      { "id": "c", "text": "User", "isCorrect": false },
      { "id": "d", "text": "System", "isCorrect": false },
      { "id": "e", "text": "Workspace", "isCorrect": false },
      { "id": "f", "text": "Session", "isCorrect": true }
    ]
  },
  {
    "id": "q47",
    "type": "single",
    "topic": "Server side",
    "question": "What is the difference between the EntitySchemaQuery (ESQ) request and Select request?",
    "options": [
      { "id": "a", "text": "A subrequest is added to the Select request to determine the access rights", "isCorrect": false },
      { "id": "b", "text": "A subrequest is added to the EntitySchemaQuery request to determine the access rights", "isCorrect": true }
    ]
  },
  {
    "id": "q48",
    "type": "multi",
    "topic": "Server side",
    "question": "Provide methods for creating a filter in EntitySchemaQuery. Select all options.",
    "options": [
      { "id": "a", "text": "CreateIsNotNullFilter()", "isCorrect": true },
      { "id": "b", "text": "CreateFilter()", "isCorrect": true },
      { "id": "c", "text": "CreateFilterWithParameters()", "isCorrect": true },
      { "id": "d", "text": "CreateFilters()", "isCorrect": false }
    ]
  },
  {
    "id": "q49",
    "type": "multi",
    "topic": "Access rights",
    "question": "Which types of access permissions are supported in Creatio data model? Select all that apply.",
    "options": [
      { "id": "a", "text": "Permissions to CRUD operations in existing objects (object permissions)", "isCorrect": true },
      { "id": "b", "text": "Permissions for creating DB tables (object permissions)", "isCorrect": false },
      { "id": "c", "text": "Permissions to run stored procedures in the database", "isCorrect": false },
      { "id": "d", "text": "Permissions for operation of third-party employees (operation permissions)", "isCorrect": false },
      { "id": "e", "text": "Permissions to access separate records", "isCorrect": true },
      { "id": "f", "text": "Permissions to access separate columns in objects", "isCorrect": true }
    ]
  },
  {
    "id": "q50",
    "type": "multi",
    "topic": "Development workflow",
    "question": "Which settings and actions must be performed to transfer a local application to the development mode in the file system? Select all that apply.",
    "options": [
      { "id": "a", "text": "Set \"fileDesignMode enabled =\"true\"", "isCorrect": true },
      { "id": "b", "text": "Set \"IncludeDebugInformation\" value=\"true\"", "isCorrect": false },
      { "id": "c", "text": "After modifications in Web.config, perform the \"Compile all items\" action", "isCorrect": true },
      { "id": "d", "text": "Set \"UseStaticFileContent\" value=\"false\"", "isCorrect": true },
      { "id": "e", "text": "Set \"developmentMode = file system\"", "isCorrect": false },
      { "id": "f", "text": "Set \"CompilerSourcesTempFolderPath\" = \"C:\\Src\\\"", "isCorrect": false }
    ]
  },
  {
    "id": "q51",
    "type": "multi",
    "topic": "Development workflow",
    "question": "Which environments are NOT recommended for applying any modifications in project implementation configuration? Select all that apply.",
    "options": [
      { "id": "a", "text": "Production environment", "isCorrect": true },
      { "id": "b", "text": "Test environment", "isCorrect": true },
      { "id": "c", "text": "Development environment", "isCorrect": false }
    ]
  },
  {
    "id": "q52",
    "type": "single",
    "topic": "Configuration",
    "question": "What system settings should be created to implement standard auto-numbering in the \"Apartments\" section?",
    "options": [
      { "id": "a", "text": "ApartmentCodeMask – the number mask, ApartmentLastNumber – current number", "isCorrect": true },
      { "id": "b", "text": "ApartmentMask – template mask of the number, ApartmentCurrentNumber – current number", "isCorrect": false },
      { "id": "c", "text": "Standard numbering cannot be implemented in this section", "isCorrect": false },
      { "id": "d", "text": "ApartmentCode – template of the number, ApartmentNumber – current number", "isCorrect": false },
      { "id": "e", "text": "ApartmentNumberTemplate – template of the number, CurrentApartmentNumber – number", "isCorrect": false }
    ]
  },
  {
    "id": "q53",
    "type": "single",
    "topic": "Development workflow",
    "question": "What happens to the packages in the version control system repository, when that repository is deleted from the repository list?",
    "options": [
      { "id": "a", "text": "When a repository is deleted, all its packages will be physically deleted on the SVN server", "isCorrect": false },
      { "id": "b", "text": "When a registered repository is deleted from the repository list, it is not physically deleted on the SVN server", "isCorrect": true }
    ]
  },
  {
    "id": "q54",
    "type": "single",
    "topic": "Database",
    "question": "Does the column order matter in the DB multi-column index?",
    "options": [
      { "id": "a", "text": "Yes, the column order influences the index sequence", "isCorrect": true },
      { "id": "b", "text": "No, all index columns work in a similar way", "isCorrect": false }
    ]
  },
  {
    "id": "q55",
    "type": "single",
    "topic": "Package architecture",
    "question": "What purpose do data binding elements serve in Creatio packages?",
    "options": [
      { "id": "a", "text": "To transfer object data to a different environment as part of the corresponding package", "isCorrect": true },
      { "id": "b", "text": "To preserve the integrity of connections between objects", "isCorrect": false },
      { "id": "c", "text": "To grant access to data for users without administrator permissions", "isCorrect": false }
    ]
  },
  {
    "id": "q56",
    "type": "single",
    "topic": "Package architecture",
    "question": "How do you enable the use of external library functionality in a configuration code (using C#)?",
    "options": [
      { "id": "a", "text": "Creatio does not support external libraries", "isCorrect": false },
      { "id": "b", "text": "Copy the library (dll file) into the bin application folder on the application server. To create type instances from the library, use the following construction in the program code: var t = new Namespace.TypeName()", "isCorrect": false },
      { "id": "c", "text": "Add the library (dll file) to the \"External assemblies\" tab of a package. If necessary, connect the needed library name space via the \"using\" directive. Create type instances from external library in a standard way via the \"new\" operator", "isCorrect": true }
    ]
  },
  {
    "id": "q57",
    "type": "single",
    "topic": "Marketplace applications",
    "question": "Which of the following tasks require the \"Maintenance tools for Creatio\" Marketplace application?",
    "options": [
      { "id": "a", "text": "Reading log files from Creatio", "isCorrect": false },
      { "id": "b", "text": "Creating data items automatically", "isCorrect": false },
      { "id": "c", "text": "Deleting Creatio large log files", "isCorrect": false },
      { "id": "d", "text": "Restarting Creatio web application and clearing Redis database", "isCorrect": true }
    ]
  },
  {
    "id": "q58",
    "type": "single",
    "topic": "Web services",
    "question": "What is the purpose of the GeneratedObjectWebFormService web service?",
    "options": [
      { "id": "a", "text": "Generating web forms for registering leads, orders and cases", "isCorrect": false },
      { "id": "b", "text": "Creating new objects in the configuration", "isCorrect": false },
      { "id": "c", "text": "Receiving data from landing pages", "isCorrect": true }
    ]
  },
  {
    "id": "q59",
    "type": "single",
    "topic": "Web services",
    "question": "What is the purpose of the EntityDataService web service?",
    "options": [
      { "id": "a", "text": "Implementing the OData protocol in Creatio", "isCorrect": true },
      { "id": "b", "text": "Exporting object data as reports in html format", "isCorrect": false },
      { "id": "c", "text": "Building analytics based on Creatio object data", "isCorrect": false },
      { "id": "d", "text": "Providing service methods for creating and processing metadata within the application", "isCorrect": false }
    ]
  },
  {
    "id": "q60",
    "type": "single",
    "topic": "Client side",
    "question": "Define the \"methods\" client schema property",
    "options": [
      { "id": "a", "text": "A collection of client schema dependencies", "isCorrect": false },
      { "id": "b", "text": "A collection of base methods of the parent schema", "isCorrect": false },
      { "id": "c", "text": "A collection of mixin methods - separately generated classes with additional functionalities", "isCorrect": false },
      { "id": "d", "text": "A collection of base methods that form the schema business logic. In this schema property, you can create your own methods and override base methods of the parent schema", "isCorrect": true }
    ]
  },
  {
    "id": "q61",
    "type": "single",
    "topic": "Web services",
    "question": "How to protect Creatio integration from CSRF attacks?",
    "options": [
      { "id": "a", "text": "After successful authentication, add an authentication cookie received from AuthService.svc to each subsequent request.", "isCorrect": false },
      { "id": "b", "text": "After successful authentication, add an authentication cookie received from AuthService.svc to each subsequent request. Add a cookie with CSRF token to the request headers.", "isCorrect": true },
      { "id": "c", "text": "None of the answers above is correct.", "isCorrect": false }
    ]
  },
  {
    "id": "q62",
    "type": "single",
    "topic": "Package architecture",
    "question": "Which objects are recommended to be used as parent objects of custom objects? Why?",
    "options": [
      { "id": "a", "text": "Any object that has the \"Virtual\" checkbox selected. In this case, a database table will not be added for the object, which saves disk space on the database server", "isCorrect": false },
      { "id": "b", "text": "The \"Base object\" or any other object inherited from the \"Base object\" can be selected as a parent object. In this case, in addition to structure, the new object will inherit the built-in process with the implementation of object event handling", "isCorrect": true },
      { "id": "c", "text": "It is not recommended to specify parent objects for custom objects. Object structure and business logic must be implemented by a developer for each custom object", "isCorrect": false }
    ]
  },
  {
    "id": "q63",
    "type": "single",
    "topic": "Package architecture",
    "question": "How to add a column to an existing object of the pre-installed package?",
    "options": [
      { "id": "a", "text": "Create a package and set a dependency on the package containing the object. Create a replacement object and set the required base object as the parent one. Add the column", "isCorrect": true },
      { "id": "b", "text": "In any user package, create a replacement object and set the required base object as the parent one. Add column", "isCorrect": false },
      { "id": "c", "text": "Create a package and set a dependency on the package containing the object. Create an object and set the required base object as the parent one. Add the column", "isCorrect": false }
    ]
  },
  {
    "id": "q64",
    "type": "single",
    "topic": "Web services",
    "question": "How to create a configuration web service?",
    "options": [
      { "id": "a", "text": "In the \"Source code\" schema, define a class that inherits the BaseService class and mark it with the [ServiceContract] attribute. In this class, implement service methods and data types. Mark methods with the [OperationContract] attribute, and data types with the [DataContract] attribute.", "isCorrect": true },
      { "id": "b", "text": "In the \"Source code\" schema, add an instance class Terrasoft.Configuration.Service. To add a method to a service, call the AddOperationContract() function on an instance and pass string with the service method implementation program code as a parameter to that function. To add a data type to a service, call the AddDataContract() function.", "isCorrect": false },
      { "id": "c", "text": "In the \"Source code\" schema, define a class that inherits the Terrasoft.Configuration.Service class. Mark it with the [ServiceContract] attribute. In this class, implement service methods and data types. Mark methods with [OperationContract] attributes, and data types - with the [DataContract] attributes.", "isCorrect": false }
    ]
  },
  {
    "id": "q65",
    "type": "single",
    "topic": "Application architecture",
    "question": "What is the general procedure of setting up a Creatio application website in IIS?",
    "options": [
      { "id": "a", "text": "Add a website, set its \"content\" catalogue as Terrasoft.WebApp.", "isCorrect": false },
      { "id": "b", "text": "Add the website, set its \"content\" catalogue as the root catalogue of the setup files. Add another website, whose contents catalogue is Terrasoft.Configuration", "isCorrect": false },
      { "id": "c", "text": "Add the website, set its \"content\" catalogue as the root catalogue of Creatio setup files. Add an application with a 0 alias to the website, specify the path to the Terrasoft.WebApp setup files as the path", "isCorrect": true }
    ]
  },
  {
    "id": "q66",
    "type": "single",
    "topic": "Package architecture",
    "question": "What happens if you do not specify dependencies from base packages while developing a custom package?",
    "options": [
      { "id": "a", "text": "Configuration items cannot be created in such package", "isCorrect": false },
      { "id": "b", "text": "This package can not be fixed in the version control system", "isCorrect": false },
      { "id": "c", "text": "The functionality of the base version of the product will not be available in this package", "isCorrect": true }
    ]
  },
  {
    "id": "q67",
    "type": "multi",
    "topic": "Server side",
    "question": "Which of the following manager classes exist in Creatio? Select all that apply.",
    "options": [
      { "id": "a", "text": "File content manager", "isCorrect": false },
      { "id": "b", "text": "Source code schema manager", "isCorrect": true },
      { "id": "c", "text": "Process schema manager", "isCorrect": true },
      { "id": "d", "text": "SQL script manager", "isCorrect": false },
      { "id": "e", "text": "Workspace manager", "isCorrect": false },
      { "id": "f", "text": "Object schema manager", "isCorrect": true }
    ]
  },
  {
    "id": "q68",
    "type": "single",
    "topic": "Development workflow",
    "question": "What does the SaveDBContent operation (the -operation parameter) of the WorkspaceConsole utility do?",
    "options": [
      { "id": "a", "text": "Exports the package hierarchy as ZIP archives to the file system from several SVN repositories. The target catalog is specified in the -destinationPath parameter. The SVN repositories are listed in the -destinationPath parameter (separated with comma).", "isCorrect": false },
      { "id": "b", "text": "Saves the specified contents of package ZIP archives in the file system. The contents to save is specified in the -contentTypes parameter. The source catalog is specified in the -sourcePath parameter. The target catalog is specified in the -destinationPath parameter.", "isCorrect": false },
      { "id": "c", "text": "Saves the database content of the specified type in the file system. The type of saved content is specified in the -contentTypes parameter. The file system catalog to save the content is specified in the -destinationPath parameter.", "isCorrect": true }
    ]
  },
  {
    "id": "q69",
    "type": "single",
    "topic": "Server side",
    "question": "Which method must be called to apply changes made to an Entity?",
    "options": [
      { "id": "a", "text": "Entity.Save()", "isCorrect": true },
      { "id": "b", "text": "Entity.UpdateObject()", "isCorrect": false },
      { "id": "c", "text": "Entity.CompleteEditing()", "isCorrect": false },
      { "id": "d", "text": "Entity.SaveChanges()", "isCorrect": false }
    ]
  },
  {
    "id": "q70",
    "type": "single",
    "topic": "Access rights",
    "question": "How are access rights regulated when building ESQ queries for data from connected lookups, even when the user has no access to the lookup object?",
    "options": [
      { "id": "a", "text": "There is no need to regulate access to connected objects, because ESQ queries can be used to obtain data from any object, regardless of access rights", "isCorrect": false },
      { "id": "b", "text": "There is no way to regulate access rights in the ESQ queries for data from connected objects", "isCorrect": false },
      { "id": "c", "text": "Access to connected object data is regulated by the value of the \"Joined objects administering\" (QueryJoinRightLevel) system setting", "isCorrect": true }
    ]
  },
  {
    "id": "q71",
    "type": "single",
    "topic": "Configuration",
    "question": "Which system settings should be created in order to realize standard numbering in Projects section?",
    "options": [
      { "id": "a", "text": "ProjectNumberTemplate — number template, CurrentProjectNumber — number", "isCorrect": false },
      { "id": "b", "text": "ProjectCode — number template, ProjectNumber — current number", "isCorrect": false },
      { "id": "c", "text": "ProjectMask — mask of number template, ProjectCurrentNumber — current number", "isCorrect": false },
      { "id": "d", "text": "Standard numbering is not allowed in this section", "isCorrect": false },
      { "id": "e", "text": "ProjectCodeMask — number mask, ProjectLastNumber — current number", "isCorrect": true }
    ]
  },
  {
    "id": "q72",
    "type": "multi",
    "topic": "Server side",
    "question": "What is the result of executing an EntitySchemaQuery query? Select all that apply.",
    "options": [
      { "id": "a", "text": "EntityCollection", "isCorrect": true },
      { "id": "b", "text": "Entity", "isCorrect": true },
      { "id": "c", "text": "Object", "isCorrect": false },
      { "id": "d", "text": "Object collection", "isCorrect": false }
    ]
  },
  {
    "id": "q73",
    "type": "single",
    "topic": "Server side",
    "question": "How to get the text of the SQL query being executed for an instance of the EntitySchemaQuery class?",
    "options": [
      { "id": "a", "text": "var sqlText = esq.GetSqlText()", "isCorrect": false },
      { "id": "b", "text": "var esqQueryText = esq.GetQuery(UserConnection).GetSqlText()", "isCorrect": false },
      { "id": "c", "text": "var sqlText = esq.GetSelectQuery(UserConnection).GetSqlText()", "isCorrect": true }
    ]
  },
  {
    "id": "q74",
    "type": "multi",
    "topic": "Development workflow",
    "question": "How do you install or update packages in a Creatio application? Select all that apply.",
    "options": [
      { "id": "a", "text": "Upload the package to the DB by a script. Copy the files with package updates to the bin folder of the WebAppLoader application", "isCorrect": false },
      { "id": "b", "text": "Use the \"CLIO\" utility", "isCorrect": true },
      { "id": "c", "text": "Use the \"Package upload\" section", "isCorrect": false },
      { "id": "d", "text": "Use \"Application Hub\" section", "isCorrect": true },
      { "id": "e", "text": "Perform the package update from the version control system repository", "isCorrect": true },
      { "id": "f", "text": "Use the \"WorkspaceConsole\" utility", "isCorrect": true }
    ]
  },
  {
    "id": "q75",
    "type": "multi",
    "topic": "Development workflow",
    "question": "What are the functions of the version control system (SVN) in Creatio? Select all that apply.",
    "options": [
      { "id": "a", "text": "Transition of configuration changes between development environments", "isCorrect": true },
      { "id": "b", "text": "Storage of user session data", "isCorrect": false },
      { "id": "c", "text": "Storage of custom package state and changes", "isCorrect": true },
      { "id": "d", "text": "Data exchange between the web-farm nodes", "isCorrect": false },
      { "id": "e", "text": "Storage of cached data", "isCorrect": false }
    ]
  },
  {
    "id": "q76",
    "type": "multi",
    "topic": "Package architecture",
    "question": "Which of the following is NOT a package component? Select all that apply.",
    "options": [
      { "id": "a", "text": "Embedded packages", "isCorrect": true },
      { "id": "b", "text": "SQL scripts", "isCorrect": false },
      { "id": "c", "text": "Data", "isCorrect": false },
      { "id": "d", "text": "External libraries", "isCorrect": false },
      { "id": "e", "text": "Schemas", "isCorrect": false },
      { "id": "f", "text": "The change log files", "isCorrect": true }
    ]
  },
  {
    "id": "q77",
    "type": "single",
    "topic": "Package architecture",
    "question": "What is the purpose of the \"Version\" property of a package?",
    "options": [
      { "id": "a", "text": "The property is used to determine package version when generating directories in the repository of the version control system.", "isCorrect": true },
      { "id": "b", "text": "The property is used in the application for running the necessary version of executable files", "isCorrect": false },
      { "id": "c", "text": "This is a reference-only property, it is not used by the Creatio application, or by the version control system", "isCorrect": false },
      { "id": "d", "text": "The property is used to determine the version of the connected .NET assemblies in the package and enables running of the proper libraries", "isCorrect": false }
    ]
  },
  {
    "id": "q78",
    "type": "single",
    "topic": "Web services",
    "question": "What is the purpose of the ReportService web service?",
    "options": [
      { "id": "a", "text": "Sending automatic reports on Creatio performance", "isCorrect": false },
      { "id": "b", "text": "Creating Word printables", "isCorrect": true },
      { "id": "c", "text": "Generating reports in Excel", "isCorrect": false }
    ]
  },
  {
    "id": "q79",
    "type": "multi",
    "topic": "Server side",
    "question": "How to get value of column of a record?",
    "options": [
      { "id": "a", "text": "GetValue()", "isCorrect": false },
      { "id": "b", "text": "GetTypedColumnValue<T>()", "isCorrect": true },
      { "id": "c", "text": "Entity.Columns[\"columnName\"]", "isCorrect": false },
      { "id": "d", "text": "GetColumnValue()", "isCorrect": true }
    ]
  },
  {
    "id": "q80",
    "type": "multi",
    "topic": "Server side",
    "question": "What are the cache storage levels (CacheStore)?",
    "options": [
      { "id": "a", "text": "Request", "isCorrect": false },
      { "id": "b", "text": "Application", "isCorrect": true },
      { "id": "c", "text": "User", "isCorrect": false },
      { "id": "d", "text": "Session", "isCorrect": true },
      { "id": "e", "text": "System", "isCorrect": false },
      { "id": "f", "text": "Workspace", "isCorrect": true }
    ]
  },
  {
    "id": "q81",
    "type": "multi",
    "topic": "Business processes",
    "question": "Which process elements must be used to build a business process that will permit a user to edit a field that he/she have no access to?",
    "options": [
      { "id": "a", "text": "\"Auto-generated page\" element", "isCorrect": true },
      { "id": "b", "text": "\"Pre-configured page\" element", "isCorrect": false },
      { "id": "c", "text": "\"Change access rights\" element", "isCorrect": true },
      { "id": "d", "text": "\"Modify data\" element", "isCorrect": true }
    ]
  },
  {
    "id": "q82",
    "type": "single",
    "topic": "Server side",
    "question": "How is an SQL query generated using EntitySchemaQuery (ESQ) different from an SQL query generated using Select?",
    "options": [
      { "id": "a", "text": "A subquery is added to the SQL query obtained through the Select class to apply access rights", "isCorrect": false },
      { "id": "b", "text": "A subquery is added to the SQL query obtained through the EntitySchemaQuery class to apply access rights", "isCorrect": true },
      { "id": "c", "text": "There are no differences, the resulting SQL queries are the same", "isCorrect": false }
    ]
  },
  {
    "id": "q83",
    "type": "single",
    "topic": "Web services",
    "question": "What is the purpose of the RightsService web service?",
    "options": [
      { "id": "a", "text": "Setting up privileges of OS users on the application server", "isCorrect": false },
      { "id": "b", "text": "Setting up record access permissions by default from third-party applications", "isCorrect": false },
      { "id": "c", "text": "Executing the DBSecurityEngine methods in client part calls", "isCorrect": true }
    ]
  },
  {
    "id": "q84",
    "type": "single",
    "topic": "Business processes",
    "question": "How to define code in an object process to be able to override it in the inheriting object?",
    "options": [
      { "id": "a", "text": "Define inherited code in the \"Formula\" process element", "isCorrect": false },
      { "id": "b", "text": "Code cannot be defined in an object process", "isCorrect": false },
      { "id": "c", "text": "Add the code to a method", "isCorrect": true }
    ]
  },
  {
    "id": "q85",
    "type": "single",
    "topic": "Server side",
    "question": "What features for working with object data does the Entity class provide?",
    "options": [
      { "id": "a", "text": "Reading and editing", "isCorrect": false },
      { "id": "b", "text": "Reading, adding, editing, deleting", "isCorrect": true },
      { "id": "c", "text": "Reading", "isCorrect": false }
    ]
  },
  {
    "id": "q86",
    "type": "single",
    "topic": "Web services",
    "question": "Which service must be used to run business processes remotely from a third-party application?",
    "options": [
      { "id": "a", "text": "EntityDataService.svc", "isCorrect": false },
      { "id": "b", "text": "ProcessEngineService.svc", "isCorrect": true },
      { "id": "c", "text": "RightService.svc", "isCorrect": false },
      { "id": "d", "text": "RunBusinessProcess.svc", "isCorrect": false }
    ]
  },
  {
    "id": "q87",
    "type": "multi",
    "topic": "Development workflow",
    "question": "What are the advantages of working with the local development environment in comparison with the cloud one? Select all that apply.",
    "options": [
      { "id": "a", "text": "Possibility to launch the Configuration section", "isCorrect": false },
      { "id": "b", "text": "Possibility to use the development mode in the file system", "isCorrect": true },
      { "id": "c", "text": "Local admin permissions provide full access to the data and accelerate the development", "isCorrect": false },
      { "id": "d", "text": "Possibility to use the debugging of the server part", "isCorrect": true },
      { "id": "e", "text": "Possibility to use any version control system", "isCorrect": true }
    ]
  },
  {
    "id": "q88",
    "type": "single",
    "topic": "Package architecture",
    "question": "Which objects should be used as parent objects for custom business objects?",
    "options": [
      { "id": "a", "text": "Any object with the \"Virtual\" checkbox selected can be used as a parent object. In this case, no table will be created for the object in the database, which will enable saving space on the DB server", "isCorrect": false },
      { "id": "b", "text": "The \"Base object\" and its inheritors should be selected as a parent object. In this case, the custom object will inherit both the structure and the embedded process with the base implementation of handling object events", "isCorrect": true },
      { "id": "c", "text": "It is not recommended to specify a parent object for custom objects. The object structure and its operation logic should be implemented by a developer independently and should be unique", "isCorrect": false }
    ]
  },
  {
    "id": "q89",
    "type": "single",
    "topic": "Package architecture",
    "question": "How do you change the type of a column in a base object?",
    "options": [
      { "id": "a", "text": "Change the value of the \"Type\" property of the object column in the base object", "isCorrect": false },
      { "id": "b", "text": "You cannot change the type of a column in a base object", "isCorrect": false },
      { "id": "c", "text": "Replace the base object in the custom package. Afterward, replace the \"Type\" property value of the object column", "isCorrect": false },
      { "id": "d", "text": "Replace the base object and change the type of the existing column within its subtype", "isCorrect": true }
    ]
  },
  {
    "id": "q90",
    "type": "multi",
    "topic": "Web services",
    "question": "Which of the following types of functions (Terrasoft.Nui.ServiceModel.DataContract.FunctionType enumeration) are used in DataService? Select all that apply.",
    "options": [
      { "id": "a", "text": "None", "isCorrect": true },
      { "id": "b", "text": "DatePart", "isCorrect": true },
      { "id": "c", "text": "Length", "isCorrect": true },
      { "id": "d", "text": "Macros", "isCorrect": true },
      { "id": "e", "text": "Aggregation", "isCorrect": true }
    ]
  },
  {
    "id": "q91",
    "type": "single",
    "topic": "Client side",
    "question": "How to set a default value for a field?",
    "options": [
      { "id": "a", "text": "Set the default value via business rules", "isCorrect": false },
      { "id": "b", "text": "Set the default value in the diff property of the custom schema", "isCorrect": false },
      { "id": "c", "text": "Set the default value in the corresponding object column", "isCorrect": true },
      { "id": "d", "text": "Set the default value in the messages property of the custom schema", "isCorrect": false }
    ]
  },
  {
    "id": "q92",
    "type": "single",
    "topic": "Server side",
    "question": "Which of the following methods are not used for creating an EntitySchemaQuery filter?",
    "options": [
      { "id": "a", "text": "CreateIsNotNullFilter()", "isCorrect": false },
      { "id": "b", "text": "CreateFilterWithParameters()", "isCorrect": false },
      { "id": "c", "text": "CreateExistsFilter()", "isCorrect": false },
      { "id": "d", "text": "CreateNotExistsFilter()", "isCorrect": false },
      { "id": "e", "text": "CreateFilters()", "isCorrect": true },
      { "id": "f", "text": "CreateIsNullFilter()", "isCorrect": false }
    ]
  },
  {
    "id": "q93",
    "type": "single",
    "topic": "Access rights",
    "question": "What system object can grant you access to the DBSecurityEngine object?",
    "options": [
      { "id": "a", "text": "AppConnection", "isCorrect": false },
      { "id": "b", "text": "CurrentUser", "isCorrect": false },
      { "id": "c", "text": "UserConnection", "isCorrect": true }
    ]
  },
  {
    "id": "q94",
    "type": "single",
    "topic": "Web services",
    "question": "What is the OData protocol used for in Creatio?",
    "options": [
      { "id": "a", "text": "To exchange data between Creatio and third-party applications", "isCorrect": true },
      { "id": "b", "text": "To remotely run processes in Creatio", "isCorrect": false },
      { "id": "c", "text": "To perform user authentication", "isCorrect": false },
      { "id": "d", "text": "To build analytical reports according to the application data", "isCorrect": false }
    ]
  },
  {
    "id": "q95",
    "type": "multi",
    "topic": "Package architecture",
    "question": "What are the typical mistakes of binding data to packages? Select all that apply.",
    "options": [
      { "id": "a", "text": "System settings data is saved from SysCreatioSettings object", "isCorrect": false },
      { "id": "b", "text": "Lookup field data are not bound to the package", "isCorrect": true },
      { "id": "c", "text": "When adding system settings, only SysSettings object data is saved, SysSettingsValue records are missing.", "isCorrect": true }
    ]
  },
  {
    "id": "q96",
    "type": "single",
    "topic": "Server side",
    "question": "What data will be placed in which repository if the following code is executed: Dictionary dic = (Dictionary)Store.Data[DataLevel.Session][\"SomeDictionary\"]; dic[\"Key\"] = \"ChangedValue\"; dic.Add(\"NewKey\", \"NewValue\");",
    "options": [
      { "id": "a", "text": "In the data repository of the session level, the \"NewValue\" string will be placed with the \"NewKey\" key", "isCorrect": false },
      { "id": "b", "text": "No data will be placed in the session level repository after execution of the code. To add data to the repository, write the \"dic\" dictionary with the \"SomeDictionary\" key to it.", "isCorrect": true },
      { "id": "c", "text": "In the data repository of the session level, the \"NewValue\" string will be placed with the \"SomeDictionary\" key", "isCorrect": false },
      { "id": "d", "text": "In the cache repository of the session level, the \"NewValue\" string will be placed with the \"NewKey\" key", "isCorrect": false }
    ]
  },
  {
    "id": "q97",
    "type": "single",
    "topic": "Server side",
    "question": "Specify interface that should implement macros class for printing form MSWord",
    "options": [
      { "id": "a", "text": "IMacrosConverter", "isCorrect": false },
      { "id": "b", "text": "IAttributeConverter", "isCorrect": false },
      { "id": "c", "text": "IExpressionConverterInterface", "isCorrect": false },
      { "id": "d", "text": "IExpressionConverter", "isCorrect": true }
    ]
  },
  {
    "id": "q98",
    "type": "single",
    "topic": "Client side",
    "question": "Which property should be set to \"false\" to disable the filter in the client ESQ query:",
    "options": [
      { "id": "a", "text": "isEnabled", "isCorrect": true },
      { "id": "b", "text": "addFilter", "isCorrect": false },
      { "id": "c", "text": "createFilter", "isCorrect": false }
    ]
  },
  {
    "id": "q99",
    "type": "multi",
    "topic": "Server side",
    "question": "Please select which of the following is supported in the EntitySchemaQuery class? Select all options.",
    "options": [
      { "id": "a", "text": "Ability to build hierarchical queries", "isCorrect": true },
      { "id": "b", "text": "Access rights restrictions", "isCorrect": true },
      { "id": "c", "text": "Pagination of result data", "isCorrect": true },
      { "id": "d", "text": "Building queries with the SQL UNION operator", "isCorrect": false },
      { "id": "e", "text": "Caching of result data", "isCorrect": true }
    ]
  },
  {
    "id": "q102",
    "type": "single",
    "topic": "Package architecture",
    "question": "What must be done to use the external library functionality in the configuration program code (C# programming language)",
    "options": [
      { "id": "a", "text": "Add a library (dll file) into the package under the \"External assemblies\" tab. If necessary, connect the required library namespace with the \"using\" directive. Create instances of types from external libraries in a standard way using the \"new\" operator", "isCorrect": true },
      { "id": "b", "text": "Copy the library dll file to the application \"bin\" directory on the application server. To create instances of the types of libraries, use the following script: var t = new Namescpace.TypeName()", "isCorrect": false },
      { "id": "c", "text": "The application does not permit including external libraries", "isCorrect": false }
    ]
  },
  {
    "id": "q101",
    "type": "single",
    "topic": "Database",
    "question": "What is the difference between TRUNCATE TABLE table_name and DELETE FROM table_name?",
    "options": [
      { "id": "a", "text": "There is no difference, both commands clear database tables", "isCorrect": false },
      { "id": "b", "text": "The TRUNCATE command is used for triggering, and DELETE ignores the triggers", "isCorrect": false },
      { "id": "c", "text": "When the TRUNCATE command is called, the table is completely cleared, while the DELETE command deletes every record separately", "isCorrect": true }
    ]
  },
  {
    "id": "q120",
    "type": "single",
    "topic": "Server side",
    "question": "Which class must be used to create a custom DB query?",
    "options": [
      { "id": "a", "text": "Select", "isCorrect": false },
      { "id": "b", "text": "Update", "isCorrect": false },
      { "id": "c", "text": "Delete", "isCorrect": false },
      { "id": "d", "text": "Insert", "isCorrect": false },
      { "id": "e", "text": "EntitySchemaQuery", "isCorrect": false },
      { "id": "f", "text": "CustomQuery", "isCorrect": true },
      { "id": "g", "text": "There is no such class. Create and call a stored procedure in the DB", "isCorrect": false }
    ]
  },
  {
    "id": "q119",
    "type": "multi",
    "topic": "Server side",
    "question": "What alternative to the SetColumnValue() method can be used to save an image to an object column?",
    "options": [
      { "id": "a", "text": "SetImage(string valueName, byte[] streamBytes)", "isCorrect": false },
      { "id": "b", "text": "SetStreamValue(string valueName, System.IO.Stream value)", "isCorrect": true },
      { "id": "c", "text": "SetBytesValue(string valueName, byte[] streamBytes)", "isCorrect": true }
    ]
  },
  {
    "id": "q118",
    "type": "multi",
    "topic": "Server side",
    "question": "What EntitySchemaQuery methods are used for getting query results?",
    "options": [
      { "id": "a", "text": "GetEntity(UserConnection, Id)", "isCorrect": true },
      { "id": "b", "text": "FetchRecords()", "isCorrect": false },
      { "id": "c", "text": "GetEntityCollection(UserConnection)", "isCorrect": true },
      { "id": "d", "text": "FetchRecord(Id)", "isCorrect": false }
    ]
  },
  {
    "id": "q117",
    "type": "multi",
    "topic": "Server side",
    "question": "Which EntitySchemaQuery methods are used to obtain query results?",
    "options": [
      { "id": "a", "text": "GetEntity(UserConnection, Id)", "isCorrect": true },
      { "id": "b", "text": "GetEntityCollection(UserConnection)", "isCorrect": true },
      { "id": "c", "text": "FetchRecord(Id)", "isCorrect": false }
    ]
  },
  {
    "id": "q116",
    "type": "multi",
    "topic": "Server side",
    "question": "Proper use of the DBExecutor class requires (select all that apply):",
    "options": [
      { "id": "a", "text": "Calling the Dispose() method in the class instance if it is not \"wrapped\" in the \"using\" operator", "isCorrect": true },
      { "id": "b", "text": "Using class instances in a single thread", "isCorrect": true },
      { "id": "c", "text": "\"Wrapping\" the created instance of the class in the \"using\" operator", "isCorrect": true },
      { "id": "d", "text": "Using class instances in several threads", "isCorrect": false }
    ]
  },
  {
    "id": "q115",
    "type": "multi",
    "topic": "Application architecture",
    "question": "What are the functions of the session storage server (Redis) in Creatio? Select all that apply.",
    "options": [
      { "id": "a", "text": "Storage of the package change history made by the developer", "isCorrect": false },
      { "id": "b", "text": "Storage of cached data", "isCorrect": true },
      { "id": "c", "text": "Data exchange between the web-farm nodes", "isCorrect": true },
      { "id": "d", "text": "Storage of user data", "isCorrect": false },
      { "id": "e", "text": "Storage of user session data", "isCorrect": true }
    ]
  },
  {
    "id": "q114",
    "type": "single",
    "topic": "Server side",
    "question": "Which of the following types of expressions (EntitySchemaQueryExpressionType enumeration) are not used DataService?",
    "options": [
      { "id": "a", "text": "SubQuery", "isCorrect": false },
      { "id": "b", "text": "SchemaColumn", "isCorrect": false },
      { "id": "c", "text": "ArithmeticOperation", "isCorrect": false },
      { "id": "d", "text": "Macros", "isCorrect": true },
      { "id": "e", "text": "Function", "isCorrect": false },
      { "id": "f", "text": "Parameter", "isCorrect": false }
    ]
  },
  {
    "id": "q113",
    "type": "single",
    "topic": "Web services",
    "question": "What must be done to use custom types as incoming and outgoing parameters in the web service method?",
    "options": [
      { "id": "a", "text": "You cannot use custom types in the configuration web services. The services can only accept and return parameters of primitive types (int, char, etc.)", "isCorrect": false },
      { "id": "b", "text": "Implement a custom type in the web service class. Mark the type class with the [DataContract] attribute, and the class property with the [DataMember] attribute", "isCorrect": true },
      { "id": "c", "text": "Implement a custom type class in an arbitrary namespace and connect this namespace to the web service source code schema Create a custom type instance in the web service method", "isCorrect": false }
    ]
  },
  {
    "id": "q112",
    "type": "single",
    "topic": "Server side",
    "question": "What is data and cache storage used for?",
    "options": [
      { "id": "a", "text": "To work with files and images", "isCorrect": false },
      { "id": "b", "text": "To store key business data. CacheStore data is used to store detail data. DataStore data is used to store section data", "isCorrect": false },
      { "id": "c", "text": "To store operational data. CacheStore data can be deleted depending on the size of available free memory. DataStore data can be removed only by the developer", "isCorrect": true }
    ]
  },
  {
    "id": "q110",
    "type": "single",
    "topic": "Development workflow",
    "question": "To disable the file system development mode, edit the \"external\" Web.config file as follows:",
    "options": [
      { "id": "a", "text": "Set compilation debug=\"false\" targetFramework=\"4.5\"", "isCorrect": false },
      { "id": "b", "text": "Set compilation debug=\"true\" targetFramework=\"4.5\"", "isCorrect": false },
      { "id": "c", "text": "Set fileDesignMode enabled=\"false\"", "isCorrect": true },
      { "id": "d", "text": "Set fileDesignMode enabled=\"true\"", "isCorrect": false }
    ]
  },
  {
    "id": "q111",
    "type": "multi",
    "topic": "Configuration",
    "question": "How to add user rules for finding duplicates?",
    "options": [
      { "id": "a", "text": "Add a stored procedure to the application database", "isCorrect": true },
      { "id": "b", "text": "Use existing stored procedure tsp_FindDuplicateByColumn", "isCorrect": false },
      { "id": "c", "text": "Register a stored procedure as a new rule", "isCorrect": true },
      { "id": "d", "text": "Add a column with values for finding duplicates to the object schema", "isCorrect": true }
    ]
  },
  {
    "id": "q107",
    "type": "single",
    "topic": "Package architecture",
    "question": "What is the purpose of the \"Version\" property in a Creatio package?",
    "options": [
      { "id": "a", "text": "The property is used when generating directories in the SVN version control system repository", "isCorrect": true },
      { "id": "b", "text": "The property is used to determine the version of the .NET assemblies that are included in the package; it provides the launch of only suitable libraries", "isCorrect": false },
      { "id": "c", "text": "The property contains information for developers is not used by the application and version control system", "isCorrect": false },
      { "id": "d", "text": "The property is used in the application to run the desired version of the executable files", "isCorrect": false }
    ]
  },
  {
    "id": "q108",
    "type": "multi",
    "topic": "Development workflow",
    "question": "How to setup the \"internal\" Web.config file for server side debugging during disabled file system development mode?",
    "options": [
      { "id": "a", "text": "Set \"CompilerSourcesTempFolderPath\" value=\"some_path\"", "isCorrect": true },
      { "id": "b", "text": "Set compilation debug=\"true\" targetFramework=\"4.5\"", "isCorrect": false },
      { "id": "c", "text": "Set fileDesignMode enabled=\"true\"", "isCorrect": false },
      { "id": "d", "text": "Set \"IncludeDebugInformation\" value=\"true\"", "isCorrect": true }
    ]
  },
  {
    "id": "q109",
    "type": "single",
    "topic": "Access rights",
    "question": "Which class implements dynamic object access rights checks?",
    "options": [
      { "id": "a", "text": "DBSecurityEngine", "isCorrect": true },
      { "id": "b", "text": "DBEngine", "isCorrect": false },
      { "id": "c", "text": "CurrentUser", "isCorrect": false }
    ]
  },
  {
    "id": "q106",
    "type": "single",
    "topic": "Web services",
    "question": "Specify the web service that is responsible for executing requests from the client EntitySchemaQuery class",
    "options": [
      { "id": "a", "text": "EntitySchemaQueryService", "isCorrect": false },
      { "id": "b", "text": "DataService", "isCorrect": true },
      { "id": "c", "text": "EntityDataService", "isCorrect": false }
    ]
  },
  {
    "id": "q103",
    "type": "single",
    "topic": "Server side",
    "question": "How to get the text of an executed instance query of the EntitySchemaQuery class?",
    "options": [
      { "id": "a", "text": "var esqQueryText = esq.GetSelectQuery(UserConnection).GetSqlText()", "isCorrect": true },
      { "id": "b", "text": "var esqQueryText = esq.GetSqlText()", "isCorrect": false },
      { "id": "c", "text": "var esqQueryText = esq.GetQuery(UserConnection).GetSqlText()", "isCorrect": false }
    ]
  },
  {
    "id": "q104",
    "type": "single",
    "topic": "Business processes",
    "question": "Which business process element must be used for editing section records with user input?",
    "options": [
      { "id": "a", "text": "\"Modify data\" element", "isCorrect": false },
      { "id": "b", "text": "\"Edit page\" element", "isCorrect": true },
      { "id": "c", "text": "\"Script task\" element", "isCorrect": false }
    ]
  },
  {
    "id": "q105",
    "type": "single",
    "topic": "Package architecture",
    "question": "What does an object inherit from its parent object?",
    "options": [
      { "id": "a", "text": "Structure (columns)", "isCorrect": false },
      { "id": "b", "text": "Schema", "isCorrect": false },
      { "id": "c", "text": "Structure (columns) and logic (built-in process)", "isCorrect": true },
      { "id": "d", "text": "Indexes", "isCorrect": false }
    ]
  },
  {
    "id": "q100",
    "type": "single",
    "topic": "Business processes",
    "question": "How to handle an event that occurs after adding a new record to an object?",
    "options": [
      { "id": "a", "text": "Publish the object in the Object Designer. Create a configuration web-service and add a method that implements the event handler logic. In the built-in object process, add a \"Script task\" and bind the event handler to the handling method in the web service", "isCorrect": false },
      { "id": "b", "text": "In the Object Designer, subscribe to the \"After adding record\" event. In the built-in process of the object, add an event sub-process with the start message event and specify the name of the processed object event in the \"Which message event should start the process?\" field. Add a \"Script task\" element to the sub-process and enter the triggered code", "isCorrect": true },
      { "id": "c", "text": "In the Object Designer, subscribe to the \"After adding record\" event. In the built-in process of the object, add an event sub-process with the intermediate \"Wait for message\" event and specify the name of the processed object event in the \"Which message event should start the process?\" field. Add a \"Script task\" element to the subprocess and enter the triggered code", "isCorrect": false }
    ]
  }
];
