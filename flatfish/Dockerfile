FROM amazoncorretto:17-alpine-jdk
EXPOSE 8080
COPY . .
RUN ./gradlew build --refresh-dependencies --stacktrace
CMD ["java", "-jar", "build/libs/ToDoList-0.0.1-SNAPSHOT.jar"]