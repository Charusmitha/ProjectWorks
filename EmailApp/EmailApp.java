package emailapp;

public class EmailApp {

	public static void main(String[] args) {
		Email e1 = new Email("Charusmitha", "Deshpande");
		//e1.setAlternateEmail("charu.deshpande@gmail.com");
		e1.setMailBoxCapacity(600);
		System.out.println(e1.display());
	}

}
