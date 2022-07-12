package com.example;

import java.util.Optional;

import javax.validation.Valid;
import io.micronaut.http.HttpHeaders;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Consumes;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Delete;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Post;
import io.micronaut.http.annotation.Put;
import io.micronaut.scheduling.TaskExecutors;
import io.micronaut.scheduling.annotation.ExecuteOn;
import io.micronaut.data.model.Pageable;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;

import java.net.URI;
import java.util.List;

@ExecuteOn(TaskExecutors.IO)
@Controller("/logs")
public class LogsController {
    protected final LogsRepository logsRepository;

    public LogsController(LogsRepository logsRepository){
        this.logsRepository = logsRepository;
    }

    

    @Get("/filterByName/{ownerName}")
    public List<Logs> LogsListName(String ownerName){
        return logsRepository.findByName(ownerName);
    }

    
    @Get("/{id}")
    public Optional<Logs> show(Long id){
        return logsRepository.findById(id);
    }
    
    @Consumes({MediaType.ALL})
    @Post("/")
    public HttpResponse<Logs> save(@Body @Valid Logs logs) {
        logsRepository.save(logs);
        return HttpResponse
                .created(logs)
                .headers(headers -> headers.location(toUri(logs)));
    }

    @Get("/")
    public List<Logs> list(@Valid Pageable pageable){
        return logsRepository.findAll(pageable).getContent();
    }

    @Put("/{id}")
    public HttpResponse<Object> update(@Body @Valid Logs logs) {
        logsRepository.update(
        logs.getId(),
        logs.getDate(),
        logs.getRegNumber(),
        logs.getOwnerName(),
        logs.getOdometerStart(),
        logs.getOdometerEnd(),
        logs.getRoute(), 
        logs.getDescription());
        return HttpResponse.noContent().header(HttpHeaders.LOCATION, toUri(logs).getPath());
    }

    @Delete("/{id}")
    public HttpResponse<Logs> delete(Long id){
        logsRepository.deleteById(id);
        return HttpResponse.noContent();
    }

    private URI toUri(Logs logs) {
        return URI.create("/logs/"+logs.getId());
    }
}


