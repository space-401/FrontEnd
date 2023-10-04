package com.app.kkiri.mapper;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Slf4j
class TimeMapperTest {
    @Autowired
    private TimeMapper timeMapper;

    @Test
    void getTime() {
        log.info("-----time : " + timeMapper.getTime());
    }
}