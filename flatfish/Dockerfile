FROM amazoncorretto:17-alpine-jdk
EXPOSE 8080
COPY . .
RUN ./gradlew build --refresh-dependencies --stacktrace -x test
CMD ["java", "-jar", "build/libs/flatfish-0.0.1-SNAPSHOT.jar"]