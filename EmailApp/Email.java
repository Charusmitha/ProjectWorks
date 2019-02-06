package emailapp;

import java.util.Scanner;

public class Email {
	
	private String firstName;
	private String lastName;
	private String department;
	private String password;
	private String email;
	private int defaultPasswordLength = 10;
	private int mailBoxCapacity = 500;
	private String alternateEmail = "";
	
	//Constructor to receive firstName and lastName
	public Email(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		
		//Call method setDepartment() to set the department
		department = setDepartment();
		
		//Call method generatePassword() to generate a password
		password = generatePassword(defaultPasswordLength);
		
		if(department == "") 
		{
		email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@company.com";
		}
		else
		{
	    email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@" + department + ".company.com";	
		}
	}

	//Method to determine the department
	private String setDepartment() {
		System.out.println("Departmane Codes:\n1 for Sales\n2 for Development\n3 for Accounting\n0 for None\nEnter the department code:");
		Scanner sc = new Scanner(System.in);
		int response = sc.nextInt();
		if(response == 1)
		{
			return "sales";
		}
		else if(response == 2)
		{
			return "development";
		}
		else if(response == 3)
		{
			return "accounting";
		}
		else 
		{
			return "";
		}
	}
	
	//Method to generate the password
	private String generatePassword(int n) {
		
		String alphaNumeric = "abcdefghijklmnopqrstuvwxyz"+
							  "1234567890"+
							  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+
							  "!@#$^&*";
		
		StringBuilder sb = new StringBuilder(n);
		
		for(int i=0; i<n; i++)
		{
			int index = (int) (alphaNumeric.length() * Math.random());
			sb.append(alphaNumeric.charAt(index));
		}
		
		return sb.toString();
	}
	
	//Method to change the password
	public void changePassword(String newPassword) {
		this.password = newPassword;
	}
	
	//Method to set the mailbox capacity
	public void setMailBoxCapacity(int capacity) {
		this.mailBoxCapacity = capacity;
	}
	
	//Method to define an alternate email address
	public void setAlternateEmail(String alternateEmail) {
		this.alternateEmail = alternateEmail;
	}
	
	public String getName() {
		return "Name: " + firstName + " " + lastName;
	}
	
	public String getEmail() {
		return "email: " + email;
	}
	
	public String getAlternateEmail() {
		return "Alternate email: " + alternateEmail;
	}
	
	public String getMailBoxCapacity() {
		return "Mailbox Capacity: " + mailBoxCapacity;
	}
	
	public String display() {
		return "Name: " + firstName + " " + lastName + "\n" +
				"email: " + email + "\n" +
				"Alternate email: " + alternateEmail + "\n" +
				"Mailbox Capacity: " + mailBoxCapacity;
	}
}
