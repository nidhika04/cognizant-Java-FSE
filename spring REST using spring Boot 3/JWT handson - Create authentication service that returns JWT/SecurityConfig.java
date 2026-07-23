@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http)
            throws Exception {

        http
            .authorizeHttpRequests(auth ->
                auth
                .requestMatchers("/authenticate")
                .permitAll()
                .anyRequest()
                .authenticated()
            )
            .httpBasic();

        return http.build();
    }
}
