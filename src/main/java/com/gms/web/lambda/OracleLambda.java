package com.gms.web.lambda;

import java.util.function.Predicate;

public class OracleLambda {

	public static void main(String[] args) {
		Predicate<String> p = s-> s.length() ==0;
		String x = "";
		String y = "hello";
		String r = (p.test(y))? "NULL" : "NOT NULL";
			System.out.println(r);
	}
}

