package com.example.hightech.RabbitMQ;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

@Service
public class RabbitMessageQueueMenager {

    private static final String host = "localhost";

    public void putNewQueue(String queueName) {
        ConnectionFactory connectionFactory = new ConnectionFactory();
        connectionFactory.setHost(host);
        try (Connection connection = connectionFactory.newConnection(); Channel channel = connection.createChannel()) {
            channel.queueDeclare(queueName, false, false, false, null);
        } catch (IOException | TimeoutException e) {
            e.printStackTrace();
        }
    }
}
