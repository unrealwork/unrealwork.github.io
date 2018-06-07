var fileConfigurationTooltipData = {
    '#protocol':
        'Network or file protocol to download CSV/JSON data files from a remote server or read it from the local filesystem.',
    '#connectionPoolConfig':
        'Pre-defined HTTP connection parameters with optional authentication credentials and custom network/connection settings.',
    '#path':
        'URI to the data file.<BR>' +
        'The URI must adhere to the generic RFC&nbsp;3986 URI form: <code>scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]</code>.<BR>' +
        'If HTTP Pool is selected, the URI should start with relative URI:<BR><code>[/]path[?query][#fragment]</code><BR>' +
        'FTP, SFTP and FILE protocols allow downloading multiple files using wildcard expression, for example, <code>file://tmp/reports/2016-*.csv</code>.<BR>' +
        'The Path field supports the following placeholders:<BR>' +
        '- ${ITEM} = Current element in the Item List<BR>' +
        '- ${TIME()} = Text output of the TIME function<BR>' +
        '- ${DATE_ITEM()} = Current element in the Date Item list.',
    '#entitySet' : 'A collection of elements to execute multiple file requests in a loop.<BR>' +
        'The current element in the loop can be accessed with ${ITEM} placeholder which can be embedded into Path and Default Entity fields. ' +
        'When Item List is selected and ${ITEM} is present in Path, the job will execute as many ' +
        'queries as there are elements in the list, substituting ${ITEM} with element value for each request.',
    '#watcherEnabled1' : 'Watch the target directories for file creations and modification and process the file without a delay, on change event.<BR>' +
        'The targets must exist at the time the configuration is executed.<BR>' +
        'Target directories that are deleted and re-created within the same execution cycle will not be watched.',
    '#watchInterval' : 'If set, the target directories/files will be watched for changes for the specified number of seconds.<BR>' +
        'If omitted or set to 0, the target directory will be watched for changes until the next job start time.',
    '#enableWebDriver1':
        'Supported by HTTP and HTTP_POOL protocols. When enabled, executes Driver Script.',
    '#driverScript':
        'Downloads the file by executing a set of pre-recorded browser actions such as opening a page and clicking on button to export a file.<BR>' +
        'The script can be recorded in Selenium IDE and exported into Java format.',
    '#driverFileEncoding':
        'File Encoding to use when saving a file downloaded with Driver Script.',
    '#driverTimeout':
        'Maximum time allowed for the Driver Script to run before it will time out.',
    '#parserType':
        'CSV or JSON. CSV file is uploaded into ATSD as is. The JSON file is converted to CSV format prior to ' +
        'uploading it into the database by converting matched JSON objects into a tabular format.',
    '#minimumLineCount':
        'Applies to CSV files.' +
        'Minimum line count for the CSV file to contain. An error will be raised if the threshold ' +
        'is greater than 0 and the number of lines in the file is less than the threshold.',
    '#firstLine':
        'Applies to CSV files. ' +
        'Checks if the first line in the file contains the specified text. The check is case-sensitive.<BR>' +
        'The following placeholders are supported:<BR>' +
        '- ${ITEM} = Current element in the Item List or Date Item List<BR>' +
        '- ${TIME()} = Text output of the TIME function<BR>' +
        '- ${PATH} = Full path to downloaded file<BR>' +
        '- ${FILE} = Name of the downloaded file.<BR>' +
        '- ${DIRECTORY} = Parent directory of the downloaded file.',
    '#jsonFileContains':
        'Checks if the downloaded JSON file contains the specified text, on any line. The check is case-sensitive."',
    '#rootObject':
        'JSON Path expression to match an object or a list of objects in the JSON document. Default path is <b>$</b> which stands for the root object. ' +
        'The collector will attempt to convert fields of the matched objects to a tabular structure, using field names as column names ' +
        'and field values as cell values. For fields in the nested objects, column names are formed by concatenating parent object names ' +
        'using dot notation. Each matched objects returned by the JSON path expression will be represented as a separate line in CSV file.',
    '#traversalDepth':
        'Limit matched object traversal. If Depth is set to a positive number, nested objects are included in CSV files up to their depth level ' +
        'measured as the difference between the nested object and the matched object. When Depth is set to 1, the collector will include only ' +
        'direct fields of the matched objects. If Depth is set to 0 or negative number, all nested objects will be traversed and included into CSV files.',
    '#included':
        'By default, all fields with primitive data types (number, string, boolean) and primitive fields from nested objects are included in ' +
        'the CSV file. Array fields are ignored. The list of included fields can be overridden explicitly by specifying their names, separated by comma.',
    '#excluded':
        'List of particular field names to be excluded from the CSV file. Applies when Included Fields is empty.',
    '#name':
        'CSV Parser name for parsing the uploaded CSV file.' +
        'The parser can be created on Configuration: Parser CSV page.' +
        'The parser should exist and be enabled at the time of upload.',
    '#detectEncoding1':
        "Automatically detect the file's charset based on its leading bytes, the header, and the heuristics. " +
        "The detected charset will be submitted to ATSD so that the file can be correctly parsed by the database.",
    '#encoding':
        "Specify the file's charset explicitly. The charset will be submitted to ATSD so that the file can be correctly parsed by the database.",
    '#metricPrefix':
        'Text added to all metrics names extracted from the CSV file, typically to column headers.<BR>' +
        "For example, if Metric Prefix is set to 'custom.', and the file contains 'PageViews' column, the resulting metric name will be 'custom.Pageviews'.",
    '#defaultEntity':
        "Default Entity name used if the file doesn't contain any entity names. If configured, overrides 'Default Entity' setting in the CSV parser configuration.<BR>" +
        "Default Entity name may include placeholders such as ${ITEM} which will be substituted by element value when Item List is selected. Supported placeholders are:<BR>" +
        '- ${ITEM} = Current element in the Item List<BR>' +
        '- ${TIME()} = Text output of the TIME function<BR>' +
        '- ${FILE} = Name of the downloaded file<BR>' +
        '- ${DIRECTORY} = Parent directory of downloaded file<BR>' +
        '- ${PATH} = Full path to downloaded file<BR>' +
        'Placeholder values can be further formatted with built-in <a href=\'https://github.com/axibase/axibase-collector-docs/blob/master/jobs/placeholders.md\'>string functions</a>, for example <code>${ITEM?keep_after_last(&quot;-&quot;)?replace(\' \',\'.\')}</code><BR>',
    '#defaultTags':
        'Predefined tags added to all commands, one name=value pair per line.<BR>' +
        'Supported placeholders are:<BR>' +
        '- ${ITEM} = Current element in the Item List<BR>' +
        '- ${TIME()} = Text output of the TIME function<BR>' +
        '- ${FILE} = Name of the downloaded file<BR>' +
        '- ${DIRECTORY} = Parent directory of downloaded file<BR>' +
        '- ${PATH} = Full path to the downloaded file',
    '#useTime1':
        'When enabled, forces all data contained in the CSV file to be stored with the current time of the Collector instead of date/time possibly contained in the file. ' +
        "This option should be used when CSV file doesn't contain any time/date information.",
    '#timeZone':
        'Time Zone used by ATSD when parsing dates in the CSV file, if time zone is not present in the datetime format.',
    '#wait1':
        'Wait for ATSD to finish validating and parsing the uploaded file. If disabled, the server responds 200 immediately after the file is transferred to ATSD. ' +
        'If Wait for Upload is disabled, the collector job may not know if the upload file is valid and whether it contains any errors.',
    '#rules1':
        'Process parsed commands in the ATSD rule engine. If enabled, allows the data in CSV file to be checked by rules.',
    '#ignoreDuplicates1':
        "Prevents unchanged files from being repeatedly uploaded into the database.<BR><BR>" +
        "When enabled, the collector compares the downloaded file's last modified time (FILE, FTP, SFTP) or MD5 hashcode " +
        "(HTTP, HTTP_POOL, SCP) with the previously stored value and ignores the upload if the file hasn't changed.<BR>" +
        "In case of FTP and SFTP protocols, unchanged remote files are not downloaded by collector.<BR>" +
        "In case of HTTP and HTTP_POOL protocol, the collector checks \"Last-Modified\" response header, " +
        "and if the header is present and the value hasn't changed since last execution, the response content is not downloaded.",
    '#deleteFileOnUpload1':
        'Applies to FILE protocol. ' +
        'Delete source files that were successfully uploaded into the database.',
    '#copyFiles1':
        'Copy downloaded file(s) into a Success or Error directory based on local or remote ' +
        'status code. For example, if the file failed CSV format validation, it will be copied to the Error directory.',
    '#successDir':
        'Absolute path to a directory for storing successfully uploaded files. Supports placeholders: ${ITEM}, ${TIME()}',
    '#errorDir':
        'Absolute path to a directory for storing file that failed to get uploaded successfully for any reason. Supports placeholders: ${ITEM}, ${TIME()}',
    '#method': 'HTTP Method executed: GET or POST. POST method provides a way to specify request headers and payload parameters.',
    '#payload': 'POST method payload.',
    '#headers': 'HTTP request headers.'
};

var jsonConfigurationTooltipData = {
    '#name':
        'Configuration name',
    '#protocol':
          'HTTP or File protocol to download JSON files from a remote server or read them from the local filesystem. File protocol supports wildcards in Path.',
    '#connectionPoolConfig':
        'Pre-defined HTTP connection parameters to limit the number of open connections, to customize timeout settings, and to re-use connections across multiple requests.<BR>' + 
        'When HTTP Pool is selected, the Path field should contain relative URI: [/]path[?query][#fragment]',
    '#path':
        'URI Path to JSON file, for example https://example.com/api/daily-summary.json. ' +
        'If HTTP Pool is enabled, the path should be relative, for example /api/daily-summary.json. Otherwise the Path should be a full URI including the protocol, host, port and path.<BR>' +
        'The Path supports the following placeholders:<BR>' +
        '- ${ITEM} current element in the Item List<BR>' +
        '- ${TIME()} text output of the TIME function<BR>' +
        '- ${DATE_ITEM()} text output of the DATE_ITEM function.<BR><BR>' +
        'If ${DATE_ITEM()} is present in Path, the job will execute as many queries as there are elements returned by the ${DATE_ITEM()} function, substituting the ${DATE_ITEM()} placeholder with the element value for each request.<BR>' +
        'The Path can include either the ${DATE_ITEM()} or ${ITEM} function, but not both.',
    '#format':
        'JSON or JSON Lines. If JSON Lines format is selected, the input lines will be added to an array object and parsed as a JSON document.',
    '#ignoreDuplicates':
          "Prevents unchanged files or http entities from being repeatedly processed.<BR><BR>" +
          "When enabled, the collector compares the file's last modified time (FILE) or \"Last-Modified\" header/MD5 hashcode " +
          "(HTTP, HTTP_POOL) with the previously stored value and ignores it if there were no changes.<BR>" +
          "In the case of HTTP and HTTP_POOL protocols, the collector checks the \"Last-Modified\" response header. " +
          "If the header is present and the value hasn't changed since the last execution, the response content is not downloaded.",
    '#ignoreInvalidCommands' :
        'If enabled, invalid commands will be ignored.',
    '#deleteFileOnUpload':
        'Applies to FILE protocol. Delete source file(s) that were parsed into at least 1 command which was successfully sent to the database.',
    '#entitySet':
        'A collection of elements to execute multiple requests for different JSON files in a loop.<BR>' +
        'The current element in the loop can be accessed with the ${ITEM} placeholder, which can be embedded into the Path and Default Entity fields.<BR>' + 
        'When the Item List is selected and ${ITEM} is present in the Path, the job will execute as many queries as there are elements in the list, substituting the ${ITEM} with the element value for each request.',
    '#entityLookup':
        'A set of mappings for converting entity names retrieved from the JSON document into entity names to be stored in the database.',
    '#payloadMethod':
        'HTTP Method executed: GET or POST. POST method provides a way to specify request parameters in payload.',
    '#payload':
        'POST request payload.',
    '#httpHeaders':
        'Specify request headers.',
    '#enableWebDriver1':
        'When enabled, executes Driver Script.',
    '#driverFileEncoding':
        'File Encoding to use when saving a file downloaded with Driver Script.',
    '#driverScript':
        'Downloads the file by executing a set of pre-recorded browser actions such as opening a page and clicking on button to export a file.<BR>' +
        'The script is recorded in Selenium IDE and exported into Java format.',
    '#driverTimeout':
        'Maximum time allowed for the Driver Script to run before it will be aborted.',
    '#streamEnabled':
        'If enabled, items will be processed sequentially.'
};

var jsonConfigurationSettingsTooltipData = {
    'td[id ^=jsonPathLabel_ ]':
        'JSON Path expression to match an object or a list of objects in the JSON document. Default path is $ which stands for the root object.<BR>' +
        'JSON Path supports the following placeholders:<BR>' +
        '* ${ITEM} = Current element in the Item List<BR>' +
        '* ${TIME()} = Text output of the TIME function<BR>' +
        '* ${DATE_ITEM()} = Text output of the DATE_ITEM function.<BR><BR>' +
        'If ${DATE_ITEM()} is present in JSON Path, the JSON Path expression will return a combined list of objects that matched any of the elements returned by ${DATE_ITEM()} function.',
    'td[id ^=depthLabel_ ]':
        'Maximum traversal limit measured as the difference between the matched object and nested objects. ' +
        'When Depth is set to 1, the collector will include only direct fields of the matched object. ' +
        'If Depth is set to 0 or negative number, all nested objects will be traversed and included into commands.',
    'td[id ^=customTagsLabel_ ]':
        'Predefined tags added to all commands, one name=value pair per line.<br>Supported placeholders:<BR>' +
        '* ${HOST} = Hostname from which the JSON document was loaded.<BR>' +
        '* ${ITEM} = Current element in the Item List.<BR>' +
        '* ${PARENT(n)} = Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}<BR>' +
        '* ${field_name} = Value of the specified filed in the matched object.',
    'td[id ^=renamedFieldsLabel_ ]':
        'Pairs of oldname=newname mappings, one per line, to rename fields in the matched object.',
    'td[id ^=entityLabel_ ]':
        'Entity name, specified literally or extracted from the given field in the matched object.<BR><BR>' +
        'Default Entity name supports the following options:<BR>' +
        '* Text value<BR>' +
        '* ${HOST} placeholder = Hostname from which the JSON document was loaded.<BR>' +
        '* ${ITEM} placeholder = Current element in the Item List.<BR>' +
        '* ${PARENT(n)} placeholder = Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.<BR>' +
        'Placeholder values can be further formatted with built-in <a href=\'https://github.com/axibase/axibase-collector-docs/blob/master/jobs/placeholders.md\'>string functions</a>, for example <code>\${ITEM?keep_after_last(&quot;-&quot;)?replace(\' \',\'.\')}</code><BR><BR>' +
        'Entity Field supports the following options:<BR>' +
        '* Name of the field containing entity in the matched object<BR>' + 
        '* JSON Path',
    'td[id ^=entityPrefixLabel_ ]':
        'Text added to the entity name retrieved from the specified field.<BR>' +
        'For example, if Entity Prefix is set to \'custom.\', and the field value is \'my-host\', the resulting entity name will be \'custom.my-host\'.',
    'td[id ^=timeValueLabel_]':
        'Time Value can be specified literally or extracted from the given field in the matched object.<BR><BR>' +
        'Default Time Value supports the following options:<BR>' +
        '* ${TIME()} = Text output of the TIME function<BR>' +
        '* ${ITEM} = Current element in the Item List.<BR>' +
        '* ${PARENT(n)} = Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.<BR><BR>' +
        'Time Field supports the following options:<BR>' +
        '* Name of the field containing date in the matched object<BR>' +
        '* JSON Path',
    'td[id ^=timeFilterLabel_]': 'Calendar expression to specify minimum time for commands. Commands with timestamp earlier than specified will be ignored.',
    'td[id ^=timeFormatAndZoneLabel_ ]':
        'Date format applied when parsing Time Value. Time zone can be optionally applied if the extracted date is in local time, otherwise local Collector time zone is in effect.',
    'td[id ^=metricPrefixLabel_ ]':
        'Text added to the metric name.<BR>' +
        'For example, if Metric Prefix is set to \'custom.\', and the metric name is \'cpu_busy\', the resulting metric name will be \'custom.cpu_busy\'.',
    'td[id ^=includedFieldsLabel_ ]':
        'By default, all numeric fields from nested objects are included in commands. The list of included fields can be overridden explicitly by specifying their names, separated by comma. If the named included field is not numeric, it will be added as a series tag.',
    'td[id ^=excludedFieldsLabel_ ]':
        'List of particular field names to be excluded from commands. Applies when Included Fields is empty.',
    'td[id ^=metricNameAndValueLabel_ ]':
        'Metric name and value extracted from the given fields in the matched object.<br>' +
        'Metric Name supports additional option:<br>' +
        '* ${ITEM} = Current element in the Item List.',
    'td[id ^=propertyTypeLabel_ ]':
        'Property type, specified literally or extracted from the given field in the matched object.<BR><BR>' +
        'Default Type supports the following options:<BR>' +
        '* Text value<BR>' +
        '* ${ITEM} = Current element in the Item List.<BR>' +
        '* ${PARENT(n)} = Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.<BR><BR>' +
        'Default Type supports additional placeholders, if FILE protocol is selected:<BR>' +
        '* ${FILE} = Name of the file<BR>' +
        '* ${DIRECTORY} = Parent directory of file<BR>' +
        '* ${PATH} = Full path to file<BR><BR>' +
        'Type Field supports the following options:<BR>' +
        '* Name of the field containing property type in the matched object<BR>' +
        '* JSON Path',
    'td[id ^=propertyKeyFieldsLabel_ ]':
        'Property key field names, included as keys into the property command.',
    'td[id ^=propertyValueFieldsLabel_ ]':
        'Property value fields, included as tags into the property command.',
    'td[ id ^=messageTypeLabel_ ]':
        'Type = Message type, specified literally or extracted from the given field in the matched object.<BR><BR>' +
        'Default Type supports the following options:<BR>' +
        '* Text value<BR>' +
        '* ${ITEM} = Current element in the Item List.<BR>' +
        '* ${PARENT(n)} = Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.<BR>' +
        'Default Type supports additional placeholders, if FILE protocol is selected:<BR>' +
        '* ${FILE} = Name of the file<BR>' +
        '* ${DIRECTORY} = Parent directory of file<BR>' +
        '* ${PATH} = Full path to file<BR><BR>' +
        'Type Field supports the following options:<BR>' +
        '* Name of the field containing message type in the matched object<BR>' +
        '* JSON Path',
    'td[id ^=messageSourceLabel_ ]':
        'Message source, specified literally or extracted from the given field in the matched object.<BR><BR>' +
        'Default Source supports the following options:<BR>' +
        '* Text value<BR>' +
        '* ${ITEM} placeholder - Current element in the Item List.<BR>' +
        '* ${PARENT(n)} placeholder - Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.<BR>' +
        'Default Source supports additional placeholders, if FILE protocol is selected:<BR>' +
        '* ${FILE} = Name of the file<BR>' +
        '* ${DIRECTORY} = Parent directory of file<BR>' +
        '* ${PATH} = Full path to file<BR><BR>' +
        'Source Field supports the following options:<BR>' +
        '* Name of the field containing message source in the matched object<BR>' +
        '* JSON Path',
    'td[id ^=messageTagFieldsLabel_ ]':
        'Message tags, included as tags into message command.',
    'td[id ^=messageValueLabel_ ]':
        'Message = Message text, specified literally or extracted from the given field in the matched object.<BR><BR>' +
        'Default Message supports the following options:<BR>' +
        '* Text value<BR>' +
        '* ${ITEM} = Current element in the Item List.<BR>' +
        '* ${PARENT(n)} = Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.<BR>' +
        'Default Message supports additional placeholders, if FILE protocol is selected:<BR>' +
        '* ${FILE} = Name of the file<BR>' +
        '* ${DIRECTORY} = Parent directory of file<BR>' +
        '* ${PATH} = Full path to file<BR><BR>' +
        'Message Field supports the following options:<BR>' +
        '* Name of the field containing message source in the matched object<BR>' +
        '* JSON Path'
};

var databaseTooltipData = {
    '#name' : 'Name of data source',
    '#type' : 'Type of database.',
    "#protocol" : "Network protocol used to connect to ATSD. May be HTTP or HTTPS",
    '#server' : 'IP or hostname of target server',
    '#port' : 'Port on which the database is listening',
    '#database' : 'Name of the database, residing on the database server',
    '#instance' : 'Name of the instance',
    '#dbUser' : 'Username which will be connecting to the database. We recommend that a read-only account is created to access the database',
    '#dbPasswd' : 'User password',
    '#url' : 'Vendor-specific connection URL format',
    '#driverClassName' : 'Fully qualified name of driver class',
    '#driverProperties' : 'Extended JDBC diver properties, they are specific to each database',
    '#testQuery' : 'Test query to keep the connection alive',
    '#maxActive' : 'Maximum number of active connections',
    '#maxIdle' : 'Maximum number of idle connections',
    '#minIdle' : 'Minimum number of idle connections',
    '#initialSize' : 'Initial size of the connection pool',
    '#maxWaitSeconds' : 'Maximum number of seconds for a job to wait until it requires a connection from the pool',
    '#maxAgeMinutes' : 'Maximum duration of the connection, after which the connection will be closed and reopened',
    '#loginTimeoutSeconds' : 'Wait duration when opening a connection',
    '#idleTimeoutSeconds' : 'Duration after which an unused connection is closed',
    '#socketTimeoutSeconds' : 'Duration after which the connection is dropped if there is no response from the server',
    '#active' : 'Current number of active connections in pool',
    '#idle' : 'Current number of idle connections in pool'
};

var dockerConfigurationTooltipData = {
    '#excludedProcesses' : 'List of expressions, separated by comma, to exclude matching processes (ps aux) from collection. The expressions support * as a wildcard.',
    '#propertyRefreshInterval' : 'Interval for refreshing detailed image and container properties.',
    '#apiVersion' : 'API version used when querying Docker Engine API. Defaults to \'latest\'. Can be set to a specific version to ensure compatibility.',
    '#processCollectionInterval' : 'Interval at which top process list is collected from running docker containers',
    '#watcherEnabled' : 'Enable continuous monitoring of container lifecycle events instead of scheduled polling.',
    '#statisticsInterval' : 'Interval at which utilization statistics from running containers are collected.',
    '#environmentTags' : 'List of ENV variables stored as entity tags',
    '#checkConfiguration' : 'Interval for checking for records that  are no longer present in Docker, but exist in ATSD. Such records will be marked with status = \'deleted\'.',
    '#retainDeletedContainers' : 'Containers with status = \'deleted\' will initially be retained in ATSD for the specified time interval.<BR>' +
      'The status of these containers is marked as ‘deleted’. After the interval has passed, the containers will be permanently removed from ATSD.',
    '#retainDeletedEntities' : 'Remove images/volumes/networks with status = \'deleted\' from ATSD.',
    '#entitySet' : 'List of process name expressions to exclude matching processes (ps aux) from being collected by \'docker.container.process.top\' property' +
      ' and from being counted with \'docker.process.filtered\' metric. Wildcard \'*\' is supported in expressions.',
    '#containerSizeInterval' : 'Interval at which container size statistics are collected.<BR>' +
      'The request may take several minutes to complete and is not recommended for frequent monitoring.<BR>' +
      'If enabled, the recommended sampling interval is 3 hours.'
};

var snmpConfigurationTooltipData = {
    '#configName' : 'Name of current configuration.',
    '#transport' : 'TCP or UDP protocol, depending on the configuration of the queried SNMP service.',
    '#port' : 'TCP or UDP port, depending on the configuration of the queried SNMP service.',
    '#mibName' : 'Choose one of the uploaded MIB files from the drop-down list. ' +
        'To upload your MIB, navigate to Admin > SNMP MIBs and click Upload. Otherwise it will not appear in the list.',
    '#timeout' : 'Number of seconds after which the query will be interrupted, -1 is unlimited.',
    '#retries' :'Number of retries to establish a connection.',
    '#maxRepetitions' : 'Defines the maximum number of iterations over the repeating variables.',
    '#nonRepeaters' : 'Defines the number of supplied variables that should not be iterated over.',
    '#versionSelect' : 'SNMP version.',
    '#community' : 'Community String (default is <b>public</b>)',
    '#metricPrefix' : 'Prefix added to metric names, used to identify and group metrics.',
    '#entitySet' : 'Queried SNMP services.',
    '#tagNames' : 'Source of tags.',
    '#metricColumns' : 'Columns containing the metric values.',
    '#securityName' : 'Name of user for the 3rd version of the protocol with security support. ',
    '#authenticationPassPhrase' : 'Password or phrase for authentication. ',
    '#authProtocol' : 'Encryption protocol for authentication. ',
    '#privacyPassPhrase' : 'Pass phrase for data transmission.',
    '#privacyProtocol' : 'Protocol for data encryption.',
    '#secLevel' : 'Security type.<br>Possible values:' +
        '<ul><li>NO_AUTH_NO_PRIV - no authentication and no encryption.</li>' +
        '<li>AUTH_NO_PRIV - authentication and no encryption.</li>' +
        '<li>AUTH_PRIV - with authentication and encryption.</li></ul>'
};

var jdbcConfigurationTooltipData = {
    "#queryRow" : "Query field must contain the entity name, time, and a collection of metric columns.",
    "#entityRow" : "<b>Default Entity:</b> A default entity to the collected metrics.<br>" +
        "<b>Entity Column:</b> A column that contains the entity names.",
    "#entityExpressionRow" : "Freemarker expression to convert entities.<br>For example:<br>${city?keep_after('.')}<br>${LOOKUP('city codes', city)}",
    "#defaultTagsRow" : "Predefined tags added to all commands, one name=value pair per line.",
    "#tagsRow" : "<b>Tag Name Columns:</b> Columns containing tag names.<br>" +
    "<b>Tag Value Columns:</b> Columns containing tag values.",
    "#tagColumnsRow" : "Columns that contain tags or meta data defining the series.",
    "#commandTypeRow" : "Type of data. Possible values: SERIES, PROPERTY, BOTH, METRIC, ENTITY",
    "#defaultMetricRow" : "Assign a default metric to the collected series. All series will be stored in ATSD with this metric.",
    "#metricColumnsRow" : "<b>Include:</b> Columns containing metric values.<br>" +
        "<b>Exclude:</b> Metric columns that you want to skip.",
    "#metricRow" : "<b>Default Metric Name:</b> A default metric assigned to the collected series. All series will be stored in ATSD with this metric.<br>" +
        "<b>Metric Name Column:</b> Column containing metric (series) names.",
    "#metricValueColumnsRow" : 'Columns containing metric (series) values. It is possible to collect multiple value columns for the same metric, as is common ' +
        'in aggregation queries. For example: cnt, avg, max, min, sum. <br> Example query: <br> SELECT st.SAMPLE_TIME, e.ENTITY_NAME, sd.NAME AS METRIC, ' +
        '<br> COUNT(hs.STAT_VAL) AS "cnt", <br> AVG(hs.STAT_VAL) AS "avg", <br> SUM(hs.STAT_VAL) AS "sum", <br> MAX(hs.STAT_VAL) AS "max", <br> MIN(hs.STAT_VAL) ' +
        'AS "min" <br> FROM VPX_HIST_STAT1 ...',
    "#metricPrefixRow" : "Metric prefix can be assigned to easily sort and differentiate metrics in ATSD.",
    "#ignoreNumberParseErrorsRow" : "Ignore cells that fail to parse from string into number without raising error. Default: false.",
    "#timeColumnRow" : "Column containing the time stamp.",
    "#timeTypeRow" : "Timestamp type. <br> Possible values: TIMESTAMP, TIVOLI, TEXT, UNIX",
    "#timeFormatRow" : "Format of the timestamp.",
    "#timeRoundRow" : "Time will be rounded before storing the series in ATSD. <br> Possible values: MILLISECOND, SECONDS, MINUTE, HOUR, DAY",
    "#timeZoneRow" : "Time zone in which the data was originally collected and stored.",
    "#commandTimeZoneRow" : 'Default Time Zone or column containing the Time Zone Identifier as specified in ' +
        '<a href="https://github.com/axibase/atsd-docs/blob/master/api/network/timezone-list.md" target="_blank">documentation</a>.',
    "#checkLastTimeRow" : "Ignore metrics that have time set to less than the previous entry.",
    "#queryWithTimeRow" : "When executing the job, the server will be set to the maximum time of the previous data.",
    "#lastTimeColumnRow" : "",
    "#maxRowsRow" : "Maximum number of rows that will be collected with each batch, -1 is unlimited.",
    "#queryTimeoutRow" : "Number of seconds after which the query will be interrupted, -1 is unlimited.",
    "#startCollectTimeRow" : "<a target='_blank' href='https://github.com/axibase/atsd-docs/blob/master/end-time-syntax.md'>Endtime expression</a> defining the beginning of the data collection interval, for example, previous_week.",
    "#propertyTypeRow" : "<b>Property Default Type:</b> <br>" +
        "<b>Property Type Column:</b> ",
    "#propertyKeyColumnsRow" : "",
    "#propertyValueColumnsRow" : "",
    "#ignoredPropertyValueColumnsRow" : "",
    "#labelRow" : "<b>Label Column:</b> Column containing metric or entity label.<br>" +
        "<b>Default Label:</b> Label applied to all generated metrics or entities",
    "#descriptionRow" : "Column containing metric or entity description.",
    "#metricDataTypeRow" : "<b>Default Metric Data Type:</b> Default metric data type. One of: short, integer, long, float, double, decimal<br>" +
        "<b>Metric Data Type Column:</b> Column containing metric datatype. One of: short, integer, long, float, double, decimal",
    "#interpolationRow" : "<b>Default Interpolation Mode:</b> Default interpolation mode setting. One of: LINEAR, PREVIOUS, or NONE.<br>" +
        "<b>Interpolation Mode Column:</b> Column containing interpolation mode setting. Should contain a string value, case-insensitive. Possible values: LINEAR, PREVIOUS, or NONE",
    "#filterRow" : "Column containing metric filter expression.",
    "#versioningRow" : "<b>Default Versioning:</b> Check default versioning behavior if versioning column is not specified<br>" +
        "<b>Versioning Column:</b> Column specifying if metric is versioned.",
    "#boundariesRow" : "Minimum and Maximum Values",
    "#unitsRow" : "Measurement Units",
    "#messageColumnRow" : "Column containing message body",
    "#messageTypeRow" : "Type applied to all messages or column containing message type",
    "#messageSourceRow" : "Source applied to all messages or column containing message source",
    "#severityRow" : "String representation of message severity",
    "#splitConditionRow" : "Split results into multiple smaller resultsets by entering WHERE conditions to be inserted into the query text." +
        "Each condition must be specified on a separate line." +
        "The query text should include `${SPLIT_CONDITION}` placeholder which will be replaced with the condition text at each iteration."
};

var tcpConfigurationTooltipData = {
    "#name" : "Configuration name",
    "#port" : "Default TCP port to test in case the port is not specified in the Item List element. If the TCP port is invalid (outside of 1 - 65535 range), the connection is excluded from testing.",
    "#entitySet" : "List of server addresses, containing the remote system's hostname or IP address, followed by an optional :{port} suffix",
    "#entityName" : "Entity name if different from the server name used in the TCP connection test",
    "#urlFormat" : "Freemarker expression to transform Item List element into a {server}:{port} format, for example, by extracting these fields from a CSV line.<br>" +
        "Example: ${ITEM?split(',')[1]}:${ITEM?split(',')[2]} to extract fields from line: dns,yes,10.102.0.6,443",
    "#tcpMetricPrefix" : "Text prepended to metric names. The built-in metric names are: tcp-connect-status and tcp-connect-time.",
    "#defaultTags" : "Predefined tags added to series, one name=value pair per line.",
    "#timeout" : "Number of seconds to wait for the TCP connection to be established.",
    "#failureRetestNumber" : "Number of tries in case the initial TCP connection fails.",
    "#failureRetestDelay" : "Number of seconds to wait between Rest connection attempts."
};

var collectionTooltipData = {
    "#name" : "Item List Name",
    "#type" : "The type determines the source from which the list elements (lines of text) are retrieved. The TEXT item list is created from manually entered values.",
    "#description" : "Item List Description",
    "#textCommand" : "A list of commands returning Item List elements, one per line. During execution a temporary file is created in the directory " +
        "$AXIBASE_COLLECTOR_HOME/conf/scripts, also this directory is used as working directory.<BR>" +
        "It is recommended to specify a command interpreter by providing a shebang on the first line, e.g. #!/usr/bin/env bash<BR>" +
        "You must provide the setting 'script.text.execute.allow=true' in server.properties file in order to be able to use this feature.",
    "#connectionPoolConfig" : "HTTP Pool specifying connection properties to ATSD from which the records will be retrieved",
    "#entity" : "Entity name or pattern containing * as a wildcard.",
    "#entityGroup" : "Entity group name to filter records for entities that are members of this group",
    "#entityExpression" : "An expression to filter entities: all or a subset matched with Entity/Entity Group fields.",
    "#entityTags" : "List of entity tags to be concatenated into a line using separator specified in Separator field. All fields are concatenated, if this field is set to *.",
    "#keysTags" : "List of property keys and tags to be concatenated into a line using separator specified in Separator field. All fields are concatenated, if this field is set to *.",
    "#separator" : "Separator used when concatenating multiple keys/tags.",
    "#discardDuplicates" : "Eliminate duplicate elements (lines) from the list prior to making it available to job configurations.",
    "#databaseConfiguration" : "Database from which the item list records will be selected.",
    "#contentFormat" : "Content format in the file.",
    "#jsonPath" : "JSON Path expression to match a list of items in the JSON document."
};

var jobTooltipData = {
    "#enabled1" : "Job status. Set status to 'Enabled' to execute the job on schedule.",
    "#name" : "Job name",
    "#atsdConfiguration" : "Select a database for storing data collected by this job",
    "#cronExpression" : "Cron fields are specified in the following order: second minute hour day-of-month month day-of-week.<BR>" +
        "You can randomize time of execution by putting R onto time placeholders.<BR><BR>" +
        "Examples:<BR>" +
        "0 0/15 * * * ? (Every 15 minutes).<BR>" +
        "0 0 6 * * MON-FRI (Every working day at 06:00)<BR>" +
        "R */5 * * * ? (Every fifth minute at random second)",
    "#databaseConfiguration" : "A database that will be queried"
};

var entityLookupTooltipData = {
    "#name" : " Replacement table name, the name must be unique.",
    "#entities" : "Each record must be on a separate line and contain a key and a value, separated by equal sign, for example: hello=world. Lines starting with hash are ignored."
};

var piConfigurationTooltipData = {
    "#entityRow" : "The expression to retrieve entity name from PI tag name. Supported placeholders:<BR>" +
        "- ${TAG} = current processed PI tag<BR>" +
        "- ${LOOKUP()} = function to retrieve a value for key from an Item List<BR>",
    "#defaultEntityRow" : "Default entity applied if Entity Expression is not specified or entity is not found in the Item List.",
    "#defaultTagsRow" : "Predefined tags added to series, one name=value pair per line. " +
        "Tag value can refer to the ${TAG} placeholder.<BR> For example, assuming PI tag name is BER_17_AIRCOND_2, the below expressions will be resolved as follows:<BR>" +
        "<B>location=${TAG?split('_')[0]}<BR>office=${TAG?split('_')[1]}<BR>metric=${TAG?split('_')[2]}<BR>sensor=${TAG?split('_')[3]}</B><BR>" +
        "It will be resolved as:<BR><B>location=BER<BR>office=17<BR>metric=AIRCOND<BR>sensor=2",
    "#pisnapshotWhereFilterRow" : "An expression included in the WHERE clause when querying the pisnapshot table. The expression must return boolean value. Typically, the expression filters PI tags by name, for example:<BR>" +
        "<BR>tag LIKE 'AZ1%' OR tag LIKE 'HK3%'",
    "#picomp2WhereFilterRow" : "An expression included in the WHERE clause when querying the picomp2 table. The expression must return a boolean value.<BR>" +
        "Example:<BR>status = 0",
    "#pipoint2WhereFilterRow" : "An expression included in the WHERE clause when querying the picomp2 table. The expression must return a boolean value.<BR>" +
        "Example:<BR>pointtypex IN ('float32', 'float64') AND step = 0",
    "#startCollectTimeRow" : "<a target='_blank' href='https://github.com/axibase/atsd-docs/blob/master/end-time-syntax.md'>Endtime expression</a> defining the beginning of the data collection interval, for example, previous_week.",
    "#useJoinRow": "If disabled, results of pipoint2 and pisnapshot tables will be merged on the client side (in Collector). " +
        "If enabled, one query with JOIN clause will be executed to filter tags.",
    "#ignoreUnresolvedEntityRow" : "If enabled, skip tags for which no valid entity can be retrieved. If the entity is invalid and this case is not ignored, the job will fail with an error.",
    "#collectQsaRow" : "If enabled, collect non-default values of questionable, substituted, annotated, annotations columns",
    "#collectStatusRow" : "If enabled, collect non-default (non-zero) status",
    "#storeAsAnnotationRow" : 'If enabled, QSA and status columns will be serialized into text (annotation) field like "questionable=true;substituted=true;annotated=true;status=-253".<BR>' +
        "If disabled, QSA and/or status columns will be stored as series tags",
    "#maxTagsInQueryRow" : "Maximum number of tags included in one query.",
    "#maxRowsRow" : "Maximum number of rows per query",
    "#queryTimeoutRow" : "Query timeout in seconds"
};

var socrataConfigurationTooltipData = {
    '#name':
        'Configuration name',
    '#path':
        'Full URL to the dataset including the protocol, host, port, path, and optional query string, for example https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD. ' +
        'The Path supports the following placeholders:<BR>' +
        '- ${ITEM} current element in the Item List<BR>' +
        '- ${TIME()} text output of the TIME function<BR>' +
        '- ${DATE_ITEM()} text output of the DATE_ITEM function.<BR><BR>' +
        'If ${DATE_ITEM()} is present in Path, the job will execute as many queries as there are elements returned by the ${DATE_ITEM()} function, substituting the ${DATE_ITEM()} placeholder with the element value for each request.<BR>' +
        'The Path can include either the ${DATE_ITEM()} or ${ITEM} function, but not both.',
    '#ignoreDuplicates':
        'Prevents unchanged http entities from being repeatedly processed.<BR><BR>' +
        'When enabled, the collector compares the \"Last-Modified\" header/MD5 hashcode ' +
        'with the previously stored value and ignores it if there were no changes.<BR>' +
        'In the case of HTTP and HTTP_POOL protocols, the collector checks the \"Last-Modified\" response header. ' +
        'If the header is present and the value hasn\'t changed since the last execution, the response content is not downloaded.',
    '#entitySet':
        'A collection of elements to execute multiple requests for different SOCRATA files in a loop.<BR>' +
        'The current element in the loop can be accessed with the ${ITEM} placeholder, which can be embedded into the Path and Default Entity fields.<BR>' + 
        'When the Item List is selected and ${ITEM} is present in the Path, the job will execute as many queries as there are elements in the list, substituting the ${ITEM} with the element value for each request.',
    '#customTags':
        'Predefined tags added to all commands, one name=value pair per line.<BR>' +
        'Examples:.<BR>' +
        '* region=${region}<BR>' +
        '* class=${graduating_class}<BR>' +
        'Custom tags can also be used to turn a numeric column into a series tag by excluding it from metric fields and adding it as a custom tag.',
    '#rowFilter' : 
        'The row filter expression excludes matching rows for which the expression evaluates to \'true\'.<BR>' +
        'The expression should return a boolean value and may reference field values using ${field-name} placeholder, for example:<BR>' +
        '* compare strings: ${code} == \'s\', this means that all rows with field code equal to \'s\' will be ignored.<BR>' +
        '* compare numbers: ${mobility} > 2000, this means that all rows with field mobility greater than 2000 will be ignored.<BR>' +
        '* compare values with different types: equals(${code}, 10), this means that all rows with field code (string type) equal to 10 (int type) will be ignored<BR>' +
        '* matches regex: ${start_date} matches \'^\d{5,}-.*$\', this means that all rows with field start_date like \'20132-08-07T00:00:00.000Z\' will be ignored',
    '#queryFilter' :
        'Column filter passed to the datasource as part of the request, for example:<BR>' +
        '* single column: region==West<BR>' +
        '* multiple columns: mega_ball>50&&draw_date>2004-09-24<BR>'+
        '* column contains value: phone like \'%123%\'<BR>' +
        'Query Filter supports the following options:<BR>' +
        '* ${LAST_MODIFIED_TIME} = Last modified time from previous execution',
    '#addRowNumber' : 
        'An extra metric with name {prefix}row_number added to series commands in case the data row doesn\'t contain any numeric columns.',
    '#skipOldData' :
        'Ignore re-sending previously sent data when an updated dataset file is being processed.',
    '#checkEachRow' :
        'Check each row when \'Skip Old Data\' is enabled. Use it when dataset is not ordered.'
};

var socrataConfigurationSettingsTooltipData = {
    'td[id ^=entityLabel_ ]':
        'Entity name, specified literally or extracted from the specific field in the matched object (usually $.meta.view.id).<BR><BR>' +
        'Entity Field supports the following options:<BR>' +
        '* Name of the field containing entity<BR>' + 
        '* JSON Path',
    'td[id ^=entityPrefixLabel_ ]':
        'Text added to the entity name retrieved from the specified field.<BR>' +
        'For example, if Entity Prefix is set to \'custom.\', and the field value is \'my-host\', the resulting entity name will be \'custom.my-host\'.',
    'td[id ^=timeValueLabel_]':
        'Time Value can be specified literally or extracted from the given field in the matched object.<BR><BR>' +
        'Default Time Value supports the following options:<BR>' +
        '* ${TIME()} = Text output of the TIME function<BR>' +
        '* ${ITEM} = Current element in the Item List.<BR>' +
        '* ${PARENT(n)} = Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.<BR><BR>' +
        'Time Field supports the following options:<BR>' +
        '* Name of the field containing date in the matched object<BR>' +
        '* JSON Path',
    'td[id ^=timeFormatAndZoneLabel_ ]':
        'Date format applied when parsing Time Value. Time zone can be optionally applied if the extracted date is in local time, otherwise local Collector time zone is in effect.',
    'td[id ^=metricPrefixLabel_ ]':
        'Text added to the metric name.<BR>' +
        'For example, if Metric Prefix is set to \'custom.\', and the metric name is \'cpu_busy\', the resulting metric name will be \'custom.cpu_busy\'.',
    'td[id ^=includedFieldsLabel_ ]':
        'By default, all numeric fields from nested objects are included in commands. The list of included fields can be overridden explicitly by specifying their names, separated by comma. If the named included field is not numeric, it will be added as a series tag.',
    'td[id ^=excludedFieldsLabel_ ]':
        'List of particular field names to be excluded from commands. Applies when Included Fields is empty.',
    'td[id ^=annotationFieldsLabel_ ]':
        'List of fields whose values will be saved as \'text\' annotation along with the numeric value.',
    'td[id ^=propertyTypeLabel_ ]':
        'Property type, specified literally or extracted from the given field in the matched object, typically $.meta.view.name.<BR><BR>' +
        'Default Type supports the following options:<BR>' +
        '* Text value<BR>' +
        '* ${ITEM} = Current element in the Item List.<BR>' +
        '* ${PARENT(n)} = Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.<BR><BR>' +
        'Type Field supports the following options:<BR>' +
        '* Name of the field containing property type in the matched object<BR>' +
        '* JSON Path',
    'td[id ^=propertyKeyFieldsLabel_ ]':
        'Property key field names, included as keys into the property command.',
    'td[id ^=propertyValueFieldsLabel_ ]':
        'Property value fields, included as tags into the property command.',
    'td[ id ^=messageTypeLabel_ ]':
        'Type = Message type, specified literally or extracted from the given field in the matched object, typically $.meta.view.category.<BR><BR>' +
        'Default Type supports the following options:<BR>' +
        '* Text value<BR>' +
        '* ${ITEM} = Current element in the Item List.<BR>' +
        '* ${PARENT(n)} = Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.<BR>' +
        'Type Field supports the following options:<BR>' +
        '* Name of the field containing message type in the matched object<BR>' +
        '* JSON Path',
    'td[id ^=messageSourceLabel_ ]':
        'Message source, specified literally or extracted from the given field in the matched object, typically $.meta.view.attribution.<BR><BR>' +
        'Default Source supports the following options:<BR>' +
        '* Text value<BR>' +
        '* ${ITEM} placeholder - Current element in the Item List.<BR>' +
        '* ${PARENT(n)} placeholder - Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.<BR>' +
        'Source Field supports the following options:<BR>' +
        '* Name of the field containing message source in the matched object<BR>' +
        '* JSON Path',
    'td[id ^=messageTagFieldsLabel_ ]':
        'Message tags, included as tags into message command.',
    'td[id ^=messageValueLabel_ ]':
        'Message = Message text, specified literally or extracted from the given field in the matched object.<BR><BR>' +
        'Default Message supports the following options:<BR>' +
        '* Text value<BR>' +
        '* ${ITEM} = Current element in the Item List.<BR>' +
        '* ${PARENT(n)} = Name of the Nth parent of the matched object. {PARENT} is a shortcut for ${PARENT(1)}.<BR>' +
        'Message Field supports the following options:<BR>' +
        '* Name of the field containing message source in the matched object<BR>' +
        '* JSON Path'
};

var kafkaConfigurationTooltipData = {
    '#name':
        'Configuration name',
    '#groupId':
        'A unique string that identifies the consumer group this consumer belongs to.',
    '#topicName':
        'A topic is a category or feed name to which messages are published.',
    '#offsetResetStrategy':
        'Initial offset:<br>' +
        '* EARLIEST: automatically reset the offset to the earliest offset<br>' +
        '* LATEST: automatically reset the offset to the latest offset<br>' +
        '* LAST_N: reset the offset to the lastes offset and substract `Last Cont` value from it',
    '#lastCount':
        'The number of last messages.',
    '#messageFormat':
        '<a href=\'https://github.com/axibase/atsd/tree/master/api/network#network-api\'>Network API ' +
        'Command</a> or JSON. Network API Command will be stored in ATSD as is. The JSON message will be ' +
        'parsed into command(s).',
    '#useListener':
        'Enable continuous listener of messages instead of scheduled polling.',
    '#syncCommit':
        'Send commands into ATSD synchronously and wait until the commands have been committed to the underlying storage.',
    '#ignoreInvalidCommands' :
        'If enabled, skip messages for which no valid command can be created.<br>' +
        'If the message is invalid and this case is not enabled, the job will fail with an error.',
    '#batchSize':
        'Number of commands to send into ATSD in one request.'
};

var kafkaConfigurationSettingsTooltipData = {
    'td#entityLabel':
        'Entity name, specified literally or extracted from the specific field in the matched object.',
    'td#entityPrefixLabel':
        'Text added to the entity name retrieved from the specified field.<BR>' +
        'For example, if Entity Prefix is set to \'custom.\', and the field value is \'my-host\', the resulting entity name will be \'custom.my-host\'.',
    'td#entityExpressionLabel' :
        'Freemarker expression to convert entities.<br>For example:<br>${city?keep_after(\'.\')}<br>${LOOKUP(\'city codes\', city)}',
    'td#timeValueLabel':
        'Time Value can be specified literally or extracted from the given field in the matched object.',
    'td#timeFormatAndZoneLabel':
        'Date format applied when parsing Time Value. Time zone can be optionally applied if the extracted date is in local time, otherwise local Collector time zone is in effect.',
    'td#metricPrefixLabel':
        'Text added to the metric name.<BR>' +
        'For example, if Metric Prefix is set to \'custom.\', and the metric name is \'cpu_busy\', the resulting metric name will be \'custom.cpu_busy\'.',
    'td#includedFieldsLabel':
        'By default, all numeric fields from nested objects are included in commands. The list of included fields can be overridden explicitly by specifying their names, separated by comma. If the named included field is not numeric, it will be added as a series tag.',
    'td#excludedFieldsLabel':
        'List of particular field names to be excluded from commands. Applies when Included Fields is empty.',
    'td#annotationFieldsLabel':
        'List of fields whose values will be saved as \'text\' annotation along with the numeric value.',
    'td#metricNameAndValueLabel':
        'Metric name and value extracted from the given fields in the matched object.',
    "td#metricExpressionsLabel" :
        'Freemarker expressions to convert metric fields.<br>For example:<br>${city?keep_after(\'.\')}<br>${LOOKUP(\'city codes\', city)}',
    'td#propertyTypeLabel':
        'Property type, specified literally or extracted from the given field in the matched object.',
    'td#propertyKeyFieldsLabel':
        'Property key field names, included as keys into the property command.',
    'td#propertyValueFieldsLabel':
        'Property value fields, included as tags into the property command.',
    'td#messageTypeLabel':
        'Type = Message type, specified literally or extracted from the given field in the matched object.',
    'td#messageSourceLabel':
        'Message source, specified literally or extracted from the given field in the matched object.',
    'td#messageTagFieldsLabel':
        'Message tags, included as tags into message command.',
    'td#messageValueLabel':
        'Message = Message text, specified literally or extracted from the given field in the matched object.'
};

var kafkaConsumerConfigurationTooltipData = {
    '#name':
        'Name of consumer',
    '#servers':
        'A list of host/port pairs to use for establishing the initial connection to the Kafka cluster. ' +
        'The client will make use of all servers irrespective of which servers are specified here for bootstrapping—this list only impacts the initial hosts' +
        ' used to discover the full set of servers.<br>' +
        'This list should be in the form \'host1:port1,host2:port2,...\'.<br>' +
        'Since these servers are just used for the initial connection to discover the full cluster membership (which may change dynamically), this list need' +
        ' not contain the full set of servers (you may want more than one, though, in case a server is down)',
    '#readTimeout':
        'The amount of time in seconds to block message reading.',
    '#pollTimeout':
        'The amount of time in milliseconds to block waiting for input.',
    '#securityProtocol':
        'Protocol used to communicate with brokers.',
    '#properties':
        'Extended consumer properties.',
    'td#keyStoreTypeLabel':
        'Key stores:<br>' +
        '* custom - use custom trust/key stores<br>' +
        '* default - use collector stores',
    '#trustStorePath':
        'The location of the trust store file.',
    '#trustStorePassword':
        'The password for the trust store file.',
    '#twoWayAuthEnabled':
        'Enable 2-Way Authentication (client verification).',
    '#keyStorePath':
        'The location of the key store file.',
    '#keyStorePassword':
        'The store password for the key store file.',
    'td#keyAliasLabel':
        'The unique name of the entry in the store.',
    '#keyPassword':
        'The password of the private key in the key store file.'
};

var jmxConfigurationTooltipData = {
    '#name':
        'Configuration name',
    '#entitySet' :
        'A collection of elements to execute multiple requests to JMX service in a loop.<BR>' +
        'The current element in the loop can be accessed with ${ITEM} placeholder. When Item List is selected and ${ITEM} is present in one of the fields, ' +
        'the job will execute as many queries as there are elements in the list, ' +
        'substituting ${ITEM} with element value for each request.',
    '#host':
        'Hostname or IP address of the remote server running Java application with JMX service.',
    '#port':
        'JMX service port.',
    '#portAsInt':
        'JMX service port.',
    '#userName':
        'JMX username.',
    '#password':
        'JMX password.',
    '#serviceName':
        'JMX service username. The default service name is jmxrmi.',
    '#entity':
        'Entity name under which the data will be stored.',
    '#putType':
        'Insert command type: SERIES, PROPERTY or BOTH.',
    '#predefinedTags':
        'Predefined tags added to all commands, one name=value pair per line.<br>This field supports the following placeholders:<br>' +
        '- ${domain} = Domain of the mbean<br>' +
        '- ${name} = Value of \'name\' attribute of the mbean',
    '#metricPrefix':
        'Common prefix added to metric names, for example jmx.activemq.<br>' +
        'This field supports the following placeholders:<br>' +
        '- ${domain} = Domain of the mbean<br>' +
        '- ${name} = Value of \'name\' attribute of the mbean<br>' +
        '- ${type} = Value of \'type\' attribute of the mbean',
    '#excludedMetrics':
        'List of attribute names excluded from series commands.',
    '#propertyTypePrefix':
        'Prefix added to property type, for example jmx.activemq. Property type is set to MBean type attribute by default.<br>' +
        'This field supports the following placeholders:<br>' +
        '- ${domain} = Domain of the mbean<br>' +
        '- ${name} = Value of \'name\' attribute of the mbean',
    '#excludedProperties':
        'List of attribute names excluded from property commands.'
};

var httpConfigurationTooltipData = {
    '#name': 'Name of the configuration.',
    '#entitySet':
    'A collection of elements to execute multiple file requests in a loop.<br>' +
    'The current element in the loop can be accessed with the ${ITEM} placeholder, which can be embedded into the Path and Default Entity fields.<br>' +
    'When Item List is selected and ${ITEM} is present in the Path, the job will execute as many queries as there are elements in the list, substituting ${ITEM} with an element value for each request. <br>' +
    '${ITEM} value can be url-encoded as follows: ${ITEM?url}',
    '#connectionPoolConfig': 'Pre-defined HTTP connection parameters with optional authentication credentials and custom network/connection settings.',
    '#path':
        'Path to target files located on the remote or local file system from which they will be read.',
    '#collectSslMetrics1': 'Collect SSL certificate expiration and status metrics: \'http.ssl_certificate_expiration_days\' and \'http.ssl_certificate_status\'. <br> ' +
    'Possible values of certificate\'s status:<br> ' +
    '\t 0 - valid; <br>' +
    '\t 1 - self-signed; <br>' +
    '\t 2 - certificate is already expired; <br>' +
    '\t 3 - is not yet valid; <br>' +
    '\t 4 - wrong hostname;  <br>' +
    '\t 5 - failed to retrieve SSL certificate.<br>',
    '#responseText': 'Text that Axibase Collector will look for in the response from the server.',
    '#matchType': 'Defines how Collector will search for the necessary response text. <br>' +
    'Possible options:<br>' +
    ' <strong>Contains</strong> - select this option if you want Collector to search for a partial match. <br>' +
    ' <strong>Equals</strong> - select this option if you want to search for the exact match. <br>' +
    ' <strong>Matching String(regex)</strong> - select this option if you want to use regular expressions for the search. <br>' +
    ' <strong>Doesn\'t contains</strong> - select this option if you want Collector to check that response doesn\'t contain search string.',
    '#failureRetest': 'Number of attempts to re-establish the connection.',
    '#failureRetestDelay': 'Delay between attempts to re-establish connection.',
    '#enableWebDriver1': 'Defines whether you want to enable the Web Driver tool.<br>',
    '#driverScript': 'Selenium script.',
    '#driverTimeout': 'Defines the amount of time the Driver will wait to complete the request before it returns the timeout exception message.',
    '#driverFileEncoding': 'Encoding of the file you are requesting with the script.',
    '#metricPrefix': 'Common prefix added to metric names, for example jmx.activemq.<br>' +
    'This field supports the following placeholders:<br>' +
    '- ${domain} = Domain of the mbean<br>' +
    '- ${name} = Value of \'name\' attribute of the mbean<br>' +
    '- ${type} = Value of \'type\' attribute of the mbe'

};