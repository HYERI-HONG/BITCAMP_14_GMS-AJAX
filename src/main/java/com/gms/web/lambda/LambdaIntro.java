package com.gms.web.lambda;

public class LambdaIntro{
	public static void main(String[] args) {
		System.out.println(Num.execute(
				(t1,t2)->t1>t2?t1:t2,5,3));
	}
	@FunctionalInterface
	interface Calc<T>{T execute(T t1,T t2);}
	static class Num{
		public static <T> T execute(Calc<T> c,T t1, T t2) {
			return c.execute(t1, t2);
		}
	}
}