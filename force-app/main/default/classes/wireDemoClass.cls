public with Sharing class wireDemoClass {
    @AuraEnabled(cacheable = true)
    public static Account[] getAccountList(){
        try {
            Account[] accList = [ SELECT Id, Name, NumberOfEmployees FROM Account LIMIT 10 ];
            return accList;          
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
