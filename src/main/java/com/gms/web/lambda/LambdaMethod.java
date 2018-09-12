package com.gms.web.lambda;

import java.util.function.Consumer;
import java.util.function.Function;

public class LambdaMethod {
	public static void main(String[] args) {
		//파라메터값이 한개인 경우 다음과 같이 코드 변환이 가능하다.
		//메소드 앞에 :: 를 찍어줄것!
		
	/*	Function<String,Integer> f = s->Integer.parseInt(s);
		int a =f.apply("1");
		System.out.println(a);
		*/
		
		Function<String,Integer> f =Integer::parseInt;
		int a =f.apply("5");
		System.out.println(a);
		
	/*	Consumer<String> c= s->System.out.println(s);
		c.accept("Hello U");
		*/
		
		Consumer<String> c= System.out::println;
		c.accept("Hello U");
		
		
	}
}
