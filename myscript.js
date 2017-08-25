
         function mySelect() 
        {
            var selectValue = document.getElementById("select").value;
            if(selectValue == "Legislators")
            {
                document.getElementById("keyword").innerHTML="State/Representative*";
                document.getElementById("keyword1").value = "State/Representative*";
            }
            else if(selectValue == "Committees")
            {
                document.getElementById("keyword").innerHTML="Committee ID*";
                document.getElementById("keyword1").value = "Committee ID*";
                    
            }
                
            else if(selectValue == "Bills")
            {
                document.getElementById("keyword").innerHTML="Bill ID*";
                document.getElementById("keyword1").value = "Bill ID*";
            }
                
            else if(selectValue == "Amendments")
            {
                    document.getElementById("keyword").innerHTML="Amendment ID*";
                    document.getElementById("keyword1").value = "Amendment ID*";  
            }
                
            else
            {
                 document.getElementById("keyword").innerHTML="Keyword*";
                document.getElementById("keyword1").value = "Keyword*";
               
            }       
            
        }
        
       function clearForm(doc) 
        {
           
            doc.select.value="Select your option";
            doc.radio1.value="Senate";
            doc.text1.value="";
            document.getElementById("keyword").innerHTML = "Keyword*";
            document.forms[0].submit();
                   
        }
      
        
        function viewDetails(bioid,chamber,state) 
        {
         
            document.forms[0].elements["legislators"].value="legislators";
            document.forms[0].elements["legorbill"].value="legislators";
            document.forms[0].elements["bioid"].value=bioid;
            document.forms[0].elements["chamber"].value=chamber;  
            document.forms[0].elements["state"].value=state;  
            document.forms[0].submit();
                            
            
        }
        
       function viewBillDetails(billIdLabel,chamber) 
        {
         
            document.forms[0].elements["bills"].value="bills";
            document.forms[0].elements["legorbill"].value="bills";
            document.forms[0].elements["billIdLabel"].value=billIdLabel;
            document.forms[0].elements["billchamber"].value=chamber; 
            document.forms[0].submit();
                            
            
        }
       
